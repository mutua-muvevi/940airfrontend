import React, { useState } from 'react'

import { Box, Container, Divider, Typography } from "@mui/material";
import { styled } from "@mui/system";

import ProfileEditForm from "./profileeditform";

const StyledProfileCard = styled(Box)(({ theme }) => ({
	minHeight: "70vh",
	borderRadius: theme.shape.default,
	backgroundColor: theme.palette.common.white,
	position: "relative",
	zIndex: 3,
	marginTop: "-15vh",
	filter: "drop-shadow(1px 4px 10px rgba(0, 0, 0, 0.58))"
}));

const StyledProfileCardTop = styled(Box)(({ theme }) => ({
	height: "7vh",
	display: "flex",
	justifyContent: "left",
	textAlign: "left",
	alignItems: "center"
}))

const ProfileRight = () => {

	return (
		<StyledProfileCard>
			<StyledProfileCardTop>
				<Container maxWidth="xl">
					<Typography variant="body1">
						Edit
					</Typography>
				</Container>
			</StyledProfileCardTop>

			<Divider/>

			<Container maxwidth="xl">
				<ProfileEditForm/>
			</Container>
		</StyledProfileCard>
	)
}

export default ProfileRight