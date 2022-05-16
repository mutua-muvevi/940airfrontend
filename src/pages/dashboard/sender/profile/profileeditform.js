import React, { useState } from 'react';

import { Formik, Form } from "formik";
import * as Yup from "yup";

import { Box, Button, ButtonGroup, Grid } from "@mui/material";
import { styled } from "@mui/system";

import SendIcon from '@mui/icons-material/Send';

import { profileEditFormContent } from "./profilecontent";
import AlertModal from "../../../../layout/modal/alertmodal/alertmodal";
import TextfieldWrapper from "../../../../components/formui/textfield";

const INITIAL_FORM_STATE = {
	fullname: "",
	email: "",
	telephone: "",
	title: "",
	message: ""
}

const FORM_VALIDATION = Yup.object().shape({
	fullname: Yup.string().min(3).max(100).required(),
	email: Yup.string().email().min(3).max(100).required(),
	telephone: Yup.string().min(3).max(100).required(),
	title: Yup.string().min(3).max(100).required(),
	message: Yup.string().min(3).max(100).required(),

})

const ProfileEditForm = () => {

	
	const [alert, setAlert] = useState(false)
	const [ alertSuccessDisplay, setAlertSuccessDisplay ] = useState("");

	const submitHandler = (values, { resetForm }) => {
		console.log(values)

		setTimeout(() => {
			setAlert(true)
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
					<Grid container spacing={2}>
						{
							profileEditFormContent.map((input, i) => (
								<Grid key={i} item xl={input.xl} lg={input.lg} md={input.md} sm={input.sm} xs={input.xs}>
									<TextfieldWrapper 
										size="small"
										name={input.name} 
										type={input.type} 
										required={input.required}
										multiline={input.multiline}
										rows={input.rows}
										label={input.label}/>
								</Grid>
							))
						}
						
						<Grid item>
							<ButtonGroup variant="contained" type="submit" sx={{marginTop: "30px"}}>
								<Button type="submit" color="primary"  endIcon={<SendIcon/>}>
									Submit Profile
								</Button>
							</ButtonGroup>
						</Grid>
					</Grid>
				</Form>
			</Formik>
		</Box>
	)
}

export default ProfileEditForm