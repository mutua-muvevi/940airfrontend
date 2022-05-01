import { Box } from "@mui/material";
import { styled } from "@mui/system";
import React from 'react';
import { Outlet } from "react-router-dom";

const StyledAuthLayout = styled(Box)(({ theme }) => ({
	backgroundColor: theme.background.default,
	minHeight: "99vh"
}))

const AuthLayout = () => {
	return (
		<StyledAuthLayout>
			<Outlet/>
		</StyledAuthLayout>
	)
}

export default AuthLayout