import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
	{
		question: "Sync-Audio Bundle use?",
		answer: "Sync-Audio bundle use offers you an online music distribution at a competitive rate. Your licenses are perpetual (forever) and provide worldwide rights for users.",
	},
	{
		question: "Is Bundle use right for me?",
		answer:
			"If you don’t want to be locked-in to a subscription year on year this is the plan for you. Are you consistently creating visual/audio works that need music, or if you’re working on a production that requires a relative amount of music, “Bundle use” is right for you! It includes monetization rights, for flexibility and affordability for purchase.",
	},
	{
		question: "How does the Bundle use work?",
		answer:
			"Every time you choose the “bundle use” you’ve chosen to purchase 5 tracks at a discount rate of 10% (from Personal/Business category) to obtain what you want when you need it. No Fuss, No Subscription. This does not include commercial rights.",
	},
	{
		question: "Can I use the same track in multiple projects?",
		answer: "All tracks that you license is “single use only” meaning that you’ll need separate licenses if you wish to use a single track in multiple and separate audio/visual works;",
	},
	{
		question: "I need wider rights other than what’s covered in my Bundle use?",
		answer: "As a Sync-Audio user, you are welcome to use our commercial use rates for a wider rights coverage, or email or team info@sync-audio.com for further assistance.",
	},
	{
		question: "Can my Bundle be used for TV?",
		answer: "No,  Bundle licenses are normally suitable for online distribution (the web). If you’re interested in Broadcasting rights, Go to Commercial use.",
	},
	{
		question: "How often do you add new songs to your library?",
		answer: "We add new songs every single week.",
	},
	{
		question: "Why is the price for a single track almost the same as a Bundle use?",
		answer:
			"We believe in loyalty. When you use content from our artists consistently they make more than they would from a single-use one-time license. So, if the Artists don’t make money they can’t do what they do best.",
	},

	// More questions...
];

export default function Example(): JSX.Element {
	return (
		<div className="bg-white">
			<div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
				<div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
					<h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Bundle Use</h2>
					<dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
						{faqs.map((faq) => (
							<Disclosure as="div" key={faq.question} className="pt-6">
								{({ open }) => (
									<>
										<dt>
											<Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
												<span className="text-base font-semibold leading-7">{faq.question}</span>
												<span className="ml-6 flex h-7 items-center">
													{open ? <MinusSmallIcon className="h-6 w-6" aria-hidden="true" /> : <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />}
												</span>
											</Disclosure.Button>
										</dt>
										<Disclosure.Panel as="dd" className="mt-2 pr-12">
											<p className="text-base leading-7 text-gray-600">{faq.answer}</p>
										</Disclosure.Panel>
									</>
								)}
							</Disclosure>
						))}
					</dl>
				</div>
			</div>
		</div>
	);
}
