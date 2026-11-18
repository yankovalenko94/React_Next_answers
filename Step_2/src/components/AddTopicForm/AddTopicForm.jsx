import ChevronIcon from "../icons/ChevronIcon/ChevronIcon.jsx";
import PlusIcon from "../icons/PlusIcon/PlusIcon.jsx";
import StatusOptions from "../StatusOptions/StatusOptions.jsx";

export default function AddTopicForm() {
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
			<form className="grid gap-4" aria-labelledby="add-topic-heading">
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
							defaultValue="not-understood"
						>
							<StatusOptions />
						</select>
						<ChevronIcon />
					</div>
				</div>
				<button
					className="mt-2 flex min-h-12 items-center justify-center gap-2 rounded-md bg-acid px-4 py-3 text-lg font-[590] text-void hover:bg-[#edf76b]"
					type="button"
				>
					<PlusIcon />
					Add topic
				</button>
			</form>
		</section>
	);
}
