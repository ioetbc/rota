"use client"

import Link from "next/link"
import { ShiftTemplateForm } from "@/components/ShiftTemplateForm"

export default function NewShiftTemplatePage() {
	return (
		<div className="space-y-6">
			<div>
				<Link
					href="/admin/shifts"
					className="text-sm text-blue-600 hover:text-blue-700 mb-2 inline-block"
				>
					&larr; Back to Shift Templates
				</Link>
				<h1 className="text-2xl font-bold text-gray-900">New Shift Template</h1>
				<p className="text-gray-600 mt-1">Define a new shift that needs to be staffed</p>
			</div>

			<div className="bg-white rounded-lg border border-gray-200 p-6">
				<ShiftTemplateForm />
			</div>
		</div>
	)
}
