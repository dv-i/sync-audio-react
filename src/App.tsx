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

function App(): JSX.Element {
	return (
		<>
			<BrowserRouter>
				<NavBar2 />
				<Routes>
					<Route path="/" index element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/music" element={<Music />} />
					<Route path="/playlists" element={<Playlists />} />
					<Route path="/submissions" element={<Submissions />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
