import { Link } from "react-scroll";
import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100vw;
  height: 50px;
  padding: 0 30px;
  background-color: #030305;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    .nav {
      display: none;
    }
  }
`;

const Title = styled.div`
  font-weight: 300;
  font-size: 30px;
  /* @media (max-width: 768px) {
    font-size: 24px;
  } */
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const SLink = styled(Link)`
  margin: 0 20px;
  height: 50px;
  display: flex;
  align-items: center;
  span {
    font-size: 18px;
    font-weight: 300;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Title>Duru Mono</Title>
      <LinkWrapper>
        <SLink
          className="nav"
          to="test1"
          spy={true}
          smooth={true}
          duration={500}
          offset={-50}
          activeClass="active"
          onSetActive={() => (document.title = "Duru | Outline")}
          // onSetInactive={() => (document.title = "Duru")}
        >
          <span>Outline</span>
        </SLink>
        <SLink
          className="nav"
          to="test2"
          spy={true}
          smooth="easeOutQuad"
          duration={500}
          offset={-50}
          activeClass="active"
          onSetActive={() => (document.title = "Duru | Features")}
          // onSetInactive={() => (document.title = "Duru")}
        >
          <span>Features</span>
        </SLink>
        <SLink
          className="nav"
          to="test3"
          spy={true}
          smooth="easeOutQuad"
          duration={500}
          offset={-50}
          activeClass="active"
          onSetActive={() => (document.title = "Duru | Usage")}
          // onSetInactive={() => (document.title = "Duru")}
        >
          <span>Usage</span>
        </SLink>
      </LinkWrapper>
    </HeaderContainer>
  );
}

export default Header;
