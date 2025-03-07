import { SectionContainer, TitleContainer } from "components/shared/containers";
import Title from "@/components/shared/Title";
import { CardContent, Typography, styled } from "@mui/material";
import SectionWrapper from "components/shared/SectionContainer";
import React from "react";

const StyledSection = styled(SectionContainer)`
  padding-top: 20%;
`;

const StyledTitlePaper = styled(TitleContainer)`
  width: 60%;
  margin: auto;
`;

const Summary: React.FC = () => {
  return (
    <SectionWrapper>
      <Title text="About Me" />
      <StyledSection>
        <StyledTitlePaper variant="outlined">
          <CardContent>
            <Typography component="h6" variant="h6" align="center">
              <strong>Full-Stack Engineer</strong> specializing in{" "}
              <strong>React, Next.js, and Node.js</strong>, with{" "}
              <strong>5+ years of experience</strong> in building scalable,
              high-performance web applications.
              <br />
              <br />I have a strong background in both{" "}
              <strong>Frontend and Backend development</strong>, crafting
              seamless user experiences and optimizing system performance. My
              expertise extends to{" "}
              <strong>
                microservices architecture, DevOps, and API development
              </strong>
              , ensuring robust and efficient solutions.
              <br />
              <br />
              Passionate about{" "}
              <strong>
                clean code, system design, and technical leadership
              </strong>
              , I thrive in <strong>Agile environments</strong>, collaborating
              with cross-functional teams to drive product innovation. I enjoy
              mentoring developers, refining development workflows, and
              continuously evolving as an engineer.
              <br />
              <br />
              Whether it's architecting scalable solutions, optimizing complex
              systems, or integrating cutting-edge technologies, I am dedicated
              to delivering <strong>high-quality, user-centric software</strong>
              .
            </Typography>
          </CardContent>
        </StyledTitlePaper>
      </StyledSection>
    </SectionWrapper>
  );
};

export default Summary;
