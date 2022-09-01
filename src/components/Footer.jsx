import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  left: 0;
  bottom: 0;
  width: 100%;
  color: ${props => props.theme.bannerColor};
  text-align: center;
`;

const Div = styled.div`
    background-color: ${props => props.theme.h2};
    border-top: 1px solid grey;
    align-self: flex-end;
    height: 10vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
      height: 5vh;
    }
`;

const FooterStyle = styled.div`
  font-size: 13px;
  @media (max-width: 768px) {
    font-size: 2vw;
  }
`;

function Footer() {
  return (
    <Wrapper>
      <Div>
        <FooterStyle>copyright © Restaurant Mingles All Rights Resereved.</FooterStyle>
      </Div>
    </Wrapper>
  );
}

export default Footer;