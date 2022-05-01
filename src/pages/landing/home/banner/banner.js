import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import React from 'react';
import { bannerInfo } from "./bannerInfo";
import { styled } from "@mui/system";
import AddIcon from '@mui/icons-material/Add';

import { Link } from "react-router-dom";
import ShapeOne from "../shapeone";
import BannerForm from "./bannerform";

const StyledBannerWrapper = styled(Box)(({theme}) => ({
	marginTop: "20px",
	overFlow: "hidden",
	// backgroundColor: "red",
	// maxHeight: "100vh"

}))

const StyledContentWrapper = styled(Grid)(({theme}) => ({
}))

const StyledLeftContentWrapper = styled(Grid)(({theme}) => ({
	minHeight: "90vh",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "left"
}))

const StyledRighttContentWrapper = styled(Grid)(({theme}) => ({
	minHeight: "90vh",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "left",
}))

const titleStyle = {
	fontSize: "45px"
}

const paragraphStyle = {
	marginTop: "30px",
	fontSize: "16px"
}

const StyledPaper = styled(Paper)(({theme}) => ({
	textAlign: 'left',
	color: theme.palette.text.secondary,
	padding: "20px"
}))

// const bgshapeOne ={
// 	position: "absolute",
// 	left: "20px",
// 	zIndex: -2
// }

const Banner = () => {
	return (
		<StyledBannerWrapper id="home">
			<Container>
				<StyledContentWrapper container>
					<StyledLeftContentWrapper item lg={7} sm={12}>
						<Typography variant="h3" style={titleStyle}>
							{bannerInfo.title}
						</Typography>
						{
							bannerInfo.paragraph.map((p, i) => (
								<Typography key={i} variant="body1" style={paragraphStyle}>
									{p}
								</Typography>
							))
						}
						<Link to="/about" style={{textDecoration: "none", color: "white", width: "240px"}}>
							<Button color="primary" sx={{width: "240px", marginTop: "30px"}} variant="contained" endIcon={<AddIcon/>}>
								More
							</Button>
						</Link>
					</StyledLeftContentWrapper>

					<StyledRighttContentWrapper item lg={5} sm={12}>
						<StyledPaper elevation={2}>
							<Box>
								<BannerForm/>
							</Box>
						</StyledPaper>
					</StyledRighttContentWrapper>
				</StyledContentWrapper>

			</Container>

		</StyledBannerWrapper>
	)
}

export default Banner