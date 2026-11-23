const filters = [
	{ value: "all", label: "All topics" },
	{ value: "not-understood", label: "Not understood" },
	{ value: "theoretical", label: "Theoretical understanding" },
	{ value: "practical", label: "Practical understanding" },
	{ value: "fully-learned", label: "Fully learned" },
];

export default function TopicFilters({ selectedStatus, onStatusChange }) {
	return (
		<div
			className="mt-5 mb-9 flex flex-wrap gap-3"
			role="group"
			aria-label="Filter topics by status"
		>
			{filters.map(({ value, label }) => {
				const isSelected = selectedStatus === value;

				return (
					<button
						key={value}
						className={`filter-button${isSelected ? " border-white bg-[#e5e5e6] font-medium text-void hover:bg-white" : ""}`}
						type="button"
						aria-pressed={isSelected}
						onClick={() => onStatusChange(value)}
					>
						{label}
					</button>
				);
			})}
		</div>
	);
}
