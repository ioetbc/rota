import { anthropic } from "@ai-sdk/anthropic"
import { generateObject } from "ai"
import { getWeekDates, formatDate } from "../dates"
import {
	parseAvailabilitySchema,
	DAYS,
	SHIFTS,
	type ParsedAvailability,
	type ParseAvailabilityOutput,
	type AvailabilitySlot,
} from "./toolSchema"

const SYSTEM_PROMPT = `You parse natural language availability into a structured format.

## Your Task
Determine which days of the week the person is available, and optionally which shifts.

## Days of the Week
The week has 7 days: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.
- "all week" = all 7 days (Monday through Sunday)
- "weekdays" = Monday through Friday only
- "weekend" = Saturday and Sunday only

## Shifts
- MORNING: 08:00 - 13:00
- AFTERNOON: 13:00 - 18:00
- EVENING: 18:00 - 23:00

## Rules
1. "Free all week except X" → All days available EXCEPT the days mentioned
2. "Available [day] only" → Only that day is available
3. "Mornings only" → All days available, but only MORNING shift
4. If no shifts specified, assume all shifts are available
5. If input is unclear, mark all days as unavailable

## Examples
Input: "free all week except monday and saturday"
→ monday: unavailable, tuesday: available, wednesday: available, thursday: available, friday: available, saturday: unavailable, sunday: available

Input: "only available weekends"
→ monday-friday: unavailable, saturday: available, sunday: available

Input: "tuesday and thursday mornings"
→ tuesday: available (MORNING only), thursday: available (MORNING only), all other days: unavailable`

/**
 * Step 1: AI parses natural language into day-level availability
 */
async function parseIntoDays(rawText: string): Promise<ParsedAvailability> {
	const { object } = await generateObject({
		model: anthropic("claude-haiku-4-5-20251001"),
		schema: parseAvailabilitySchema,
		system: SYSTEM_PROMPT,
		prompt: rawText.trim() || "No availability provided - mark all days as unavailable",
	})

	return object
}

/**
 * Step 2: Deterministically expand day-level availability into 21 slots
 * This is pure code - no AI interpretation of dates
 */
function expandToSlots(
	parsedDays: ParsedAvailability,
	weekStart: Date
): AvailabilitySlot[] {
	const weekDates = getWeekDates(weekStart)
	const slots: AvailabilitySlot[] = []

	DAYS.forEach((day, dayIndex) => {
		const dayAvailability = parsedDays[day]
		const date = formatDate(weekDates[dayIndex])

		// Determine which shifts are available for this day
		const availableShifts = dayAvailability.available
			? dayAvailability.shifts ?? SHIFTS // Default to all shifts if not specified
			: []

		// Create a slot for each shift
		for (const shift of SHIFTS) {
			slots.push({
				date,
				shift,
				available: availableShifts.includes(shift),
			})
		}
	})

	return slots
}

/**
 * Main function: Parse availability text into 21 slots
 */
export async function parseAvailability(
	rawText: string,
	weekStart: Date
): Promise<ParseAvailabilityOutput> {
	// Step 1: AI parses into day-level structure
	const parsedDays = await parseIntoDays(rawText)

	// Debug: Log the raw AI output
	console.log("\n=== AI PARSED AVAILABILITY ===")
	console.log("Input:", rawText)
	console.log("Output:", JSON.stringify(parsedDays, null, 2))
	console.log("==============================\n")

	// Step 2: Code expands into slots deterministically
	const slots = expandToSlots(parsedDays, weekStart)

	return {
		slots,
		reasoning: parsedDays.reasoning,
	}
}

// Export for testing
export { parseIntoDays, expandToSlots }
