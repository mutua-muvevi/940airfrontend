import React from 'react';
import { Button, Grid } from "@mui/material";
import { contactFormInfo } from "./contactforminfo";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextfieldWrapper from "../../../../components/formui/textfield";
import SendIcon from '@mui/icons-material/Send';

const INITIAL_FORM_STATE = {
	fullname: "",
	email: "",
	subject: "",
	message: ""
}

const FORM_VALIDATION = Yup.object().shape({
	fullname: Yup.string().min(3).max(100).required(),
	email: Yup.string().email().min(3).max(100).required(),
	subject: Yup.string().min(3).max(100).required(),
	message: Yup.string().min(3).max(100).required(),

})

const ContactForm = () => {

	const submitHandler = (values, { resetForm }) => {
		console.log(values)
		resetForm()
	}

	return (
		<Formik
			initialValues={{
				...INITIAL_FORM_STATE
			}}
			validationSchema={ FORM_VALIDATION }
			onSubmit = {submitHandler}
		>
			<Form>
				<Grid container spacing={2}>
					{
						contactFormInfo.map((input, i) => (
							<Grid key={i} item xs={input.xs}>
								<TextfieldWrapper
									key={i}
									name={input.name}
									label={input.label}
									type={input.type}
								/>
							</Grid>
						))
					}
					<Grid item xs={12}>
						<TextfieldWrapper
							name="message"
							label="Message"
							type="text"
							multiline
							rows="4"
							sx={{marginBottom: "20px"}}
						/>
					</Grid>
				</Grid>
				<Button variant="contained" type="submit" color="primary"  endIcon={<SendIcon/>}>
					Submit Quotation
				</Button>
			</Form>
		</Formik>
	)
}

export default ContactForm