import styled from "styled-components";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const Wrapper = styled.div`
  margin-top: 380px;
  height: 50vh;
  background-color: #ecf0f1;
`;

const OwnerInfo = styled.div`
  display: flex;
  margin: 100px;
  flex-direction: row;
`;

const BoxOne = styled.div`
  width: 20%;
  margin: 30px;
`;

const BoxTwo = styled.div`
  width: 40%;
  height: 50vh;
  margin: 50px;
  margin-top: 100px;
`;

const BoxThree = styled.div`
  width: 40%;
  height: 50vh;
  margin: 50px;
  margin-top: 100px;
`;

const H2 = styled.h2`
  font-size: 30px;
  margin-bottom: 30px;
  border-bottom: 3px solid black;
  width: 100px;
`;

const P = styled.p`
  font-size: 20px;
  margin-bottom: 20px;
  line-height: 1.8;
`;

function Contact() {

  return (
    <Wrapper>
      <OwnerInfo>
        <BoxOne>
          <H2>Contact</H2>
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