/* eslint-disable react/jsx-props-no-spreading */

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

const navigation = {
	music: [
		{ name: "Songs", href: "#" },
		{ name: "Playlists", href: "#" },
		{ name: "Artists", href: "#" },
	],
	support: [
		{ name: "Pricing", href: "#" },
		{ name: "FAQ", href: "/faq" },
	],
	company: [
		{ name: "About", href: "/about" },
		{ name: "Contact", href: "/contact" },
	],
	legal: [
		{ name: "Privacy", href: "/privacypolicy" },
		{ name: "Purchase", href: "/purchasepolicy" },
		{ name: "Site Use", href: "/disclaimer" },
	],
	social: [
		{
			name: "Facebook",
			href: "https://facebook.com/syncaudiomusic",
			icon: (props: any) => (
				<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
					<path
						fillRule="evenodd"
						d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
						clipRule="evenodd"
					/>
				</svg>
			),
		},
		{
			name: "Instagram",
			href: "https://www.instagram.com/syncaudioofficial",
			icon: (props: any) => (
				<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
					<path
						fillRule="evenodd"
						d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
						clipRule="evenodd"
					/>
				</svg>
			),
		},
		{
			name: "X",
			href: "https://twitter.com/syncaudio",
			icon: (props: any) => (
				<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
					<path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
				</svg>
			),
		},
		{
			name: "LinkedIn",
			href: "https://www.linkedin.com/in/sync-audio",
			icon: (props: any) => (
				<svg fill="currentColor" viewBox="0 2 25 25" {...props}>
					<path
						fillRule="evenodd"
						d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
						clipRule="evenodd"
					/>
				</svg>
			),
		},
		{
			name: "YouTube",
			href: "#",
			icon: (props: any) => (
				<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
					<path
						fillRule="evenodd"
						d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
						clipRule="evenodd"
					/>
				</svg>
			),
		},
	],
};

export default function Example(): JSX.Element {
	const [open, setOpen] = useState(false);
	return (
		<>
			{/* Copyright Modal */}
			<Transition.Root show={open} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={setOpen}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
					</Transition.Child>

					<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
						<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
								enterTo="opacity-100 translate-y-0 sm:scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 translate-y-0 sm:scale-100"
								leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							>
								<Dialog.Panel
									style={{ minWidth: 600 }}
									className="w-300 relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6"
								>
									<div>
										<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
											<InformationCircleIcon
												className="h-6 w-6 text-indigo-600"
												aria-hidden="true"
											/>
										</div>
										<div className="mt-3 text-center sm:mt-5">
											<Dialog.Title
												as="h3"
												className="text-base font-semibold leading-6 text-gray-900"
											>
												Site Copyright Notice
											</Dialog.Title>
											<div className="mt-2">
												<p className="text-sm text-left text-gray-500">
													© 2024 Sync-Audio
												</p>
												<p className="text-sm mt-2 text-left text-gray-500">
													All rights to the contents
													of this website are the
													property of the owner. All
													unauthorised copying and
													transmission and
													reproduction in any form or
													format are prohibited. Use
													of the services provided by
													the website is by permission
													only in accordance to terms
													and conditions of using the
													site.
												</p>
											</div>
										</div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition.Root>
			<footer className="bg-gray-900" aria-labelledby="footer-heading">
				<h2 id="footer-heading" className="sr-only">
					Footer
				</h2>
				<div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
					<div className="xl:grid xl:grid-cols-3 xl:gap-8">
						<div className="space-y-8">
							<img
								className="h-7"
								src="assets/images/logo-tailwind.png"
								alt="Company name"
							/>
							<p className="text-sm leading-6 text-gray-300">
								Making the world a better place one music note
								at a time.
							</p>
							<div className="flex space-x-6">
								{navigation.social.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className="text-gray-500 hover:text-gray-400"
									>
										<span className="sr-only">
											{item.name}
										</span>
										<item.icon
											className="h-6 w-6"
											aria-hidden="true"
										/>
									</a>
								))}
							</div>
						</div>
						<div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
							<div className="md:grid md:grid-cols-2 md:gap-8">
								<div>
									<h3 className="text-sm font-semibold leading-6 text-white">
										Music
									</h3>
									<ul role="list" className="mt-6 space-y-4">
										{navigation.music.map((item) => (
											<li key={item.name}>
												<a
													href={item.href}
													className="text-sm leading-6 text-gray-300 hover:text-white"
												>
													{item.name}
												</a>
											</li>
										))}
									</ul>
								</div>
								<div className="mt-10 md:mt-0">
									<h3 className="text-sm font-semibold leading-6 text-white">
										Support
									</h3>
									<ul role="list" className="mt-6 space-y-4">
										{navigation.support.map((item) => (
											<li key={item.name}>
												<a
													href={item.href}
													className="text-sm leading-6 text-gray-300 hover:text-white"
												>
													{item.name}
												</a>
											</li>
										))}
									</ul>
								</div>
							</div>
							<div className="md:grid md:grid-cols-2 md:gap-8">
								<div>
									<h3 className="text-sm font-semibold leading-6 text-white">
										Company
									</h3>
									<ul role="list" className="mt-6 space-y-4">
										{navigation.company.map((item) => (
											<li key={item.name}>
												<a
													href={item.href}
													className="text-sm leading-6 text-gray-300 hover:text-white"
												>
													{item.name}
												</a>
											</li>
										))}
									</ul>
								</div>
								<div className="mt-10 md:mt-0">
									<h3 className="text-sm font-semibold leading-6 text-white">
										Legal
									</h3>
									<ul role="list" className="mt-6 space-y-4">
										<li key="Copyright">
											<a
												onClick={() => {
													setOpen(true);
												}}
												className="cursor-pointer text-sm leading-6 text-gray-300 hover:text-white"
											>
												Copyright
											</a>
										</li>
										{navigation.legal.map((item) => (
											<li key={item.name}>
												<a
													href={item.href}
													className="text-sm leading-6 text-gray-300 hover:text-white"
												>
													{item.name}
												</a>
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
						<p className="text-xs leading-5 text-gray-400">
							&copy; 2024 Sync-Audio. All rights reserved.
						</p>
					</div>
				</div>
			</footer>
		</>
	);
}
