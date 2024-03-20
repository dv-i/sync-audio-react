import React from "react";
export default function Example(): JSX.Element {
	return (
		<div className="bg-white py-16 sm:py-24 sm:pb-0">
			<div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="relative overflow-hidden bg-gray-900 px-6 py-20 shadow-xl sm:rounded-3xl sm:px-10 sm:py-24 md:px-12 lg:px-20">
					<img
						className="absolute inset-0 h-full w-full object-cover brightness-150 saturate-0"
						src="https://plus.unsplash.com/premium_photo-1683140707316-42df87760f3f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt=""
					/>
					<div className="absolute inset-0 bg-gray-900/90 mix-blend-multiply" />
					<div
						className="absolute -left-80 -top-56 transform-gpu blur-3xl"
						aria-hidden="true"
					>
						<div
							className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#0956B6] to-[#60A5FA] opacity-[0.45]"
							style={{
								clipPath:
									"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
							}}
						/>
					</div>
					<div
						className="hidden md:absolute md:bottom-16 md:left-[50rem] md:block md:transform-gpu md:blur-3xl"
						aria-hidden="true"
					>
						<div
							className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#0956B6] to-[#60A5FA] opacity-25"
							style={{
								clipPath:
									"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
							}}
						/>
					</div>
					<div className="relative mx-auto max-w-2xl lg:mx-0">
						<figure>
							<blockquote className="mt-6 text-lg font-semibold text-white sm:text-xl sm:leading-8">
								<p>“Want Freedom... from Subscription”.</p>
								{/* <p>
									License a bundle of 5 tracks at 10% discount
									for online distribution: Pay for what you
									need when you need it.
								</p> */}
							</blockquote>
							<figcaption className="mt-6 text-base text-white">
								<div className="font-semibold">
									License a bundle of 5 tracks at 10% discount
									for online distribution: Pay for what you
									need when you need it.
								</div>
								{/* <div className="mt-1">CEO of Workcation</div> */}
							</figcaption>
						</figure>
					</div>
				</div>
			</div>
		</div>
	);
}
