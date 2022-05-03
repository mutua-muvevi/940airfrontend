import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from 'react';
import { contactBannerInfo } from "./contactbannerinfo";


const StyledContactBanner = styled(Box)(({ theme }) => ({
	minHeight: "45vh",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center"
}))

const ContactBanner = () => {
	return (
		<StyledContactBanner>
			<Container>
				<Typography variant="h1" style={{marginBottom: "20px"}}>
					{contactBannerInfo.title}
				</Typography>
				<Typography variant="h4">
					{contactBannerInfo.subtitle}
				</Typography>
			</Container>
		</StyledContactBanner>
	)
}

export default ContactBanner