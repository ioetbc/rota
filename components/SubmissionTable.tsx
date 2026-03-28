"use client"

import { useState } from "react"
import { formatWeekRange, formatDisplayDate, SHIFT_NAMES, parseISODate } from "@/lib/dates"
import type { ShiftType } from "@/lib/types"

interface Slot {
	id: string
	date: string
	shift: ShiftType
	available: boolean
	aiReasoning?: string
	wasEdited: boolean
}

interface Submission {
	id: string
	staffId: string
	staff: { id: string; name: string }
	weekStart: string
	rawText: string
	createdAt: string
	slots: Slot[]
}

interface SubmissionTableProps {
	submissions: Submission[]
}

export function SubmissionTable({ submissions }: SubmissionTableProps) {
	const [expandedId, setExpandedId] = useState<string | null>(null)

	if (submissions.length === 0) {
		return (
			<div className="bg-white rounded-lg border border-gray-200 p-8 text-center text-gray-500">
				No submissions yet
			</div>
		)
	}

	return (
		<div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
			<table className="w-full">
				<thead>
					<tr className="bg-gray-50">
						<th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Staff</th>
						<th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Week</th>
						<th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Submitted</th>
						<th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Raw Text</th>
						<th className="px-4 py-3 text-center text-sm font-medium text-gray-500">Details</th>
					</tr>
				</thead>
				<tbody>
					{submissions.map((submission) => (
						<>
							<tr key={submission.id} className="border-t border-gray-200 hover:bg-gray-50">
								<td className="px-4 py-3 text-sm text-gray-900">{submission.staff.name}</td>
								<td className="px-4 py-3 text-sm text-gray-900">
									{formatWeekRange(parseISODate(submission.weekStart.split("T")[0]))}
								</td>
								<td className="px-4 py-3 text-sm text-gray-500">
									{new Date(submission.createdAt).toLocaleDateString("en-GB", {
										day: "numeric",
										month: "short",
										hour: "2-digit",
										minute: "2-digit",
									})}
								</td>
								<td className="px-4 py-3 text-sm text-gray-500 max-w-xs truncate">
									{submission.rawText || "-"}
								</td>
								<td className="px-4 py-3 text-center">
									<button
										type="button"
										onClick={() =>
											setExpandedId(expandedId === submission.id ? null : submission.id)
										}
										className="text-blue-600 hover:text-blue-800 text-sm font-medium"
									>
										{expandedId === submission.id ? "Hide" : "Show"}
									</button>
								</td>
							</tr>
							{expandedId === submission.id && (
								<tr key={`${submission.id}-expanded`}>
									<td colSpan={5} className="px-4 py-4 bg-gray-50">
										<div className="grid grid-cols-7 gap-2 text-xs">
											{submission.slots.map((slot) => (
												<div
													key={slot.id}
													className={`p-2 rounded text-center ${
														slot.available
															? "bg-green-100 text-green-700"
															: "bg-red-100 text-red-700"
													}`}
												>
													<div className="font-medium">
														{formatDisplayDate(parseISODate(slot.date.split("T")[0]))}
													</div>
													<div>{SHIFT_NAMES[slot.shift]}</div>
													{slot.wasEdited && (
														<div className="text-yellow-600 text-xs">edited</div>
													)}
												</div>
											))}
										</div>
									</td>
								</tr>
							)}
						</>
					))}
				</tbody>
			</table>
		</div>
	)
}
