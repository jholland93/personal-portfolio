import React from "react";
import { Section, SectionTitle } from "../../styles/GlobalComponents";

import { ProjectItem } from "./ProjectItem";
import "swiper/swiper-bundle.min.css";

const Projects = () => (
  <Section nopadding id="projects">
    <SectionTitle main>Projects</SectionTitle>
    <ProjectItem />
  </Section>
);

export default Projects;
