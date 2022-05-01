import { 
	AppBar, 
	Button, 
	ButtonGroup, 
	Container, 
	IconButton, 
	List, 
	ListItemText, 
	ListItemButton, 
	ListItemIcon, 
	Toolbar 
} from "@mui/material";

import React, { useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import { navbarContent } from "./navbarcontent";

import StyledSwipeAbleDrawer from "./swipeablesidedrawer"
import Logo from "../../../assets/images/logos/940 air cargo logo.png";

import LockIcon from '@mui/icons-material/Lock';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import MenuIcon from '@mui/icons-material/Menu';



const navbarSX = {
	backgroundColor: "white",
	color: "primary",
}

const toolbarSX = {
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center"
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
	justifyContent: "center",
}

const buttonGroupSX = {
	display: { 
		xs: 'none',
		md: 'flex'
	}
}

const iconButtonSX = {
	display: { 
		xs: 'flex',
		md: 'none',
	}
}

const Navbar = () => {

	const [mobileNav, setMobileNav] = useState(false);

	const handleMobileNav = () => {
		setMobileNav(!mobileNav)
	}

	return (
		<AppBar
			position="static"
			component="nav"
			sx={navbarSX}
		>
			<Container maxWidth="lg">
				<Toolbar sx={toolbarSX}>
						<img style={styledLogo} src={Logo} alt="940 ontrack logo"/>
						
						<List sx={navItemsSX}>
							{
								navbarContent.navItems.map((el, i) => (
									<NavLink key={i} to={el.path} style={navLinkStyles}>
										<ListItemButton>
											<ListItemIcon>
												{el.icon}
											</ListItemIcon>
											<ListItemText primary={el.text} />
										</ListItemButton>
									</NavLink>
								))
							}
						</List>
						
						<ButtonGroup variant="contained" sx={buttonGroupSX}>
							<Link to="/auth/login" style={{textDecoration: "none", color: "white"}}>
								<Button color="primary" startIcon={<LockIcon/>} >Login</Button>
							</Link>
							
							<Link to="/auth/register" style={{textDecoration: "none", color: "white"}}>
								<Button color="secondary" startIcon={<HowToRegIcon/>} >Signup</Button>
							</Link>
						</ButtonGroup>

						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							sx={iconButtonSX}
							onClick={handleMobileNav}
						>
							{console.log(mobileNav)}
							<MenuIcon/>
						</IconButton>

				</Toolbar>
			</Container>

			<StyledSwipeAbleDrawer mobileNav={mobileNav} setMobileNav={setMobileNav}/>
		</AppBar>
	)
}

export default Navbar