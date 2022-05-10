import React from 'react';

import { Alert, AlertTitle, Grow, } from "@mui/material";


const AlertModal = ({ open, setOpen, severity, title, body, display, setDisplay }) => {

	setTimeout(() => {
		setOpen(false)
		setDisplay("none")
	}, 5000)

	return (
		<Grow style={{ transformOrigin: '10 20 50' }} sx={{marginBottom: "10px"}} in={open} >
			<Alert  style={{display: `${display}`}}  severity={severity} variant="filled">
				<AlertTitle>{title}</AlertTitle>
				{ body }
			</Alert>
		</Grow>
	)
}

export default AlertModal