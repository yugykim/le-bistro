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
  color: #e1b12c;
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
  color: #e1b12c;
`;

const Main = styled(motion.div)``;

const MainPhoto = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(rgba(0 ,0, 0, 0), rgba(0, 0, 0, 1)), url(${main});
`;

const Div = styled(motion.div)``;

const navVariants = {
  top: {
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  scroll: {
    backgroundColor: "rgba(25, 42, 86,1.0)",
  }
}

const container = {
  hidden: {
    opacity: 1,
    scale: 0
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: {
    y: 20,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1
  }
};

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
          <H1>Chez Laurent</H1>
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
      <Main
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <MainPhoto key={1} className="item"></MainPhoto>
        <Div key={2} className="item" variants={item}></Div>
      </Main>
    </>
  );
}

export default Header;