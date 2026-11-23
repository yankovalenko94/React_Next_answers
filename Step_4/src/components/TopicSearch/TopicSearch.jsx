import SearchIcon from "../icons/SearchIcon/SearchIcon.jsx";

export default function TopicSearch({ searchQuery, onSearchQuery }) {
	return (
		<div className="relative">
			<label className="sr-only" htmlFor="topic-search">
				Search topics by title
			</label>
			<span className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2">
				<SearchIcon />
			</span>
			<input
				className="field h-14 pl-14 text-xl"
				id="topic-search"
				name="search"
				type="search"
				placeholder="Search topics by title..."
				value={searchQuery}
				onChange={(event) => onSearchQuery(event.target.value)}
			/>
		</div>
	);
}
