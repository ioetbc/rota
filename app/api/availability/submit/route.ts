import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db"
import { parseISODate } from "@/lib/dates"
import type { SubmitAvailabilityRequest } from "@/lib/types"

export async function POST(request: NextRequest) {
	try {
		const body: SubmitAvailabilityRequest = await request.json()
		const { staffId, weekStart, rawText, slots } = body

		if (!staffId || !weekStart || !slots) {
			return NextResponse.json(
				{ error: "staffId, weekStart, and slots are required" },
				{ status: 400 }
			)
		}

		const staff = await prisma.staff.findUnique({ where: { id: staffId } })
		if (!staff) {
			return NextResponse.json({ error: "Staff member not found" }, { status: 404 })
		}

		const weekStartDate = parseISODate(weekStart)

		const submission = await prisma.availabilitySubmission.create({
			data: {
				staffId,
				weekStart: weekStartDate,
				rawText: rawText || "",
				slots: {
					create: slots.map((slot) => ({
						staffId,
						date: parseISODate(slot.date),
						shift: slot.shift,
						available: slot.available,
						aiReasoning: slot.aiReasoning,
						wasEdited: slot.wasEdited || false,
					})),
				},
			},
			include: {
				slots: true,
			},
		})

		return NextResponse.json(submission)
	} catch (error) {
		console.error("Failed to submit availability:", error)
		return NextResponse.json(
			{ error: "Failed to submit availability. Please try again." },
			{ status: 500 }
		)
	}
}
