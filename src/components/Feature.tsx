import {
	GlobeEuropeAfricaIcon,
	SparklesIcon,
	MusicalNoteIcon,
} from "@heroicons/react/20/solid";

const features = [
	{
		name: "Tell your story",
		description:
			"Tell your story with real artists. Discover fresh original songs from independent creators for your story today!",
		href: "#",
		icon: MusicalNoteIcon,
	},
	{
		name: "Music Licensing",
		description:
			"Music licensing for videos films and new media. We have pricing options for your working projects",
		href: "#",
		icon: SparklesIcon,
	},
	{
		name: "Multiple Platforms",
		description:
			"Licensing music for multiple platforms. From YouTube, filmmakers to traditional broadcasting use, our music on any platform forever – everywhere.",
		href: "#",
		icon: GlobeEuropeAfricaIcon,
	},
];

export default function Example(): JSX.Element {
	return (
		<div className="bg-gray-900 py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:text-center">
					<h2 className="text-base font-semibold leading-7 text-indigo-400">
						Music reach like never before
					</h2>
					<p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
						Everything you need to deploy your music
					</p>
					<p className="mt-6 text-lg leading-8 text-gray-300">
						Quis tellus eget adipiscing convallis sit sit eget
						aliquet quis. Suspendisse eget egestas a elementum
						pulvinar et feugiat blandit at. In mi viverra elit nunc.
					</p>
				</div>
				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
					<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
						{features.map((feature) => (
							<div key={feature.name} className="flex flex-col">
								<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
									<feature.icon
										className="h-5 w-5 flex-none text-indigo-400"
										aria-hidden="true"
									/>
									{feature.name}
								</dt>
								<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
									<p className="flex-auto">
										{feature.description}
									</p>
								</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</div>
	);
}
