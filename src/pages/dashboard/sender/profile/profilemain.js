import React from 'react';

import { Container, Grid } from "@mui/material";

import ProfileLeft from "./profileleft";
import ProfileRight from "./profileright";


const ProfileMain = () => {
	return (
		<Container maxWidth="xl">
			<Grid container spacing={3}>
				<Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
					<ProfileLeft/>
				</Grid>
				<Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
					<ProfileRight/>
				</Grid>
			</Grid>
		</Container>
	)
}

export default ProfileMain