import Topic from "../Topic/Topic.jsx";

export default function TopicList({
	topics,
	handleDelete,
	handleStatusChange,
}) {
	return (
		<section aria-labelledby="topics-heading">
			<div className="mb-5 flex items-center justify-between gap-4">
				<h2
					id="topics-heading"
					className="text-[32px] leading-10 font-[590] tracking-tight text-paper"
				>
					Topics
				</h2>
				<span className="text-lg text-fog">{topics.length} topics</span>
			</div>
			{topics.length === 0 ? (
				<p className="panel px-5 py-5 text-fog">No topics to display.</p>
			) : (
				<ul className="grid gap-3.5">
					{topics.map((topic) => (
						<li key={topic.id}>
							<Topic
								{...topic}
								handleDelete={handleDelete}
								handleStatusChange={handleStatusChange}
							/>
						</li>
					))}
				</ul>
			)}
		</section>
	);
}
