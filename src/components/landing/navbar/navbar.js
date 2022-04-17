import { AppBar, Box, Button, ButtonGroup, Container, Tab, Tabs, Toolbar, Typography } from "@mui/material"
import { styled } from "@mui/styles";
import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { navbarContent } from "./navbarcontent";
import Logo from "../../../assets/images/logos/940 air cargo logo.png"




const navbarSX = {
	backgroundColor: "white",
	color: "primary",
}

const styledLogo = {
	width: "120px",
	marginLeft: 0
}

const navLinkStyles = {
	textDecoration: "none",
	display: "flex",
	justifyContent: "flex-end"
}

const navItemsSX = { 
	flexGrow: 1,
	display: { 
		xs: 'none',
		md: 'flex'
	},
	alignItems: "center",
	textAlign: "center !important",
	justifyContent: "end",
}

const tabStyle = {
	marginRight: "0 !important"
}

const Navbar = () => {

	const [navValue, setNavValue]= useState(0)

	return (
		<AppBar
			position="static"
			component="nav"
			sx={navbarSX}
		>
			<Container maxWidth="lg">
				<Toolbar>
						<img style={styledLogo} src={Logo} alt="940 ontrack logo"/>
						
						<Tabs sx={navItemsSX} centered >
							{
								navbarContent.navItems.map((el, i) => (
									<NavLink key={i} to={el.path} style={navLinkStyles}>
										<Tab icon={el.icon} iconPosition="start" label={el.text} sx={tabStyle}/>
									</NavLink>
								))
							}
						</Tabs>
						
						<ButtonGroup variant="contained">
							<Button color="primary">Login</Button>
							<Button color="secondary">Signup</Button>
						</ButtonGroup>

				</Toolbar>
			</Container>
		</AppBar>
	)
}

export default Navbar