import { Box } from "@mui/material";
import React from 'react';
import { Outlet } from "react-router-dom";
import Footer from "../../../components/landing/footer/footer";
import Navbar from "../../../components/landing/navbar/navbar";

const LandingUI = () => {
	return (
		<Box>
			<Navbar/>
			<Outlet/>
			<Footer/>
		</Box>
	)
}

export default LandingUI