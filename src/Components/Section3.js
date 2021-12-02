import { useState } from "react";
import styled from "styled-components";
import { Section, Separator, Subtitle } from "./shared/SectionComponents";

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

function Section3() {
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
    <Section id="test3" className="element">
      <Separator />
      <Subtitle>
        Usage
        <br />
        활용
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
  );
}

export default Section3;
