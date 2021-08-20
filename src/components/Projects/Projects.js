import React from "react";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";

import { ProjectItem } from "./ProjectItem";
import "swiper/swiper-bundle.min.css";

const Projects = () => (
  <Section id="projects">
    <SectionDivider />
    <SectionTitle main>Projects &#9997;&#65039;</SectionTitle>
    <ProjectItem />
  </Section>
);

export default Projects;
