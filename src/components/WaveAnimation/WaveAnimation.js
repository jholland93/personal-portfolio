import styled, { keyframes } from "styled-components";

export default function WaveAnimation() {
  return <Wrapper>👋</Wrapper>;
}

const animation = keyframes`
0%{ transform:rotate(30deg);}
50%{ transform:rotate(60deg)}
100%{ transform:rotate(30deg)}
`;

const Wrapper = styled.span`
  display: inline-block;
  animation-name: ${animation};
  animation-duration: 3s;
  animation-delay: 1s;
  animation-iteration-count: infinite;
`;
