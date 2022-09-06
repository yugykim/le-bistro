import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  background-color: ${props => props.theme.h2};
  color:  ${props => props.theme.p};
  height: 100%;
  @media (max-width: 480px){
    height: 100%;
  }
`;

const Box = styled.div`
  width: 50%; 
  padding: 10vw;
  @media (max-width: 480px){
    width: 100%;
  }
`;

const Content = styled.div`
  text-align: center;
  display: flex;
  flex-direction: row;
  @media (max-width: 680px){
    flex-direction: column;
  }
`;

const H2 = styled.h2`
  font-size: 2rem;
  color: ${props => props.theme.bannerColor};
`;

const P = styled.p`
  font-size: 1rem;
  line-height: 1.8;
`;

function Contact() {
  return (
    <Wrapper id="contact">
      <Content>
        <Box>
          <H2>Contact</H2>
          <P>(604) 620-3800 <br />info@stlawrencerestaurant.com</P>
        </Box>
        <Box>
          <H2>Hours</H2>
          <P>Tuesday - Sunday5pm — Late</P>
        </Box>
      </Content>
    </Wrapper>
  );
}

export default Contact;