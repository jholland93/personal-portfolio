import React, { useEffect, useState } from "react";
import Acomplishments from "../components/Acomplishments/Acomplishments";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/About/About";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import classNames from "classnames";
import { Social } from "../components/Social/Social";
import Footer from "../components/Footer/Footer";
import About from "../components/About/About";
import Router from "next/router";

const Home = () => {
  //check if device being used is mobile
  const isMobile = () => {
    const ua = navigator.userAgent;
    return /Android|Mobi/i.test(ua);
  };

  //custom cursor
  const Cursor = () => {
    if (typeof navigator !== "undefined" && isMobile()) return null;

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hidden, setHidden] = useState(false);
    const [linkHovered, setLinkHovered] = useState(false);

    useEffect(() => {
      addEventListeners();
      handleLinkHoverEvents();
      return () => removeEventListeners();
    }, []);

    const [clicked, setClicked] = useState(false);

    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.body.addEventListener("mouseenter", onMouseEnter);
      document.body.addEventListener("mouseleave", onMouseLeave);
      document.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mouseup", onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleLinkHoverEvents = () => {
      document
        .querySelectorAll("a, div.swiper-button-next, div.swiper-button-prev")
        .forEach((el) => {
          el.addEventListener("mouseover", () => setLinkHovered(true));
          el.addEventListener("mouseout", () => setLinkHovered(false));
        });
    };

    const cursorClasses = classNames("cursor", {
      "cursor--hidden": hidden,
      "cursor--clicked": clicked,
      "cursor--link-hovered": linkHovered,
    });

    return (
      //custom cursor
      <div
        className={cursorClasses}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    );
  };
  Router.reload(window.location.pathname);
  return (
    <Layout>
      <Section>
        <Cursor />
        <Hero />
        <About />
        <Projects />
      </Section>
      <Social />
    </Layout>
  );
};

export default Home;
