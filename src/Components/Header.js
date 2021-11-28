import { Link } from "react-scroll";
import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100vw;
  height: 50px;
  background-color: blue;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SLink = styled(Link)`
  padding: 8px;
  margin: 0 10px;
  height: 50px;
  display: flex;
  align-items: center;
`;

function Header() {
  return (
    <HeaderContainer>
      <SLink
        className="nav"
        to="test1"
        spy={true}
        smooth={true}
        duration={500}
        offset={-50}
        activeClass="active"
        onSetActive={() => (document.title = "Duru · Test 1")}
        // onSetInactive={() => (document.title = "Duru")}
      >
        <span>Go to Test 1</span>
      </SLink>
      <SLink
        className="nav"
        to="test2"
        spy={true}
        smooth={true}
        duration={500}
        offset={-50}
        activeClass="active"
        onSetActive={() => (document.title = "Duru · Test 2")}
        // onSetInactive={() => (document.title = "Duru")}
      >
        Go to Test 2
      </SLink>
      <SLink
        className="nav"
        to="anchor"
        spy={true}
        smooth={true}
        duration={500}
        offset={-50}
        activeClass="active"
        onSetActive={() => (document.title = "Duru · Test 3")}
        // onSetInactive={() => (document.title = "Duru")}
      >
        Go to Test 3
      </SLink>
    </HeaderContainer>
  );
}

export default Header;
