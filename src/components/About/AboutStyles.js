import styled from "styled-components";

export const AboutContainer = styled.div`
  text-align: justify;
  margin-bottom: 20rem;
`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2rem;

  @media ${(props) => props.theme.breakpoints.lg} {
    flex-direction: column;
    padding: 10px;
    max-width: 100%;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 0;
  }
`;

export const ImageContainer = styled.div`
  color: red;
  z-index: 100;
`;

export const ProfileImg = styled.div`
  border-radius: 100%;
  min-width: 200px;
  max-width: 300px;
  padding: 5px;
  margin-top: -50px;
  margin-left: 10%;
  margin-bottom: 5rem;
  @media ${(props) => props.theme.breakpoints.lg} {
    margin: 0 auto;
    max-width: 400px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 300px;
  }
`;
