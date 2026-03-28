"use client"

import { useEffect, useState } from "react"
import { useRouter, useParams } from "next/navigation"
import { SlotGrid } from "@/components/SlotGrid"
import { formatWeekRange, parseISODate } from "@/lib/dates"
import type { AvailabilitySlot, ShiftType, ParsedSlot, Staff } from "@/lib/types"

interface PendingData {
	staffId: string
	weekStart: string
	rawText: string
	parsedSlots: ParsedSlot[]
	reasoning: string
}

export default function ConfirmPage() {
	const router = useRouter()
	const params = useParams()
	const staffId = params.staffId as string

	const [staff, setStaff] = useState<Staff | null>(null)
	const [weekStart, setWeekStart] = useState<string>("")
	const [rawText, setRawText] = useState<string>("")
	const [slots, setSlots] = useState<AvailabilitySlot[]>([])
	const [reasoning, setReasoning] = useState<string>("")
	const [submitting, setSubmitting] = useState(false)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const stored = sessionStorage.getItem("pendingAvailability")
		if (!stored) {
			router.push(`/submit/${staffId}`)
			return
		}

		const data: PendingData = JSON.parse(stored)
		if (data.staffId !== staffId) {
			router.push(`/submit/${staffId}`)
			return
		}

		setWeekStart(data.weekStart)
		setRawText(data.rawText)
		setReasoning(data.reasoning)
		setSlots(
			data.parsedSlots.map((slot) => ({
				date: slot.date,
				shift: slot.shift,
				available: slot.available,
				aiReasoning: data.reasoning, // Use top-level reasoning for all slots
				wasEdited: false,
			}))
		)

		// Fetch staff info
		fetch("/api/staff")
			.then((res) => res.json())
			.then((staffList: Staff[]) => {
				const found = staffList.find((s) => s.id === staffId)
				if (found) setStaff(found)
			})
	}, [staffId, router])

	const handleSlotToggle = (date: string, shift: ShiftType) => {
		setSlots((prev) =>
			prev.map((slot) =>
				slot.date === date && slot.shift === shift
					? { ...slot, available: !slot.available, wasEdited: true }
					: slot
			)
		)
	}

	const handleSubmit = async () => {
		setSubmitting(true)
		setError(null)

		try {
			const response = await fetch("/api/availability/submit", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					staffId,
					weekStart,
					rawText,
					slots,
				}),
			})

			if (!response.ok) {
				const data = await response.json()
				throw new Error(data.error || "Failed to submit availability")
			}

			sessionStorage.removeItem("pendingAvailability")
			router.push(`/submit/${staffId}/success`)
		} catch (err) {
			setError(err instanceof Error ? err.message : "An error occurred")
		} finally {
			setSubmitting(false)
		}
	}

	const handleGoBack = () => {
		router.push(`/submit/${staffId}`)
	}

	if (!weekStart || slots.length === 0) {
		return (
			<div className="flex items-center justify-center min-h-[400px]">
				<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
			</div>
		)
	}

	const availableCount = slots.filter((s) => s.available).length
	const editedCount = slots.filter((s) => s.wasEdited).length

	return (
		<div className="space-y-6">
			<div>
				<button
					type="button"
					onClick={handleGoBack}
					className="text-blue-600 hover:text-blue-800 text-sm font-medium mb-2 flex items-center gap-1"
				>
					<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
					</svg>
					Go back to re-enter text
				</button>
				<h1 className="text-2xl font-bold text-gray-900">Confirm Your Availability</h1>
				<p className="text-gray-600 mt-1">
					{staff?.name} - {formatWeekRange(parseISODate(weekStart))}
				</p>
			</div>

			<div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
				<p className="text-sm text-blue-800">
					<span className="font-medium">AI parsed your availability:</span> {availableCount} of 21
					slots marked as available.
					{editedCount > 0 && (
						<span className="text-yellow-700"> You've edited {editedCount} slot(s).</span>
					)}
				</p>
				{reasoning && (
					<p className="text-xs text-blue-700 mt-2 italic">"{reasoning}"</p>
				)}
				<p className="text-xs text-blue-600 mt-1">
					Click any cell to toggle availability.
				</p>
			</div>

			<SlotGrid
				weekStart={parseISODate(weekStart)}
				slots={slots}
				onSlotToggle={handleSlotToggle}
			/>

			{error && (
				<div className="bg-red-50 border border-red-200 rounded-lg p-4">
					<p className="text-red-700 text-sm">{error}</p>
				</div>
			)}

			<div className="flex gap-4">
				<button
					type="button"
					onClick={handleGoBack}
					className="flex-1 py-3 px-4 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition-colors"
				>
					Go Back
				</button>
				<button
					type="button"
					onClick={handleSubmit}
					disabled={submitting}
					className="flex-1 py-3 px-4 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 disabled:bg-green-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
				>
					{submitting ? (
						<>
							<div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
							Submitting...
						</>
					) : (
						"Confirm & Submit"
					)}
				</button>
			</div>
		</div>
	)
}
