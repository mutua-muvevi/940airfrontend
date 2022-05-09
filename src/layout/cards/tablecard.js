import React from 'react';

import { Box, Divider, Typography } from "@mui/material";
import { styled } from "@mui/system";


const StyledCardWrapper = styled(Box)(({ theme }) => ({
	backgroundColor: "#fff",
	height: "100%",
	borderRadius: theme.shape.default,
}))


const StyledCardTop = styled(Box)(({ theme }) => ({
	padding: "6px",
	marginLeft: "4px"
}))

const titleStyle = {
	fontWeight: "bold",
	textTransform: "capitalize",
	fontSize: "18px",
}

const StyledCardBottom = styled(Box)(({ theme }) => ({
	margin: "auto",
	padding: "2px auto"
}))

const TableCard = () => {
	return (
		<StyledCardWrapper  sx={{ boxShadow: 5}}>
			<StyledCardTop>
				<Typography variant="h4" style={titleStyle}>
					Table title
				</Typography>
			</StyledCardTop>
			<Divider/>
			<StyledCardBottom>

			</StyledCardBottom>
		</StyledCardWrapper>
	)
}

export default TableCard