import React, { useState } from 'react';
import PropTypes from "prop-types"

import { Box, Container, Divider, Tab, Tabs, Typography } from "@mui/material";
import { styled } from "@mui/system";

import ProfileEditForm from "./profileeditform";
import ProfileInfo from "./profileinfo";

const StyledProfileCard = styled(Box)(({ theme }) => ({
	minHeight: "70vh",
	borderRadius: theme.shape.default,
	backgroundColor: theme.palette.common.white,
	position: "relative",
	zIndex: 3,
	marginTop: "-15vh",
	filter: "drop-shadow(1px 4px 10px rgba(0, 0, 0, 0.58))"
}));

const StyledProfileCardTop = styled(Box)(({ theme }) => ({
	height: "7vh",
	display: "flex",
	justifyContent: "left",
	textAlign: "left",
	alignItems: "center"
}))


function TabPanel(props) {
	const { children, value, index, ...other } = props;
  
	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
			<Box sx={{ p: 3 }}>
				<Typography>{children}</Typography>
			</Box>
			)}
		</div>
	);
}
  
TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};
  
function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}


const ProfileRight = () => {

	const [ value, setValue ] = useState(0)

	
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<StyledProfileCard>
			<Box sx={{ width: '100%' }}>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
						<Tab label="User info" {...a11yProps(0)} />
						<Tab label="Edit profile" {...a11yProps(1)} />
					</Tabs>
				</Box>
				<TabPanel value={value} index={0}>
					<ProfileInfo/>
				</TabPanel>
				<TabPanel value={value} index={1}>
					<ProfileEditForm/>
				</TabPanel>
			</Box>
		</StyledProfileCard>
	)
}

export default ProfileRight