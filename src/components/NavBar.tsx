import React, { Fragment } from "react";

import { Disclosure, Menu, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const navigation = [
	{ name: "Music", route: "/music", current: false },
	{ name: "About", route: "/about", current: false },
	{ name: "Playlists", route: "/playlists", current: false },
];

function classNames(...classes: string[]): string {
	return classes.filter(Boolean).join(" ");
}

export default function Example(): JSX.Element {
	return (
		<Disclosure as="nav" className="bg-gray-800">
			{({ open }) => (
				<>
					<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
						<div className="relative flex h-16 items-center justify-between">
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								{/* Mobile menu button */}
								<Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
									<span className="absolute -inset-0.5" />
									<span className="sr-only">
										Open main menu
									</span>
									{open ? (
										<XMarkIcon
											className="block h-6 w-6"
											aria-hidden="true"
										/>
									) : (
										<Bars3Icon
											className="block h-6 w-6"
											aria-hidden="true"
										/>
									)}
								</Disclosure.Button>
							</div>

							{/* Navbar Web View */}
							<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
								<div className="flex flex-shrink-0 items-center">
									<NavLink to={"/"}>
										<img
											className="h-8 w-auto"
											src="/assets/images/logo-tailwind.png"
											alt="Your Company"
										/>
									</NavLink>
								</div>
								<div className="hidden sm:ml-6 sm:block">
									<div className="flex space-x-4">
										{navigation.map((item) => (
											<NavLink
												key={item.name}
												to={item.route}
												className={({ isActive }) => {
													return `${classNames(
														isActive
															? "bg-gray-900 text-white"
															: "text-gray-300 hover:bg-gray-700 hover:text-white",
														"rounded-md px-3 py-2 text-sm font-medium"
													)}`;
												}}
												aria-current={
													item.current
														? "page"
														: undefined
												}
											>
												{item.name}
											</NavLink>
										))}
									</div>
								</div>
							</div>
							<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
								<button
									type="button"
									className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
								>
									<span className="absolute -inset-1.5" />
									<span className="sr-only">
										View notifications
									</span>
									<BellIcon
										className="h-6 w-6"
										aria-hidden="true"
									/>
								</button>

								{/* Profile dropdown */}
								<Menu as="div" className="relative ml-3">
									<div>
										<Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
											<span className="absolute -inset-1.5" />
											<span className="sr-only">
												Open user menu
											</span>
											<img
												className="h-8 w-8 rounded-full"
												src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
												alt=""
											/>
										</Menu.Button>
									</div>
									<Transition
										as={Fragment}
										enter="transition ease-out duration-100"
										enterFrom="transform opacity-0 scale-95"
										enterTo="transform opacity-100 scale-100"
										leave="transition ease-in duration-75"
										leaveFrom="transform opacity-100 scale-100"
										leaveTo="transform opacity-0 scale-95"
									>
										<Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
											<Menu.Item>
												{({ active }) => (
													<a
														href="#"
														className={classNames(
															active
																? "bg-gray-100"
																: "",
															"block px-4 py-2 text-sm text-gray-700"
														)}
													>
														Your Profile
													</a>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<a
														href="#"
														className={classNames(
															active
																? "bg-gray-100"
																: "",
															"block px-4 py-2 text-sm text-gray-700"
														)}
													>
														Settings
													</a>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<a
														href="#"
														className={classNames(
															active
																? "bg-gray-100"
																: "",
															"block px-4 py-2 text-sm text-gray-700"
														)}
													>
														Sign out
													</a>
												)}
											</Menu.Item>
										</Menu.Items>
									</Transition>
								</Menu>
							</div>
						</div>
					</div>

					{/* Navbar Mobile View */}
					<Disclosure.Panel className="sm:hidden">
						<div className="space-y-1 px-2 pb-3 pt-2">
							{navigation.map((item) => (
								<Disclosure.Button
									key={item.name}
									as="a"
									// href={item.route}
									// className={classNames(
									// 	item.current
									// 		? "bg-gray-900 text-white"
									// 		: "text-gray-300 hover:bg-gray-700 hover:text-white",
									// 	"block rounded-md px-3 py-2 text-base font-medium"
									// )}
									aria-current={
										item.current ? "page" : undefined
									}
								>
									<NavLink
										to={item.route}
										className={({ isActive }) => {
											return `${classNames(
												isActive
													? "bg-gray-900 text-white"
													: "text-gray-300 hover:bg-gray-700 hover:text-white",
												"block rounded-md px-3 py-2 text-base font-medium"
											)}`;
										}}
									>
										{item.name}
									</NavLink>
								</Disclosure.Button>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}

export function NavBar2(): JSX.Element {
	return (
		<header className="fixed top-0 left-0 w-full z-10">
			<Popover className="relative bg-white">
				<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:justify-start md:space-x-10 lg:px-8">
					<div className="flex  justify-start overflow-auto">
						<span className="sr-only">Sync Audio</span>
						<NavLink to={"/"}>
							<img
								className="h-6 w-auto sm:h-6"
								src="assets/images/logo-tailwind.png"
								alt=""
							/>
						</NavLink>
					</div>
					<div className="-my-2 -mr-2 md:hidden">
						<Popover.Button className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
							<span className="absolute -inset-0.5" />
							<span className="sr-only">Open menu</span>
							<Bars3Icon className="h-6 w-6" aria-hidden="true" />
						</Popover.Button>
					</div>
					<Popover.Group
						as="nav"
						className="hidden space-x-10 md:flex"
					>
						{navigation.map((item) => (
							<NavLink
								key={item.name}
								to={item.route}
								className={({ isActive }) =>
									`text-base font-medium text-gray-500 hover:text-gray-900 rounded-md px-2 py-1 ${
										isActive ? "bg-gray-200" : ""
									}`
								}
							>
								{item.name}
							</NavLink>
						))}
					</Popover.Group>
					<div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
						<a
							href="#"
							className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
						>
							Sign in
						</a>
						<a
							href="#"
							className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700"
						>
							Sign up
						</a>
					</div>
				</div>

				{/* Mobile view */}
				<Transition
					as={Fragment}
					enter="duration-200 ease-out"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="duration-100 ease-in"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					<Popover.Panel
						focus
						className="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden"
					>
						<div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
							<div className="px-5 pb-6 pt-5">
								<div className="flex items-center justify-between">
									<div>
										<img
											className="h-6 w-auto"
											src="assets/images/logo-tailwind.png"
											alt="Your Company"
										/>
									</div>
									<div className="-mr-2">
										<Popover.Button className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
											<span className="absolute -inset-0.5" />
											<span className="sr-only">
												Close menu
											</span>
											<XMarkIcon
												className="h-6 w-6"
												aria-hidden="true"
											/>
										</Popover.Button>
									</div>
								</div>
							</div>
							<div className="px-5 py-6">
								<div className="grid grid-cols-2 gap-4">
									{navigation.map((item) => (
										<NavLink
											key={item.name}
											to={item.route}
											className={({ isActive }) =>
												`text-base font-medium text-gray-900 hover:text-gray-700 ${
													isActive
														? "text-blue-600"
														: ""
												}`
											}
										>
											{item.name}
										</NavLink>
									))}
								</div>
								<div className="mt-6">
									<a
										href="#"
										className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700"
									>
										Sign up
									</a>
									<p className="mt-6 text-center text-base font-medium text-gray-500">
										Existing customer?
										<a href="#" className="text-gray-900">
											Sign in
										</a>
									</p>
								</div>
							</div>
						</div>
					</Popover.Panel>
				</Transition>
			</Popover>
		</header>
	);
}
