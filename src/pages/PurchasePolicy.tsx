import React from "react";
function PurchasePolicy(): JSX.Element {
	return (
		<div className="relative isolate">
			<div
				className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
				aria-hidden="true"
			>
				<div
					className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
					style={{
						clipPath:
							"polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
					}}
				></div>
			</div>

			{/* Title */}
			<div className="px-4 sm:px-6 lg:px-8">
				<div className="relative mx-auto max-w-[37.5rem] pt-20 text-center pb-24">
					<h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
						Purchase policy
					</h1>
					<p className="mt-4 text-base leading-7 text-slate-600">
						Last updated on March 1, 2024
					</p>
				</div>
			</div>

			{/* Content */}
			<div className="relative px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-[40rem] prose-sm prose prose-slate prose-a:font-semibold prose-a:text-sky-500 hover:prose-a:text-sky-600">
					<p className="text-slate-400 text-sm mb-10">
						Sync-Audio operates a 30-day policy replacement on
						faulty purchases made from the Sync-Audio library
						whether as downloads or licence packages sold to you as
						a personal, business or commercial user.
					</p>

					<p className="text-slate-400 text-sm mb-10">
						Sync-Audio will only consider any purchase as refundable
						where there is a bonafide technical fault with the
						product purchased from the Sync-Audio library and it is
						verified to be at fault by the Sync-Audio technical
						support team.
					</p>

					<p className="text-slate-400 text-sm mb-10">
						Product prices may change at any time. Sync-Audio does
						not provide price protection or refunds in the event of
						a price reduction or promotional offering. All payment
						fees are final. No refunds will be given except in
						Sync-Audio's sole and absolute discretion.
					</p>

					<p className="text-slate-400 text-sm mb-10">
						All users of Sync-Audio download products and licence
						packages are reminded that you are responsible to read
						the terms and conditions of the policies and agreements
						before activating the “I accept” button at the final
						stage of your transaction.
					</p>

					<p className="text-slate-400 text-sm mb-20">
						Users must make any complaints of unsatisfactory
						services to the following email address:&nbsp;
						<a
							href="mailto:info@sync-audio.com"
							className="text-indigo-600"
						>
							info@sync-audio.com
						</a>
						.
					</p>
				</div>
			</div>
		</div>
	);
}

export default PurchasePolicy;
