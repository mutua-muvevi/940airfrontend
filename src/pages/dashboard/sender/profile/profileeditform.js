import React, { useState } from 'react';

import { Formik, Form } from "formik";
import * as Yup from "yup";

import { Box, Button, ButtonGroup, Container, Grid } from "@mui/material";
import { styled } from "@mui/system";

import SendIcon from '@mui/icons-material/Send';

import { profileEditFormContent } from "./profilecontent";
import AlertModal from "../../../../layout/modal/alertmodal/alertmodal";
import TextfieldWrapper from "../../../../components/formui/textfield";

const INITIAL_FORM_STATE = {
	firstname: "",
	lastname: "",
	email: "",
	telephone: "",
	city: "",
	country: "",
	idnumber: "",
	role: "",
	description: "",
}

const FORM_VALIDATION = Yup.object().shape({
	firstname: Yup.string().min(3).max(100).required("Please add your firstname"),
	lastname: Yup.string().min(3).max(100).required("Please add your lastname"),
	email: Yup.string().email("Please add a valid email").min(3).max(100).required("Please add your email"),
	telephone: Yup.string().min(3).max(100).required("Please add your telephone number"),
	city: Yup.string().min(3).max(100).required("Please add your city"),
	country: Yup.string().min(3).max(100).required("Please add your country"),
	idnumber: Yup.string().min(3).max(100).required("Please add your ID number"),
	role: Yup.string().min(3).max(100).required("Please add your role"),
	description: Yup.string().min(3).max(100).required("Please add your description"),

})

const ProfileEditForm = () => {

	
	const [alert, setAlert] = useState(false)
	const [ alertSuccessDisplay, setAlertSuccessDisplay ] = useState("");

	const submitHandler = (values, { resetForm }) => {
		console.log(values)

		setTimeout(() => {
			setAlert(true)
			setAlertSuccessDisplay("block")
		}, 3000);

		resetForm()
	}

	return (
		<Box>
			<Formik
				initialValues={{
					...INITIAL_FORM_STATE
				}}
				validationSchema={ FORM_VALIDATION }
				onSubmit = {submitHandler}
			>
				<Form>
					<AlertModal 
						open={alert}
						setOpen={setAlert}
						severity="success"
						title="Success"
						body="Request submitted successfuly"
						display={alertSuccessDisplay}
						setDisplay={setAlertSuccessDisplay}
					/>
					<Container>
						<Grid container spacing={2}>
								{
									profileEditFormContent.map((input, i) => (
										<Grid key={i} item xl={input.xl} lg={input.lg} md={input.md} sm={input.sm} xs={input.xs}>
											<TextfieldWrapper 
												label={input.label}
												size="small"
												name={input.name} 
												type={input.type} 
												required={input.required}
												multiline={input.multiline}
												rows={input.rows}
												/>
										</Grid>
									))
								}
								
								<Grid item>
									<Button variant="contained" type="submit" color="primary"  endIcon={<SendIcon/>}>
										Submit Profile
									</Button>
								</Grid>
						</Grid>
					</Container>
				</Form>
			</Formik>
		</Box>
	)
}

export default ProfileEditForm