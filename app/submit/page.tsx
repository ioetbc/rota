"use client"

import { useEffect, useState } from "react"
import { StaffCard } from "@/components/StaffCard"
import type { Staff } from "@/lib/types"

export default function SubmitPage() {
	const [staff, setStaff] = useState<Staff[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		async function fetchStaff() {
			try {
				const response = await fetch("/api/staff")
				if (!response.ok) throw new Error("Failed to fetch staff")
				const data = await response.json()
				setStaff(data)
			} catch (err) {
				setError(err instanceof Error ? err.message : "An error occurred")
			} finally {
				setLoading(false)
			}
		}
		fetchStaff()
	}, [])

	if (loading) {
		return (
			<div className="flex items-center justify-center min-h-[400px]">
				<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
			</div>
		)
	}

	if (error) {
		return (
			<div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
				<p className="text-red-700">{error}</p>
			</div>
		)
	}

	return (
		<div className="space-y-6">
			<div>
				<h1 className="text-2xl font-bold text-gray-900">Submit Availability</h1>
				<p className="text-gray-600 mt-1">Select your name to submit your availability</p>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				{staff.map((s) => (
					<StaffCard key={s.id} staff={s} />
				))}
			</div>

			{staff.length === 0 && (
				<div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center text-gray-500">
					No staff members found. Run the seed script to add test data.
				</div>
			)}
		</div>
	)
}
