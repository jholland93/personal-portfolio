import React, { Component } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
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

export const ProjectItem = () => (
  <>
    <GridContainer>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation
        breakpoints={{
          //when width >= 640px

          550: {
            slidesPerView: 2,
          },
          1200: {
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
                <CardInfo>
                  {description}{" "}
                  <TagList>
                    {tags.map((tag, i) => (
                      <Tag key={i}>{tag}</Tag>
                    ))}
                  </TagList>
                </CardInfo>

                <UtilityList>
                  <ExternalLinks href={visit} target="_blank">
                    VIEW <FaExternalLinkAlt size="1.5rem" />
                  </ExternalLinks>
                </UtilityList>
              </BlogCard>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </GridContainer>
  </>
);
