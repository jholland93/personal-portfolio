import React from "react";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";

import { ProjectItem } from "./ProjectItem";
import "swiper/swiper-bundle.min.css";
import { ProjectsContainer } from "./ProjectsStyles";

const Projects = () => (
  <ProjectsContainer>
    <Section id="projects">
      <SectionDivider />
      <SectionTitle main>Projects &#128187;</SectionTitle>
    </Section>
    <ProjectItem />
  </ProjectsContainer>
);

export default Projects;
