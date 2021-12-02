import styled from "styled-components";
import { animateScroll } from "react-scroll";
import { Helmet } from "react-helmet-async";
import useInitScroll from "../hooks/useInitScroll";
import Section1 from "../Components/Section1";
import Section2 from "../Components/Section2";
import Section3 from "../Components/Section3";
import Section4 from "../Components/Section4";
import { Image } from "../Components/shared/SectionComponents";

const Container = styled.div`
  padding-top: 50px;
  height: auto;
`;

const EmptyArea = styled.div`
  width: 100%;
  height: auto;
  font-size: 40px;
  padding: 30px 30px 0;
  margin-bottom: 100px;
`;

const BtnWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ffffff;
  box-shadow: 0px 0px 25px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 30px;
  right: 30px;
  cursor: pointer;
`;

const Btn = styled.div`
  padding: 8px 10px;
  width: 100%;
  text-align: center;
  margin-top: 20px;
  :first-child {
    margin-top: 0;
  }
`;

function Home() {
  useInitScroll();

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  return (
    <>
      <Helmet>
        <title>Duru</title>
      </Helmet>
      <Container>
        <EmptyArea>
          <Image src={require("../assets/main.svg").default} alt="main" />
        </EmptyArea>

        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />

        <BtnWrapper>
          <Btn onClick={scrollToTop}>
            <Image src={require("../assets/arrow.svg").default} alt="" />
          </Btn>
        </BtnWrapper>
      </Container>
    </>
  );
}

export default Home;
