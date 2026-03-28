"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import type { Staff } from "@/lib/types"

export default function SuccessPage() {
	const params = useParams()
	const staffId = params.staffId as string
	const [staff, setStaff] = useState<Staff | null>(null)

	useEffect(() => {
		fetch("/api/staff")
			.then((res) => res.json())
			.then((staffList: Staff[]) => {
				const found = staffList.find((s) => s.id === staffId)
				if (found) setStaff(found)
			})
	}, [staffId])

	return (
		<div className="text-center py-12 space-y-6">
			<div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
				<svg
					className="w-8 h-8 text-green-600"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
				</svg>
			</div>

			<div>
				<h1 className="text-2xl font-bold text-gray-900">Availability Submitted!</h1>
				<p className="text-gray-600 mt-2">
					Thank you{staff ? `, ${staff.name}` : ""}. Your availability has been recorded.
				</p>
			</div>

			<Link
				href="/submit"
				className="inline-block py-3 px-6 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
			>
				Submit Another
			</Link>
		</div>
	)
}
