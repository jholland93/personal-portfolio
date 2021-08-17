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

const Hero = (props) => (
  <HeroSection>
    <Section>
      <SectionTitle main center>
        <TitleAnimation /> <WaveAnimation />
      </SectionTitle>
      <SectionText>
        First Class Honours Computing &amp; Digital Media Graduate seeking
        opportunites in web design &amp; front end developmet
      </SectionText>
      <Button>Resume</Button>
    </Section>
  </HeroSection>
);

export default Hero;
