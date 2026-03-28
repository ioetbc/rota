import { NextResponse } from "next/server"
import { prisma } from "@/lib/db"

export async function GET() {
	try {
		const staff = await prisma.staff.findMany({
			orderBy: { name: "asc" },
		})
		return NextResponse.json(staff)
	} catch (error) {
		console.error("Failed to fetch staff:", error)
		return NextResponse.json({ error: "Failed to fetch staff" }, { status: 500 })
	}
}
