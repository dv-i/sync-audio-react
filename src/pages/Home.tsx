import React from "react";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import FeatruredArtists from "../components/FeatruredArtists";

function Home(): JSX.Element {
	return (
		<>
			<Hero />
			<Feature />
			<FeatruredArtists />
		</>
	);
}

export default Home;
