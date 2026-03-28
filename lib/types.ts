export type ShiftType = "MORNING" | "AFTERNOON" | "EVENING"

export interface ParsedSlot {
	date: string // ISO date YYYY-MM-DD
	shift: ShiftType
	available: boolean
}

export interface Staff {
	id: string
	name: string
	phone: string
}

export interface AvailabilitySlot {
	id?: string
	date: string
	shift: ShiftType
	available: boolean
	aiReasoning?: string
	wasEdited?: boolean
}

export interface ParseAvailabilityRequest {
	rawText: string
	weekStart: string // ISO date of Monday
}

export interface ParseAvailabilityResponse {
	slots: ParsedSlot[]
	reasoning: string
}

export interface SubmitAvailabilityRequest {
	staffId: string
	weekStart: string
	rawText: string
	slots: AvailabilitySlot[]
}

export type DayOfWeek = "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday"

export interface Role {
	id: string
	name: string
	createdAt: string
	_count?: {
		shiftTemplateRoles: number
	}
}

export interface RequiredRole {
	roleId: string
	roleName: string
	minCount: number
}

export interface ShiftTemplate {
	id: string
	name: string
	startTime: string
	endTime: string
	minStaff: number
	days: DayOfWeek[]
	requiredRoles: RequiredRole[]
	createdAt: string
	updatedAt: string
}

export interface ShiftTemplateInput {
	name: string
	startTime: string
	endTime: string
	minStaff: number
	days: string[]
	requiredRoles?: { roleId: string; minCount: number }[]
}
