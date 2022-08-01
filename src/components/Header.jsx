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
  margin-right: 50px;
  transition: color 0.3s ease-in-out;
  position: relative;
  font-size: 20px;
  color: #e1b12c;
`;


const MainPhoto = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  color: white;
  background-image: linear-gradient(rgba(0 ,0, 0, 0), rgba(0, 0, 0, 1)), url(${main});
`;


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
    scale: 0.99,
    y: 1
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0
  }
};

const item = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1
  }
};

const Photo = {
  hidden: {
    opacity: 1,
    y: 1
  },
  visible: {
    opacity: 1,
    y: 0
  }
};

const MainItem = {
  hidden: { opacity: 0 },
  visible: {
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
        className="container"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <Col
          key={1} className="item" variants={item}
        >
          <H1>Logo</H1>
        </Col>
        <Col
          key={2} className="item" variants={item}
        >
          <Items>
            <Item>About</Item>
            <Item>Loaction</Item>
            <Item>Contact</Item>
            <Item>Kr</Item>
          </Items>
        </Col>
      </Nav>
      <MainPhoto
        className="Photo"
        variants={Photo}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          key={1} className="MainItem" variants={MainItem}
        >Chez Laurent</motion.h1>
      </MainPhoto>
    </>
  );
}

export default Header;