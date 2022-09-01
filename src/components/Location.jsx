import styled from "styled-components";
import decoImg from "./img/decoImg.png";
import Map from "./Map";

const Wrapper = styled.div`
  width: 100%;
  color:  ${props => props.theme.p};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  @media (max-width: 768px) {
    height: 25vh;
  }
`;

const BoxOne = styled.div`
  width: 100%;
  text-align: center;
  margin: 2vw;
`;

const ContentName = styled.div``;

const BoxTwo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Name = styled.div`
  width: 60%;
  margin-bottom: 20px;
`;
const Location = styled.div`
  width: 60%;
`;

const H2 = styled.h2`
  font-size: 1.8rem;
  color: ${props => props.theme.h2};
  @media (max-width: 768px) {
    font-size: 3vw;
  }
`

const P = styled.p`
  font-size: 1.2rem;
  @media (max-width: 768px) {
    font-size: 2vw;
  }
`;

const SmallP = styled.p`
  font-size: 1rem;
  color: black;
  @media (max-width: 768px) {
    font-size: 2vw;
  }
`;

const DecoImg = styled.div`
  margin: 1vw;
`;

function Loaction() {
  return (
    <>
      <Wrapper id="location">

        <BoxOne>
          <ContentName>
            <H2>Location</H2>
            <DecoImg>
              <img src={`${decoImg}`} style={{ "width": "100px" }} />
            </DecoImg>
          </ContentName>
        </BoxOne>

        <BoxTwo>
          <Name>
            <P>레스토랑 밍글스 Restaurant Mingles</P>
          </Name>
          <Location>
            <SmallP>서울특별시 도산대로67길 19 (청담동 94-6) 힐탑빌딩 2층 <br />Gangnam gu, Chungdam dong 94-6. Seoul, South Korea</SmallP>
          </Location>
        </BoxTwo>
      </Wrapper>
      <Map />
    </>
  );
}

export default Loaction;