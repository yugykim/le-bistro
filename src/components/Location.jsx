import styled from "styled-components";
import decoImg from "./img/decoImg.png";

const Wrapper = styled.div`
  width: 100%;
  color:  ${props => props.theme.p};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 25vh;
`;

const BoxOne = styled.div`
  width: 100%;
  text-align: center;
`;

const ContentName = styled.div``;

const BoxTwo = styled.div`
  width: 100%;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 5vw;
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Location = styled.div`
  width: 60%;
`;

const H2 = styled.h2`
  font-size: 2rem;
  color: ${props => props.theme.h2};
`

const Img = styled.img`
  width: 10vw;
`;

const SmallP = styled.p`
  font-size: 0.8rem;
`;

const DecoImg = styled.div`
`;

function Loaction() {
  return (
    <>
      <Wrapper id="location">
        <BoxOne>
          <ContentName>
            <H2>Location</H2>
            <DecoImg>
              <Img src={`${decoImg}`} />
            </DecoImg>
          </ContentName>
        </BoxOne>
        <BoxTwo>
          <Location>
            <SmallP>Gangnam gu, Chungdam dong 94-6. Seoul, South Korea</SmallP>
          </Location>
        </BoxTwo>
      </Wrapper>
    </>
  );
}

export default Loaction;