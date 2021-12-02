import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const FooterContainer = styled.div`
  height: 160px;
  padding: 30px;
  background-color: #030305;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  opacity: 0.5;
`;

const Text = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 300;
  line-height: 22px;
  margin-right: 15px;
`;

const IconLink = styled.a`
  display: block;
  margin-right: 15px;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  opacity: 0.5;
`;

function Footer() {
  return (
    <FooterContainer>
      <Wrapper>
        <Text>
          Designed and developed by
          <br />
          Hyun Jun Lee, 2021
        </Text>
        <IconLink href="https://github.com/jvnlee">
          <FontAwesomeIcon icon={faGithub} style={{ fontSize: "40px" }} />
        </IconLink>
        <IconLink
          href="https://instagram.com/jvnlee"
          style={{ fontSize: "44px" }}
        >
          <FontAwesomeIcon icon={faInstagram} />
        </IconLink>
      </Wrapper>
      <Logo src={require("../assets/hivcdlogo.svg").default} alt="hivcdlogo" />
    </FooterContainer>
  );
}

export default Footer;
