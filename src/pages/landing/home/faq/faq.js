import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';
import TitleSubtitle from "../../../../components/titlesubtitle";
import { faqinfo } from "./faqinfo";
import { styled } from "@mui/system";

const StyledFaq = styled(Box)(({ theme }) => ({
	minHeight: "80vh",
	display: "flex",
	justifyContent: "center",
	alignItems: "center"
}))

const StyledContainer = styled(Container)(({ theme }) => ({
	marginBottom: "50px"
}))

const Faq = () => {
	return (
		<StyledFaq>
			<StyledContainer>
				<TitleSubtitle
					title={faqinfo.title}
					section={faqinfo.section}
					subtitle={faqinfo.subtitle}
				/>
			
				{
					faqinfo.body.map((ac, i) => (
						<Accordion key={i}>
							<AccordionSummary expandIcon={<ExpandMoreIcon/>}>
								<Typography variant="h4">{ac.question}</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography variant="body1">{ac.answer}</Typography>
							</AccordionDetails>
						</Accordion>
					))
				}

			</StyledContainer>
		</StyledFaq>
	)
}

export default Faq