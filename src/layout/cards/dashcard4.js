import { Card, Typography } from '@mui/material';
import { styled } from "@mui/system"
import React from 'react';

const StyledCard = styled(Card)(({ theme }) => ({
	padding: "10px",
	minHeight: "20vh"
}))

const DashCard4 = ({ info }) => {
	return (
		<StyledCard>
			<Typography variant="h3">
				{info}
			</Typography>
			<Typography variant="body1">
				This is a place holder text to see how the card will look like
			</Typography>
		</StyledCard>
	)
}

export default DashCard4