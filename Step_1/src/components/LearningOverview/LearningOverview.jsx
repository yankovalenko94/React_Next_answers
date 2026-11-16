export default function LearningOverview() {
	return (
		<section
			className="panel px-6 pt-4 pb-5"
			aria-labelledby="overview-heading"
		>
			<h2
				id="overview-heading"
				className="text-[30px] leading-10 font-[590] tracking-tight text-paper"
			>
				Learning overview
			</h2>
			<dl>
				<div className="flex items-center gap-6 border-b border-smoke pt-4 pb-3">
					<dt className="order-2 text-lg">Total topics</dt>
					<dd className="text-[52px] leading-[1.3] font-[590] text-paper">3</dd>
				</div>
				<div className="flex items-center justify-between gap-4 border-b border-smoke py-2 text-base leading-6 xl:text-lg">
					<dt>Not understood</dt>
					<dd>0</dd>
				</div>
				<div className="flex items-center justify-between gap-4 border-b border-smoke py-2 text-base leading-6 xl:text-lg">
					<dt>Theoretical understanding</dt>
					<dd>1</dd>
				</div>
				<div className="flex items-center justify-between gap-4 border-b border-smoke py-2 text-base leading-6 xl:text-lg">
					<dt>Practical understanding</dt>
					<dd>0</dd>
				</div>
				<div className="flex items-center justify-between gap-4 pt-2 text-base leading-6 xl:text-lg">
					<dt>Fully learned</dt>
					<dd>2</dd>
				</div>
			</dl>
		</section>
	);
}
