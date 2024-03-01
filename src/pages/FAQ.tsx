const faqs = [
	{
		question: "Why should I create a user account?",
		answer: "Sync-Audio user account gives you access to preferences to express, create and download your choice of music for your project, including your licence on receipt. In return it allows us to retain user history. Your account remembers your contact details, play history and purchases to continually optimize your preferences to meet your needs.",
	},
	{
		question: "What is a music license?",
		answer: "A music licence allows you to use the artist music for your film, video or new media, even if the film or video/new media is for personal use, business use and non-profit use. A licence gives you the legal permission to use the artist music for your project.",
	},
	{
		question: "What is the license type?",
		answer: "Sync-Audio grants you a non-exclusive licence. All of our licence is valued for perpetuity of the film, video and new media that it was used in.",
	},
	{
		question: "What kind of file will i be able to download?",
		answer: "You can download your purchases as WAV or MP3 files.",
	},
	{
		question: "What does a Single Use license mean?",
		answer: "A single use license means the song/track can only be used once. 1 song/track synced to one edit of one video. It does not include cutdowns, edits, lifts, versions unless specified (separate licences would be required).",
	},
	{
		question: "What about Commericial license requests? ",
		answer: "Get your commercial licence quotes instantly.",
	},
	{
		question: "Who is the End Client?",
		answer: "The end client is the company the project is for. The end client is whom the project is promoting.",
	},
	// More questions...
];

export default function Example(): JSX.Element {
	return (
		<div className="bg-white">
			<div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
				<div className="lg:grid lg:grid-cols-12 lg:gap-8">
					<div className="lg:col-span-5">
						<h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
							Frequently asked questions
						</h2>
						<p className="mt-4 text-base leading-7 text-gray-600">
							Can’t find the answer you’re looking for? Reach out
							to our{" "}
							<a
								href="mailto:info@sync-audio.com"
								className="font-semibold text-indigo-600 hover:text-indigo-500"
							>
								customer support
							</a>{" "}
							team.
						</p>
					</div>
					<div className="mt-10 lg:col-span-7 lg:mt-0">
						<dl className="space-y-10">
							{faqs.map((faq) => (
								<div key={faq.question}>
									<dt className="text-base font-semibold leading-7 text-gray-900">
										{faq.question}
									</dt>
									<dd className="mt-2 text-base leading-7 text-gray-600">
										{faq.answer}
									</dd>
								</div>
							))}
						</dl>
					</div>
				</div>
			</div>
		</div>
	);
}
