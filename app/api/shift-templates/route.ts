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

export async function GET() {
	try {
		const templates = await prisma.shiftTemplate.findMany({
			orderBy: { name: "asc" },
			include: {
				days: true,
				roles: {
					include: {
						role: true,
					},
				},
			},
		})

		// Transform to API format
		const response = templates.map((t) => ({
			id: t.id,
			name: t.name,
			startTime: t.startTime,
			endTime: t.endTime,
			minStaff: t.minStaff,
			days: t.days.map((d) => d.day.toLowerCase()),
			requiredRoles: t.roles.map((r) => ({
				roleId: r.roleId,
				roleName: r.role.name,
				minCount: r.minCount,
			})),
			createdAt: t.createdAt,
			updatedAt: t.updatedAt,
		}))

		return NextResponse.json(response)
	} catch (error) {
		console.error("Failed to fetch shift templates:", error)
		return NextResponse.json({ error: "Failed to fetch shift templates" }, { status: 500 })
	}
}

export async function POST(request: NextRequest) {
	try {
		const input: ShiftTemplateInput = await request.json()

		const validationError = validateShiftTemplateInput(input)
		if (validationError) {
			return NextResponse.json({ error: validationError }, { status: 400 })
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

		const template = await prisma.shiftTemplate.create({
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

		return NextResponse.json(response, { status: 201 })
	} catch (error) {
		console.error("Failed to create shift template:", error)
		return NextResponse.json({ error: "Failed to create shift template" }, { status: 500 })
	}
}
