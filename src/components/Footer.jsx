import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  text-align: center;
  height: 30vh;
`;

const Div = styled.div`
  background-color: black;
  align-self: flex-end;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Footer() {
  return (
    <Wrapper>
      <Div>
        <footer>copyright © Restaurant Mingles All Rights Resereved.</footer>
      </Div>
    </Wrapper>
  );
}

export default Footer;