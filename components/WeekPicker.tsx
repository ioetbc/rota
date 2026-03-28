"use client"

import { formatWeekRange, formatDate } from "@/lib/dates"

interface WeekPickerProps {
	selectedDate: Date
	onDateChange: (date: Date) => void
}

export function WeekPicker({ selectedDate, onDateChange }: WeekPickerProps) {
	const handlePrevWeek = () => {
		const prevWeek = new Date(selectedDate)
		prevWeek.setDate(selectedDate.getDate() - 7)
		onDateChange(prevWeek)
	}

	const handleNextWeek = () => {
		const nextWeek = new Date(selectedDate)
		nextWeek.setDate(selectedDate.getDate() + 7)
		onDateChange(nextWeek)
	}

	return (
		<div className="flex items-center justify-between bg-white rounded-lg border border-gray-200 p-4">
			<button
				type="button"
				onClick={handlePrevWeek}
				className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
			>
				<svg
					className="w-5 h-5 text-gray-600"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
				</svg>
			</button>

			<div className="text-center">
				<p className="text-sm text-gray-500">Week of</p>
				<p className="text-lg font-semibold text-gray-900">{formatWeekRange(selectedDate)}</p>
			</div>

			<button
				type="button"
				onClick={handleNextWeek}
				className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
			>
				<svg
					className="w-5 h-5 text-gray-600"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
				</svg>
			</button>
		</div>
	)
}
