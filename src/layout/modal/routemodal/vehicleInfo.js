import React from 'react';

import { Box, Container, Rating, Typography } from "@mui/material";
import { styled } from "@mui/system";


import StarIcon from '@mui/icons-material/Star';

import VehicleCarousel from "./vehiclecarousel";



const StyledContainerWrapper = styled(Container)(({ theme }) => ({
	borderLeft: "1px solid grey",
	height: "100%",
	paddingTop: "10px",
	paddingBottom: "10px",
}))

const StyledPlateWrapper = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center"
}))

const StyledRating = styled(Box)(({ theme }) => ({
	width: "40%",
	display: "flex",
	marginTop: "10px"
}))

const VehicleInfo = () => {
	return (
		<StyledContainerWrapper maxWidth="xl">
			<StyledPlateWrapper>
				<Typography variant="h4">
					Truck name
				</Typography>
				<Typography variant="h4">
					Plate: ZZZ 000Z
				</Typography>
			</StyledPlateWrapper>
			<VehicleCarousel/>
			<Typography variant="body2">
				LoremNisi consequat nostrud Lorem ad cillum Lorem. Ullamco dolore magna non qui sint do cupidatat 
				occaecat in. Exercitation esse id velit laborum occaecat consectetur dolor ullamco dolore. 
				Magna exercitation nisi fugiat eiusmod. Sit non irure sint excepteur aute sint commodo laboris. 
				Tempor sit anim sint sit dolor dolor.
			</Typography>
			<StyledRating>
				<Rating
					name="transporter-rating"
					value={4.5}
					readOnly
					precision={0.5}
					emptyIcon={<StarIcon style={{ opacity: 0.55, color: "grey" }} fontSize="inherit" />}
					/>
			</StyledRating>
		</StyledContainerWrapper>
	)
}

export default VehicleInfo