import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db"
import { DayOfWeek } from "@/src/generated/prisma"

const VALID_DAYS = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"] as const

interface ShiftTemplateInput {
	name: string
	startTime: string
	endTime: string
	minStaff: number
	days: string[]
	requiredRoles?: { roleId: string; minCount: number }[]
}

function validateTime(time: string): boolean {
	return /^([01]\d|2[0-3]):[0-5]\d$/.test(time)
}

function validateShiftTemplateInput(input: ShiftTemplateInput): string | null {
	if (!input.name || input.name.trim().length === 0) {
		return "Shift name is required"
	}
	if (input.name.trim().length > 50) {
		return "Shift name must be 50 characters or less"
	}
	if (!input.startTime || !validateTime(input.startTime)) {
		return "Valid start time is required (HH:MM format)"
	}
	if (!input.endTime || !validateTime(input.endTime)) {
		return "Valid end time is required (HH:MM format)"
	}
	// Validate end time is after start time (unless overnight shift)
	// Overnight shifts are allowed (e.g., 22:00-02:00), so we only reject if times are identical
	if (input.startTime === input.endTime) {
		return "End time must be different from start time"
	}
	if (!input.days || input.days.length === 0) {
		return "At least one day must be selected"
	}
	const invalidDays = input.days.filter((d) => !VALID_DAYS.includes(d.toUpperCase() as DayOfWeek))
	if (invalidDays.length > 0) {
		return `Invalid days: ${invalidDays.join(", ")}`
	}
	if (typeof input.minStaff !== "number" || input.minStaff < 1) {
		return "Minimum staff must be at least 1"
	}
	return null
}

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
	try {
		const { id } = await params

		const template = await prisma.shiftTemplate.findUnique({
			where: { id },
			include: {
				days: true,
				roles: {
					include: {
						role: true,
					},
				},
			},
		})

		if (!template) {
			return NextResponse.json({ error: "Shift template not found" }, { status: 404 })
		}

		const response = {
			id: template.id,
			name: template.name,
			startTime: template.startTime,
			endTime: template.endTime,
			minStaff: template.minStaff,
			days: template.days.map((d) => d.day.toLowerCase()),
			requiredRoles: template.roles.map((r) => ({
				roleId: r.roleId,
				roleName: r.role.name,
				minCount: r.minCount,
			})),
			createdAt: template.createdAt,
			updatedAt: template.updatedAt,
		}

		return NextResponse.json(response)
	} catch (error) {
		console.error("Failed to fetch shift template:", error)
		return NextResponse.json({ error: "Failed to fetch shift template" }, { status: 500 })
	}
}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
	try {
		const { id } = await params
		const input: ShiftTemplateInput = await request.json()

		const validationError = validateShiftTemplateInput(input)
		if (validationError) {
			return NextResponse.json({ error: validationError }, { status: 400 })
		}

		const existing = await prisma.shiftTemplate.findUnique({ where: { id } })
		if (!existing) {
			return NextResponse.json({ error: "Shift template not found" }, { status: 404 })
		}

		// Validate that all roleIds exist
		if (input.requiredRoles && input.requiredRoles.length > 0) {
			const roleIds = input.requiredRoles.map((r) => r.roleId)
			const existingRoles = await prisma.role.findMany({
				where: { id: { in: roleIds } },
			})
			if (existingRoles.length !== roleIds.length) {
				return NextResponse.json({ error: "One or more role IDs are invalid" }, { status: 400 })
			}
		}

		// Use transaction to delete old days/roles and create new ones
		const template = await prisma.$transaction(async (tx) => {
			// Delete existing days and roles
			await tx.shiftTemplateDay.deleteMany({ where: { shiftTemplateId: id } })
			await tx.shiftTemplateRole.deleteMany({ where: { shiftTemplateId: id } })

			// Update the template with new data
			return tx.shiftTemplate.update({
				where: { id },
				data: {
					name: input.name.trim(),
					startTime: input.startTime,
					endTime: input.endTime,
					minStaff: input.minStaff,
					days: {
						create: input.days.map((day) => ({
							day: day.toUpperCase() as DayOfWeek,
						})),
					},
					roles:
						input.requiredRoles && input.requiredRoles.length > 0
							? {
									create: input.requiredRoles.map((r) => ({
										roleId: r.roleId,
										minCount: r.minCount,
									})),
								}
							: undefined,
				},
				include: {
					days: true,
					roles: {
						include: {
							role: true,
						},
					},
				},
			})
		})

		const response = {
			id: template.id,
			name: template.name,
			startTime: template.startTime,
			endTime: template.endTime,
			minStaff: template.minStaff,
			days: template.days.map((d) => d.day.toLowerCase()),
			requiredRoles: template.roles.map((r) => ({
				roleId: r.roleId,
				roleName: r.role.name,
				minCount: r.minCount,
			})),
			createdAt: template.createdAt,
			updatedAt: template.updatedAt,
		}

		return NextResponse.json(response)
	} catch (error) {
		console.error("Failed to update shift template:", error)
		return NextResponse.json({ error: "Failed to update shift template" }, { status: 500 })
	}
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
	try {
		const { id } = await params

		const template = await prisma.shiftTemplate.findUnique({ where: { id } })
		if (!template) {
			return NextResponse.json({ error: "Shift template not found" }, { status: 404 })
		}

		await prisma.shiftTemplate.delete({ where: { id } })

		return NextResponse.json({ success: true, deletedTemplate: template })
	} catch (error) {
		console.error("Failed to delete shift template:", error)
		return NextResponse.json({ error: "Failed to delete shift template" }, { status: 500 })
	}
}
