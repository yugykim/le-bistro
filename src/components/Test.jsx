import { Parallax } from 'react-parallax';
import background from "./img/background.png"

function Test() {
  return (
    <>
      <Parallax  bgImage={background} strength={1000}>
        Content goes here. Parallax height grows with content height.
      </Parallax>
    </>
  );
}

export default Test;