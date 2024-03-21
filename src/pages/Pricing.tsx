import { RadioGroup } from "@headlessui/react";
import {
	CheckCircleIcon,
	XCircleIcon,
	InformationCircleIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

function classNames(...classes: string[]): string {
	return classes.filter(Boolean).join(" ");
}

const pricingTypes = [
	{ value: "personal", label: "Personal" },
	{ value: "business", label: "Business" },
	{ value: "commercial", label: "Commercial" },
];

export default function Example(): JSX.Element {
	const [pricingType, setPricingType] = useState(pricingTypes[0]);

	return (
		<div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
			<div
				className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-10 blur-3xl"
				aria-hidden="true"
			>
				<div
					className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
					style={{
						clipPath:
							"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
					}}
				/>
			</div>
			<div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
				<h2 className="text-base font-semibold leading-7 text-blue-600">
					Pricing
				</h2>
				<p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
					The right price for you, whoever you are
				</p>
			</div>
			<p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
				The most extensive selection of carefully curated music at your
				fingertips at prices affordable now more than ever.
			</p>

			<div className="mt-16 flex justify-center">
				<RadioGroup
					value={pricingType}
					onChange={setPricingType}
					className="grid grid-cols-3 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-blue-500"
				>
					<RadioGroup.Label className="sr-only">
						Payment Pricing Type
					</RadioGroup.Label>
					{pricingTypes.map((option) => (
						<RadioGroup.Option
							key={option.value}
							value={option}
							className={({ checked }) =>
								classNames(
									checked
										? "bg-blue-600 text-white"
										: "text-gray-500",
									"cursor-pointer rounded-full px-2.5 py-1"
								)
							}
						>
							<span>{option.label}</span>
						</RadioGroup.Option>
					))}
				</RadioGroup>
			</div>

			{pricingType.value === "personal" && <PersonalPricing />}
			{pricingType.value === "commercial" && <CommercialPricing />}
			{pricingType.value === "business" && <BusinessPricing />}
		</div>
	);
}

function PersonalPricing(): JSX.Element {
	const tiers = [
		{
			name: "Home / Students",
			id: "tier-personal",
			href: "#",
			priceMonthly: "£18",
			description: "The perfect plan for personal use",
			features: [
				"For home/education videos, slideshows",
				"Can be shared on social networks",
				"Suitable for student assignments/projects",
			],
			info: ["For single (1) use only", "Perpetual license"],
			disclaimer: [
				"Not for branding, service, company, or organization.",
			],
			featured: true,
		},
	];

	return (
		<div className="mx-auto mt-16 flex justify-center max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-3">
			{tiers.map((tier, tierIdx) => (
				<div
					key={tier.id}
					className={classNames(
						tier.featured
							? "relative bg-white shadow-2xl"
							: "bg-white/60 sm:mx-8 lg:mx-0",
						tier.featured
							? ""
							: tierIdx === 0
							? "rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl"
							: "sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none",
						"rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10"
					)}
				>
					<h3
						id={tier.id}
						className="text-base font-semibold leading-7 text-blue-600"
					>
						{tier.name}
					</h3>
					<p className="mt-4 flex items-baseline gap-x-2">
						<span className="text-5xl font-bold tracking-tight text-gray-900">
							{tier.priceMonthly}
						</span>
						<span className="text-base text-gray-500">/ track</span>
					</p>
					<p className="mt-6 text-base leading-7 text-gray-600">
						{tier.description}
					</p>
					<ul
						role="list"
						className="mt-8 space-y-3 text-sm leading-6 text-gray-600 sm:mt-10"
					>
						{tier.features.map((feature) => (
							<li key={feature} className="flex gap-x-3">
								<CheckCircleIcon
									className="h-6 w-5 flex-none text-green-400"
									aria-hidden="true"
								/>
								{feature}
							</li>
						))}
					</ul>

					<ul
						role="list"
						className="mt-8 space-y-3 text-sm leading-6 text-gray-600 sm:mt-8"
					>
						{tier.info.map((feature) => (
							<li key={feature} className="flex gap-x-3">
								<InformationCircleIcon
									className="h-6 w-5 flex-none text-blue-600"
									aria-hidden="true"
								/>
								{feature}
							</li>
						))}
					</ul>

					<ul
						role="list"
						className="mt-8 space-y-3 text-sm leading-6 text-gray-600 sm:mt-8"
					>
						{tier.disclaimer.map((feature) => (
							<li key={feature} className="flex gap-x-3">
								<XCircleIcon
									className="h-6 w-5 flex-none text-red-400"
									aria-hidden="true"
								/>
								{feature}
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
}

function BusinessPricing(): JSX.Element {
	const tiers = [
		{
			name: "Wedding",
			id: "tier-team",
			href: "#",
			priceMonthly: "£35",
			description:
				"The perfect plan for the once in a lifetime event of your life",
			features: [
				"For wedding videos, slideshows, internal use, and online streaming",
				"Includes 15 resalable copies and 400 giveaways",
			],
			info: ["For single (1) use only", "Perpetual license"],
			disclaimer: [],
			mostPopular: false,
			featured: true,
		},
		{
			name: "Podcast",
			id: "tier-hobby",
			href: "#",
			price: "£209",
			description:
				"The essentials to provide your best work for clients.",
			features: [
				"Personal use",
				"Internal business / group / company use",
			],
			info: [
				"For single (1) podcast (series use), audio only",
				"Perpetual license",
			],
			disclaimer: [
				"Not for use within sponsored, branded podcasts",
				"Does not include paid subscription or downloads",
			],
			mostPopular: false,
			featured: true,
		},
		{
			name: "Promotional Content",
			id: "tier-enterprise",
			href: "#",
			price: "£259.99",
			optionBasedPrice: {
				"1-50": "£259.99",
				"51-250": "£359.99",
				"250+": "£500",
			},
			description:
				"Dedicated for multi national companies or big corporations",

			features: [
				"Project promoting product, brand, service, event, promotion, organization, or company",
				"Web stream or internally",
				"Facebook, YouTube, Vimeo, TikTok, Instagram, etc.",
			],
			info: ["For single (1) use only", "Perpetual license"],
			disclaimer: ["No broadcasting rights"],
			mostPopular: false,
			featured: true,
		},
	];
	const [companySize, setCompanySize] = useState("1-50");

	return (
		<div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-3">
			{tiers.map((tier, tierIdx) => (
				<div
					key={tier.id}
					className={
						"ring-2 ring-gray-200 bg-white/60 rounded-3xl p-8"
					}
				>
					<h3
						id={tier.id}
						className="text-base font-semibold leading-7 text-blue-600"
					>
						{tier.name}
					</h3>
					<p className="mt-6 flex items-baseline gap-x-1">
						<span className="text-4xl font-bold tracking-tight text-gray-900">
							{tier.name === "Promotional Content"
								? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
								  // @ts-expect-error
								  tier.optionBasedPrice[companySize]
								: tier.priceMonthly ?? tier.price}
						</span>
						<span className="text-sm font-semibold leading-6 text-gray-600">
							/ track
						</span>
					</p>
					<p className="mt-6 text-base leading-7 text-gray-600">
						{tier.description}
					</p>

					<div
						className={`mt-4 flex justify-left ${
							tier.name === "Promotional Content"
								? "visible"
								: "invisible"
						}`}
					>
						{tier.name === "Promotional Content" && (
							<div>
								<span className="isolate block text-gray-500 text-sm font-semibold mb-1">
									Usage Type
								</span>
								<span className="isolate inline-flex rounded-md shadow-sm">
									<button
										type="button"
										className={`relative inline-flex items-center rounded-l-md px-3 py-1 text-sm font-semibold  ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 ${
											companySize === "1-50"
												? "text-white bg-blue-500 "
												: "bg-white text-gray-900"
										}`}
										onClick={() => {
											setCompanySize("1-50");
										}}
									>
										1-50
									</button>

									<button
										type="button"
										className={`relative inline-flex items-center rounded-l-md px-3 py-1 text-sm font-semibold  ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 ${
											companySize === "51-250"
												? "text-white bg-blue-500 "
												: "bg-white text-gray-900"
										}`}
										onClick={() => {
											setCompanySize("51-250");
										}}
									>
										51-250
									</button>
									<button
										type="button"
										className={`relative inline-flex items-center rounded-l-md px-3 py-1 text-sm font-semibold  ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 ${
											companySize === "250+"
												? "text-white bg-blue-500 "
												: "bg-white text-gray-900"
										}`}
										onClick={() => {
											setCompanySize("250+");
										}}
									>
										250+
									</button>
								</span>
							</div>
						)}
						{!["Promotional Content"].includes(tier.name) && (
							<div className="block" style={{ height: 28 }}>
								{" "}
							</div>
						)}
					</div>

					<ul
						role="list"
						className="mt-8 space-y-3 text-sm leading-6 text-gray-600 sm:mt-10"
					>
						{tier.features.map((feature) => (
							<li key={feature} className="flex gap-x-3">
								<CheckCircleIcon
									className="h-6 w-5 flex-none text-green-400"
									aria-hidden="true"
								/>
								{feature}
							</li>
						))}
					</ul>

					<ul
						role="list"
						className="mt-8 space-y-3 text-sm leading-6 text-gray-600 sm:mt-8"
					>
						{tier.info.map((feature) => (
							<li key={feature} className="flex gap-x-3">
								<InformationCircleIcon
									className="h-6 w-5 flex-none text-blue-600"
									aria-hidden="true"
								/>
								{feature}
							</li>
						))}
					</ul>

					<ul
						role="list"
						className="mt-8 space-y-3 text-sm leading-6 text-gray-600 sm:mt-8"
					>
						{tier.disclaimer.map((feature) => (
							<li key={feature} className="flex gap-x-3">
								<XCircleIcon
									className="h-6 w-5 flex-none text-red-400"
									aria-hidden="true"
								/>
								{feature}
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
}

function CommercialPricing(): JSX.Element {
	const tiers = [
		{
			name: "Indie Cinema",
			id: "tier-freelancer",
			href: "#",
			price: "$30",
			optionBasedPrice: {
				Film: "£160",
				Trailer: "£260",
			},
			description:
				"The essentials to provide your best work for clients.",
			features: [
				"Budget up to £500k",
				"Web streaming sites, tradeshows and festival entry",
				"YouTube, Facebook etc.",
			],
			info: ["For single (1) use only", "Perpetual license"],
			disclaimer: [
				"Does not include broadcasting rights or paid advertising",
			],
			mostPopular: false,
		},

		{
			name: "Vloggers",
			id: "tier-startup",
			href: "#",
			price: "£29.99",
			description:
				"A plan that scales with your rapidly growing business.",
			features: [
				"Vlogger / Blogger log",
				"Hosted online, sefl-financed",
				"Upto 300K page views monetization",
				"Youtube, Facebook, etc.",
			],
			info: ["For single (1) use only", "Perpetual license"],
			disclaimer: [
				"Not for paid advertising",
				"Not for promotions of product, service, brand",
			],
			mostPopular: true,
		},
	];

	const [indieType, setindieType] = useState("Film");

	return (
		<div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
			<div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-3 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-2">
				{tiers.map((tier) => (
					<div
						key={tier.id}
						className={classNames(
							"ring-2 ring-gray-200 bg-white/60 rounded-3xl p-8"
						)}
					>
						<h3
							id={tier.id}
							className={classNames(
								"text-gray-900 text-lg font-semibold leading-8"
							)}
						>
							{tier.name}
						</h3>

						<p className="mt-6 flex items-baseline gap-x-1">
							<span className="text-4xl font-bold tracking-tight text-gray-900">
								{tier.name === "Indie Cinema"
									? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
									  // @ts-expect-error
									  tier.optionBasedPrice[indieType]
									: tier.price}
							</span>
							<span className="text-sm font-semibold leading-6 text-gray-600">
								/ track
							</span>
						</p>
						<p className="mt-4 text-sm leading-6 text-gray-600">
							{tier.description}
						</p>

						<div
							className={`mt-4 flex justify-left ${
								tier.name === "Indie Cinema"
									? "visible"
									: "invisible"
							}`}
						>
							{tier.name === "Indie Cinema" && (
								<div>
									<span className="isolate block text-gray-500 text-sm font-semibold mb-1">
										Usage Type
									</span>
									<span className="isolate inline-flex rounded-md shadow-sm">
										<button
											type="button"
											className={`relative inline-flex items-center rounded-l-md px-3 py-1 text-sm font-semibold  ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 ${
												indieType === "Film"
													? "text-white bg-blue-500 "
													: "bg-white text-gray-900"
											}`}
											onClick={() => {
												setindieType("Film");
											}}
										>
											Film
										</button>

										<button
											type="button"
											className={`relative inline-flex items-center rounded-r-md px-3 py-1 text-sm font-semibold  ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 ${
												indieType === "Trailer"
													? "text-white bg-blue-500 "
													: "bg-white text-gray-900"
											}`}
											onClick={() => {
												setindieType("Trailer");
											}}
										>
											Trailer
										</button>
									</span>
								</div>
							)}
							{!["Indie Cinema"].includes(tier.name) && (
								<div className="block" style={{ height: 28 }}>
									{" "}
								</div>
							)}
						</div>

						<ul
							role="list"
							className="mt-8 space-y-3 text-sm leading-6 text-gray-600 sm:mt-8"
						>
							{tier.features.map((feature) => (
								<li key={feature} className="flex gap-x-3">
									<CheckCircleIcon
										className="h-6 w-5 flex-none text-green-400"
										aria-hidden="true"
									/>
									{feature}
								</li>
							))}
						</ul>

						<ul
							role="list"
							className="mt-8 space-y-3 text-sm leading-6 text-gray-600 sm:mt-8"
						>
							{tier.info.map((feature) => (
								<li key={feature} className="flex gap-x-3">
									<InformationCircleIcon
										className="h-6 w-5 flex-none text-blue-600"
										aria-hidden="true"
									/>
									{feature}
								</li>
							))}
						</ul>

						<ul
							role="list"
							className="mt-8 space-y-3 text-sm leading-6 text-gray-600 sm:mt-8"
						>
							{tier.disclaimer.map((feature) => (
								<li key={feature} className="flex gap-x-3">
									<XCircleIcon
										className="h-6 w-5 flex-none text-red-400"
										aria-hidden="true"
									/>
									{feature}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
}
