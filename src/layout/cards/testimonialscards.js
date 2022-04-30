import React from 'react';

import { Box, Card, Typography } from "@mui/material"
import { styled } from "@mui/system"

const StyledTestimonialsCard = styled(Card)(({theme}) => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "start",
	justifyContent: "center",
	textAlign: "left",
	padding: "10px"
}))

const StyledAuthorSection = styled(Box)(({theme}) => ({
	display: "flex",
	justifyContent: "left",
	alignItems: "center",
	margin: "10px auto",
	width: "100%"
}))

const StyledContentBox = styled(Box)(({ theme }) => ({
	marginLeft: "30px"
}))

const styledImage = {
	width: "80px",
	height: "80px",
	borderRadius: "50%"
}

const TestimonialsCards = ({name, profession, image, alt, text}) => {
	return (
		<StyledTestimonialsCard>
			<StyledAuthorSection>
				<img 
					src={image}
					alt={alt}
					style={styledImage}
				/>
				<StyledContentBox>
					<Typography variant="h4" style={{marginBottom: "10px"}}>
						{name}
					</Typography>

					<Typography style={{color: "#1877d2", textTransform: "uppercase"}} variant="h4">
						{profession}
					</Typography>
				</StyledContentBox>
			</StyledAuthorSection>
			<Typography style={{margin: "10px auto"}} variant="body1">
				{text}
			</Typography>
		</StyledTestimonialsCard>
	)
}

export default TestimonialsCards