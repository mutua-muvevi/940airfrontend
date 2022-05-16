import React from 'react';

import { Box, Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledGridItem = styled(Grid)(({ theme }) => ({
	minHeight: "10vh",
	margin: "10px auto"
}))

const ProfileInfo = () => {
	
	const userprofile = [
		{
			label: "firstname",
			value: "firstname",
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12
		},
		{
			label: "lastname",
			value: "lastname",
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12
		},
		{
			label: "email",
			value: "email",
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12
		},
		{
			label: "telephone",
			value: "telephone",
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12
		},
		{
			label: "ID/Passport Number",
			value: "12313413524",
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12
		},
		{
			label: "role",
			value: "sender",
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12
		},
		{
			label: "address",
			value: "address",
			xl: 12,
			lg: 12,
			md: 12,
			sm: 12,
			xs: 12
		},
		{
			label: "bio",
			value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus sem, pulvinar vitae sodales quis, dapibus sit amet quam. Vivamus eget odio accumsan, facilisis enim id, euismod nibh. Nulla facilisi. Fusce nec rhoncus erat. Nulla sagittis hendrerit lacus eu finibus. Vestibulum massa enim, maximus tincidunt sollicitudin at, tristique non urna. Mauris a vehicula ligula, eget malesuada dolor. Vestibulum ullamcorper pharetra feugiat. Suspendisse in tincidunt orci. Curabitur eget hendrerit ante, congue imperdiet magna. Praesent finibus velit in iaculis facilisis. Pellentesque non dui placerat, gravida leo vitae, fringilla risus.",
			xl: 12,
			lg: 12,
			md: 12,
			sm: 12,
			xs: 12
		},
	]
	
	return (
		<Box>
			<Grid container spacing={2}>
				{
					userprofile.map((el, i) => (
						<StyledGridItem item key={i} xl={el.xl} lg={el.lg} md={el.md} sm={el.sm} xs={el.xs}>
							<Container>
								<Typography variant="body1" style={{textTransform: "capitalize", fontWeight: "bold"}}>
									{el.label}
								</Typography>
								<Box>
									<Typography variant="body2">
										{el.value}
									</Typography>
								</Box>
							</Container>
						</StyledGridItem>
					))
				}
			</Grid>
		</Box>
	)
}

export default ProfileInfo