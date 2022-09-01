import styled from "styled-components";
import decoImg from "./img/decoImg.png";

const Wrapper = styled.div`
  width: 100%;
  color:  ${props => props.theme.p};
  height: 50vh;
  @media (max-width: 768px) {
    height: 40vh;
  }
`;

const OwnerInfo = styled.div`
  display: flex;
  margin: 10vw 20vw;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
}
`;

const BoxOne = styled.div`
  width: 100%;
  text-align: center;
`;

const BoxTwo = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const DecoImg = styled.div`
  margin: 1vw;
`;

const BoxThree = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const H2 = styled.h2`
  font-size: 1.8rem;
  color: ${props => props.theme.h2};
  @media (max-width: 768px) {
    font-size: 3vw;
  }
`;

const P = styled.p`
  font-size: 1rem;
  margin-bottom: 20px;
  line-height: 1.8;

  @media (max-width: 768px) {
    font-size: 2vw;
  }
`;

function Contact() {
  return (
    <Wrapper id="contact">
      <OwnerInfo>
        <BoxOne>
          <H2>Contact</H2>
          <DecoImg>
              <img src={`${decoImg}`} style={{ "width": "100px" }} />
          </DecoImg>
        </BoxOne>
        <BoxTwo>
          <P>Regards marketing, business, collaboration, job request.</P>
          <P>Please contact bellow email address info@restaurant-mingles.com</P>
        </BoxTwo>
        <BoxThree>
          <P>Reservation</P>
          <P>by phone / (+82) 2-515-7306</P>
          <P>by email / reservation@restaurant-mingles.com</P>
        </BoxThree>
      </OwnerInfo>
    </Wrapper>
  );
}

export default Contact;