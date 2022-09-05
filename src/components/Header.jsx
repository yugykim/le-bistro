import { motion, useAnimation, useViewportScroll } from "framer-motion";
import { useEffect } from "react";
import styled from "styled-components";
import { Parallax } from 'react-parallax';
import test from "./img/test.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { HashLink } from 'react-router-hash-link';
import logo from './img/logo.png';

const MainPhoto = styled(motion.div)`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  font-size: 6vw;
  color:  ${props => props.theme.bannerColor};
  flex-direction: column;

  @media (max-width: 780px) {
    font-size: 10vw;
    height: 100vh;
  }
`;

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  top: 0;
  height: 80px;
  background-color: transparent;
`;

const Col = styled(motion.div)`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 40rem;
  height: 20rem;
  @media (max-width: 480px) {
    width: 20rem;
    height: 10rem;
  }
`;

const Name = styled(motion.div)`
  flex: 2;
  display: flex;
  align-items: center;
  position: static;
`;

const Scroll = styled(motion.div)`
`;


const Items = styled.ul`
  display: flex;
  transition: color 0.3s ease-in-out;
  position: relative;
  justify-content: center;
  flex-direction: row;
`;

const Item = styled.li`
  margin-right: 5vw;
  transition: color 0.3s ease-in-out;
  position: relative;
  font-size: 2rem;

  &:hover {
    color: #EEE8AA;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
    margin-right: 4vw;
  }
`;

const ArrowIcon = styled(FontAwesomeIcon)`
  font-size: 3rem;
  padding: 10%;
  margin- bottom: 1px;

  @media (max-width: 768px) {
    font-size: 8vw;
  }
`;

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
      <Parallax bgImage={test} strength={400} style={{ width: "100%" }}>
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
            </Col>
            <Col
              key={2} className="item" variants={item}
            >
              <Items>
                <HashLink smooth to="#about" style={{ textDecoration: 'none', color: "#DAA520" }}><Item>About</Item></HashLink>
                <HashLink smooth to="#contact" style={{ textDecoration: 'none', color: "#DAA520" }}><Item>Contact</Item></HashLink>
                <HashLink smooth to="#location" style={{ textDecoration: 'none', color: "#DAA520" }}><Item>Location</Item></HashLink>
              </Items>
            </Col>
          </Nav>
          <Name
            key={3} className="item" variants={item}
          ><Logo src={logo} /></Name>
          <motion.div
            key={4} className="item" variants={item}>
            <Scroll
              variants={arrowVariant} animate={navAnimation}
            >
              <ArrowIcon icon={faChevronDown} />
            </Scroll>
          </motion.div>
        </MainPhoto>
      </Parallax>
    </>
  );
}

export default Header;