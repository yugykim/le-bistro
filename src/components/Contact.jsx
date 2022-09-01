import styled from "styled-components";
import decoImg from "./img/decoImg.png";

const Wrapper = styled.div`
  width: 100%;
  color:  ${props => props.theme.p};
  height: 40vh;
  @media (max-width: 768px) {
    height: 15vh;
  }
`;

const Box = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

const Img = styled.img`
  width: 10vw;
`;


const Content = styled.div`
  display: flex;
  margin: 100px;
  align-items: center;
  text-align: center;
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 20px;
  }
`;

const H2 = styled.h2`
  font-size: 1.8rem;
  color: ${props => props.theme.h2};
  @media (max-width: 768px) {
    font-size: 2vw;
  }
`;

const P = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;

  @media (max-width: 768px) {
    font-size: 2vw;
  }
`;

const DecoImg = styled.div`
`;

function Contact() {
  return (
    <Wrapper id="contact">
      <Content>
        <Box>
          <H2>Contact</H2>
          <DecoImg>
            <Img src={`${decoImg}`} />
          </DecoImg>
          <P>(604) 620-3800 <br />info@stlawrencerestaurant.com</P>
        </Box>
        <Box>
          <H2>Hours</H2>
          <DecoImg>
            <Img src={`${decoImg}`} />
          </DecoImg>
          <P>Tuesday - Sunday5pm — Late</P>
        </Box>
      </Content>
    </Wrapper>
  );
}

export default Contact;