import React from 'react';

import { styled } from "@mui/system";
import { Box, Button, Container, Divider, Grid, Typography } from '@mui/material';

import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';

import Image from "../../../assets/images/truck.png";
import { smallCards } from "./routemodalinfo";

const StyledTruckBox = styled(Box)(({ theme }) => ({
	height: "40%",
}))

const StyledVehicleTitle = styled(Box)(({ theme }) => ({
	paddingTop: "10px",
	paddingBottom: "10px",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "flex-end",
}))

const StyledButtonsContainer = styled(Box)(({ theme }) => ({
	minWidth: "30%",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "flex-end",
}))

const buttonStyle = {
	textTransform: "lowercase",
}

const StyledImageContainer = styled(Box)(({ theme }) => ({
	width: "100%",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	margintop: "5px",
	marginBottom: "5px",
}))
const imageStyle = {
	width: "85%",
	margin: "5px auto"
}

const StyledSmallCardsWrapper = styled(Grid)(({ theme }) => ({
	width: "85%",
	margin: "5px auto",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	margintop: "5px",
}))

const StyledSmallCards = styled(Grid)(({ theme }) => ({
	backgroundColor: "grey",
	borderRadius: theme.shape.default,
	marginRight: "10px"
}))

const RouteModalVehicle = () => {
	return (
		<StyledTruckBox>
			<Container maxWidth="xl">
				<StyledVehicleTitle>
						<Typography variant="h3" style={{ color: "grey"}}>
							ID: 204572458
						</Typography>
						<StyledButtonsContainer>
							<Button 
								startIcon={<PhoneIcon/>}
								color="inherit" 
								style={buttonStyle}
								variant="outlined">
									phone
							</Button>
							<Button 
								startIcon={<EmailIcon/>}
								color="inherit" 
								style={buttonStyle}
								sx={{marginLeft: "10px"}}
								variant="outlined">
									email
							</Button>
							<Button 
								startIcon={<FolderOutlinedIcon/>}
								color="secondary" 
								style={buttonStyle}
								sx={{marginLeft: "10px"}}
								variant="contained">
									Documents
							</Button>
						</StyledButtonsContainer>
				</StyledVehicleTitle>
					<StyledImageContainer>
						<img
							src={Image}
							alt="track"
							style={imageStyle}
							/>
						<StyledSmallCardsWrapper container spacing={2}>
							{
								smallCards.map((el, i) => (
									<StyledSmallCards key={i} item xs={3}>
										<Typography style={{color: "#fff"}} variant="body2">
											{el.title}
										</Typography>
										<Typography variant="body2">
											{el.content}
										</Typography>
									</StyledSmallCards>
								))
							}
						</StyledSmallCardsWrapper>
					</StyledImageContainer>
			</Container>
			<Divider/>
			
		</StyledTruckBox>
	)
}

export default RouteModalVehicle