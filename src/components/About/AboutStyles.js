import styled from "styled-components";

export const AboutContainer = styled.div`
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: row;

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    margin: 5rem 0;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;

export const ImageContainer = styled.div`
  color: red;
  z-index: 100;
`;

export const AboutInfo = styled.div``;

export const ProfileImg = styled.div`
  border-radius: 100%;

  min-height: 400px;
  padding: 5px;
  margin-top: -100px;
  margin-left: 10%;
  margin-bottom: 5rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2rem;
  }
`;
