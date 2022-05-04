import React from 'react'

import { Box, Grid } from "@mui/material"
import AuthCard from "../../../layout/cards/authcard"
// import LoginImage from "../../../assets/images/illustrations/login.png"
import { styled } from "@mui/system"

const StyledImageContainer = styled(Grid)(({ theme }) => ({
	display: {
		xs: "none",
		sm: "none",
		md: "flex"
	},
	justifyContent: "center",
	alignItems: "center",
	minHeight: "80vh",
	backgroundColor: "red",
	margin: "0"
}))

const Login = () => {
	return (
		<Box>
			<AuthCard>
				<Grid container spacing={2}>
					<StyledImageContainer item lg={5}>
						{/* <img 
							src={LoginImage} 
							alt="Login Illustration"
							style={{width: "100%"}}
						/> */}
					</StyledImageContainer>

					<Grid item lg={7}>

					</Grid>
				</Grid>
			</AuthCard>
		</Box>
	)
}

export default Login