import { Divider, IconButton, List, ListItem, ListItemButton} from "@mui/material";
import MuiDrawer from '@mui/material/Drawer';
import { styled } from "@mui/system";
import React from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemText from '@mui/material/ListItemText';
import { listItemsBottom, listItemsTop } from "./senderdrawerlist";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logos/940 air cargo logo.png"


const drawerWidth = 350;

// open drawer mixin
const openedMixin = (theme) => ({
	width: drawerWidth,
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: 'hidden',
});

const LogoItem = styled("img")(({theme}) => ({
	width: "95%",
	marginLeft: "auto",
	marginRight: "auto",
	marginBottom: "20px",
	margin: "20px auto"
}))


// close drawer mixing
const closedMixin = (theme) => ({
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: 'hidden',
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up('sm')]: {
		width: `calc(${theme.spacing(8)} + 1px)`,
	},
});


const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	padding: theme.spacing(0, 1),
	paddingBottom: "10px",

	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}));

const navlinkStyle = {
	textDecoration: "none",
	color: "black"
}

const activeNavlink={
	textDecoration: "none",
	color: "#1976d2",
	borderTopLeftRadius: "20px",
	borderBottomLeftRadius: "20px",
	background: "white !important"
}


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
	({ theme, open }) => ({
		color: theme.palette.common.black,
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: 'nowrap',
		boxSizing: 'border-box',
		backgroundColor: "#131313 !important",
		...(open && {
			...openedMixin(theme),
			'& .MuiDrawer-paper': openedMixin(theme),
		}),
		...(!open && {
			...closedMixin(theme),
			'& .MuiDrawer-paper': closedMixin(theme),
		}),
		}),
  );

const DrawerComponent = ({open, handleDrawerOpen, handleDrawerClose, theme}) => {
	return (
		<Drawer
			anchor="left"
			open={open}
			variant="permanent"
			PaperProps={{
				sx: {
					backgroundColor: "white",
					color: "black"
				  }
			}}
		>
			
			<DrawerHeader>
				<IconButton onClick={handleDrawerClose}>
					{theme.direction === 'rtl' ? <ChevronRightIcon sx = {{color : "#fff"}}/> : <ChevronLeftIcon sx = {{color : "black"}}/>}
				</IconButton>
			</DrawerHeader>

			<List >
				<ListItem>
					<LogoItem src={Logo} alt="940 air cargo"/>
				</ListItem>
			

				{
					listItemsTop.map((el, index) => (
						<NavLink 
							style={({isActive}) => 
								isActive ? activeNavlink : navlinkStyle
							} 
							to={el.path} 
							key={index}>
							<ListItemButton
								sx={{
									minHeight: 48,
									justifyContent: open ? 'initial' : 'center',
									px: 2.5,
								}}
							>
								{el.icon}
								<ListItemText primary={el.label} sx={{ opacity: open ? 1 : 0 , marginLeft: "15px"}} />

							</ListItemButton>
						</NavLink>
					))
				}
				<Divider color="grey"/>

				{
					listItemsBottom.map((el, index) => (
						<NavLink 
							style={({isActive}) => 
								isActive ? activeNavlink : navlinkStyle
							} 
							to={el.path} 
							key={index}>
							<ListItemButton
								sx={{
									minHeight: 48,
									justifyContent: open ? 'initial' : 'center',
									px: 2.5,
								}}
							>
								{el.icon}
								<ListItemText primary={el.label} sx={{ opacity: open ? 1 : 0 , marginLeft: "15px", padding: "30px auto"}} />
								<Divider/>

							</ListItemButton>
						</NavLink>
					))
				}

			</List>

		</Drawer>
	)
}

export default DrawerComponent