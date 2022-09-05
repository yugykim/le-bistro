import styled from "styled-components";
import decoImg from "./img/decoImg.png";
import wine from "./img/wine.jpg"
import { Parallax } from 'react-parallax';

const Wrapper = styled.div`
  width: 100%;
  color:  ${props => props.theme.p};
  height: 80vh;
  @media (max-width: 850px) and (min-device-width: 765px)  {
    flex-direction: column;
    height: 50vh;
    margin: 1vw;
  }
`;

const OwnerInfo = styled.div`
  display: flex;
  margin: 5vw 20vw;
  flex-wrap: wrap;

  @media (max-width: 850px) {
    flex-direction: column;
    margin: 5vw;
  }
`;

const BoxOne = styled.div`
  width: 100%;
  text-align: center;
`;

const DecoImg = styled.div`
  margin: 1vw;
`;

const BoxTwo = styled.div`
  width: 50%;

  @media (max-width: 850px) {
    width: 100%;
  }
`;

const BoxThree = styled.div`
  width: 50%;

  @media (max-width: 850px) {
    width: 100%;
  }
`;

const H2 = styled.h2`
  font-size: 2rem;
  color: ${props => props.theme.h2};
`

const P = styled.p`
  font-size: 1rem;
  margin-bottom: 20px;
  line-height: 1.8;
`;

const SmallP = styled.p`
  font-size: 0.8rem;
  margin-bottom: 20px;
  line-height: 1.8;
`;

const WinePhoto = styled.div`
  height: 40vh;
  @media (max-width: 850px) {
    height: 30vh;
  }
`;

function About() {
  return (
    <>
      <Wrapper id="about">
        <OwnerInfo>
          <BoxOne>
            <H2>About</H2>
            <DecoImg>
              <img src={`${decoImg}`} style={{ "width": "100px" }} />
            </DecoImg>
            <P>'서로 다른 것들을 조화롭게 어우르다'</P>
            <SmallP>지금까지 지켜온 전통 한식의 근원을 존중하되,오늘날의 새로운 기술과 감성을 덧입혀 밍글스 만의 새로운 색을 선보이고자 합니다.밍글스가 만들어가는 새로운 한국의 맛을 전하겠습니다.</SmallP>
          </BoxOne>
          <BoxTwo>
            <P>While our restaurant has been inspired by and respected traditional Korean cuisine as the foundation for our cooking, in our latest menu we have strove to explore new techniques and sensibilities. Our goal at Mingles is to show you a new way of Korean cuisine.</P>
          </BoxTwo>
          <BoxThree>
            <P>‘Mingling contrasting elements into harmony’</P>
            <SmallP>While our restaurant has been inspired by and respected traditional Korean cuisine as the foundation for our cooking, in our latest menu we have strove to explore new techniques and sensibilities. Our goal at Mingles is to show you a new way of Korean cuisine.</SmallP>
          </BoxThree>
        </OwnerInfo>
      </Wrapper>
      <Parallax bgImage={wine} strength={200} style={{ width: "100%" }}>
        <WinePhoto>
        </WinePhoto>
      </Parallax>
    </>
  );
}

export default About;