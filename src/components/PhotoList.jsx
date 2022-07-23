import background from "./img/background.png"
import background2 from "./img/background2.png"
import background3 from "./img/background3.png"
import styled from "styled-components";
import { AnimatePresence, motion, useAnimation, useViewportScroll } from "framer-motion";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
  background-color: black;
`;

const Slider = styled.div`
  top: 300px;
`;

const Row = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  width: 100%;
  position: absolute;
`;

const Box = styled(motion.div)`
  height: 50vh;
  background-image: linear-gradient(rgba(0 ,0, 0, 0), rgba(0, 0, 0, 1)), url(${props => props.bgPhoto});
  background-size: cover;
`;

const rowVariants = {
  hidden: {
    x: window.outerWidth,
  },
  visible: {
    x: 0
  },
  exit: {
    x: -window.outerWidth,
  }
}

const imageList = [
  {
    "id": 1,
    "image": `${background}`
  },
  {
    "id": 2,
    "image": `${background2}`
  },
  {
    "id": 3,
    "image": `${background3}`
  },
];

const offset = 1;

function About() {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const toggleLeaving = () => setLeaving(prev => !prev);
  const increaseIndex = () => {
    if (leaving) return;
    toggleLeaving();
    if (index < 2) {
      setIndex(prev => prev + 1)
    } else {
      setIndex(0);
    }
  };
  return (
    <Wrapper>
      <Slider>
        <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
          <Row
            variants={rowVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 2 }}
            key={index}
          >
            {imageList.slice(offset * index, offset * index + offset).map((i) => (
              <Box
                key={i.id}
                bgPhoto={i.image}
                onClick={increaseIndex}
                >
              </Box>
            ))}
          </Row>
        </AnimatePresence>
      </Slider>
    </Wrapper>
  );
}

export default About;