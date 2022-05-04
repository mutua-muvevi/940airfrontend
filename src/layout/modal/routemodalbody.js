import { Box, Grid } from '@mui/material'
import { styled } from '@mui/system';
import React from 'react';
import Map from '../../components/map';
import RouteModalVehicle from './routemodalvehicle';

const StyledGrid = styled(Grid)(({ theme }) => ({
	width: "100%",
	height: "100%"
}))


const StyledTruckMap = styled(Box)(({ theme }) => ({
	height: "20vh"
}))

const RouteModalBody = () => {
	return (
		<Grid container spacing={0}>
			<StyledGrid item xl={6} lg={6} md={6} sm={12} xs={12}>
				<RouteModalVehicle/>
				<StyledTruckMap>
					<Map/>
				</StyledTruckMap>
			</StyledGrid>
			<Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
				personal info
			</Grid>
		</Grid>
	)
}

export default RouteModalBody