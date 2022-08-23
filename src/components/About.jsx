import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh
  background-color: #ecf0f1;
`;

const OwnerInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 100px;
`;

const BoxOne = styled.div`
  width: 60%;
`;

const BoxTwo = styled.div`
  width: 40%;
`;

const BoxThree = styled.div`
  width: 50%;
`;

const BoxFour = styled.div`
  width: 50%;
`;

const H2 = styled.h2`
  font-size: 30px;
  margin-bottom: 30px;
  border-bottom: 3px solid black;
  width: 80px;
`

const P = styled.p`
  font-size: 20px;
  margin-bottom: 20px;
`;

const SmallP = styled.p`
  font-size: 20px;
  margin-bottom: 20px;
  line-height: 1.8;
`;

function About() {
  return (
    <Wrapper>
      <OwnerInfo>
        <BoxOne>
          <H2>About</H2>
          <P>'서로 다른 것들을 조화롭게 어우르다'</P>
          <SmallP>지금까지 지켜온 전통 한식의 근원을 존중하되,오늘날의 새로운 기술과 감성을 덧입혀 밍글스 만의 새로운 색을 선보이고자 합니다.밍글스가 만들어가는 새로운 한국의 맛을 전하겠습니다.</SmallP>
        </BoxOne>
        <BoxTwo></BoxTwo>
        <BoxThree></BoxThree>
        <BoxFour>
          <P>‘Mingling contrasting elements into harmony’</P>
          <SmallP>While our restaurant has been inspired by and respected traditional Korean cuisine as the foundation for our cooking, in our latest menu we have strove to explore new techniques and sensibilities. Our goal at Mingles is to show you a new way of Korean cuisine.</SmallP>
        </BoxFour>
      </OwnerInfo>
    </Wrapper>
  );
}

export default About;