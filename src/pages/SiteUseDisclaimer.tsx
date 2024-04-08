import React from "react";
function SiteUseDisclaimer(): JSX.Element {
	return (
		<div className="relative isolate">
			<div className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48" aria-hidden="true">
				<div
					className="aspect-[801/1036] w-[30.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
					style={{
						clipPath:
							"polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
					}}
				></div>
			</div>

			{/* Title */}
			<div className="px-4 sm:px-6 lg:px-8">
				<div className="relative mx-auto max-w-[37.5rem] pt-20 text-center pb-24">
					<h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">Site Use Disclaimer</h1>
					<p className="mt-4 text-base leading-7 text-slate-600">Last updated on March 1, 2024</p>
				</div>
			</div>

			{/* Content */}
			<div className="relative px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-[40rem] prose-sm prose prose-slate prose-a:font-semibold prose-a:text-sky-500 hover:prose-a:text-sky-600">
					<p className="text-slate-400 text-sm mb-10">
						Please note that by pressing the “I accept” button at the end of the agreement you confirm to Sync-Audio that you have read the terms and conditions of the agreement its associated
						schedules applicable to the service you are purchasing from the site. This will also apply to users submitting tracks into the Sync-Audio library.
					</p>

					<p className="text-slate-400 text-sm mb-10">
						The licensee shall not be liable for any direct, indirect, incidental, special, exemplary, or consequential damages or loss of data, during the submission or download process as licensor
						submitting tracks into the audio library you are fully responsible to hold originals, masters, and copies of the “tracks” submitted.
					</p>

					<p className="text-slate-400 text-sm mb-20">
						On entering the agreement the licensee is free from any third party claims to ownership rights, proceeds or profits pertaining to tracks submitted on the basis that the licensor upon
						submission of tracks satisfied the submission criteria that the tracks submitted were free from such claims.
					</p>
				</div>
			</div>
		</div>
	);
}

export default SiteUseDisclaimer;
