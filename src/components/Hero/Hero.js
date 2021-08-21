import React from "react";

import {
  HeroSection,
  ProfileImg,
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, RightSection } from "./HeroStyles";
import { Social } from "../Social/Social";
import WaveAnimation from "../WaveAnimation/WaveAnimation";
import TitleAnimation from "../TitleAnimation/TitleAnimation";
import Image from "next/image";
import Projects from "../Projects/Projects";
import Link from "next/link";

const Hero = () => (
  <HeroSection>
    <Section>
      <SectionTitle main center>
        <TitleAnimation /> <WaveAnimation />
      </SectionTitle>
      <SectionText>
        First Class Honours Computing &amp; Digital Media Graduate seeking
        opportunites in Web Design &amp; Front End Development.
      </SectionText>
      <Link href="/#projects">
        <Button>View Work</Button>
      </Link>
    </Section>
  </HeroSection>
);

export default Hero;
