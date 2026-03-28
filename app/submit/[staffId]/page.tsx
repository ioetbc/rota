"use client"

import { useEffect, useState } from "react"
import { useRouter, useParams } from "next/navigation"
import { WeekPicker } from "@/components/WeekPicker"
import { AvailabilityTextarea } from "@/components/AvailabilityTextarea"
import { getNextMonday, formatDate } from "@/lib/dates"
import type { Staff } from "@/lib/types"

export default function AvailabilityFormPage() {
	const router = useRouter()
	const params = useParams()
	const staffId = params.staffId as string

	const [staff, setStaff] = useState<Staff | null>(null)
	const [weekStart, setWeekStart] = useState<Date>(getNextMonday())
	const [rawText, setRawText] = useState("")
	const [loading, setLoading] = useState(true)
	const [parsing, setParsing] = useState(false)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		async function fetchStaff() {
			try {
				const response = await fetch("/api/staff")
				if (!response.ok) throw new Error("Failed to fetch staff")
				const data: Staff[] = await response.json()
				const found = data.find((s) => s.id === staffId)
				if (!found) throw new Error("Staff member not found")
				setStaff(found)
			} catch (err) {
				setError(err instanceof Error ? err.message : "An error occurred")
			} finally {
				setLoading(false)
			}
		}
		fetchStaff()
	}, [staffId])

	const handleParse = async () => {
		setParsing(true)
		setError(null)

		try {
			const response = await fetch("/api/availability/parse", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					rawText,
					weekStart: formatDate(weekStart),
				}),
			})

			if (!response.ok) {
				const data = await response.json()
				throw new Error(data.error || "Failed to parse availability")
			}

			const result = await response.json()

			// Store data in sessionStorage for the confirm page
			sessionStorage.setItem(
				"pendingAvailability",
				JSON.stringify({
					staffId,
					weekStart: formatDate(weekStart),
					rawText,
					parsedSlots: result.slots,
					reasoning: result.reasoning,
				})
			)

			router.push(`/submit/${staffId}/confirm`)
		} catch (err) {
			setError(err instanceof Error ? err.message : "An error occurred")
		} finally {
			setParsing(false)
		}
	}

	if (loading) {
		return (
			<div className="flex items-center justify-center min-h-[400px]">
				<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
			</div>
		)
	}

	if (!staff) {
		return (
			<div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
				<p className="text-red-700">{error || "Staff member not found"}</p>
			</div>
		)
	}

	return (
		<div className="space-y-6">
			<div>
				<button
					type="button"
					onClick={() => router.push("/submit")}
					className="text-blue-600 hover:text-blue-800 text-sm font-medium mb-2 flex items-center gap-1"
				>
					<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
					</svg>
					Back to staff selection
				</button>
				<h1 className="text-2xl font-bold text-gray-900">{staff.name}</h1>
				<p className="text-gray-600 mt-1">Enter your availability for the week</p>
			</div>

			<WeekPicker selectedDate={weekStart} onDateChange={setWeekStart} />

			<AvailabilityTextarea value={rawText} onChange={setRawText} disabled={parsing} />

			{error && (
				<div className="bg-red-50 border border-red-200 rounded-lg p-4">
					<p className="text-red-700 text-sm">{error}</p>
				</div>
			)}

			<button
				type="button"
				onClick={handleParse}
				disabled={parsing}
				className="w-full py-3 px-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
			>
				{parsing ? (
					<>
						<div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
						Parsing...
					</>
				) : (
					"Parse My Availability"
				)}
			</button>
		</div>
	)
}
