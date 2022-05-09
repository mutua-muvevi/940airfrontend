import React from 'react';

// import { Box, Container, Typography } from "@mui/material";
// import { styled } from "@mui/system";
// import Carousel from 'react-material-ui-carousel'

// import { vehicleImages } from "./routemodalinfo";
import Image from "../../../assets/images/cargotruck1.jpg"

const vehicleImageStyles = {
	minHeight: "20vh",
	width: "100%"
}

const VehicleCarousel = () => {
	return (
		<img 
			src={Image}
			alt="cargo truck one"
			style={vehicleImageStyles}
			/>
		// <Carousel
		// 	autoPlay
		// 	stopAutoPlayOnHover
		// 	indicators={false}
		// 	interval={4000}
		// 	swipe
		// >
		// 	{
		// 		vehicleImages.map((image, i) => (
		// 			<Box key={i}>
		// 				<img
		// 					src={image.src}
		// 					alt={image.alt}
		// 					style={vehicleImageStyles}
		// 				/>
		// 			</Box>
		// 		))
		// 	}
		// </Carousel>
	)
}

export default VehicleCarousel