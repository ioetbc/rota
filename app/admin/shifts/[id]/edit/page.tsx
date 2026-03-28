"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { ShiftTemplateForm } from "@/components/ShiftTemplateForm"
import { ShiftTemplate } from "@/lib/types"

export default function EditShiftTemplatePage() {
	const params = useParams()
	const [template, setTemplate] = useState<ShiftTemplate | null>(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		async function fetchTemplate() {
			try {
				const response = await fetch(`/api/shift-templates/${params.id}`)
				if (!response.ok) {
					if (response.status === 404) {
						throw new Error("Shift template not found")
					}
					throw new Error("Failed to fetch shift template")
				}
				const data = await response.json()
				setTemplate(data)
			} catch (err) {
				setError(err instanceof Error ? err.message : "An error occurred")
			} finally {
				setLoading(false)
			}
		}
		fetchTemplate()
	}, [params.id])

	if (loading) {
		return (
			<div className="flex items-center justify-center min-h-[400px]">
				<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
			</div>
		)
	}

	if (error || !template) {
		return (
			<div className="space-y-6">
				<div>
					<Link
						href="/admin/shifts"
						className="text-sm text-blue-600 hover:text-blue-700 mb-2 inline-block"
					>
						&larr; Back to Shift Templates
					</Link>
				</div>
				<div className="bg-red-50 border border-red-200 rounded-lg p-4">
					<p className="text-red-700">{error || "Template not found"}</p>
				</div>
			</div>
		)
	}

	return (
		<div className="space-y-6">
			<div>
				<Link
					href="/admin/shifts"
					className="text-sm text-blue-600 hover:text-blue-700 mb-2 inline-block"
				>
					&larr; Back to Shift Templates
				</Link>
				<h1 className="text-2xl font-bold text-gray-900">Edit Shift Template</h1>
				<p className="text-gray-600 mt-1">Update the shift template details</p>
			</div>

			<div className="bg-white rounded-lg border border-gray-200 p-6">
				<ShiftTemplateForm existingTemplate={template} isEdit />
			</div>
		</div>
	)
}
