import styled from "styled-components";

const Wrapper = styled.div`
`;

const OwnerInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const BoxOne = styled.div`
  width: 50%;
`;

const BoxTwo = styled.div`
  width: 50%;
  height: 50vh;
`;

const H2 = styled.h2`
  font-size: 30px;
  border-bottom: 3px solid black;
  width: 100px;
`;

const P = styled.p`
  font-size: 20px;
  line-height: 1.8;
`;

function Loaction() {
  return (
    <>
      <Wrapper>
        <OwnerInfo>
          <BoxOne>
            <H2>Location</H2>
          </BoxOne>
          <BoxTwo>
            <P>레스토랑 밍글스 Restaurant Mingles</P>
            <P>서울특별시 도산대로67길 19 (청담동 94-6) 힐탑빌딩 2층 Gangnam gu, Chungdam dong 94-6. Seoul, South Korea</P>
          </BoxTwo>
        </OwnerInfo>
      </Wrapper>
    </>
  );
}

export default Loaction;