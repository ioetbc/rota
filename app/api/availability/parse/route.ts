import { NextRequest, NextResponse } from "next/server"
import { parseAvailability } from "@/lib/ai/parseAvailability"
import { parseISODate } from "@/lib/dates"

export async function POST(request: NextRequest) {
	try {
		const { rawText, weekStart } = await request.json()

		if (!weekStart) {
			return NextResponse.json({ error: "weekStart is required" }, { status: 400 })
		}

		const weekStartDate = parseISODate(weekStart)
		const result = await parseAvailability(rawText || "", weekStartDate)

		return NextResponse.json(result)
	} catch (error) {
		console.error("Failed to parse availability:", error)
		return NextResponse.json(
			{ error: "Failed to parse availability. Please try again." },
			{ status: 500 }
		)
	}
}
