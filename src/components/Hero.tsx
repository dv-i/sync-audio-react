import React from "react";
import FeatruredArtists from "./FeatruredArtists";
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
											"https://plus.unsplash.com/premium_photo-1661720477446-429093480ad7?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
										}
									/>
									<div className="absolute inset-0 bg-blue-700 mix-blend-multiply" />
								</div>
								<div className="relative px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
									<h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
										<span className="block text-white">
											Music Licensing for
										</span>
										<span className="block text-blue-200">
											New Media, Video And Film
										</span>
									</h1>
									<p className="mx-auto mt-6 max-w-lg text-center text-xl text-blue-200 sm:max-w-3xl">
										Representing real unsigned independent
										artists, musicians, composers, poets and
										bands
									</p>
									<div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
										<div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
											<a
												href="#"
												className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-blue-700 shadow-sm hover:bg-blue-50 sm:px-8"
											>
												Get started
											</a>
											<a
												href="#"
												className="flex items-center justify-center rounded-md border border-transparent bg-blue-500 bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8"
											>
												Live demo
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Featured Artists */}
					<FeatruredArtists />
				</div>
			</main>
		</div>
	);
}
