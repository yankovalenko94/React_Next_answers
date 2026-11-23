import { useState } from "react";

import ChevronIcon from "../icons/ChevronIcon/ChevronIcon.jsx";
import PlusIcon from "../icons/PlusIcon/PlusIcon.jsx";
import StatusOptions from "../StatusOptions/StatusOptions.jsx";

export default function AddTopicForm({ handleAddTopic }) {
	const [title, setTitle] = useState("");
	const [note, setNote] = useState("");
	const [status, setStatus] = useState("not-understood");
	const [error, setError] = useState(null);
	const [formStatus, setFormStatus] = useState("typing");

	function handleSubmit(event) {
		event.preventDefault();

		const trimmedTitle = title.trim();
		if (!trimmedTitle) {
			setError("Enter a topic title");
			setFormStatus("typing");
			return;
		}

		handleAddTopic({ title: trimmedTitle, note: note.trim(), status });
		setTitle("");
		setNote("");
		setStatus("not-understood");
		setError(null);
		setFormStatus("success");
	}

	return (
		<section
			className="panel px-6 pt-3 pb-6"
			aria-labelledby="add-topic-heading"
		>
			<h2
				id="add-topic-heading"
				className="mb-4 text-[30px] leading-10 font-[590] tracking-tight text-paper"
			>
				Add a topic
			</h2>
			<form
				className="grid gap-4"
				aria-labelledby="add-topic-heading"
				onSubmit={handleSubmit}
			>
				<div>
					<label
						className="mb-1 block text-lg leading-6 font-medium"
						htmlFor="topic-title"
					>
						Title
					</label>
					<input
						className="field"
						id="topic-title"
						name="title"
						type="text"
						placeholder="What are you learning?"
						value={title}
						onChange={(event) => {
							setTitle(event.target.value);
							setError(null);
							setFormStatus("typing");
						}}
					/>
				</div>
				<div>
					<label
						className="mb-1 block text-lg leading-6 font-medium"
						htmlFor="topic-note"
					>
						Note
					</label>
					<textarea
						className="field block min-h-24 resize-y"
						id="topic-note"
						name="note"
						rows="3"
						placeholder="Add a short note..."
						value={note}
						onChange={(event) => {
							setNote(event.target.value);
							setFormStatus("typing");
						}}
					/>
				</div>
				<div>
					<label
						className="mb-1 block text-lg leading-6 font-medium"
						htmlFor="topic-status"
					>
						Status
					</label>
					<div className="relative">
						<select
							className="field appearance-none pr-12"
							id="topic-status"
							name="status"
							value={status}
							onChange={(event) => {
								setStatus(event.target.value);
								setFormStatus("typing");
							}}
						>
							<StatusOptions />
						</select>
						<ChevronIcon />
					</div>
				</div>
				<button
					className="mt-2 flex min-h-12 items-center justify-center gap-2 rounded-md bg-acid px-4 py-3 text-lg font-[590] text-void hover:bg-[#edf76b]"
					type="submit"
				>
					<PlusIcon />
					Add topic
				</button>

				{error && (
					<p role="alert" className="text-red-400">
						{error}
					</p>
				)}
				{formStatus === "success" && (
					<p role="status" className="text-fog">
						Topic added
					</p>
				)}
			</form>
		</section>
	);
}
