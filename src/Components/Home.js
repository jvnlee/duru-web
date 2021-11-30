import styled from "styled-components";
import { Element, animateScroll, scrollSpy } from "react-scroll";
import { useState } from "react";

const Container = styled.div`
  padding-top: 50px;
  height: auto;
`;

const Section = styled(Element)`
  padding: 50px 50px;
  height: 3000px;
  border-bottom: 1px solid gray;
`;

const Subtitle = styled.h2`
  display: block;
  color: #ffffff;
  font-size: 40px;
  line-height: 1.3em;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: flex;
  /* align-items: stretch; */
  @media (max-width: 1800px) {
    flex-direction: column;
  }
`;

const Description = styled.p`
  display: block;
  max-width: 800px;
  margin-top: 80px;
  text-align: left;
  font-size: 24px;
  line-height: 1.8em;
  @media (max-width: 768px) {
    margin-top: 50px;
    font-size: 18px;
  }
`;

const ImageContainer = styled.div`
  width: calc(100vw - 800px);
  min-width: 300px;
  height: 100%;
  @media (max-width: 1800px) {
    width: calc(100vw - 100px);
  }
`;

const Image = styled.img`
  width: 100%;
  /* margin-top: 50px; */
`;

const LangBox = styled.div`
  width: 60%;
  height: 600px;
  margin-top: 50px;
  border-radius: 10px;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const LangBar = styled.ul`
  width: 100%;
  height: 60px;
  display: flex;
  border-bottom: 1px solid darkgray;
`;

const LangTab = styled.li`
  width: calc(100% / 7);
  height: 60px;
  font-size: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 3px solid
    ${(props) => (props.className ? "#00FF97" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;

const Code = styled.img`
  width: 100%;
  height: auto;
`;

const EmptyArea = styled.div`
  width: 100%;
  height: auto;
  font-size: 40px;
  padding: 30px 30px 0;
`;

const PosterWrapper = styled.div`
  width: 100%;
  height: auto;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
`;

const PosterContainer = styled.div`
  width: calc((100vw - 150px) / 2);
  border: 0.5px solid #6b6b6b;
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
  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  const LANG_ARR = [
    "Javascript",
    "Java",
    "Python",
    "Kotlin",
    "Swift",
    "Ruby",
    "Go",
  ];

  const [currentTab, setCurrentTab] = useState(0);

  const onTabClick = (index) => {
    setCurrentTab(index);
  };

  return (
    <Container>
      <EmptyArea>
        <Image src={require("../assets/preview.svg").default} alt="preview" />
      </EmptyArea>

      <Section name="test1" className="element">
        <Subtitle>
          개요
          <br />
          Outline
        </Subtitle>
        <ContentWrapper>
          <Description>
            Duru는 영문과 한글 타이핑에 '두루' 사용될 수 있는 모노스페이스
            폰트로, 각진 세리프와 기하학적 형태감을 바탕으로 만들어졌다.
            소프트웨어 개발 환경에서 주로 사용되는 모노스페이스 폰트는 영문
            위주의 디자인이 지배적이고, 한글은 보통 산세리프 계열의 기본 서체로
            표시된다. 코드를 작성하면서 한글을 타이핑하게 되는 순간은 많지는
            않지만, 그 때 마다 보이는 그 부자연스러움을 그냥 지나치기엔 무언가
            아쉬운 면이 있다. 이렇게 코드 안에서 한글이 쓰여지는 몇 안되는
            순간들에도 한글과 영문 텍스트들과 조화를 이루게 하고자 Duru가
            탄생했다. Duru를 통해서 모노스페이스 텍스트를 작성할 때 일관된
            느낌의 서체 사용 경험을 만들어보고자 한다.
          </Description>
          <ImageContainer>
            <Image src={require("../assets/screenshot.png").default} alt="" />
          </ImageContainer>
        </ContentWrapper>
      </Section>

      <Section name="test2" className="element">
        <Subtitle>
          특징
          <br />
          Features
        </Subtitle>
        <Image src={require("../assets/typing-01.svg").default} alt="" />
      </Section>

      <Section id="test3" className="element">
        <Subtitle>
          사용
          <br />
          Usage
        </Subtitle>
        <LangBox>
          <LangBar>
            {LANG_ARR.map((element, index) => (
              <LangTab
                key={index}
                onClick={() => onTabClick(index)}
                className={currentTab === index ? "selected" : null}
              >
                <span>{element}</span>
              </LangTab>
            ))}
          </LangBar>
          <Code
            src={require(`../assets/${currentTab}.svg`).default}
            alt="code example"
          />
        </LangBox>
      </Section>

      <Section>
        <Subtitle>
          타입 포스터
          <br />
          Type Poster
        </Subtitle>
        <PosterWrapper>
          <PosterContainer>
            <Image
              src={require("../assets/poster1.png").default}
              alt="poster"
            />
          </PosterContainer>
          <PosterContainer>
            <Image
              src={require("../assets/poster2.png").default}
              alt="poster"
            />
          </PosterContainer>
        </PosterWrapper>
      </Section>

      {/* <EmptyArea>Empty Area</EmptyArea> */}

      <BtnWrapper>
        <Btn onClick={scrollToTop}>
          <Image src={require("../assets/arrow.svg").default} alt="" />
        </Btn>
      </BtnWrapper>
    </Container>
  );
}

export default Home;
