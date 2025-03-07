import TechnologyTable from "@/components/Technologies/TechnologyTable";
import { SectionContainer } from "components/shared/containers";
import { styled } from "@mui/material";
import SectionWrapper from "components/shared/SectionContainer";
import React from "react";
import Title from "@/components/shared/Title";

const StyledSection = styled(SectionContainer)`
  padding-top: 40%;
  justify-content: center;
`;

const Technologies: React.FC = () => {
  return (
    <SectionWrapper>
      <Title text="Technologies" />
      <StyledSection>
        <TechnologyTable />
      </StyledSection>
    </SectionWrapper>
  );
};

export default Technologies;
