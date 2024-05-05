import { SectionContainer, TitleContainer } from "components/shared/containers";
import { CardContent, Typography, styled } from "@mui/material";
import SectionWrapper from "components/shared/SectionContainer";
import React from "react";
import Title from "@/components/shared/Title";

const StyledSection = styled(SectionContainer)`
  padding-top: 20%;
`;

const StyledTitlePaper = styled(TitleContainer)`
  width: 60%;
  margin: auto;
`;

const Experience: React.FC = () => {
  return (
    <SectionWrapper>
      <Title text="Experience" />
      <StyledSection>
      <StyledTitlePaper variant="outlined">
          <CardContent>
            <Typography component="p" variant="body2" align="center">
              Hello! I’m a Full-Stack Engineer with over five years of experience, passionate about building scalable and user-friendly applications. 
              I started my career freelancing as a junior developer, creating Single Page Applications for clients. 
              <br /><br />
              At Scalac, I contributed to innovative projects like AUXI, a British job-sharing platform, and Rally Health, an American insurance platform. 
              I focused on developing features, optimizing the codebase, and leading the creation of end-to-end tests. 
              <br /><br />
              Currently, I'm working independently on a Polish e-commerce platform, Clemens, where I'm transitioning the application from Django and jQuery to Next.js and React.
              <br /><br />
              In my career, I've worked with various technologies, including React, TypeScript, Next.js, and Node.js, among others. 
              I enjoy collaborating in Scrum and Kanban teams, mentoring, and occasionally taking on recruiting responsibilities.
            </Typography>
          </CardContent>
        </StyledTitlePaper>
      </StyledSection>
    </SectionWrapper>
  );
};

export default Experience;
