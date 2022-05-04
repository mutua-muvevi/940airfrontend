import React from 'react';

import { Card } from "@mui/material";
import { styled } from "@mui/system"

const StyledAuthCard = styled(Card)(({ theme }) => ({
	position: "relative",
	zIndex: 2,
	top: "10vh",
	left: "10vw",
	width: "80vw",
	minHeight: "80vh"
}))

const AuthCard = ({ children }) => {
	return (
		<StyledAuthCard>
			{ children }
		</StyledAuthCard>
	)
}

export default AuthCard