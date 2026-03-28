export function getNextMonday(): Date {
	const today = new Date()
	const dayOfWeek = today.getDay()
	const daysUntilMonday = dayOfWeek === 0 ? 1 : 8 - dayOfWeek
	const nextMonday = new Date(today)
	nextMonday.setDate(today.getDate() + daysUntilMonday)
	nextMonday.setHours(0, 0, 0, 0)
	return nextMonday
}

export function getWeekDates(mondayDate: Date): Date[] {
	const dates: Date[] = []
	for (let i = 0; i < 7; i++) {
		const date = new Date(mondayDate)
		date.setDate(mondayDate.getDate() + i)
		dates.push(date)
	}
	return dates
}

export function formatDate(date: Date): string {
	// Format as YYYY-MM-DD in London timezone
	return new Intl.DateTimeFormat("en-CA", {
		timeZone: "Europe/London",
		year: "numeric",
		month: "2-digit",
		day: "2-digit"
	}).format(date)
}

export function formatDisplayDate(date: Date): string {
	return date.toLocaleDateString("en-GB", {
		weekday: "short",
		day: "numeric",
		month: "short",
	})
}

export function formatWeekRange(mondayDate: Date): string {
	const sunday = new Date(mondayDate)
	sunday.setDate(mondayDate.getDate() + 6)

	const monStr = mondayDate.toLocaleDateString("en-GB", {
		weekday: "short",
		day: "numeric",
	})
	const sunStr = sunday.toLocaleDateString("en-GB", {
		weekday: "short",
		day: "numeric",
		month: "short",
	})

	return `${monStr} - ${sunStr}`
}

export function parseISODate(isoString: string): Date {
	return new Date(isoString + "T00:00:00")
}

export const DAY_NAMES = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
export const SHIFT_NAMES: Record<string, string> = {
	MORNING: "Morning",
	AFTERNOON: "Afternoon",
	EVENING: "Evening",
}
export const SHIFT_TIMES: Record<string, string> = {
	MORNING: "08:00-13:00",
	AFTERNOON: "13:00-18:00",
	EVENING: "18:00-23:00",
}
