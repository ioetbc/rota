import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db"

export async function GET() {
	try {
		const roles = await prisma.role.findMany({
			orderBy: { name: "asc" },
			include: {
				_count: {
					select: { shiftTemplateRoles: true },
				},
			},
		})
		return NextResponse.json(roles)
	} catch (error) {
		console.error("Failed to fetch roles:", error)
		return NextResponse.json({ error: "Failed to fetch roles" }, { status: 500 })
	}
}

export async function POST(request: NextRequest) {
	try {
		const { name } = await request.json()

		if (!name || typeof name !== "string" || name.trim().length === 0) {
			return NextResponse.json({ error: "Role name is required" }, { status: 400 })
		}

		const trimmedName = name.trim()

		if (trimmedName.length > 50) {
			return NextResponse.json({ error: "Role name must be 50 characters or less" }, { status: 400 })
		}

		const role = await prisma.role.create({
			data: { name: trimmedName },
		})

		return NextResponse.json(role, { status: 201 })
	} catch (error) {
		if ((error as { code?: string }).code === "P2002") {
			return NextResponse.json({ error: "A role with this name already exists" }, { status: 409 })
		}
		console.error("Failed to create role:", error)
		return NextResponse.json({ error: "Failed to create role" }, { status: 500 })
	}
}
