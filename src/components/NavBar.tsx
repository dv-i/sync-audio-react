import React, { Fragment, useEffect, useState } from "react";

import { Popover, Transition, Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import useCookie from "react-use-cookie";
import { type UserCookieProps } from "../api";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useCart } from "react-use-cart";

const navigation = [
	{ name: "Music", route: "/music", current: false },
	{ name: "About", route: "/about", current: false },
	{ name: "Playlists", route: "/playlists", current: false },
];

export function NavBar2(): JSX.Element {
	const [userCookie] = useCookie("userToken", JSON.stringify({}));
	const [userAlreadyAuthenticated, setUserAlreadyAuthenticated] = useState<boolean>();
	const [isShoppingCartOpen, setIsShoppingCartOpen] = useState<boolean>(false);
	const CART = useCart();

	useEffect(() => {
		const user = JSON.parse(userCookie) as UserCookieProps;
		user.emailAddress && user.password && setUserAlreadyAuthenticated(true);
	}, [userCookie]);

	function handleLogOut(): void {
		setUserAlreadyAuthenticated(false);
	}

	function launchShoppingCart(): void {
		setIsShoppingCartOpen(true);
	}

	return (
		<>
			<header style={{ marginBottom: 90 }} className="fixed top-0 left-0 w-full z-10">
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
						<div className={"hidden  items-center justify-end md:flex md:flex-1 lg:w-0"}>
							<div onClick={launchShoppingCart} className={"flex flex-row hover:cursor-pointer"}>
								<ShoppingCartIcon className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
								<span className="ml-2 text-md font-medium text-gray-500 group-hover:text-gray-600">{CART.items.length}</span>
							</div>
							{userAlreadyAuthenticated ? (
								<button
									onClick={handleLogOut}
									className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700"
								>
									Log Out
								</button>
							) : (
								<NavLink
									to={"/signin"}
									className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700"
								>
									Sign in
								</NavLink>
							)}
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
										<NavLink
											to={"/signin"}
											className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700"
										>
											Sign up
										</NavLink>
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
			<ShoppingCart open={isShoppingCartOpen} setOpen={setIsShoppingCartOpen} />
		</>
	);
}

export function ShoppingCart({ open, setOpen }: { open: boolean; setOpen: React.Dispatch<React.SetStateAction<boolean>> }): JSX.Element {
	const CART = useCart();

	function handleRemoveItemFromCart(itemId: string): void {
		CART.removeItem(itemId);
	}
	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog as="div" className="relative z-10" onClose={setOpen}>
				<Transition.Child as={Fragment} enter="ease-in-out duration-500" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in-out duration-500" leaveFrom="opacity-100" leaveTo="opacity-0">
					<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
				</Transition.Child>

				<div className="fixed inset-0 overflow-hidden">
					<div className="absolute inset-0 overflow-hidden">
						<div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
							<Transition.Child
								as={Fragment}
								enter="transform transition ease-in-out duration-500 sm:duration-700"
								enterFrom="translate-x-full"
								enterTo="translate-x-0"
								leave="transform transition ease-in-out duration-500 sm:duration-700"
								leaveFrom="translate-x-0"
								leaveTo="translate-x-full"
							>
								<Dialog.Panel className="pointer-events-auto w-screen max-w-md">
									<div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
										<div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
											<div className="flex items-start justify-between">
												<Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart</Dialog.Title>
												<div className="ml-3 flex h-7 items-center">
													<button
														type="button"
														className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
														onClick={() => {
															setOpen(false);
														}}
													>
														<span className="absolute -inset-0.5" />
														<span className="sr-only">Close panel</span>
														<XMarkIcon className="h-6 w-6" aria-hidden="true" />
													</button>
												</div>
											</div>

											<div className="mt-8">
												<div className="flow-root">
													<ul role="list" className="-my-6 divide-y divide-gray-200">
														{CART.items.map((product) => (
															<li key={product.id} className="flex py-6">
																<div className="h-12 w-12 bg-blue-100 flex-shrink-0 overflow-hidden rounded-md"></div>

																<div className="ml-4 flex flex-1 flex-col">
																	<div>
																		<div className="flex justify-between text-base font-medium text-gray-900">
																			<h3>
																				<div>{product.track.title}</div>
																			</h3>
																			<p className="ml-4">£{product.price}</p>
																		</div>
																		<p className="mt-1 text-sm text-gray-500">{product.color}</p>
																	</div>
																	<div className="flex flex-1 items-end justify-between text-sm">
																		<p className="text-gray-500">License: {product.license}</p>

																		<div className="flex">
																			<button
																				onClick={() => {
																					handleRemoveItemFromCart(product.id);
																				}}
																				type="button"
																				className="font-medium text-blue-600 hover:text-blue-500"
																			>
																				Remove
																			</button>
																		</div>
																	</div>
																</div>
															</li>
														))}
													</ul>
												</div>
											</div>
										</div>

										<div className="border-t border-gray-200 px-4 py-6 sm:px-6">
											<div className="flex justify-between text-base font-medium text-gray-900">
												<p>Subtotal</p>
												<p>£{CART.cartTotal}</p>
											</div>
											<p className="mt-0.5 text-sm text-gray-500">Taxes calculated at checkout.</p>
											<div className="mt-6">
												<a
													href="#"
													className="flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700"
												>
													Checkout
												</a>
											</div>
											<div className="mt-6 flex justify-center text-center text-sm text-gray-500">
												<p>
													or{" "}
													<button
														type="button"
														className="font-medium text-blue-600 hover:text-blue-500"
														onClick={() => {
															setOpen(false);
														}}
													>
														Continue Shopping
														<span aria-hidden="true"> &rarr;</span>
													</button>
												</p>
											</div>
										</div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
}
