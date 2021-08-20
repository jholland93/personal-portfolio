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
  <AboutContainer id="about">
    <Section>
      <SectionDivider />
      <SectionTitle main>About 📖</SectionTitle>

      <AboutContent>
        <SectionText>
          My name is Jason Holland and I am a recent Graduate of Computing &
          Digital Media from Galway-Mayo Institue of Technology. I am a
          competent and hard working individual with an affinity for design.
          Both technology and design have been interests of mine from a young
          age which is why I why I immediately found myself at home with Front
          End Development and Web Design. I am eager to learn and always looking
          to improve my technical skills and understanding.
        </SectionText>{" "}
        <ProfileImg>
          <Image src="/images/profile-picture.png" height={400} width={400} />
        </ProfileImg>
      </AboutContent>
    </Section>
  </AboutContainer>
);

export default About;
