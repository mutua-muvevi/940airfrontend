import React from 'react';

import { Box, Container, Grid, Rating, Typography } from "@mui/material";
import { styled } from "@mui/system";


import StarIcon from '@mui/icons-material/Star';

import TableComponent from "../../table/table";
import VehicleCarousel from "./vehiclecarousel";
import { vehicleGridSegment, vehicleTable } from "./vehicleinfocontent";
import Owner from "../../../assets/images/african man.jpg"


const StyledContainerWrapper = styled(Container)(({ theme }) => ({
	height: "100%",
	paddingTop: "10px",
	paddingBottom: "10px",
}))

const StyledPlateWrapper = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	marginTop: "10px"
}))


const StyledDescriptionWrapper = styled(Box)(({ theme }) => ({
	minHeight: "14vh",
	display: "flex",
	justifyContent: "left",
	alignItems: "center",
}))

const StyledVehicleTableContainer = styled(Box)(({ theme }) => ({
	margin: "10px auto",
}))

const StyledGridItemSegment = styled(Grid)(({ theme }) => ({
	marginTop: "10px",
	marginBottom: "10px",
}))

const StyledGridItemSegmentValue = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "left",
	alignItems: "center",
	textAlign: "left"
}))

const StyledOwnerSection = styled(Box)(({ theme }) => ({
	textAlign: "left"
}))

const StyledOwnerSectionDetails = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "left",
	alignItems: "center",
	textAlign: "left",
	margin: "10px auto"
}))

const ownersImage = {
	width: "50px",
	borderRadius: "10px"
}

const StyledRating = styled(Box)(({ theme }) => ({
	width: "40%",
	marginTop: "10px",
	display: "flex",
	flexDirection: "column"
}))

const VehicleInfo = () => {
	return (
		<StyledContainerWrapper maxWidth="xl">
			<VehicleCarousel/>
			<StyledPlateWrapper>
				<Typography variant="h3" gutterBottom>
					Truck name
				</Typography>
				<Typography variant="h3" gutterBottom>
					Plate: ZZZ 000Z
				</Typography>
			</StyledPlateWrapper>

			<StyledDescriptionWrapper>
				<Typography variant="body2">
					LoremNisi consequat nostrud Lorem ad cillum Lorem. Ullamco dolore magna non qui sint do cupidatat 
					occaecat in. Exercitation esse id velit laborum occaecat consectetur dolor ullamco dolore. 
					Magna exercitation nisi fugiat eiusmod. Sit non irure sint excepteur aute sint commodo laboris. 
					Tempor sit anim sint sit dolor dolor.
				</Typography>
			</StyledDescriptionWrapper>

			<Grid container spacing={3}>
				{
					vehicleGridSegment.map((el, i) => (
						<StyledGridItemSegment item key={i} xs={3}>
							<Typography variant="body1">
								{el.name}
							</Typography>
							<StyledGridItemSegmentValue>
								<Typography style={{marginLeft: "5px"}} variant="body2">
									{el.value}
								</Typography>
								<Typography style={{marginLeft: "5px"}} variant="body2">
									{el.unit}
								</Typography>
								<Box sx={{marginLeft: "5px"}}>
									{ el.icons.map((icon) => icon) }
								</Box>
							</StyledGridItemSegmentValue>
						</StyledGridItemSegment>

					))
				}
			</Grid>

			<StyledVehicleTableContainer>
				<Typography variant="h4">
					Recent trips
				</Typography>
				<TableComponent table={vehicleTable}/>
			</StyledVehicleTableContainer>
			<StyledOwnerSection>
				<Typography variant="h4" gutterBottom>
					Vehicle Owner
				</Typography>
				<StyledOwnerSectionDetails>
					<img
						style={ownersImage}
						src={Owner}
						alt="The owner of the vehicle"
						/>
					<Typography style={{marginLeft: "20px"}} variant="body1">
						Firstname Nomeclature
					</Typography>
				</StyledOwnerSectionDetails>
			</StyledOwnerSection>
			<StyledRating>
				<Typography variant="h4">
					Ratings
				</Typography>
				<Rating
					sx={{marginTop: "10px"}}
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