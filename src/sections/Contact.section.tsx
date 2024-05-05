import React from "react";
import { SectionContainer, TitleContainer } from "components/shared/containers";
import Title from "@/components/shared/Title";
import { CardContent, Typography, styled, Box, IconButton, Link } from "@mui/material";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import SectionWrapper from "components/shared/SectionContainer";

const StyledSection = styled(SectionContainer)`
  padding-top: 40%;
`;

const StyledTitlePaper = styled(TitleContainer)`
  width: 60%;
  margin: auto;
`;

const Contact: React.FC = () => {
  return (
    <SectionWrapper>
      <Title text="Contact" />
      <StyledSection>
        <StyledTitlePaper variant="outlined">
          <CardContent>
            <Typography component="h6" variant="h6" align="center">
              Get in touch with me!
            </Typography>

            <Box display="flex" justifyContent="center" marginTop={2}>
              <IconButton component={Link} href="mailto:dariusz.sikorra@gmail.com">
                <Email />
              </IconButton>

              <IconButton component={Link} href="https://github.com/DariuszSikorra" target="_blank">
                <GitHub />
              </IconButton>

              <IconButton component={Link} href="https://www.linkedin.com/in/dariuszsikorra/" target="_blank">
                <LinkedIn />
              </IconButton>
            </Box>

            <Typography align="center" marginTop={2}>
              Email: <Link href="mailto:youremail@example.com">dariusz.sikorra@gmail.com</Link>
            </Typography>
          </CardContent>
        </StyledTitlePaper>
      </StyledSection>
    </SectionWrapper>
  );
};

export default Contact;