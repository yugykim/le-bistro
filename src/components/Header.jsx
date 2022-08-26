import { motion, useAnimation, useViewportScroll } from "framer-motion";
import { useEffect } from "react";
import styled from "styled-components";
import { Parallax } from 'react-parallax';
import background from "./img/background.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const MainPhoto = styled(motion.div)`
  @import url('https://fonts.googleapis.com/css2?family=Italiana&display=swap');
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  font-size: 6vw;
  color: #f1f2f6;
  flex-direction: column;
  font-family: 'Italiana', serif;

  @media (max-width: 768px) {
    font-size: 10vw;
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

const Logo = styled.h1`
  margin-left: 5vw;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 5vw;
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
  margin-right: 1vw;
  transition: color 0.3s ease-in-out;
  position: relative;
  justify-content: center;
  flex-direction: row;
`;

const Item = styled.li`
  margin-right: 5vw;
  transition: color 0.3s ease-in-out;
  position: relative;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 4vw;
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
      <Parallax bgImage={background} strength={400} style={{ width: "100%" }}>
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
              <Logo>Logo</Logo>
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
              <ArrowIcon icon={faChevronDown} />
            </Scroll>
          </motion.div>
        </MainPhoto>
      </Parallax>
    </>
  );
}

export default Header;