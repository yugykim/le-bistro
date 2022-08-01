import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const H1 = styled(motion.h1)`
  font-size: 100px;
  color: white;
`;

const Main = styled(motion.div)`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
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

function Loading() {
  return (
    <Main
    className="container"
    variants={container}
    initial="hidden"
    animate="visible"
    >
      <H1
      key={1} className="item" variants={item}
      >Chez Laurent</H1>
    </Main>
  );
}

export default Loading;