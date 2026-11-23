import ChevronIcon from "../icons/ChevronIcon/ChevronIcon.jsx";
import DeleteIcon from "../icons/DeleteIcon/DeleteIcon.jsx";
import EditIcon from "../icons/EditIcon/EditIcon.jsx";
import StatusOptions from "../StatusOptions/StatusOptions.jsx";

export default function Topic({
	id,
	title,
	note,
	status,
	handleDelete,
	handleStatusChange,
}) {
	const statusId = `topic-${id}-status`;
	const titleId = `topic-${id}-title`;

	return (
		<article
			className="panel px-5 py-5 sm:px-7 sm:py-5"
			aria-labelledby={titleId}
		>
			<div className="flex items-start justify-between gap-4">
				<div className="min-w-0">
					<h3
						id={titleId}
						className="text-xl leading-8 font-[590] tracking-tight text-paper xl:text-[26px]"
					>
						{title}
					</h3>
					<p className="mt-1 text-base leading-6 text-fog xl:text-lg">{note}</p>
				</div>
				<div className="flex shrink-0 gap-2.5">
					<button
						className="icon-button"
						type="button"
						aria-label={`Edit ${title}`}
					>
						<EditIcon />
					</button>
					<button
						className="icon-button"
						type="button"
						aria-label={`Delete ${title}`}
						onClick={() => handleDelete(id)}
					>
						<DeleteIcon />
					</button>
				</div>
			</div>
			<div className="relative mt-6 w-full sm:w-81">
				<label className="sr-only" htmlFor={statusId}>
					Status for {title}
				</label>
				<select
					className="field min-h-11 appearance-none bg-carbon pr-12 sm:min-w-67"
					id={statusId}
					name={statusId}
					value={status}
					onChange={(event) => handleStatusChange(id, event.target.value)}
				>
					<StatusOptions />
				</select>
				<ChevronIcon />
			</div>
		</article>
	);
}
