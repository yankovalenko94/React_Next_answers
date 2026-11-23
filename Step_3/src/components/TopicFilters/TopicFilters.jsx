export default function TopicFilters() {
	return (
		<div
			className="mt-5 mb-9 flex flex-wrap gap-3"
			role="group"
			aria-label="Filter topics by status"
		>
			<button
				className="filter-button border-white bg-[#e5e5e6] font-medium text-void hover:bg-white"
				type="button"
				aria-pressed="true"
			>
				All topics
			</button>
			<button className="filter-button" type="button" aria-pressed="false">
				Not understood
			</button>
			<button className="filter-button" type="button" aria-pressed="false">
				Theoretical understanding
			</button>
			<button className="filter-button" type="button" aria-pressed="false">
				Practical understanding
			</button>
			<button className="filter-button" type="button" aria-pressed="false">
				Fully learned
			</button>
		</div>
	);
}
