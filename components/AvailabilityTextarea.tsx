"use client"

interface AvailabilityTextareaProps {
	value: string
	onChange: (value: string) => void
	disabled?: boolean
}

export function AvailabilityTextarea({ value, onChange, disabled }: AvailabilityTextareaProps) {
	return (
		<div className="space-y-2">
			<label htmlFor="availability" className="block text-sm font-medium text-gray-700">
				Describe your availability
			</label>
			<textarea
				id="availability"
				value={value}
				onChange={(e) => onChange(e.target.value)}
				disabled={disabled}
				rows={6}
				className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed resize-none"
				placeholder="Examples:
• Free all week
• Monday and Tuesday only
• Can't do evenings
• Available Mon-Wed, Thursday afternoon only
• Free except Friday"
			/>
		</div>
	)
}
