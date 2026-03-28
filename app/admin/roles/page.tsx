"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Role } from "@/lib/types"

export default function AdminRolesPage() {
	const [roles, setRoles] = useState<Role[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)
	const [newRoleName, setNewRoleName] = useState("")
	const [isAdding, setIsAdding] = useState(false)
	const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null)

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

	useEffect(() => {
		fetchRoles()
	}, [])

	async function handleAddRole(e: React.FormEvent) {
		e.preventDefault()
		if (!newRoleName.trim()) return

		setIsAdding(true)
		setError(null)

		try {
			const response = await fetch("/api/roles", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ name: newRoleName.trim() }),
			})

			if (!response.ok) {
				const data = await response.json()
				throw new Error(data.error || "Failed to create role")
			}

			setNewRoleName("")
			await fetchRoles()
		} catch (err) {
			setError(err instanceof Error ? err.message : "An error occurred")
		} finally {
			setIsAdding(false)
		}
	}

	async function handleDeleteRole(id: string) {
		setError(null)
		try {
			const response = await fetch(`/api/roles/${id}`, {
				method: "DELETE",
			})

			if (!response.ok) {
				const data = await response.json()
				throw new Error(data.error || "Failed to delete role")
			}

			setDeleteConfirm(null)
			await fetchRoles()
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
					<h1 className="text-2xl font-bold text-gray-900">Roles</h1>
					<p className="text-gray-600 mt-1">Define custom roles for your business</p>
				</div>
				<Link
					href="/admin/shifts"
					className="py-2 px-4 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors text-sm"
				>
					Shift Templates
				</Link>
			</div>

			{error && (
				<div className="bg-red-50 border border-red-200 rounded-lg p-4">
					<p className="text-red-700 text-sm">{error}</p>
				</div>
			)}

			<form onSubmit={handleAddRole} className="flex gap-2">
				<input
					type="text"
					value={newRoleName}
					onChange={(e) => setNewRoleName(e.target.value)}
					placeholder="Enter role name..."
					maxLength={50}
					className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
				/>
				<button
					type="submit"
					disabled={isAdding || !newRoleName.trim()}
					className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
				>
					{isAdding ? "Adding..." : "Add Role"}
				</button>
			</form>

			<div className="bg-white rounded-lg border border-gray-200 divide-y divide-gray-200">
				{roles.length === 0 ? (
					<div className="p-8 text-center text-gray-500">
						No roles defined yet. Add your first role above.
					</div>
				) : (
					roles.map((role) => (
						<div key={role.id} className="p-4 flex items-center justify-between">
							<div>
								<span className="font-medium text-gray-900">{role.name}</span>
								{role._count && role._count.shiftTemplateRoles > 0 && (
									<span className="ml-2 text-xs text-gray-500">
										(used in {role._count.shiftTemplateRoles} shift template
										{role._count.shiftTemplateRoles !== 1 ? "s" : ""})
									</span>
								)}
							</div>
							<div>
								{deleteConfirm === role.id ? (
									<div className="flex items-center gap-2">
										{role._count && role._count.shiftTemplateRoles > 0 && (
											<span className="text-sm text-amber-600 font-medium">
												Warning: This role is used in {role._count.shiftTemplateRoles} shift template
												{role._count.shiftTemplateRoles !== 1 ? "s" : ""}. Deleting will remove it from those templates.
											</span>
										)}
										<span className="text-sm text-gray-600">Delete?</span>
										<button
											onClick={() => handleDeleteRole(role.id)}
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
									<button
										onClick={() => setDeleteConfirm(role.id)}
										className="text-red-600 hover:text-red-700 text-sm"
									>
										Delete
									</button>
								)}
							</div>
						</div>
					))
				)}
			</div>
		</div>
	)
}
