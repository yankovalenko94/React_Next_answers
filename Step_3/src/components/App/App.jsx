import { useState } from "react";

import TopicSearch from "../TopicSearch/TopicSearch.jsx";
import TopicFilters from "../TopicFilters/TopicFilters.jsx";
import TopicList from "../TopicList/TopicList.jsx";
import LearningOverview from "../LearningOverview/LearningOverview.jsx";
import AddTopicForm from "../AddTopicForm/AddTopicForm.jsx";

export default function App() {
	const [data, setData] = useState({
		topics: [
			{
				id: 1,
				title: "JSX preprocessor and React elements",
				note: "A fairly easy topic",
				status: "fully-learned",
			},
			{
				id: 2,
				title: "React components and Strict Mode",
				note: "Components are very important",
				status: "fully-learned",
			},
			{
				id: 3,
				title: "Component props and conditional rendering",
				note: "Not much hands-on practice yet",
				status: "theoretical",
			},
		],
	});

	const handleStatusChange = (id, status) => {
		setData((currentData) => ({
			...currentData,
			topics: currentData.topics.map((topic) => {
				return topic.id === id ? { ...topic, status } : topic;
			}),
		}));
	};

	const handleAddTopic = (topic) => {
		setData((currentData) => ({
			...currentData,
			topics: [
				...currentData.topics,
				{
					id: crypto.randomUUID(),
					...topic,
				},
			],
		}));
	};

	const handleDelete = (id) => {
		setData((currentData) => ({
			...currentData,
			topics: currentData.topics.filter((topic) => topic.id !== id),
		}));
	};

	return (
		<main className="mx-auto max-w-372 px-5 py-8 sm:px-8 lg:px-15.5 lg:pt-12 lg:pb-16">
			<h1 className="mb-10 text-4xl font-[590] tracking-[-0.022em] text-paper sm:text-5xl lg:mb-12 lg:text-[60px] lg:leading-[1.12]">
				Learning tracker
			</h1>
			<div className="grid items-start gap-7 lg:grid-cols-[minmax(0,1.46fr)_minmax(0,1fr)] lg:gap-7.5">
				<section className="min-w-0" aria-label="Topics workspace">
					<TopicSearch />
					<TopicFilters />
					<TopicList
						topics={data.topics}
						handleDelete={handleDelete}
						handleStatusChange={handleStatusChange}
					/>
				</section>
				<aside
					className="grid min-w-0 gap-6"
					aria-label="Learning summary and new topic"
				>
					<LearningOverview />
					<AddTopicForm handleAddTopic={handleAddTopic} />
				</aside>
			</div>
		</main>
	);
}
