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
