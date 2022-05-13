import React, { useState } from 'react';

import { Formik, Form } from "formik";
import * as Yup from "yup";

import { Box, Button, ButtonGroup, Grid } from "@mui/material";
import { styled } from "@mui/system";
import SendIcon from '@mui/icons-material/Send';

import { profileEditFormContent } from "./profileeditform"
import AlertModal from "../../../../layout/modal/alertmodal/alertmodal";
import TextFieldWrapper from "../../../../components/formui/textfield";

const ProfileEditForm = () => {
	return (
		<Box>
			Profile edit form
		</Box>
	)
}

export default ProfileEditForm