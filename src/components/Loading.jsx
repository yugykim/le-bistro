import styled from "styled-components";

const Main = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 100px;
`;
function Loading() {
  return (
    <Main>
      <H1>Chez Laurent</H1>
    </Main>
  );
}

export default Loading;