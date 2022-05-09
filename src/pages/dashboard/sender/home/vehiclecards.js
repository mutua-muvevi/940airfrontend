import React from 'react';

import VehicleCards4 from "../../../../layout/cards/vehiclecards4";
import { vehicleCards } from "./vehiclecardsinfo";

import { Box, Grid } from "@mui/material";


const VehicleCards = () => {
	return (
		<Box>
			<Grid container spacing={2}>
				{
					vehicleCards.map((card, i) => (
						<Grid item lg={3} md={4} sm={6} xs={12}>
							<VehicleCards4 item={card}/>
						</Grid>
					))
				}
			</Grid>
		</Box>
	)
}

export default VehicleCards