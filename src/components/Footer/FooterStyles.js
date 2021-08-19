import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-bottom: 5rem;
  }
`;

export const Copyright = styled.div`
  padding: 22px;
  color: grey;
`;

export const NextLogo = styled.div`
  margin-left: auto;
  padding: 20px;
`;
