import React, { Fragment } from "react";

import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const navigation = [
	{ name: "Music", route: "/music", current: false },
	{ name: "About", route: "/about", current: false },
	{ name: "Playlists", route: "/playlists", current: false },
];

export function NavBar2(): JSX.Element {
	return (
		<header className="fixed top-0 left-0 w-full z-10">
			<Popover className="relative bg-white">
				<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:justify-start md:space-x-10 lg:px-8">
					<div className="flex  justify-start overflow-auto">
						<span className="sr-only">Sync Audio</span>
						<NavLink to={"/"}>
							<img className="h-6 w-auto sm:h-6" src="assets/images/logo-tailwind.png" alt="" />
						</NavLink>
					</div>
					<div className="-my-2 -mr-2 md:hidden">
						<Popover.Button className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
							<span className="absolute -inset-0.5" />
							<span className="sr-only">Open menu</span>
							<Bars3Icon className="h-6 w-6" aria-hidden="true" />
						</Popover.Button>
					</div>
					<Popover.Group as="nav" className="hidden space-x-10 md:flex">
						{navigation.map((item) => (
							<NavLink key={item.name} to={item.route} className={({ isActive }) => `text-base font-medium text-gray-500 hover:text-gray-900 rounded-md px-2 py-1 ${isActive ? "bg-gray-200" : ""}`}>
								{item.name}
							</NavLink>
						))}
					</Popover.Group>
					<div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
						<a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
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
					<Popover.Panel focus className="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden">
						<div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
							<div className="px-5 pb-6 pt-5">
								<div className="flex items-center justify-between">
									<div>
										<img className="h-6 w-auto" src="assets/images/logo-tailwind.png" alt="Your Company" />
									</div>
									<div className="-mr-2">
										<Popover.Button className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
											<span className="absolute -inset-0.5" />
											<span className="sr-only">Close menu</span>
											<XMarkIcon className="h-6 w-6" aria-hidden="true" />
										</Popover.Button>
									</div>
								</div>
							</div>
							<div className="px-5 py-6">
								<div className="grid grid-cols-2 gap-4">
									{navigation.map((item) => (
										<NavLink key={item.name} to={item.route} className={({ isActive }) => `text-base font-medium text-gray-900 hover:text-gray-700 ${isActive ? "text-blue-600" : ""}`}>
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
											&nbsp; Sign in
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
