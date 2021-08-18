import styled from "styled-components";

export const Img = styled.img`
  object-fit: cover;
  width: 100%;
  overflow: hidden;
  margin: 0;
  border-radius: 9px 9px 0 0;
`;

export const GridContainer = styled.section`
  display: flex;
  margin: 0 0.5rem 8rem 0.5rem;
  max-width: 100%;

  .swiper-container {
    padding: 8rem 0;
    max-width: 1600px;
  }

  .swiper-button-prev,
  .swiper-button-next {
    cursor: none;
    position: absolute;
    height: 50px;
    width: 50px;
    background-image: linear-gradient(270deg, #950740 0%, #c3073f 100%);
    z-index: 10;
    right: 60px;
    left: auto;
    top: 0;
    transform: translateY(50%);
    color: white;
    border-radius: 100%;
  }

  .swiper-button-next {
    right: 0;
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 2rem;
  }
`;
export const BlogCard = styled.div`
  border-radius: 10px;
  text-align: center;
  border: 1px solid lightgrey;
  z-index: 100;
  margin: 1.5rem;
  min-height: 99%;
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: white;
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? "3rem" : "2rem")};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 0px auto;
  border: 0;
  background: #950740;
`;

export const CardInfo = styled.p`
  text-align: justify;
  padding: 1rem;
  color: white;
  font-style: 2rem;
  line-height: 24px;
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 0.5rem 0;
`;

export const ExternalLinks = styled.a`
  color: #d4c0c0;
  font-size: 1.6rem;
  padding: 1rem 5rem;
  background: hsl(342, 93%, 40%);
  border-radius: 100px;
  transition: 0.5s;
  &:hover {
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
`;
export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 1.5rem;
  background: black;
  padding: 0.5rem 1rem;
  border-radius: 20px;
`;
