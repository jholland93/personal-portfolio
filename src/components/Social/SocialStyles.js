import styled from "styled-components";

// Social Icons

export const SocialIcons = styled.a`
  z-index: 1000;
  display: block;
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    transform: scale(1.2);
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    display: inline;
  }
`;

export const SocialContainer = styled.div`
  position: fixed;
  right: 0;
  bottom: 50%;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: block;
    width: 100%;
    z-index: 1000;
    background-color: black;
    bottom: 0%;
    right: 0;
    text-align: center;
    padding: 1rem 0;
  }
`;
