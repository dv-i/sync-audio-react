import React from "react";
export default function Example(): JSX.Element {
	return (
		<div className="bg-white">
			<main>
				<div>
					{/* Hero card */}
					<div className="relative">
						<div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
						<div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
							<div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
								<div className="absolute inset-0">
									{/* <video
										className="h-full w-full object-cover"
										src={"assets/videos/intro_video.mp4"}
										loop
										autoPlay
										muted
										controls={false}
									/> */}
									<img
										className="h-full w-full object-cover"
										src={
											"https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
										}
									/>
									<div className="absolute inset-0 bg-indigo-700 mix-blend-multiply" />
								</div>
								<div className="relative px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
									<h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
										<span className="block text-white">
											Music Licensing for
										</span>
										<span className="block text-indigo-200">
											New Media, Video And Film
										</span>
									</h1>
									<p className="mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl">
										Representing real unsigned independent
										artists, musicians, composers, poets and
										bands
									</p>
									<div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
										<div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
											<a
												href="#"
												className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-indigo-700 shadow-sm hover:bg-indigo-50 sm:px-8"
											>
												Get started
											</a>
											<a
												href="#"
												className="flex items-center justify-center rounded-md border border-transparent bg-indigo-500 bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8"
											>
												Live demo
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Logo cloud */}
					<div className="bg-gray-100">
						<div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
							<p className="text-center text-base font-semibold text-gray-500">
								Trusted by several companies using our music
							</p>
							<div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
								<div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
									<img
										className="h-12"
										src="assets/images/bbc-logo.png"
										alt="Tuple"
									/>
								</div>
								<div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
									<img
										className="h-12"
										src="assets/images/apple-logo.png"
										alt="Mirage"
									/>
								</div>
								<div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
									<img
										className="h-12"
										src="assets/images/mobo-logo.png"
										alt="StaticKit"
									/>
								</div>
								<div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
									<img
										className="h-12"
										src="assets/images/mtv-logo.png"
										alt="Transistor"
									/>
								</div>
								<div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
									<img
										className="h-12"
										src="assets/images/cancer-gray-logo.png"
										alt="Workcation"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
