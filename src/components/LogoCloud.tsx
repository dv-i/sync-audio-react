import React from "react";

export default function Example(): JSX.Element {
	return (
		<div className="bg-gray-100 py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<h2 className="text-center text-lg font-semibold leading-8 text-gray-900">Trusted by several companies using our music</h2>
				<div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
					<img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="assets/images/bbc-logo.png" alt="BBC" width={158} height={48} />
					<img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="assets/images/apple-logo.png" alt="Apple" width={158} height={48} />
					<img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="assets/images/mobo-logo.png" alt="Mobo" width={158} height={48} />
					<img className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" src="assets/images/mtv-logo.png" alt="MTV" width={158} height={48} />
					<img className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" src="assets/images/cancer-gray-logo.png" alt="Cancer" width={158} height={48} />
				</div>
			</div>
		</div>
	);
}
