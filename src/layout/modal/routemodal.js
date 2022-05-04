import React from 'react';

import { Box, Button, Container, Divider, Modal, Typography } from '@mui/material';
import { styled } from '@mui/system';
import RouteModalBody from './routemodalbody';


const styleModal = {
	position: 'absolute',
	top: "10vh",
	width: "80vw",
	height: "80vh",
	margin: "auto 10vw",
	bgcolor: '#fff',
	borderRadius: "10px",
	boxShadow: 24,
  };

const StyledContainer = styled(Container)(({ theme }) => ({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	minHeight: "70px"
}))

const RouteModal = ({modal, setModal}) => {

  return (
	  <Modal
		open={modal}
		onClose={() => setModal(false)}
	>
		<Box sx={styleModal}>
			<StyledContainer maxWidth="xl">
				<Typography variant="h2">
					Route Details
				</Typography>
				<Button variant="outlined" color="primary">
					Request now
				</Button>
			</StyledContainer>
			<Divider/>
			<Box>
				<RouteModalBody/>
			</Box>
		</Box>
	</Modal>
  )
}

export default RouteModal