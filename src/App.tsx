import React from "react";
import "./App.css";
import { NavBar2 } from "./components/NavBar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Music from "./pages/Music";
// import Playlists from "./pages/Playlists";
// import Submissions from "./pages/Submissions";
import Footer from "./components/Footer";
import ComingSoon from "./pages/ComingSoon";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import PurchasePolicy from "./pages/PurchasePolicy";
import SiteUseDisclaimer from "./pages/SiteUseDisclaimer";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import BundleUse from "./pages/BundleUse";
import SignIn from "./pages/SignIn";

function currentPath(): string {
	const location = useLocation();
	return location.pathname;
}

const PAGES_WITH_NO_NAV_FOOTER = ["/signin"];

function App(): JSX.Element {
	return (
		<>
			{!PAGES_WITH_NO_NAV_FOOTER.includes(currentPath()) && <NavBar2 />}
			<div style={PAGES_WITH_NO_NAV_FOOTER.includes(currentPath()) ? undefined : { marginTop: 90 }}>
				<Routes>
					<Route path="/" index element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/pricing" element={<Pricing />} />
					<Route path="/contact" element={<Contact />} />

					<Route path="/bundleuse" element={<BundleUse />} />
					<Route path="/faq" element={<FAQ />} />
					<Route path="/privacypolicy" element={<PrivacyPolicy />} />
					<Route path="/purchasepolicy" element={<PurchasePolicy />} />
					<Route path="/disclaimer" element={<SiteUseDisclaimer />} />

					<Route path="/playlists" element={<ComingSoon />} />
					<Route path="/submissions" element={<ComingSoon />} />

					{/* E-Commerce */}
					<Route path="/music" element={<ComingSoon />} />
					{/* <Route path="/music" element={<Music />} /> */}
					<Route path="/signin" element={<SignIn />} />
				</Routes>
			</div>
			{!PAGES_WITH_NO_NAV_FOOTER.includes(currentPath()) && <Footer />}
		</>
	);
}

export default App;
