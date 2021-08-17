import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import { SocialIcons } from "../Header/HeaderStyles";
import {
  Copyright,
  FooterContainer,
  FooterContent,
  NextLogo,
} from "./FooterStyles";

const Footer = () => {
  return (
    <div>
      <FooterContainer>
        <Copyright>© Jason Holland 2021</Copyright>

        <NextLogo>
          <Image src="/images/nextjs-logo.png" height={50} width={100} />
        </NextLogo>
      </FooterContainer>
    </div>
  );
};

export default Footer;
