import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Carousel from "../Components/Carousel";
import ImageGrid from "../Components/ImageGrid";
import CardMaker from "../Components/CardMaker";
import { cleaningHousehold, offer } from "../Components/exportData";
import { Grid } from "@chakra-ui/react";
import Cards from "../Components/Cards";
import ImageGrid2 from "../Components/ImageGrid2";
import { Link } from "react-router-dom";

const HomePage = () => {
	return (
		<div>
			<Navbar />

			<Link to={'/product'}><Carousel /></Link>
			<CardMaker data={offer} heading="Top Offers" />

			<ImageGrid />
			<Grid width="100%" m="auto" templateColumns="repeat(5, 1fr)" gap={1}>
				{[1, 2, 3, 4, 5].map((i) => {
					return <Link to={'/product'}><Cards key={i} /></Link>;
				})}
			</Grid>
			<CardMaker data={cleaningHousehold} heading="Cleaning And HouseHolds" />
			<ImageGrid2 />
			<br />
			<Footer />
		</div>
	);
};

export default HomePage;
