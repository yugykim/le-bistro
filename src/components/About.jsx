import styled from "styled-components";
import decoImg from "./img/decoImg.png";

const Wrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Italiana&display=swap');
  font-family: 'Italiana', serif;
  width: 100%;
  color: grey;
`;

const OwnerInfo = styled.div`
  display: flex;
  margin: 10vw 20vw;
  flex-wrap: wrap;
`;

const BoxOne = styled.div`
  min-width: 100%;
  text-align: center;
`;

const DecoImg = styled.div`
  margin: 25px;
`;

const BoxTwo = styled.div`
  min-width: 50%;
`;

const BoxThree = styled.div`
  min-width: 50%;
`;

const H2 = styled.h2`
  font-size: 5vw;

`

const P = styled.p`
  font-size: 5vw;
  margin-bottom: 20px;
`;

const SmallP = styled.p`
  font-size: 5vw;
  margin-bottom: 20px;
  line-height: 1.8;
`;

function About() {
  return (
    <Wrapper>
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
  );
}

export default About;