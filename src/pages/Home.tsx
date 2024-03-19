import React from "react";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import FeatruredArtists from "../components/FeatruredArtists";
import LogoCloud from "../components/LogoCloud";

function Home(): JSX.Element {
	return (
		<>
			<Hero />
			<Feature />
			<LogoCloud />
		</>
	);
}

export default Home;
