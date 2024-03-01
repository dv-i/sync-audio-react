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

function App(): JSX.Element {
	return (
		<>
			<BrowserRouter>
				<NavBar2 />
				<Routes>
					<Route path="/" index element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/faq" element={<FAQ />} />

					<Route path="/music" element={<ComingSoon />} />
					<Route path="/playlists" element={<ComingSoon />} />
					<Route path="/submissions" element={<ComingSoon />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
