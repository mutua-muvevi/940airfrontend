import React from 'react';
import { Button } from "@mui/material";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { bannerInputs } from "./bannerInfo";
import TextfieldWrapper from "../../../../components/formui/textfield";
import SendIcon from '@mui/icons-material/Send';

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

const BannerForm = () => {

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
				{
					bannerInputs.map((input, i) => (
						<TextfieldWrapper
							key={i}
							name={input.name}
							label={input.label}
							type={input.type}
							sx={{marginBottom: "20px"}}
						/>
					))
				}
				<TextfieldWrapper name="message" label="your message" type="text" multiline rows={4} sx={{marginBottom: "20px"}}/>
				<Button variant="contained" type="submit" color="primary"  endIcon={<SendIcon/>}>
					Submit Quotation
				</Button>
			</Form>
		</Formik>
	)
}

export default BannerForm