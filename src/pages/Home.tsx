import React from "react";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import LogoCloud from "../components/LogoCloud";
import LicenseYourWay from "../components/LicenseYourWay";
import FeaturedArtists from "../components/FeaturedArtists";

function Home(): JSX.Element {
	return (
		<>
			<Hero />
			<Feature />
			<LicenseYourWay />
			<FeaturedArtists />

			<LogoCloud />
		</>
	);
}

export default Home;
