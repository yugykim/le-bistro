import { motion, useAnimation, useViewportScroll } from "framer-motion";
import { ParallaxBanner } from 'react-scroll-parallax';
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useMatch } from "react-router-dom";
import main from "./img/main.png"
import { Parallax } from 'react-parallax';
import background from "./img/background.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'


const MainPhoto = styled(motion.div)`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  color: white;
  flex-direction: column;
`;

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  top: 0;
  height: 80px;
  font-size: 12px;
  background-color: transparent;
`;

const Col = styled(motion.div)`
  display: flex;
  align-items: center;
`;

const H1 = styled.h1`
  margin-left: 3vw;
  font-size: 40px;
  color: #e1b12c;
`;

const Name = styled(motion.div)`
  flex: 2;
  display: flex;
  align-items: center;
  position: static;
`;

const Scroll = styled(motion.div)`
  align-items: end;
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
    y: 0,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1
  }
};

const arrowVariant = {
  top: {
    opacity: 1
  },
  scroll: {
    opacity: 0
  }
}

const Photo = {
  hidden: {
    opacity: 1,
    y: 1
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

function Header() {
  const navAnimation = useAnimation();
  const { scrollY } = useViewportScroll();

  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 100) {
        console.log("80");
        navAnimation.start("scroll");
      } else {
        navAnimation.start("top");
      }
    })
  }, [scrollY, navAnimation]);
  return (
    <>
      <Parallax bgImage={background} strength={400}>
        <MainPhoto
          className="Photo"
          variants={Photo}
          initial="hidden"
          animate="visible"
        >
          <Nav>
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
          <Name
            key={3} className="item" variants={item}
          >Chez Laurent</Name>
          <motion.div 
            key={4} className="item" variants={item}>
            <Scroll
              variants={arrowVariant} animate={navAnimation}
            >
              <FontAwesomeIcon icon={faChevronDown} style={{ width: "30px" }} />
            </Scroll>
          </motion.div>
        </MainPhoto>
      </Parallax>
    </>
  );
}

export default Header;