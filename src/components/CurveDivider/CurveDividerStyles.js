import styled from "styled-components";

export const CurveContainer = styled.div`
  background-color: white;
  margin: 0 auto;
`;

export const Curve = styled.div`
  width: 120%;
  height: 100px;
  background-color: ${(props) => props.theme.colors.background1};
  color: red;
`;
