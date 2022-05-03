import React from 'react';

import { styled } from "@mui/system";
import { Box, Button, Container, Divider, Typography } from '@mui/material';

import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const StyledTruckBox = styled(Box)(({ theme }) => ({
	height: "40%",
}))

const StyledVehicleTitle = styled(Box)(({ theme }) => ({
	height: "6.5vh",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "flex-end",
}))

const StyledButtonsContainer = styled(Box)(({ theme }) => ({
	width: "50%",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "flex-end",
}))

const buttonStyle = {
	textTransform: "lowercase",
	padding: "10px",
	minWidth: "150px"
}

const RouteModalVehicle = () => {
	return (
		<StyledTruckBox>
			<Container maxWidth="xl">
				<StyledVehicleTitle>
						<Typography variant="h3" style={{fontSize: "30px", color: "grey"}}>
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
								variant="outlined">
									email
							</Button>
						</StyledButtonsContainer>
				</StyledVehicleTitle>
			</Container>
			<Divider/>
			
		</StyledTruckBox>
	)
}

export default RouteModalVehicle