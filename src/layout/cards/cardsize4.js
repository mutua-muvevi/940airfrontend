import { Box, Card, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from 'react';

const StyledCard = styled(Card)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	textAlign: "center",
	padding: "10px"
}))

const StyledIconBox = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
	width: "70px",
	height: "70px",
	borderRadius: "50%",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	textAlign: "center",
	color: theme.palette.common.white,
	marginBottom: "20px"
}))

const titleStyles = {
	marginBottom: "30px",
}

const textStyles = {
	marginBottom: "30px",
}

const CardSize4 = ({icon, title, text}) => {
	return (
		<StyledCard>
			<StyledIconBox>
				{icon}
			</StyledIconBox>
			<Typography style={titleStyles} variant="h3" >
				{title}
			</Typography>
			<Typography style={textStyles} variant="body1">
				{text}
			</Typography>
		</StyledCard>
	)
}

export default CardSize4