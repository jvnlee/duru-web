import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import styled from "styled-components";
import { useLocation } from "react-router";

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
  cursor: pointer;
  /* @media (max-width: 768px) {
    font-size: 24px;
  } */
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const SLink = styled(ScrollLink)`
  margin: 0 20px;
  height: 50px;
  display: flex;
  align-items: center;
  span {
    font-size: 18px;
    font-weight: 300;
  }
  cursor: pointer;
`;

const Nav = styled.span`
  font-size: 18px;
  font-weight: 300;
  margin-right: 15px;
`;

function Header() {
  const { pathname } = useLocation();
  return (
    <HeaderContainer>
      <Link to="/">
        <Title>Duru Mono</Title>
      </Link>
      {pathname === "/" ? (
        <>
          <LinkWrapper>
            <SLink
              className="nav"
              to="test1"
              spy={true}
              smooth={true}
              duration={800}
              offset={-50}
              activeClass="active"
              onSetActive={() => (document.title = "Duru | Outline")}
              onSetInactive={() => (document.title = "Duru")}
            >
              <span>Outline</span>
            </SLink>
            <SLink
              className="nav"
              to="test2"
              spy={true}
              smooth={true}
              duration={800}
              offset={-50}
              activeClass="active"
              onSetActive={() => (document.title = "Duru | Features")}
              onSetInactive={() => (document.title = "Duru")}
            >
              <span>Features</span>
            </SLink>
            <SLink
              className="nav"
              to="test3"
              spy={true}
              smooth={true}
              duration={800}
              offset={-50}
              activeClass="active"
              onSetActive={() => (document.title = "Duru | Usage")}
              onSetInactive={() => (document.title = "Duru")}
            >
              <span>Usage</span>
            </SLink>
          </LinkWrapper>
          <Link to="/guestbook">
            <Nav>Guestbook</Nav>
          </Link>
        </>
      ) : (
        <Link to="/">
          <Nav>Back to home</Nav>
        </Link>
      )}
    </HeaderContainer>
  );
}

export default Header;
