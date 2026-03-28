"use client"

import { SlotCell } from "./SlotCell"
import { getWeekDates, formatDisplayDate, formatDate, SHIFT_NAMES } from "@/lib/dates"
import type { AvailabilitySlot, ShiftType } from "@/lib/types"

interface SlotGridProps {
	weekStart: Date
	slots: AvailabilitySlot[]
	onSlotToggle: (date: string, shift: ShiftType) => void
}

const SHIFTS: ShiftType[] = ["MORNING", "AFTERNOON", "EVENING"]

export function SlotGrid({ weekStart, slots, onSlotToggle }: SlotGridProps) {
	const weekDates = getWeekDates(weekStart)

	const getSlot = (date: string, shift: ShiftType) => {
		return slots.find((s) => s.date === date && s.shift === shift)
	}

	return (
		<div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
			<div className="overflow-x-auto">
				<table className="w-full">
					<thead>
						<tr className="bg-gray-50">
							<th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Shift</th>
							{weekDates.map((date) => (
								<th
									key={date.toISOString()}
									className="px-2 py-3 text-center text-sm font-medium text-gray-500 min-w-[80px]"
								>
									{formatDisplayDate(date)}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{SHIFTS.map((shift) => (
							<tr key={shift} className="border-t border-gray-200">
								<td className="px-4 py-3 text-sm font-medium text-gray-900">
									{SHIFT_NAMES[shift]}
								</td>
								{weekDates.map((date) => {
									const dateStr = formatDate(date)
									const slot = getSlot(dateStr, shift)
									return (
										<td key={`${dateStr}-${shift}`} className="px-2 py-2">
											<SlotCell
												available={slot?.available ?? false}
												shift={shift}
												reasoning={slot?.aiReasoning}
												wasEdited={slot?.wasEdited}
												onToggle={() => onSlotToggle(dateStr, shift)}
											/>
										</td>
									)
								})}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}
