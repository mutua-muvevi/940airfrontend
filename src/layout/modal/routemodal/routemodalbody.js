import React from 'react';

import { Box, Grid } from '@mui/material';
import { styled } from '@mui/system';

import RouteMap from "./routemap";
import RouteModalVehicle from './routemodalvehicle';
import VehicleInfo from "./vehicleInfo";

const StyledGridWrapper = styled(Grid)(({ theme }) => ({
	height: "100%",
}))

const StyledGrid = styled(Grid)(({ theme }) => ({
	width: "100%",
	height: "100%",
	borderRight: "1px solid grey",
}))


const StyledTruckMap = styled(Box)(({ theme }) => ({
	height: "40vh"
}))

const StyledVehicleGrid = styled(Grid)(({ theme }) => ({
	overflowY: "scroll",
	height: "82.7vh"
}))

const RouteModalBody = () => {
	return (
		<StyledGridWrapper container spacing={0}>
			<StyledGrid item xl={6} lg={6} md={6} sm={12} xs={12}>
				<RouteModalVehicle/>
				<StyledTruckMap>
					<RouteMap/>
				</StyledTruckMap>
			</StyledGrid>
			<StyledVehicleGrid item xl={6} lg={6} md={6} sm={12} xs={12}>
				<VehicleInfo/>
			</StyledVehicleGrid>
		</StyledGridWrapper>
	)
}

export default RouteModalBody