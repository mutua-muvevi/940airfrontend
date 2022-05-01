import { Box, Container, Grid, Typography } from "@mui/material";
import React from 'react';
import { contacttextform } from "./contacttextforminfo";
import { styled } from "@mui/system"
import ContactForm from "../contactform/contactform";


const StyledContactTextForm = styled(Container)(({ theme }) => ({
	margin: "30px auto",
    minHeight: "70vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "left"

}))

const ContactTextForm = () => {
  return (
    <StyledContactTextForm>
        <Grid container spacing={2}>
            <Grid item lg={6} sm={12}>
                <Typography variant="h4" style={{marginBottom: "20px"}}>
                    { contacttextform.title }
                </Typography>
                {
                    contacttextform.paragraph.map((p, i) => (
                        <Typography key={i} variant="body1" style={{margin: "10px auto"}}>
                            {p}
                        </Typography>
                    ))
                }
            </Grid>
            <Grid item lg={6} sm={12}>
                <Box>
                    <ContactForm/>
                </Box>
            </Grid>
        </Grid>
    </StyledContactTextForm>
  )
}

export default ContactTextForm