import styled from "styled-components";

export const Container = styled.div`
  cursor: none;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  padding: 1rem 2rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
  }
`;

export const Span = styled.span`
  cursor: none;
  font-size: 2rem;
`;

export const Div1 = styled.div`
  cursor: none;
  display: flex;
  flex-direction: row;
  align-content: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;
export const Div2 = styled.div`
  cursor: none;
  position: absolute;
  right: 0;
  padding-right: 2rem;
  rem;
  grid-area: 2 / 2 / 3 / 5;
  display: flex;
  justify-content: space-around;
  @media ${(props) => props.theme.breakpoints.sm} {
  }

  @media ${(props) => props.theme.breakpoints.xxl} {
    position: absolute;
    right: 20%;
  }
`;

// Navigation Links
export const NavLink = styled.a`
  cursor: none;
  padding-right: 2rem;
  font-size: 2rem;
  line-height: 80px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;
