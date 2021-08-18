import React, { Component } from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { projects } from "../../constants/constants";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Img,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
} from "./ProjectsStyles";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 12px;
    display: inline-block;
    border: 3px solid white;
    img {
      height: 100%;
    }
  }

  .projectItem__info {
    margin-top: 1;
    background-color: red;
    padding: 1rem;
    border-radius: 12px;
  }

  .projectIrem__title {
    font-size: 2.2rem;
  }

  .prjectItem__desc {
    font-size: 1.6rem;
    font-family: "Roboto";
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 35px;
    }
  }
`;

export const ProjectItem = () => (
  <>
    <GridContainer>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        breakpoints={{
          //when width >= 640px
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1300: {
            slidesPerView: 3,
          },
        }}
      >
        {projects.map(
          ({ id, image, title, description, tags, source, visit }) => (
            <SwiperSlide>
              <BlogCard key={id}>
                <Img src={image} />
                <TitleContent>
                  <HeaderThree title>{title}</HeaderThree>
                  <Hr />
                </TitleContent>
                <CardInfo>{description}</CardInfo>

                <TagList>
                  {tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagList>

                <UtilityList>
                  <ExternalLinks href={visit}>View</ExternalLinks>
                </UtilityList>
              </BlogCard>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </GridContainer>
  </>
);
