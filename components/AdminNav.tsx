"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
	{ href: "/admin/submissions", label: "Submissions" },
	{ href: "/admin/shifts", label: "Shift Templates" },
	{ href: "/admin/roles", label: "Roles" },
]

export function AdminNav() {
	const pathname = usePathname()

	return (
		<nav className="flex items-center gap-1 bg-gray-100 rounded-lg p-1 mb-6">
			{navItems.map((item) => {
				const isActive = pathname.startsWith(item.href)
				return (
					<Link
						key={item.href}
						href={item.href}
						className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
							isActive
								? "bg-white text-gray-900 shadow-sm"
								: "text-gray-600 hover:text-gray-900"
						}`}
					>
						{item.label}
					</Link>
				)
			})}
		</nav>
	)
}
