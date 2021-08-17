import Image from "next/image";
import React from "react";
import {
  ProfileImg,
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { AboutContainer, AboutContent, ImageContainer } from "./AboutStyles";

const About = () => (
  <AboutContainer>
    <Section nopadding id="About">
      <SectionDivider />
      <SectionTitle main>About</SectionTitle>
    </Section>
    <ProfileImg>
      <Image src="/images/profile-picture.png" height={400} width={400} />
    </ProfileImg>
  </AboutContainer>
);

export default About;
