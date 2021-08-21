import React from "react";
import {
  AiFillGithub,
  AiFillDribbbleCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { SocialIcons, SocialContainer } from "./SocialStyles";

export const Social = () => (
  <SocialContainer>
    <SocialIcons href="https://github.com/jholland93">
      <AiFillGithub size="3rem" />
    </SocialIcons>
    {/* <SocialIcons href="https://github.com">
      <AiFillDribbbleCircle size="3rem" />
    </SocialIcons> */}
    <SocialIcons href="https://www.linkedin.com/in/jasonholland93/">
      <AiFillLinkedin size="3rem" />
    </SocialIcons>
  </SocialContainer>
);
