import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Disclosure, Menu, Popover, Transition, RadioGroup } from "@headlessui/react";
import { XMarkIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

import { ChevronDownIcon, InformationCircleIcon, PlayCircleIcon } from "@heroicons/react/20/solid";
import { PlusCircleIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import { fetchMusicTracks, type TrackProps } from "../api";
import { useCart, type Item } from "react-use-cart";

function Music(): JSX.Element {
	const [tracks, setTracks] = useState<TrackProps[]>([]);
	const [filteredTracks, setFilteredTracks] = useState<TrackProps[]>([]);
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

	const [trackToAddToCart, setTrackToAddToCart] = useState<TrackProps>();

	useEffect(() => {
		if (filters) {
			const checkedGenreFilters = filters[0].options.filter((option) => option.checked).map((option) => option.value);
			const checkedMoodFilters = filters[1].options.filter((option) => option.checked).map((option) => option.value);
			const checkedStyleFilters = filters[2].options.filter((option) => option.checked).map((option) => option.value);
			const checkedTempoFilters = filters[3].options.filter((option) => option.checked).map((option) => option.value);

			// tracks.filter((track) => {
			// 	// track.genres.some
			// });

			const genereFiltered = tracks.filter((singleTrack) => {
				if (checkedGenreFilters.length > 0) {
					const intersection = singleTrack.genres.filter((value) => checkedGenreFilters.includes(value));
					return intersection.length > 0;
				} else {
					return true;
				}
			});

			const moodFiltered = genereFiltered.filter((singleTrack) => {
				if (checkedMoodFilters.length > 0) {
					const intersection = singleTrack.moods.filter((value) => checkedMoodFilters.includes(value));
					return intersection.length > 0;
				} else {
					return true;
				}
			});

			const styleFiltered = moodFiltered.filter((singleTrack) => {
				if (checkedStyleFilters.length > 0) {
					return checkedStyleFilters.includes(singleTrack.style);
				} else {
					return true;
				}
			});

			const tempoRanges = checkedTempoFilters.map((filter) => {
				const [min, max] = filter.split("–").map((value) => parseInt(value.trim()));
				return { min, max };
			});

			const tempoFiltered = styleFiltered.filter((singleTrack) => {
				if (checkedTempoFilters.length > 0) {
					return tempoRanges.some((range) => singleTrack.tempo >= range.min && singleTrack.tempo <= range.max);
				} else {
					return true;
				}
			});

			setFilteredTracks(tempoFiltered);
		}
	}, [filters]);

	useEffect(() => {
		async function getTracks(): Promise<void> {
			const response = await fetchMusicTracks();
			response.length > 0 && setTracks(response);
			response.length > 0 && setFilteredTracks(response);
		}

		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		getTracks();
	}, []);

	function openOverlay(track: TrackProps): void {
		setTrackToAddToCart(track);
	}

	function closeOverlay(): void {
		setTrackToAddToCart(undefined);
	}

	return (
		<>
			<PromoSection />
			<CategoryFilter filters={filters} setFilters={setFilters} />
			<TrackLibrary filteredTracks={filteredTracks} openOverlay={openOverlay} />
			{trackToAddToCart && <AddToCartOverlay track={trackToAddToCart} closeOverlay={closeOverlay} />}
		</>
	);
}

export default Music;

const sortOptions = [
	{ name: "Most Popular", href: "#", current: true },
	{ name: "Best Rating", href: "#", current: false },
	{ name: "Newest", href: "#", current: false },
];

function classNames(...classes: string[]): string {
	return classes.filter(Boolean).join(" ");
}

interface CategoryFilterProps {
	filters: {
		id: string;
		name: string;
		options: {
			value: string;
			label: string;
			checked: boolean;
		}[];
	}[];
	setFilters: React.Dispatch<
		React.SetStateAction<
			{
				id: string;
				name: string;
				options: {
					value: string;
					label: string;
					checked: boolean;
				}[];
			}[]
		>
	>;
}

function CategoryFilter({ filters, setFilters }: CategoryFilterProps): JSX.Element {
	const [open, setOpen] = useState(false);

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
				<h1 className="text-3xl font-bold tracking-tight text-gray-900">Find the perfect song</h1>
				<p className="mt-4 max-w-xl text-sm text-gray-700">Our thoughtfully curated library of music..</p>
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
				<div className="bg-blue-50">
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

function TrackLibrary({ filteredTracks, openOverlay }: { filteredTracks: TrackProps[]; openOverlay: (track: TrackProps) => void }): JSX.Element {
	return (
		<div className="">
			{filteredTracks.map((track) => (
				<div key={`${track.title}-card`}>
					<Track track={track} openOverlay={openOverlay} />
				</div>
			))}
		</div>
	);
}

function Track({ track, openOverlay }: { track: TrackProps; openOverlay: (track: TrackProps) => void }): JSX.Element {
	return (
		<>
			<div className="mx-auto my-4 max-w-7xl px-4">
				<div className=" hover:bg-blue-50 rounded-lg h-16 flex flex-row gap-10 items-center justify-between px-4">
					{/* Play + Name + Genere */}
					<div className="flex flex-row gap-6 items-center justify-between w-1/2 ">
						{/* Play + Name */}
						<div className="flex flex-row gap-6 items-center ">
							<div className="h-10 w-10 bg-blue-100 rounded-xl flex items-center justify-center">
								<PlayCircleIcon className="h-6 w-6 text-blue-600" />
							</div>

							<div className="flex flex-col">
								<div className="text-md text-gray-600 font-semibold">{track.title} </div>
								<div className="text-sm text-gray-400">{track.artist}</div>
							</div>
						</div>
						<div className="flex flex-row gap-2 flex-wrap">
							{track.genres.map((genre) => (
								<span key={`${track.title}-genere-${genre}`} className="inline-flex items-center rounded-md bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">
									{genre}
								</span>
							))}
						</div>
					</div>

					{/* Waveform + Duration + Actions */}
					<div className="flex flex-row gap-6 items-center w-1/2 justify-between">
						{/* Waveform */}
						<div className="bg-blue-100 h-10 w-96 rounded-md"></div>
						{/* Time */}
						<div className="text-sm text-gray-500">{`${Math.floor(track.duration / 60)}:${(track.duration % 60).toPrecision(2)}`}</div>
						{/* Actions */}
						<div className="flex flex-row gap-2 items-center">
							<InformationCircleIcon className=" cursor-pointer text-blue-600 hover:text-blue-700 h-6 w-6" />
							<PlusCircleIcon className="cursor-pointer text-blue-600 hover:text-blue-700 h-6 w-6" />
							<ShoppingCartIcon
								onClick={() => {
									openOverlay(track);
								}}
								className="cursor-pointer text-blue-600 hover:text-blue-700 h-6 w-6"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export interface TrackCartItem extends Item {
	track: TrackProps;
	license: string;
}

export function AddToCartOverlay({ track, closeOverlay }: { track: TrackProps; closeOverlay: () => void }): JSX.Element {
	const CART = useCart();
	const [open] = useState(true);
	const [selected, setSelected] = useState(plans[1]);

	function handleAddToCart(): void {
		const cartItem: TrackCartItem = {
			id: track.id.toString(),
			price: selected.price,
			license: selected.name,
			track,
		};

		if (CART.items.filter((item) => item.id === cartItem.id).length > 0) {
			// If item already in cart, we can update the license
			CART.updateItem(cartItem.id, {
				...cartItem,
				quantity: 1,
			});
		} else {
			// Adding a new item to cart
			CART.addItem(cartItem);
		}

		closeOverlay();
	}

	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog as="div" className="relative z-10" onClose={closeOverlay}>
				<Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
					<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
				</Transition.Child>

				<div className="fixed inset-0 z-10  w-screen overflow-y-auto">
					<div className="flex min-h-full  items-end justify-center p-4 text-center sm:items-center sm:p-0">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						>
							<Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
								<div>
									<div className="mt-3 sm:mt-5">
										{/* Title */}
										<Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
											Pick the correct license
										</Dialog.Title>

										{/* Content */}
										<div className="mt-2">
											<Licenses selected={selected} setSelected={setSelected} />
										</div>

										{/* Add to Cart Button */}
										<div className="flex flex-row justify-between mt-6">
											<div></div>
											<button
												type="button"
												className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
												onClick={handleAddToCart}
											>
												Add to Cart
												<CheckCircleIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
											</button>
										</div>
									</div>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
}

export function PromoSection(): JSX.Element {
	return (
		<div className="bg-white">
			<div className="overflow-hidden pt-32 sm:pt-14">
				<div className="bg-blue-700">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="relative pb-16 pt-48 sm:pb-24">
							<div>
								<h2 id="sale-heading" className="text-4xl font-bold tracking-tight text-white md:text-5xl">
									Unlock the soundtrack
									<br />
									for your creativity
								</h2>
								<div className="mt-6 text-base">
									<div className=" text-white  w-96">
										Discover endless possibilities with our premium audio licenses. Elevate your projects with ease, whether you're a creator, filmmaker, or business owner. Explore, license, and
										unlock the power of sound today
										<span aria-hidden="true"> &rarr;</span>
									</div>
								</div>
							</div>

							<div className="absolute -top-32 left-1/2 -translate-x-1/2 transform sm:top-6 sm:translate-x-0">
								<div className="ml-24 flex min-w-max space-x-6 sm:ml-3 lg:space-x-8">
									<div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
										<div className="flex-shrink-0">
											<img
												className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
												src="https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
												alt=""
											/>
										</div>

										<div className="mt-6 flex-shrink-0 sm:mt-0">
											<img
												className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
												src="https://images.unsplash.com/photo-1459233313842-cd392ee2c388?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
												alt=""
											/>
										</div>
									</div>
									<div className="flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
										<div className="flex-shrink-0">
											<img
												className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
												src="https://images.unsplash.com/photo-1519677584237-752f8853252e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
												alt=""
											/>
										</div>

										<div className="mt-6 flex-shrink-0 sm:mt-0">
											<img
												className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
												src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
												alt=""
											/>
										</div>
									</div>
									<div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
										<div className="flex-shrink-0">
											<img
												className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
												src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
												alt=""
											/>
										</div>

										<div className="mt-6 flex-shrink-0 sm:mt-0">
											<img
												className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
												src="https://images.unsplash.com/photo-1548502632-6b93092aad0b?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
												alt=""
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

const plans = [
	{ name: "Podcast", description: "The essentials to provide your best work for clients", price: 209 },
	{ name: "Home / Students", description: "Perfect for personal use", price: 18 },
	{ name: "Promotinal Tier", description: "Dedicated for multi national companies or big corporations", price: 359.99 },
	{ name: "Vlogger", description: "A plan that scales with your rapidly growing business.", price: 29.99 },
];

interface LicenseProps {
	selected: {
		name: string;
		description: string;
		price: number;
	};
	setSelected: React.Dispatch<
		React.SetStateAction<{
			name: string;
			description: string;
			price: number;
		}>
	>;
}
export function Licenses({ selected, setSelected }: LicenseProps): JSX.Element {
	return (
		<div className="mt-4">
			<RadioGroup value={selected} onChange={setSelected}>
				<RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
				<div className="space-y-4">
					{plans.map((plan) => (
						<RadioGroup.Option
							key={plan.name}
							value={plan}
							className={({ active }) =>
								classNames(
									active ? "border-indigo-600 ring-2 ring-indigo-600" : "border-gray-300",
									"relative block cursor-pointer rounded-lg border bg-white px-6 py-2 shadow-sm focus:outline-none sm:flex sm:justify-between"
								)
							}
						>
							{({ active, checked }) => (
								<>
									<span className="flex items-center">
										<span className="flex flex-col text-sm">
											<RadioGroup.Label as="span" className="font-medium text-gray-900">
												{plan.name}
											</RadioGroup.Label>
											<RadioGroup.Description as="span" className="text-gray-500">
												<span className="block sm:inline">{plan.description}</span>{" "}
											</RadioGroup.Description>
										</span>
									</span>
									<RadioGroup.Description as="span" className="mt-2 flex text-sm sm:ml-4 sm:mt-0 sm:flex-col sm:text-right justify-center">
										<span className="font-medium text-gray-900">£{plan.price}</span>
									</RadioGroup.Description>
									<span
										className={classNames(active ? "border" : "border-2", checked ? "border-indigo-600" : "border-transparent", "pointer-events-none absolute -inset-px rounded-lg")}
										aria-hidden="true"
									/>
								</>
							)}
						</RadioGroup.Option>
					))}
				</div>
			</RadioGroup>
		</div>
	);
}
