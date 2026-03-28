"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ShiftTemplate, DayOfWeek } from "@/lib/types"

const DAY_LABELS: Record<DayOfWeek, string> = {
	monday: "Mon",
	tuesday: "Tue",
	wednesday: "Wed",
	thursday: "Thu",
	friday: "Fri",
	saturday: "Sat",
	sunday: "Sun",
}

const ALL_DAYS: DayOfWeek[] = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

export default function AdminShiftsPage() {
	const [templates, setTemplates] = useState<ShiftTemplate[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)
	const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null)

	async function fetchTemplates() {
		try {
			const response = await fetch("/api/shift-templates")
			if (!response.ok) throw new Error("Failed to fetch shift templates")
			const data = await response.json()
			setTemplates(data)
		} catch (err) {
			setError(err instanceof Error ? err.message : "An error occurred")
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		fetchTemplates()
	}, [])

	async function handleDelete(id: string) {
		setError(null)
		try {
			const response = await fetch(`/api/shift-templates/${id}`, {
				method: "DELETE",
			})

			if (!response.ok) {
				const data = await response.json()
				throw new Error(data.error || "Failed to delete shift template")
			}

			setDeleteConfirm(null)
			await fetchTemplates()
		} catch (err) {
			setError(err instanceof Error ? err.message : "An error occurred")
		}
	}

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
					<h1 className="text-2xl font-bold text-gray-900">Shift Templates</h1>
					<p className="text-gray-600 mt-1">Define the shifts that need to be staffed</p>
				</div>
				<div className="flex gap-2">
					<Link
						href="/admin/roles"
						className="py-2 px-4 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors text-sm"
					>
						Manage Roles
					</Link>
					<Link
						href="/admin/shifts/new"
						className="py-2 px-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors text-sm"
					>
						Add Shift Template
					</Link>
				</div>
			</div>

			{error && (
				<div className="bg-red-50 border border-red-200 rounded-lg p-4">
					<p className="text-red-700 text-sm">{error}</p>
				</div>
			)}

			{templates.length === 0 ? (
				<div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
					<h3 className="text-lg font-medium text-gray-900 mb-2">No shift templates yet</h3>
					<p className="text-gray-600 mb-4">
						Create shift templates to define what shifts need to be staffed and when.
					</p>
					<Link
						href="/admin/shifts/new"
						className="inline-block py-2 px-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors text-sm"
					>
						Create Your First Shift Template
					</Link>
				</div>
			) : (
				<div className="space-y-4">
					{templates.map((template) => (
						<div
							key={template.id}
							className="bg-white rounded-lg border border-gray-200 p-4"
						>
							<div className="flex items-start justify-between">
								<div className="flex-1">
									<div className="flex items-center gap-3 mb-2">
										<h3 className="text-lg font-semibold text-gray-900">
											{template.name}
										</h3>
										<span className="text-sm text-gray-600">
											{template.startTime} - {template.endTime}
										</span>
									</div>

									<div className="flex flex-wrap gap-1 mb-3">
										{ALL_DAYS.map((day) => (
											<span
												key={day}
												className={`px-2 py-0.5 text-xs rounded ${
													template.days.includes(day)
														? "bg-blue-100 text-blue-700"
														: "bg-gray-100 text-gray-400"
												}`}
											>
												{DAY_LABELS[day]}
											</span>
										))}
									</div>

									<div className="flex flex-wrap gap-4 text-sm text-gray-600">
										<span>Min staff: {template.minStaff}</span>
										{template.requiredRoles.length > 0 && (
											<span>
												Roles:{" "}
												{template.requiredRoles
													.map((r) => `${r.minCount} ${r.roleName}`)
													.join(", ")}
											</span>
										)}
									</div>
								</div>

								<div className="flex items-center gap-2 ml-4">
									{deleteConfirm === template.id ? (
										<div className="flex items-center gap-2">
											<span className="text-sm text-gray-600">Delete?</span>
											<button
												onClick={() => handleDelete(template.id)}
												className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition-colors"
											>
												Yes
											</button>
											<button
												onClick={() => setDeleteConfirm(null)}
												className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded hover:bg-gray-300 transition-colors"
											>
												No
											</button>
										</div>
									) : (
										<>
											<Link
												href={`/admin/shifts/${template.id}/edit`}
												className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded hover:bg-gray-200 transition-colors"
											>
												Edit
											</Link>
											<button
												onClick={() => setDeleteConfirm(template.id)}
												className="px-3 py-1 text-red-600 text-sm hover:text-red-700 transition-colors"
											>
												Delete
											</button>
										</>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	)
}
