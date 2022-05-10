import React from 'react';

import { Box, Container, Divider, Modal, Typography } from "@mui/material";
import { styled } from "@mui/system";

import PickupForm from "../../../components/admin/pickupform/pickupform";

const containerBox = {
	overflowY: "scroll",
	width: "72vw !important",
	height: "70vh",
	position: 'absolute',
	top: "15vh",
	margin: "auto 15vw",
	boxShadow: 24,
}

const styleModal = {
	width: "100%",
	minHeight: "70vh",
	bgcolor: '#fff',
	borderRadius: "5px",
};

const StyledHeader = styled(Container)(({ theme }) => ({
	paddingTop: "10px",
	paddingBottom: "10px",
}))

const StyledBody = styled(Container)(({ theme }) => ({
	paddingTop: "10px",
	paddingBottom: "10px",
	display: "flex",
	justifyContent: "left",
	alignItems: "center",
	textAlign: "left",
	width: "100%",
	height: "100%"
}))

const FormModal6 = ({ open, setOpen }) => {

	return (
		<Modal
			open={open}
			onClose={() => setOpen(false)}
		>
			<Box sx={containerBox}>
				<Box sx={styleModal}>
					<StyledHeader maxWidth="xl">
						<Typography variant="h3">
							Order Pickup with [variable]
						</Typography>
					</StyledHeader>
					<Divider/>
					<StyledBody>
						<PickupForm setOpen={setOpen} onClose={setOpen}/>
					</StyledBody>
				</Box>
			</Box>
		</Modal>
	)
}

export default FormModal6