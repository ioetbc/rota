"use client"

import { useState } from "react"
import { SHIFT_TIMES } from "@/lib/dates"
import type { ShiftType } from "@/lib/types"

interface SlotCellProps {
	available: boolean
	shift: ShiftType
	reasoning?: string
	wasEdited?: boolean
	onToggle: () => void
}

export function SlotCell({ available, shift, reasoning, wasEdited, onToggle }: SlotCellProps) {
	const [showTooltip, setShowTooltip] = useState(false)

	return (
		<div className="relative">
			<button
				type="button"
				onClick={onToggle}
				onMouseEnter={() => setShowTooltip(true)}
				onMouseLeave={() => setShowTooltip(false)}
				className={`w-full h-12 rounded-lg border-2 transition-all font-medium text-sm ${
					available
						? "bg-green-100 border-green-500 text-green-700 hover:bg-green-200"
						: "bg-red-100 border-red-500 text-red-700 hover:bg-red-200"
				} ${wasEdited ? "ring-2 ring-yellow-400" : ""}`}
			>
				{available ? "Yes" : "No"}
			</button>

			{showTooltip && reasoning && (
				<div className="absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg shadow-lg max-w-xs">
					<p className="font-medium mb-1">{SHIFT_TIMES[shift]}</p>
					<p>{reasoning}</p>
					{wasEdited && <p className="text-yellow-300 mt-1">Manually edited</p>}
					<div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
				</div>
			)}
		</div>
	)
}
