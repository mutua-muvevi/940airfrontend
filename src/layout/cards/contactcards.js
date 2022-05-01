import { Box, Card, Grid, List, ListItemText, Typography } from "@mui/material";
import React from 'react';
import { styled } from "@mui/system";

const StyledCards = styled(Card)(({ theme }) => ({
	minHeight: "150px",
	padding: "10px",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	textAlign: "left"
}))

const IconWrapper = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
	color: "white",
	width: "80px",
	height: "80px",
	borderRadius: "50%",
	display: "flex",
	alignItems: "center",
	justifyContent: "center"
}))

const ContactCardsItem = ({icon, title, items}) => {
	return (
		<StyledCards>
			<Grid container spacing={2}>
				<Grid item xs={3}>
					<IconWrapper>
						{icon}
					</IconWrapper>
				</Grid>
				
				<Grid item xs={9}>
					<Typography variant="h4" style={{marginBottom: "10px"}}>
						{title}
					</Typography>
					<List dense>
						{
							items.map((p, i) => (
								<ListItemText key={i} primary={p}/>
							))
						}
					</List>
				</Grid>
			</Grid>
		</StyledCards>
	)
}

export default ContactCardsItem