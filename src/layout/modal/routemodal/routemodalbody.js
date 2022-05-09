import React from 'react';

import { Box, Grid } from '@mui/material';
import { styled } from '@mui/system';

import RouteMap from "./routemap";
import RouteModalVehicle from './routemodalvehicle';
import VehicleInfo from "./vehicleInfo";

const StyledGrid = styled(Grid)(({ theme }) => ({
	width: "100%",
	height: "100%"
}))


const StyledTruckMap = styled(Box)(({ theme }) => ({
	height: "40vh"
}))

const RouteModalBody = () => {
	return (
		<Grid container spacing={0}>
			<StyledGrid item xl={6} lg={6} md={6} sm={12} xs={12}>
				<RouteModalVehicle/>
				<StyledTruckMap>
					<RouteMap/>
				</StyledTruckMap>
			</StyledGrid>
			<Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
				<VehicleInfo/>
			</Grid>
		</Grid>
	)
}

export default RouteModalBody