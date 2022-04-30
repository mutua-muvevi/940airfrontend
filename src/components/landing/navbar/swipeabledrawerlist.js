import React, { useState } from 'react';

import { Box, Divider, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { styled } from "@mui/system";

import Logo from "../../../assets/images/logos/940 air cargo logo.png";

import { navbarContent } from "./navbarcontent";
import { NavLink } from "react-router-dom";


const StyledLogoListItem = styled(List)(({theme}) => ({
	backgroundColor: theme.palette.common.white
}))

const LogoParent = styled(ListItem)(({theme}) => ({
	height: "18vh",
}))

const LogoItem = styled("img")(({theme}) => ({
	width: "60vw",
	height: "100%",
	marginLeft: "auto",
	marginRight: "auto",
	marginBottom: "20px",
	margin: "20px auto"
}))

const activeNavlink={
	textDecoration: "none",
	color: "#1976d2",
	borderTopLeftRadius: "20px",
	borderBottomLeftRadius: "20px",
	background: "white !important"
}

const navlinkStyle = {
	textDecoration: "none",
	color: "white"
}


const SwipeableDrawerList = ({ mobileNav, setMobileNav }) => {

	const [selectedIndex, setSelectedIndex] = useState(0);

	const handleListItemClick = (event, index) => {
		setSelectedIndex(index);
	};

	return (
		<Box
			role="presentation"
			onClick={() => setMobileNav(false)}
			onKeyDown={() => setMobileNav(false)}
		>
			<StyledLogoListItem component="nav" aria-label="940 air navigation" sx={{backgroundColor: "inherit"}}>
				<LogoParent>
					<LogoItem src={Logo} alt="940 air Logo"/>
				</LogoParent>

				<List>
					{
						navbarContent.navItems.map((nav, i) => (
							<NavLink 
								to={nav.path} 
								key={i}
								style={({isActive}) => 
									isActive ? activeNavlink : navlinkStyle
								}
							>
								<ListItemButton
									selected={selectedIndex === nav.index}
									onClick={(event) => handleListItemClick(event, 0)}
									sx={{
										minHeight: 48,
										justifyContent: mobileNav ? 'initial' : 'center',
										px: 2.5,
									}}
								>
									{nav.icon}
									<ListItemText primary={nav.text} sx={{ opacity: mobileNav ? 1 : 0 , marginLeft: "15px", color: "black"}} />

								</ListItemButton>
							</NavLink>
						))
					}
				</List>

				<Divider/>
				
				<List>
					{
						navbarContent.navActionItems.map((nav, i) => (
							<NavLink 
								to={nav.path} 
								key={i}
								style={({isActive}) => 
									isActive ? activeNavlink : navlinkStyle
								}
							>
								<ListItemButton
									selected={selectedIndex === nav.index}
									onClick={(event) => handleListItemClick(event, 0)}
									sx={{
										minHeight: 48,
										justifyContent: mobileNav ? 'initial' : 'center',
										px: 2.5,
									}}
								>
									{nav.icon}
									<ListItemText primary={nav.text} sx={{ opacity: mobileNav ? 1 : 0 , marginLeft: "15px", color: "black"}} />

								</ListItemButton>
							</NavLink>
						))
					}
				</List>

			</StyledLogoListItem>
		</Box>
	)
}

export default SwipeableDrawerList