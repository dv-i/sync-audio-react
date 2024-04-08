export default function Example(): JSX.Element {
	return (
		<div className="relative py-24 sm:py-32">
			<div className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48" aria-hidden="true">
				<div
					className="aspect-[801/1036] w-[55.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
					style={{
						clipPath:
							"polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
					}}
				></div>
			</div>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
					<div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
						<div>
							<h2 className="text-3xl font-bold tracking-tight text-gray-900">Get in touch</h2>
							<p className="mt-4 leading-7 text-gray-600">Connect, Collaborate, Create: Get in Touch Today!</p>
						</div>
						<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
							<div className="rounded-2xl  p-10">
								<h3 className="text-base font-semibold leading-7 text-gray-900">Collaborate</h3>
								<dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
									<div>
										<dt className="sr-only">Email</dt>
										<dd>
											<a className="font-semibold text-blue-600" href="mailto:info@example.com">
												info@sync-audio.com
											</a>
										</dd>
									</div>
									<div className="mt-1">
										<dt className="sr-only">Phone number</dt>
										<dd>+44 (555) 905-2345</dd>
									</div>
								</dl>
							</div>
							<div className="rounded-2xl  p-10">
								<h3 className="text-base font-semibold leading-7 text-gray-900">Press</h3>
								<dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
									<div>
										<dt className="sr-only">Email</dt>
										<dd>
											<a className="font-semibold text-blue-600" href="mailto:press@sync-audio.com">
												press@sync-audio.com
											</a>
										</dd>
									</div>
									<div className="mt-1">
										<dt className="sr-only">Phone number</dt>
										<dd>+44 (555) 905-3456</dd>
									</div>
								</dl>
							</div>
						</div>
					</div>
					<div className="grid grid-cols-1 gap-x-8 gap-y-10 pt-16 lg:grid-cols-3">
						<div>
							<h2 className="text-3xl font-bold tracking-tight text-gray-900">Locations</h2>
							<p className="mt-4 leading-7 text-gray-600">Discover, Explore, and Find Your Way: Navigate to Your Next Location!</p>
						</div>
						<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
							<div className="rounded-2xl bg-gray-50 p-10">
								<h3 className="text-base font-semibold leading-7 text-gray-900">London</h3>
								<address className="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
									<p>124 City Road, London</p>
									<p>EC1V 2NX, UK</p>
								</address>
							</div>
							{/* <div className="rounded-2xl bg-gray-50 p-10">
								<h3 className="text-base font-semibold leading-7 text-gray-900">
									New York
								</h3>
								<address className="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
									<p>886 Walter Street</p>
									<p>New York, NY 12345</p>
								</address>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
