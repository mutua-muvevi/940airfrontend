import React, { useState } from 'react';

import { Formik, Form } from "formik";
import * as Yup from "yup";

import { Button, ButtonGroup, Grid } from "@mui/material";
import { styled } from "@mui/system";
import SendIcon from '@mui/icons-material/Send';
import ClearIcon from '@mui/icons-material/Clear';

import TextfieldWrapper from "../../formui/textfield";
import { pickupFormInputs } from "./pickupforminfo";
import AlertModal from "../../../layout/modal/alertmodal/alertmodal";


const StyledGridContainer = styled(Grid)(({ styled }) => ({
	
}))

const INITIAL_FORM_STATE = {
	fullname: "",
	email: "",
	telephone: "",
	
	pickuplocation: "",
	dropdestination: "",
	item: "",

	weight: "",
	matter: "",
	volume: "",
	description: ""
}

const FORM_VALIDATION = Yup.object().shape({
	fullname: Yup.string().min(3).max(100).required("Please add your name"),
	email: Yup.string().min(3).max(100).email("Please add a valid email").required("Please add your email"),
	telephone: Yup.string().min(3).max(100).required("Please add your telephone number"),

	pickuplocation: Yup.string().min(3).max(100).required("Please add your name"),
	dropdestination: Yup.string().min(3).max(100).required("Please add the destination to drop"),
	item: Yup.string().min(3).max(100).required("Please the name of the item you want transported"),

	weight: Yup.number().min(0).max(1000000).required("Please add the weight of the product"),
	matter: Yup.string().min(3).max(100).required("Please specify whether solid, liquid, plasma"),
	volume: Yup.number().min(0).max(1000000).required("Please add the volume"),

	description: Yup.string().min(3).max(100).required("Please add enter items description"),
})

const PickupForm = ({ setOpen, onClose }) => {

	const [alert, setAlert] = useState(false)
	const [ alertSuccessDisplay, setAlertSuccessDisplay ] = useState("");

	const submitHandler = (values, { resetForm }) => {
		console.log(values)
		setAlert(true)
		setAlertSuccessDisplay("flex")

		setTimeout(() => {
			setAlert(false)
		}, 4000)

		setTimeout(() => {
			onClose(false)
		}, 6000)
	}

	return (
					
		<Formik
			initialValues={{
				...INITIAL_FORM_STATE
			}}
			validationSchema={ FORM_VALIDATION }
			onSubmit = { submitHandler }
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
				<StyledGridContainer container spacing={2}>
					{
						pickupFormInputs.map((input, i) => (
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
								Submit Quotation
							</Button>
							<Button onClick={() => setOpen(false)} type="submit" color="error" endIcon={<ClearIcon/>}>
								Cancel Quotation
							</Button>
						</ButtonGroup>
					</Grid>
				</StyledGridContainer>
			</Form>

		</Formik>
	)
}

export default PickupForm