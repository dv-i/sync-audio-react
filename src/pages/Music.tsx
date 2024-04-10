import React, { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Popover, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function Music(): JSX.Element {
	return (
		<>
			<PromoSection />
			<CategoryFilter />
			<div className="mt-20"></div>
		</>
	);
}

export default Music;

const incentives = [
	{
		name: "Instant Access",
		description: "Get access to your audio blazing fast as soon as you check out.",
		imageSrc: "https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg",
	},
	{
		name: "24/7 Customer Support",
		description: "Our team is always here to support.",
		imageSrc: "https://tailwindui.com/img/ecommerce/icons/icon-chat-light.svg",
	},
	{
		name: "Fast Shopping Cart",
		description: "Look how fast that cart is going. Pick the audio, the license and you're 99% done with everything",
		imageSrc: "https://tailwindui.com/img/ecommerce/icons/icon-fast-checkout-light.svg",
	},
];

function PromoSection(): JSX.Element {
	return (
		<div className="bg-gray-50">
			<div className="mx-auto max-w-7xl py-12 sm:px-2 sm:py-20 lg:px-4">
				<div className="mx-auto max-w-2xl px-4 lg:max-w-none">
					<div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
						<div>
							<h2 className="text-4xl font-bold tracking-tight text-gray-900">Unlock the Soundtrack to Your Creativity</h2>
							<p className="mt-4 text-gray-500">
								Discover endless possibilities with our premium audio licenses. Elevate your projects with ease, whether you're a creator, filmmaker, or business owner. Explore, license, and unlock
								the power of sound today.
							</p>
						</div>
						<div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100">
							<img
								src="https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
								alt=""
								className="object-cover object-center"
							/>
						</div>
					</div>
					<div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
						{incentives.map((incentive) => (
							<div key={incentive.name} className="sm:flex lg:block">
								<div className="sm:flex-shrink-0">
									<img className="h-16 w-16" src={incentive.imageSrc} alt="" />
								</div>
								<div className="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
									<h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
									<p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

const sortOptions = [
	{ name: "Most Popular", href: "#", current: true },
	{ name: "Best Rating", href: "#", current: false },
	{ name: "Newest", href: "#", current: false },
];

// const activeFilters = [{ value: "objects", label: "Objects" }];

function classNames(...classes: string[]): string {
	return classes.filter(Boolean).join(" ");
}

function CategoryFilter(): JSX.Element {
	const [open, setOpen] = useState(false);

	const [filters, setFilters] = useState([
		{
			id: "Genre",
			name: "Genre",

			options: [
				{ value: "African", label: "African", checked: false },
				{ value: "Asian", label: "Asian", checked: false },
				{ value: "Blues", label: "Blues", checked: false },
				{ value: "Classical", label: "Classical", checked: false },
				{ value: "Country", label: "Country", checked: false },
				{ value: "Electronic", label: "Electronic", checked: false },
				{
					value: "Experimental",
					label: "Experimental",
					checked: false,
				},
				{
					value: "Film TV Music",
					label: "Film TV Music",
					checked: false,
				},
				{ value: "Funk", label: "Funk", checked: false },
				{
					value: "Hip Hop - Rap",
					label: "Hip Hop - Rap",
					checked: false,
				},
				{ value: "House", label: "House", checked: false },
				{ value: "Incidental", label: "Incidental", checked: false },
				{ value: "Indie", label: "Indie", checked: false },
				{ value: "Jazz", label: "Jazz", checked: false },
				{ value: "Latin", label: "Latin", checked: false },
				{ value: "Pop", label: "Pop", checked: false },
				{ value: "R&B", label: "R&B", checked: false },
				{ value: "Reggae", label: "Reggae", checked: false },
				{ value: "Rock", label: "Rock", checked: false },
				{ value: "Soul", label: "Soul", checked: false },
				{ value: "World", label: "World", checked: false },
			],
		},
		{
			id: "Mood",
			name: "Mood",
			options: [
				{
					value: "Angry / Aggressive",
					label: "Angry / Aggressive",
					checked: false,
				},
				{ value: "Carefree", label: "Carefree", checked: false },
				{
					value: "Chill / Laid back",
					label: "Chill / Laid back",
					checked: false,
				},
				{ value: "Comical", label: "Comical", checked: false },
				{ value: "Dramatic", label: "Dramatic", checked: false },
				{ value: "Ecstatic", label: "Ecstatic", checked: false },
				{
					value: "Happy / uplifting",
					label: "Happy / uplifting",
					checked: false,
				},
				{
					value: "Inspirational",
					label: "Inspirational",
					checked: false,
				},
				{
					value: "Love / affection",
					label: "Love / affection",
					checked: false,
				},
				{ value: "Peaceful", label: "Peaceful", checked: false },
				{ value: "Quirky", label: "Quirky", checked: false },
				{
					value: "Sad / Melancholy",
					label: "Sad / Melancholy",
					checked: false,
				},
				{ value: "Scary", label: "Scary", checked: false },
				{
					value: "Sensual / sexy",
					label: "Sensual / sexy",
					checked: false,
				},
				{ value: "Somber", label: "Somber", checked: false },
			],
		},
		{
			id: "Style",
			name: "Style",
			options: [
				{
					value: "Music with vocals",
					label: "Music with vocals",
					checked: false,
				},
				{
					value: "Instrumental",
					label: "Instrumental",
					checked: false,
				},
				{ value: "Poetry", label: "Poetry", checked: false },
			],
		},
		{
			id: "Tempo",
			name: "Tempo",
			options: [
				{ value: "90–99 BPM", label: "90–99 BPM", checked: false },
				{ value: "100–109 BPM", label: "100–109 BPM", checked: false },
				{ value: "110–119 BPM", label: "110–119 BPM", checked: false },
				{ value: "120–129 BPM", label: "120–129 BPM", checked: false },
				{ value: "130–139 BPM", label: "130–139 BPM", checked: false },
				{ value: "140–149 BPM", label: "140–149 BPM", checked: false },
				{ value: "150–159 BPM", label: "150–159 BPM", checked: false },
				{ value: "160–169 BPM", label: "160–169 BPM", checked: false },
				{ value: "170–179 BPM", label: "170–179 BPM", checked: false },
				{ value: "180–189 BPM", label: "180–189 BPM", checked: false },
			],
		},
	]);

	const activeFilters: { value: string; label: string }[] = filters.flatMap((filter) => filter.options.filter((option) => option.checked));

	const handleRemoveFilter = (valueToRemove: string): void => {
		setFilters((prevFilters) =>
			prevFilters.map((filter) => ({
				...filter,
				options: filter.options.map((option) => (option.value === valueToRemove ? { ...option, checked: false } : option)),
			}))
		);
	};

	return (
		<div className="bg-white">
			{/* Mobile filter dialog */}
			<Transition.Root show={open} as={Fragment}>
				<Dialog as="div" className="relative z-40 sm:hidden" onClose={setOpen}>
					<Transition.Child
						as={Fragment}
						enter="transition-opacity ease-linear duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="transition-opacity ease-linear duration-300"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 z-40 flex">
						<Transition.Child
							as={Fragment}
							enter="transition ease-in-out duration-300 transform"
							enterFrom="translate-x-full"
							enterTo="translate-x-0"
							leave="transition ease-in-out duration-300 transform"
							leaveFrom="translate-x-0"
							leaveTo="translate-x-full"
						>
							<Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
								<div className="flex items-center justify-between px-4">
									<h2 className="text-lg font-medium text-gray-900">Filters</h2>
									<button
										type="button"
										className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400 "
										onClick={() => {
											setOpen(false);
										}}
									>
										<span className="sr-only">Close menu</span>
										<XMarkIcon className="h-6 w-6" aria-hidden="true" />
									</button>
								</div>

								{/* Filters */}
								<form className="mt-4">
									{filters.map((section) => (
										<Disclosure as="div" key={section.name} className="border-t border-gray-200 px-4 py-6">
											{({ open }) => (
												<>
													<h3 className="-mx-2 -my-3 flow-root">
														<Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-sm text-gray-400">
															<span className="font-medium text-gray-900">{section.name}</span>
															<span className="ml-6 flex items-center">
																<ChevronDownIcon className={classNames(open ? "-rotate-180" : "rotate-0", "h-5 w-5 transform")} aria-hidden="true" />
															</span>
														</Disclosure.Button>
													</h3>
													<Disclosure.Panel className="pt-6">
														<div className="space-y-6">
															{section.options.map((option, optionIdx) => (
																<div key={option.value} className="flex items-center">
																	<input
																		id={`filter-mobile-${section.id}-${optionIdx}`}
																		name={`${section.id}[]`}
																		type="checkbox"
																		checked={option.checked}
																		className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
																		onChange={(e) => {
																			setFilters((prevFilters) => {
																				return prevFilters.map((f) => {
																					if (f.id === section.id) {
																						return {
																							...f,
																							options: f.options.map((opt) => ({
																								...opt,
																								checked: opt.label === option.label ? !opt.checked : opt.checked,
																							})),
																						};
																					} else {
																						return f;
																					}
																				});
																			});
																		}}
																	/>
																	<label htmlFor={`filter-mobile-${section.id}-${optionIdx}`} className="ml-3 text-sm text-gray-500">
																		{option.label}
																	</label>
																</div>
															))}
														</div>
													</Disclosure.Panel>
												</>
											)}
										</Disclosure>
									))}
								</form>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition.Root>

			<div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
				<h1 className="text-3xl font-bold tracking-tight text-gray-900">Workspace sale</h1>
				<p className="mt-4 max-w-xl text-sm text-gray-700">
					Our thoughtfully designed workspace objects are crafted in limited runs. Improve your productivity and organization with these sale items before we run out.
				</p>
			</div>

			{/* Filters */}
			<section aria-labelledby="filter-heading">
				<h2 id="filter-heading" className="sr-only">
					Filters
				</h2>

				<div className="border-b border-gray-200 bg-white pb-4">
					<div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
						<Menu as="div" className="relative inline-block text-left">
							<div>
								<Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
									Sort
									<ChevronDownIcon className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
								</Menu.Button>
							</div>

							{/* Sort Options */}
							<Transition
								as={Fragment}
								enter="transition ease-out duration-100"
								enterFrom="transform opacity-0 scale-95"
								enterTo="transform opacity-100 scale-100"
								leave="transition ease-in duration-75"
								leaveFrom="transform opacity-100 scale-100"
								leaveTo="transform opacity-0 scale-95"
							>
								<Menu.Items className="absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
									<div className="py-1">
										{sortOptions.map((option) => (
											<Menu.Item key={option.name}>
												{({ active }) => (
													<a href={option.href} className={classNames(option.current ? "font-medium text-gray-900" : "text-gray-500", active ? "bg-gray-100" : "", "block px-4 py-2 text-sm")}>
														{option.name}
													</a>
												)}
											</Menu.Item>
										))}
									</div>
								</Menu.Items>
							</Transition>
						</Menu>

						<button
							type="button"
							className="inline-block text-sm font-medium text-gray-700 hover:text-gray-900 sm:hidden"
							onClick={() => {
								setOpen(true);
							}}
						>
							Filters
						</button>

						{/* Filter Options */}
						<div className="hidden sm:block">
							<div className="flow-root">
								<Popover.Group className="-mx-4 flex items-center divide-x divide-gray-200 ">
									{filters.map((section, sectionIdx) => (
										<Popover key={section.name} className="relative inline-block px-4 text-left">
											<Popover.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
												<span>{section.name}</span>
												{section.options.filter((_) => _.checked).length > 0 ? (
													<span className="ml-1.5 rounded bg-gray-200 px-1.5 py-0.5 text-xs font-semibold tabular-nums text-gray-700">{section.options.filter((_) => _.checked).length}</span>
												) : null}
												<ChevronDownIcon className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
											</Popover.Button>

											<Transition
												as={Fragment}
												enter="transition ease-out duration-100"
												enterFrom="transform opacity-0 scale-95"
												enterTo="transform opacity-100 scale-100"
												leave="transition ease-in duration-75"
												leaveFrom="transform opacity-100 scale-100"
												leaveTo="transform opacity-0 scale-95"
											>
												<Popover.Panel className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white p-4 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
													<form className="space-y-4">
														{section.options.map((option, optionIdx) => (
															<div key={option.value} className="flex items-center">
																<input
																	id={`filter-${section.id}-${optionIdx}`}
																	name={`${section.id}[]`}
																	checked={option.checked}
																	type="checkbox"
																	className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
																	// onClick={}
																	onChange={(e) => {
																		setFilters((prevFilters) => {
																			return prevFilters.map((f) => {
																				if (f.id === section.id) {
																					return {
																						...f,
																						options: f.options.map((opt) => ({
																							...opt,
																							checked: opt.label === option.label ? !opt.checked : opt.checked,
																						})),
																					};
																				} else {
																					return f;
																				}
																			});
																		});
																	}}
																/>
																<label htmlFor={`filter-${section.id}-${optionIdx}`} className="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900">
																	{option.label}
																</label>
															</div>
														))}
													</form>
												</Popover.Panel>
											</Transition>
										</Popover>
									))}
								</Popover.Group>
							</div>
						</div>
					</div>
				</div>

				{/* Active filters */}
				<div className="bg-gray-100">
					<div className="mx-auto max-w-7xl px-4 py-3 sm:flex sm:items-center sm:px-6 lg:px-8">
						<h3 className="text-sm font-medium text-gray-500">
							Filters
							<span className="sr-only">, active</span>
						</h3>

						<div aria-hidden="true" className="hidden h-5 w-px bg-gray-300 sm:ml-4 sm:block" />

						<div className="mt-2 sm:ml-4 sm:mt-0">
							<div className="-m-1 flex flex-wrap items-center">
								{activeFilters.map((activeFilter) => (
									<span key={activeFilter.value} className="m-1 inline-flex items-center rounded-full border border-gray-200 bg-white py-1.5 pl-3 pr-2 text-sm font-medium text-gray-900">
										<span>{activeFilter.label}</span>
										<button
											type="button"
											className="ml-1 inline-flex h-4 w-4 flex-shrink-0 rounded-full p-1 text-gray-400 hover:bg-gray-200 hover:text-gray-500"
											onClick={() => {
												handleRemoveFilter(activeFilter.value);
											}}
										>
											<span className="sr-only">Remove filter for {activeFilter.label}</span>
											<svg className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
												<path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" />
											</svg>
										</button>
									</span>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
