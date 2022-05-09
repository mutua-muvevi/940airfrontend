import React from 'react';

import { Box, Button, Container, Divider, Modal, Typography } from '@mui/material';
import { styled } from '@mui/system';
import RouteModalBody from './routemodalbody';


const styleModal = {
	position: 'absolute',
	top: "5vh",
	width: "80vw",
	height: "90vh",
	margin: "auto 10vw",
	bgcolor: '#fff',
	borderRadius: "10px",
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

  return (
	  <Modal
		open={modal}
		onClose={() => setModal(false)}
	>
		<Box sx={styleModal}>
			<StyledContainer maxWidth="xl">
				<Typography variant="h3">
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