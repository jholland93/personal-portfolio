import React from "react";

import styled from "styled-components";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { ProjectItem } from "./ProjectItem";
import "swiper/swiper-bundle.min.css";

const Projects = () => (
  <Section nopadding id="projects">
    <SectionTitle main>Projects</SectionTitle>
    {/* <SectionDivider /> */}
    <ProjectItem />
  </Section>
);

export default Projects;
