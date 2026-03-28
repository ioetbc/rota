"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { SubmissionTable } from "@/components/SubmissionTable"

export default function AdminSubmissionsPage() {
	const [submissions, setSubmissions] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		async function fetchSubmissions() {
			try {
				const response = await fetch("/api/submissions")
				if (!response.ok) throw new Error("Failed to fetch submissions")
				const data = await response.json()
				setSubmissions(data)
			} catch (err) {
				setError(err instanceof Error ? err.message : "An error occurred")
			} finally {
				setLoading(false)
			}
		}
		fetchSubmissions()
	}, [])

	if (loading) {
		return (
			<div className="flex items-center justify-center min-h-[400px]">
				<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
			</div>
		)
	}

	return (
		<div className="space-y-6">
			<div className="flex items-center justify-between">
				<div>
					<h1 className="text-2xl font-bold text-gray-900">All Submissions</h1>
					<p className="text-gray-600 mt-1">View all staff availability submissions</p>
				</div>
				<Link
					href="/submit"
					className="py-2 px-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors text-sm"
				>
					Submit Availability
				</Link>
			</div>

			{error && (
				<div className="bg-red-50 border border-red-200 rounded-lg p-4">
					<p className="text-red-700 text-sm">{error}</p>
				</div>
			)}

			<SubmissionTable submissions={submissions} />
		</div>
	)
}
