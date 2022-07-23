import { motion, useAnimation, useViewportScroll } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useMatch } from "react-router-dom";
import main from "./img/main.png"

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  height: 80px;
  font-size: 12px;
`;

const Col = styled.div`
  display: flex;
  align-items: center;
`;

const H1 = styled.h1`
  margin-left: 3vw;
  font-size: 40px;
  color: #f8c291;
`;

const Items = styled.ul`
  display: flex;
  margin-right: 20px;
  transition: color 0.3s ease-in-out;
  position: relative;
  justify-content: center;
  flex-direction: row;
`;

const Item = styled.li`
  margin-right: 20px;
  transition: color 0.3s ease-in-out;
  position: relative;
  font-size: 15px;
  color: #f8c291;
`;

const MainPhoto = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(rgba(0 ,0, 0, 0), rgba(0, 0, 0, 1)), url(${main});
`;

const navVariants = {
  top: {
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  scroll: {
    backgroundColor: "rgba(10, 61, 98,1.0)",
  }
}

function Header() {
  const navAnimation = useAnimation();
  const { scrollY } = useViewportScroll();

  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 80) {
        navAnimation.start("scroll");
      } else {
        navAnimation.start("top");
      }
    })
  }, [scrollY, navAnimation]);
  return (
    <>
      <Nav
        variants={navVariants}
        animate={navAnimation}
        initial={"top"}
      >
        <Col>
          <H1>Le Bistro</H1>
        </Col>
        <Col>
          <Items>
            <Item>About</Item>
            <Item>Loaction</Item>
            <Item>Contact</Item>
            <Item>Kr</Item>
          </Items>
        </Col>
      </Nav>
      <MainPhoto></MainPhoto>
    </>
  );
}

export default Header;