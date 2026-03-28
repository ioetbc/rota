"use client"

import Link from "next/link"
import type { Staff } from "@/lib/types"

interface StaffCardProps {
	staff: Staff
}

export function StaffCard({ staff }: StaffCardProps) {
	return (
		<Link
			href={`/submit/${staff.id}`}
			className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all"
		>
			<h3 className="text-lg font-semibold text-gray-900">{staff.name}</h3>
			<p className="text-sm text-gray-500 mt-1">{staff.phone}</p>
		</Link>
	)
}
