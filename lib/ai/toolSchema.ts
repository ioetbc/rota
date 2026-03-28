import { z } from "zod"

// Shift types
export const SHIFTS = ["MORNING", "AFTERNOON", "EVENING"] as const
export type Shift = (typeof SHIFTS)[number]

// Day names in order (Monday = 0, Sunday = 6)
export const DAYS = [
	"monday",
	"tuesday",
	"wednesday",
	"thursday",
	"friday",
	"saturday",
	"sunday",
] as const
export type Day = (typeof DAYS)[number]

// Schema for a single day's availability
const dayAvailabilitySchema = z.object({
	available: z.boolean().describe("Is the person available on this day?"),
	shifts: z
		.array(z.enum(SHIFTS))
		.optional()
		.describe("Which shifts are they available for? If omitted and available=true, assume all shifts."),
})

// Schema for AI to output - simple day-level availability
export const parseAvailabilitySchema = z.object({
	monday: dayAvailabilitySchema,
	tuesday: dayAvailabilitySchema,
	wednesday: dayAvailabilitySchema,
	thursday: dayAvailabilitySchema,
	friday: dayAvailabilitySchema,
	saturday: dayAvailabilitySchema,
	sunday: dayAvailabilitySchema,
	reasoning: z.string().describe("Brief explanation of how the availability was interpreted"),
})

export type DayAvailability = z.infer<typeof dayAvailabilitySchema>
export type ParsedAvailability = z.infer<typeof parseAvailabilitySchema>

// Output slot structure (used after expanding days into slots)
export interface AvailabilitySlot {
	date: string // ISO date YYYY-MM-DD
	shift: Shift
	available: boolean
}

export interface ParseAvailabilityOutput {
	slots: AvailabilitySlot[]
	reasoning: string
}
