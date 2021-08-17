import styled, {keyframes} from 'styled-components';

export default function TitleAnimation(){
    return <Wrapper>Hi, I'm Jason</Wrapper>
}

const animation = keyframes`
0%{ transform:scale(100%);}
50%{ transform:scale(70%);}
100%{ transform:scale(100%);}
`;

const Wrapper = styled.span`
display:inline-block; 
    animation-name:${animation};
    animation-duration: 1s;
    animation-fill-mode:forwards;

`
