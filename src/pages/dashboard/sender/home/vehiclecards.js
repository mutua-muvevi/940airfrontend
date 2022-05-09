import React from 'react';

import { Box, Grid } from "@mui/material";
import { styled } from "@mui/system"

import VehicleCards4 from "../../../../layout/cards/vehiclecards4";
import { vehicleCards } from "./vehiclecardsinfo";

const StyledCardsContainer = styled(Box)(({ theme }) => ({
	marginBottom: "10px"
}))

const VehicleCards = () => {
	return (
		<StyledCardsContainer>
			<Grid container spacing={2}>
				{
					vehicleCards.map((card, i) => (
						<Grid item lg={3} md={4} sm={6} xs={12}>
							<VehicleCards4 item={card}/>
						</Grid>
					))
				}
			</Grid>
		</StyledCardsContainer>
	)
}

export default VehicleCards