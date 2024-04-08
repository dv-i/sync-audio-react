import React from "react";
import { type JSX } from "react/jsx-runtime";

const stats = [
	{ label: "Music Library", value: "100+" },
	{ label: "Assets under holding", value: "$12,000" },
	{ label: "New artists annualy", value: "25" },
];

export default function Example(): JSX.Element {
	return (
		<div className="bg-white">
			<main className="isolate">
				{/* Hero section */}
				<div className="relative isolate -z-10">
					<svg className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]" aria-hidden="true">
						<defs>
							<pattern id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84" width={200} height={200} x="50%" y={-1} patternUnits="userSpaceOnUse">
								<path d="M.5 200V.5H200" fill="none" />
							</pattern>
						</defs>
						<svg x="50%" y={-1} className="overflow-visible fill-gray-50">
							<path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" strokeWidth={0} />
						</svg>
						<rect width="100%" height="100%" strokeWidth={0} fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
					</svg>
					<div className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48" aria-hidden="true">
						<div
							className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
							style={{
								clipPath:
									"polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
							}}
						/>
					</div>
					<div className="overflow-hidden">
						<div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
							<div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
								<div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
									<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">We’re changing the way people listen to ♬</h1>
									<p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">Sync-Audio’s team represents the finest music from emerging unsigned, Independent creators.</p>
									<p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
										Our platform was built on discovery where creative filmmakers can find fresh original songs/tracks for their project. We supply quality that’s accessible, affordable, without
										copyright issues.
									</p>
									{/* Content section */}
									<div className="mx-auto mb-12 max-w-7xl sm:mt-0 pt-32  xl:-mt-8">
										<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
											<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our mission</h2>
											<div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
												<div className="lg:w-full lg:max-w-2xl lg:flex-auto">
													<p className="text-xl leading-8 text-gray-600">
														Sync-Audio was launched by music industry veteran Tesley Francis (alias T J Phillips). His own experience taught him the importance of protecting his content and
														maintaining an artistic independence.
													</p>
													<p className="mt-4 text-xl leading-8 text-gray-600">
														At Sync-Audio we are passionate about music and its crucial role in our lives. Our goal is to provide a fair revenue platform for independent artists and outstanding
														content to our clients.
													</p>
													<p className="mt-4 text-xl leading-8 text-gray-600">
														Sync-Audio is also the only platform we know that promotes poetry recordings for licensing across various media industries.
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
									<div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
										<div className="relative">
											<img
												src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
												alt=""
												className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
											/>
											<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
										</div>
									</div>
									<div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
										<div className="relative">
											<img
												src="https://images.unsplash.com/photo-1526394931762-90052e97b376?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
												alt=""
												className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
											/>
											<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
										</div>
										<div className="relative">
											<img
												src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
												alt=""
												className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
											/>
											<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
										</div>
									</div>
									<div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
										<div className="relative">
											<img
												src="https://images.unsplash.com/photo-1484876065684-b683cf17d276?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
												alt=""
												className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
											/>
											<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
										</div>
										<div className="relative">
											<img
												src="https://plus.unsplash.com/premium_photo-1664699106229-1bc773380c35?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
												alt=""
												className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
											/>
											<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Content section */}
				{/* <div className="mx-auto -mt-12 mb-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
					<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Our mission
						</h2>
						<div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
							<div className="lg:w-full lg:max-w-2xl lg:flex-auto">
								<p className="text-xl leading-8 text-gray-600">
									Sync-Audio was launched by music industry
									veteran Tesley Francis (alias T J Phillips).
									His own experience taught him the importance
									of protecting his content and maintaining an
									artistic independence.
								</p>
								<p className="mt-4 text-xl leading-8 text-gray-600">
									At Sync-Audio we are passionate about music
									and its crucial role in our lives. Our goal
									is to provide a fair revenue platform for
									independent artists and outstanding content
									to our clients.
								</p>
								<p className="mt-4 text-xl leading-8 text-gray-600">
									Sync-Audio is also the only platform we know
									that promotes poetry recordings for
									licensing across various media industries.
								</p>
							</div>
						</div>
					</div>
				</div> */}
			</main>
		</div>
	);
}
