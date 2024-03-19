import React from "react";
import "./App.css";
import { NavBar2 } from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Music from "./pages/Music";
import Playlists from "./pages/Playlists";
import Submissions from "./pages/Submissions";
import Footer from "./components/Footer";
import ComingSoon from "./pages/ComingSoon";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import PurchasePolicy from "./pages/PurchasePolicy";
import SiteUseDisclaimer from "./pages/SiteUseDisclaimer";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";

function App(): JSX.Element {
	return (
		<>
			<BrowserRouter>
				<NavBar2 />
				<div style={{ marginTop: 90 }}>
					<Routes>
						<Route path="/" index element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/pricing" element={<Pricing />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/faq" element={<FAQ />} />
						<Route
							path="/privacypolicy"
							element={<PrivacyPolicy />}
						/>
						<Route
							path="/purchasepolicy"
							element={<PurchasePolicy />}
						/>
						<Route
							path="/disclaimer"
							element={<SiteUseDisclaimer />}
						/>

						<Route path="/music" element={<ComingSoon />} />
						<Route path="/playlists" element={<ComingSoon />} />
						<Route path="/submissions" element={<ComingSoon />} />
					</Routes>
				</div>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
