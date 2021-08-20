import styled from "styled-components";

export const AboutContainer = styled.div`
  height: 100vh;

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-bottom: 20rem;
  }
`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5rem;

  @media ${(props) => props.theme.breakpoints.lg} {
    flex-direction: column;
    margin: 5rem auto;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 0 auto;
  }
`;

export const ImageContainer = styled.div`
  color: red;
  z-index: 100;
`;

export const AboutInfo = styled.div``;

export const ProfileImg = styled.div`
  border-radius: 100%;
  min-width: 400px;
  min-height: 400px;
  padding: 5px;
  margin-top: -100px;
  margin-left: 10%;
  margin-bottom: 5rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2rem;
  }
`;
