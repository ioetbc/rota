"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Role, ShiftTemplate, DayOfWeek } from "@/lib/types"

const ALL_DAYS: { value: DayOfWeek; label: string }[] = [
	{ value: "monday", label: "Monday" },
	{ value: "tuesday", label: "Tuesday" },
	{ value: "wednesday", label: "Wednesday" },
	{ value: "thursday", label: "Thursday" },
	{ value: "friday", label: "Friday" },
	{ value: "saturday", label: "Saturday" },
	{ value: "sunday", label: "Sunday" },
]

interface RoleRequirement {
	roleId: string
	minCount: number
}

interface ShiftTemplateFormProps {
	existingTemplate?: ShiftTemplate
	isEdit?: boolean
}

export function ShiftTemplateForm({ existingTemplate, isEdit = false }: ShiftTemplateFormProps) {
	const router = useRouter()
	const [roles, setRoles] = useState<Role[]>([])
	const [loading, setLoading] = useState(true)
	const [saving, setSaving] = useState(false)
	const [error, setError] = useState<string | null>(null)

	const [name, setName] = useState(existingTemplate?.name || "")
	const [startTime, setStartTime] = useState(existingTemplate?.startTime || "08:00")
	const [endTime, setEndTime] = useState(existingTemplate?.endTime || "13:00")
	const [selectedDays, setSelectedDays] = useState<DayOfWeek[]>(existingTemplate?.days || [])
	const [minStaff, setMinStaff] = useState(existingTemplate?.minStaff || 1)
	const [requiredRoles, setRequiredRoles] = useState<RoleRequirement[]>(
		existingTemplate?.requiredRoles?.map((r) => ({ roleId: r.roleId, minCount: r.minCount })) || []
	)

	useEffect(() => {
		async function fetchRoles() {
			try {
				const response = await fetch("/api/roles")
				if (!response.ok) throw new Error("Failed to fetch roles")
				const data = await response.json()
				setRoles(data)
			} catch (err) {
				setError(err instanceof Error ? err.message : "An error occurred")
			} finally {
				setLoading(false)
			}
		}
		fetchRoles()
	}, [])

	function handleDayToggle(day: DayOfWeek) {
		setSelectedDays((prev) =>
			prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
		)
	}

	function handleAddRole() {
		const availableRoles = roles.filter((r) => !requiredRoles.some((rr) => rr.roleId === r.id))
		if (availableRoles.length === 0) return

		setRequiredRoles((prev) => [...prev, { roleId: availableRoles[0].id, minCount: 1 }])
	}

	function handleRemoveRole(index: number) {
		setRequiredRoles((prev) => prev.filter((_, i) => i !== index))
	}

	function handleRoleChange(index: number, roleId: string) {
		setRequiredRoles((prev) => prev.map((r, i) => (i === index ? { ...r, roleId } : r)))
	}

	function handleRoleCountChange(index: number, minCount: number) {
		setRequiredRoles((prev) => prev.map((r, i) => (i === index ? { ...r, minCount } : r)))
	}

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault()
		setError(null)

		if (!name.trim()) {
			setError("Shift name is required")
			return
		}
		if (selectedDays.length === 0) {
			setError("At least one day must be selected")
			return
		}
		if (startTime === endTime) {
			setError("End time must be different from start time")
			return
		}

		setSaving(true)

		try {
			const url = isEdit
				? `/api/shift-templates/${existingTemplate?.id}`
				: "/api/shift-templates"
			const method = isEdit ? "PUT" : "POST"

			const response = await fetch(url, {
				method,
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					name: name.trim(),
					startTime,
					endTime,
					days: selectedDays,
					minStaff,
					requiredRoles: requiredRoles.length > 0 ? requiredRoles : undefined,
				}),
			})

			if (!response.ok) {
				const data = await response.json()
				throw new Error(data.error || "Failed to save shift template")
			}

			router.push("/admin/shifts")
		} catch (err) {
			setError(err instanceof Error ? err.message : "An error occurred")
		} finally {
			setSaving(false)
		}
	}

	if (loading) {
		return (
			<div className="flex items-center justify-center min-h-[400px]">
				<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
			</div>
		)
	}

	const availableRoles = roles.filter((r) => !requiredRoles.some((rr) => rr.roleId === r.id))

	return (
		<form onSubmit={handleSubmit} className="space-y-6">
			{error && (
				<div className="bg-red-50 border border-red-200 rounded-lg p-4">
					<p className="text-red-700 text-sm">{error}</p>
				</div>
			)}

			<div>
				<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
					Shift Name
				</label>
				<input
					type="text"
					id="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder="e.g., Morning, Lunch Rush, Evening"
					maxLength={50}
					className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
				/>
			</div>

			<div className="grid grid-cols-2 gap-4">
				<div>
					<label htmlFor="startTime" className="block text-sm font-medium text-gray-700 mb-1">
						Start Time
					</label>
					<input
						type="time"
						id="startTime"
						value={startTime}
						onChange={(e) => setStartTime(e.target.value)}
						className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
					/>
				</div>
				<div>
					<label htmlFor="endTime" className="block text-sm font-medium text-gray-700 mb-1">
						End Time
					</label>
					<input
						type="time"
						id="endTime"
						value={endTime}
						onChange={(e) => setEndTime(e.target.value)}
						className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
					/>
				</div>
			</div>

			<div>
				<label className="block text-sm font-medium text-gray-700 mb-2">Days</label>
				<div className="flex flex-wrap gap-2">
					{ALL_DAYS.map((day) => (
						<button
							key={day.value}
							type="button"
							onClick={() => handleDayToggle(day.value)}
							className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
								selectedDays.includes(day.value)
									? "bg-blue-600 text-white"
									: "bg-gray-100 text-gray-700 hover:bg-gray-200"
							}`}
						>
							{day.label}
						</button>
					))}
				</div>
			</div>

			<div>
				<label htmlFor="minStaff" className="block text-sm font-medium text-gray-700 mb-1">
					Minimum Staff
				</label>
				<input
					type="number"
					id="minStaff"
					value={minStaff}
					onChange={(e) => setMinStaff(Math.max(1, parseInt(e.target.value) || 1))}
					min={1}
					className="w-32 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
				/>
			</div>

			<div>
				<label className="block text-sm font-medium text-gray-700 mb-2">
					Required Roles (Optional)
				</label>
				<div className="space-y-2">
					{requiredRoles.map((rr, index) => (
						<div key={index} className="flex items-center gap-2">
							<select
								value={rr.roleId}
								onChange={(e) => handleRoleChange(index, e.target.value)}
								className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
							>
								{roles.map((role) => (
									<option
										key={role.id}
										value={role.id}
										disabled={
											requiredRoles.some(
												(r, i) => i !== index && r.roleId === role.id
											)
										}
									>
										{role.name}
									</option>
								))}
							</select>
							<input
								type="number"
								value={rr.minCount}
								onChange={(e) =>
									handleRoleCountChange(
										index,
										Math.max(1, parseInt(e.target.value) || 1)
									)
								}
								min={1}
								className="w-20 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
							/>
							<button
								type="button"
								onClick={() => handleRemoveRole(index)}
								className="p-2 text-red-600 hover:text-red-700 transition-colors"
							>
								&times;
							</button>
						</div>
					))}
					{availableRoles.length > 0 && (
						<button
							type="button"
							onClick={handleAddRole}
							className="text-sm text-blue-600 hover:text-blue-700"
						>
							+ Add role requirement
						</button>
					)}
					{roles.length === 0 && (
						<p className="text-sm text-gray-500">
							No roles defined.{" "}
							<a href="/admin/roles" className="text-blue-600 hover:underline">
								Create roles first
							</a>
							.
						</p>
					)}
				</div>
			</div>

			<div className="flex gap-3 pt-4">
				<button
					type="submit"
					disabled={saving}
					className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
				>
					{saving ? "Saving..." : isEdit ? "Update Shift Template" : "Create Shift Template"}
				</button>
				<button
					type="button"
					onClick={() => router.push("/admin/shifts")}
					className="px-6 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
				>
					Cancel
				</button>
			</div>
		</form>
	)
}
