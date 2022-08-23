import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const H1 = styled(motion.h1)`
  font-size: 100px;
  color: white;
`;

const Main = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

const container = {
  hidden: { opacity: 1, scale: 1 },
  visible: {
    opacity: 1,
    scale: 1,
  }
};

const item = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1
  }
};

function Loading() {
  return (
    <Main>
      <H1>Chez Laurent</H1>
    </Main>
  );
}

export default Loading;