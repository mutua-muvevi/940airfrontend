import React, { useState }  from 'react';
import { Outlet } from "react-router-dom";

import { Box, CssBaseline, Fade} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { styled } from "@mui/system";

import VendorDrawer from "../../../components/vendornavigation/vendordrawer";
import VendorTopBar from "../../../components/vendornavigation/vendortopbar";


const Main = styled(Box)(({theme}) => ({
	backgroundColor: theme.background.default,
	minHeight: "100vh"
}))

const VendorUI = () => {
	const theme = useTheme();
	const [open, setOpen] = useState(true);

	const handleDrawerOpen = () => {
	  setOpen(true);
	};
	
	const handleDrawerClose = () => {
	  setOpen(false);
	};

	return (
		<Fade in timeout={1000}>
			<Box  sx={{ display: 'flex' }}>
				<CssBaseline/>

				<VendorDrawer  handleDrawerOpen={handleDrawerOpen} open={open} theme={theme} handleDrawerClose={handleDrawerClose}/>

				<VendorTopBar handleDrawerOpen={handleDrawerOpen} open={open}/>

				<Main component="main" sx={{ flexGrow: 1, p: 3 , width: "100%"}}>
					{/* <DrawerHeader/> */}
					<Outlet/>
				</Main>			
			</Box>
		</Fade>
	)
}

export default VendorUI