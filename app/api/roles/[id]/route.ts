import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db"

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
	try {
		const { id } = await params

		const role = await prisma.role.findUnique({
			where: { id },
			include: {
				_count: {
					select: { shiftTemplateRoles: true },
				},
			},
		})

		if (!role) {
			return NextResponse.json({ error: "Role not found" }, { status: 404 })
		}

		await prisma.role.delete({
			where: { id },
		})

		return NextResponse.json({ success: true, deletedRole: role })
	} catch (error) {
		console.error("Failed to delete role:", error)
		return NextResponse.json({ error: "Failed to delete role" }, { status: 500 })
	}
}
