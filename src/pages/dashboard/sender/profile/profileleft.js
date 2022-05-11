import React from 'react';

import { Box, Divider, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { styled } from "@mui/system";

import Profile from "../../../../assets/images/african man.jpg"
import { profileLeftList } from "./profilecontent";

const StyledProfileCard = styled(Box)(({ theme }) => ({
	minHeight: "70vh",
	borderRadius: theme.shape.default,
	backgroundColor: theme.palette.common.white,
	position: "relative",
	zIndex: 3,
	marginTop: "-15vh",
	filter: "drop-shadow(1px 4px 10px rgba(0, 0, 0, 0.58))"
}))

const StyledImageSection = styled(Box)(({ theme }) => ({
	height: "38vh",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	textAlign: "center"
}))

const imageStyle = {
	width: "200px",
	borderRadius: "10px",
	marginBottom : "20px"
}

const StyledProfileList = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	textAlign: "center"
}))

const ProfileLeft = () => {
	return (
		<StyledProfileCard>
			<StyledImageSection>
				<img
					src={Profile}
					alt="user name variable profile"
					style={imageStyle}
				/>
				<Box>
					<Typography variant="body1" style={{fontWeight: "bold"}}>
						Firstname Nomecature
					</Typography>
					<Typography variant="body2">
						A sender
					</Typography>
				</Box>
			</StyledImageSection>
			<Divider/>
			<StyledProfileList>
				<List>
					{
						profileLeftList.map((el, i) => (
							<ListItem key={i}>
								<ListItemIcon>{el.icon}</ListItemIcon>
								<ListItemText primary={el.name} secondary={el.value}/>
							</ListItem>
						))
					}
				</List>
			</StyledProfileList>
		</StyledProfileCard>
	)
}

export default ProfileLeft