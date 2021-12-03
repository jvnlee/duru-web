import styled from "styled-components";
import {
  Blank,
  Heading,
  Image,
  ImageContainer,
  Section,
  Separator,
  Subtitle,
} from "./shared/SectionComponents";

const SImageContainer = styled(ImageContainer)`
  width: 100%;
  height: 100%;
`;

function Section3() {
  return (
    <Section id="test3" className="element">
      <Separator />
      <Subtitle>
        Usage
        <br />
        활용
      </Subtitle>
      <Heading>Javascript (자바스크립트)</Heading>
      <SImageContainer>
        <Image
          src={require("../assets/jsexample.svg").default}
          alt="jsexample"
        />
      </SImageContainer>
      <Blank />
      <Heading>Kotlin (코틀린)</Heading>
      <SImageContainer>
        <Image
          src={require("../assets/kotlinexample.svg").default}
          alt="kotlinexample"
        />
      </SImageContainer>
      <Blank />
      <Heading>Java (자바)</Heading>
      <SImageContainer>
        <Image
          src={require("../assets/javaexample3.svg").default}
          alt="javaexample"
        />
      </SImageContainer>
    </Section>
  );
}

export default Section3;
