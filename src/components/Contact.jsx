import styled from "styled-components";
import decoImg from "./img/decoImg.png";

const Wrapper = styled.div`
  width: 100%;
  color:  ${props => props.theme.p};
  height: 30vh;
  @media (max-width: 850px) and (min-width: 748px){
    height: 25vh;
  }
`;

const Box = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 1vw;
  }
  @media (max-width: 850px) and (min-width: 780px){
    width: 100%;
    margin-bottom: 4vw;
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
    margin-top: 10vw;
  }

`;

const H2 = styled.h2`
  font-size: 2rem;
  color: ${props => props.theme.h2};
`;

const P = styled.p`
  font-size: 1rem;
  line-height: 1.8;
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