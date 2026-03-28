import { NextResponse } from "next/server"
import { prisma } from "@/lib/db"

export async function GET() {
	try {
		const submissions = await prisma.availabilitySubmission.findMany({
			include: {
				staff: true,
				slots: true,
			},
			orderBy: { createdAt: "desc" },
		})
		return NextResponse.json(submissions)
	} catch (error) {
		console.error("Failed to fetch submissions:", error)
		return NextResponse.json({ error: "Failed to fetch submissions" }, { status: 500 })
	}
}
