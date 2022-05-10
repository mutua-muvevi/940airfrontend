import React, { useState } from 'react';

import { Box, Button, Container, Divider, Modal, Typography } from '@mui/material';
import { styled } from '@mui/system';

import RouteModalBody from './routemodalbody';
import FormModal6 from "../formmodaL6/formmodal6";


const styleModal = {
	position: 'absolute',
	top: "5vh",
	width: "80vw",
	height: "90vh",
	margin: "auto 10vw",
	bgcolor: '#fff',
	borderRadius: "5px",
	boxShadow: 24,
};

const StyledContainer = styled(Container)(({ theme }) => ({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	paddingTop: "10px",
	paddingBottom: "10px",
}))

const RouteModal = ({modal, setModal}) => {

	const [open, setOpen] = useState(false)

	const handleModal = () => {
		setOpen(!open)
	}

	return (
		<>
			<Modal
				open={modal}
				onClose={() => setModal(false)}
			>
				<Box sx={styleModal}>
					<StyledContainer maxWidth="xl">
						<Typography variant="h3">
							Route Details
						</Typography>
						<Button variant="outlined" color="primary" onClick={handleModal}>
							Request now
						</Button>
					</StyledContainer>
					<Divider/>
					<Box>
						<RouteModalBody/>
					</Box>
				</Box>
			</Modal>
			<FormModal6 open={open} setOpen={setOpen} />
		</>
	)
}

export default RouteModal