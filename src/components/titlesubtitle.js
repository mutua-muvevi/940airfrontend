import { Box, Typography } from "@mui/material"
import { styled } from "@mui/system"
import React from 'react';

const TitleSubTitleWrapper = styled(Box)(({theme}) => ({
	minHeight: "35vh",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	marginBottom: "30px"
}))

const sectionFont = {
	textTransform: "upperCase",
	margin: "20px auto",
	textAlign: "center"
}

const titleFont = {
	color: "#1877d2",
	margin: "20px auto",
	textAlign: "center",
	lineHeight: "30px"
}

const subtitleFont = {
	margin: "20px auto",
	textAlign: "center",
	lineHeight: "30px"
}

const hrStyle = {
	width: "300px",
	textAlign: "center",
	border: "2px solid #1877d2"
}

const TitleSubtitle = ({section, title, subtitle}) => {
	return (
		<TitleSubTitleWrapper>
			<Typography variant="h4" style={sectionFont}>
				{section}
			</Typography>
			<Typography variant="h1" style={titleFont}>
				{title}
			</Typography>
			<hr style={hrStyle} />

			<Typography variant="h2" style={subtitleFont}>
				{subtitle}
			</Typography>
		</TitleSubTitleWrapper>
	)
}

export default TitleSubtitle