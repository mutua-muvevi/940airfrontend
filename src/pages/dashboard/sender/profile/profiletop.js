import React from 'react';

import { Box } from "@mui/material";
import { styled } from "@mui/system"

const StyledProfileTop = styled(Box)(({ theme }) => ({
	height: "30vh",
	width: "100%",
	backgroundColor: theme.palette.primary.main,
}))

const ProfileTop = () => {
	return (
		<StyledProfileTop>
			
		</StyledProfileTop>
	)
}

export default ProfileTop