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
              Hello! I’m a Full-Stack Engineer specializing in{" "}
              <strong>React and Node.js</strong>, passionate about building{" "}
              <strong>scalable and user-friendly applications</strong>. I
              started my career freelancing as a junior developer, creating{" "}
              <strong>Single Page Applications (SPAs)</strong> for clients.
              <br />
              <br />
              Currently, I work at <strong>SITA</strong> on a project for{" "}
              <strong>Swiss Aviation Software Company</strong>, focusing on
              aviation data management solutions. My key contributions include:
              <ul>
                <li>
                  Developing a{" "}
                  <strong>
                    fully functional dashboard with drag-and-drop widgets
                  </strong>{" "}
                  to enhance aviation data presentation.
                </li>
                <li>
                  Building and maintaining <strong>robust MongoDB APIs</strong>{" "}
                  to deliver real-time{" "}
                  <strong>
                    flight statistics, turnaround times, and airport lists
                  </strong>
                  .
                </li>
                <li>
                  Integrating <strong>ACARS plane computers</strong> with{" "}
                  <strong>Microsoft Teams</strong> using{" "}
                  <strong>GraphAPI</strong>, enabling real-time communication
                  between in-flight systems and ground services.
                </li>
                <li>
                  Utilizing <strong>Docker and Kubernetes</strong> on{" "}
                  <strong>Azure</strong> to ensure high availability and
                  scalability for microservices.
                </li>
                <li>
                  Implementing <strong>Swagger/OpenAPI</strong> for API
                  documentation, improving developer efficiency.
                </li>
              </ul>
              <strong>Tech Stack:</strong> React, TypeScript, Node.js, MongoDB,
              Teams API, Swagger, Docker, Kubernetes, Azure.
              <br />
              <br />
              Before joining SITA, I worked at <strong>Scalac</strong>,
              contributing to projects like <strong>AUXI</strong> (a British
              job-sharing platform) and <strong>Rally Health</strong> (an
              American insurance platform), focusing on feature development,{" "}
              <strong>code optimization</strong>, and{" "}
              <strong>end-to-end testing</strong>.
              <br />
              <br />
              Later, I transitioned to <strong>Clemens</strong>, an e-commerce
              platform, where I played a key role in migrating the codebase from{" "}
              <strong>Django and jQuery to Next.js and React</strong>, gaining
              valuable experience with <strong>PostgreSQL and Python</strong>.
              <br />
              <br />
              Over the years, I have worked extensively with{" "}
              <strong>React, TypeScript, Next.js, and Node.js</strong>. I thrive
              in <strong>Scrum and Kanban</strong> teams, enjoy mentoring, and
              have experience in <strong>technical recruitment</strong>.
            </Typography>
          </CardContent>
        </StyledTitlePaper>
      </StyledSection>
    </SectionWrapper>
  );
};

export default Experience;
