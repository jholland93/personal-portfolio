import Image from "next/image";
import React from "react";
import {
  Section,
  SectionDivider,
  SectionSubText,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  AboutContainer,
  AboutContent,
  ImageContainer,
  AboutInfo,
  ProfileImg,
} from "./AboutStyles";

const About = () => (
  <AboutContainer>
    <Section id="about">
      <SectionDivider />
      <SectionTitle main>About Me &#9997;&#65039;</SectionTitle>

      <AboutContent>
        <SectionText>
          My name is Jason Holland and I am a recent graduate of Computing &
          Digital Media from Galway-Mayo Institue of Technology. I am a
          competent and hard working individual with an affinity for design.
          Both technology and design have been interests of mine from a young
          age which is why I immediately found myself at home with Front End
          Development and Web Design. I am eager to learn and always looking to
          improve my technical skills and understanding.
        </SectionText>{" "}
        <ProfileImg>
          <Image src="/images/profile-picture.png" height={800} width={800} />
        </ProfileImg>
      </AboutContent>
    </Section>
  </AboutContainer>
);

export default About;
