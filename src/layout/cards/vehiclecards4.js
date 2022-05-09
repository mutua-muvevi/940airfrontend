import React from 'react';

import { Box, Divider, Rating, Typography } from "@mui/material";
import { styled } from "@mui/system";

import StarIcon from '@mui/icons-material/Star';

const StyledVehicleCardsContainer = styled(Box)(({ theme }) => ({
	backgroundColor: "#fff",
	height: "35vh",
	borderRadius: theme.shape.default,
}))

const StyledContainerTop = styled(Box)(({ theme }) => ({
	height: "88%",
	width: "95%",
	margin: "5px auto",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	textAlign: "center"
}))

const StyledImageContainer = styled(Box)(({ theme }) => ({
	width: "180px",
	minHeight: "100px",
	borderRadius: theme.shape.default,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "grey",
	marginBottom: "10px"
}))

const imageStyle = {
	width: "150px",
}

const headerStyle = {
	fontWeight: "900",
	fontSize: "17px"
}

const StyledIcons = styled(Box)(({ theme }) => ({
	width: "40%",
	display: "flex",
	justifyContent: "space-around",
	alignItems: "center"
}))

const StyledRating = styled(Box)(({ theme }) => ({
	width: "40%",
	display: "flex",
}))

const StyledContainerFooter = styled(Box)(({ theme }) => ({
	height: "12%",
	width: "95%",
	margin: "auto",
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	textAlign: "left"
}))

const VehicleCards4 = ({item}) => {
	return (
		<StyledVehicleCardsContainer  sx={{ boxShadow: 5}}>
			<StyledContainerTop maxWidth="xl">
				<StyledImageContainer>
					<img 
						style={imageStyle}
						src={item.body.vehicle.src}
						alt={item.body.vehicle.alt}
						/>
				</StyledImageContainer>
				<Typography variant="body1" style={headerStyle}>
					{item.body.owner}
				</Typography>
				<StyledIcons>
					{
						item.body.allOwnerVehiclesIcons.map(((el, i) => (
							<Box key={i}>
								{el}
							</Box>
						)))
					}
				</StyledIcons>
				<StyledRating>
					<Rating
						name="transporter-rating"
						value={item.ratings}
						readOnly
						precision={0.5}
						emptyIcon={<StarIcon style={{ opacity: 0.55, color: "grey" }} fontSize="inherit" />}
						/>
				</StyledRating>
			</StyledContainerTop>
			<Divider/>
			<StyledContainerFooter maxWidth="xl">
				<Typography variant="body1">
					{item.footer.vehicleId}
				</Typography>
				<Typography variant="body1">
					{item.status}
				</Typography>
			</StyledContainerFooter>
		</StyledVehicleCardsContainer>
	)
}

export default VehicleCards4