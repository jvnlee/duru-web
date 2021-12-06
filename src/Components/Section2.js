import styled from "styled-components";
import {
  Blank,
  ContentWrapper,
  Description,
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

const SDescription = styled(Description)`
  margin-top: 40px;
`;

const FootNote = styled.span`
  display: block;
  font-size: 20px;
  margin-top: 10px;
  opacity: 0.5;
`;

function Section2() {
  return (
    <Section name="test2" className="element">
      <Separator />
      <Subtitle>
        Features
        <br />
        특징
      </Subtitle>
      <Heading>Upper Case</Heading>
      <Image src={require("../assets/uppercase.svg").default} alt="uppercase" />
      <Blank />
      <Heading>Lower Case</Heading>
      <Image src={require("../assets/lowercase.svg").default} alt="lowercase" />
      <Blank />
      <Heading>Numbers and Special Characters</Heading>
      <Image src={require("../assets/num.svg").default} alt="num" />
      <Blank />
      <ContentWrapper>
        <Description>
          코드 에디터에서 모노스페이스 폰트를 채택하여 사용하는 이유는 매우
          분명하다. 글자들이 고정폭을 가지기 때문에 어떤 문자를 입력하더라도
          가로세로 줄글 맞춤이 용이하다. 그러나 아주 작은 오타 하나만으로도 전체
          코드를 망가뜨릴 수 있기 때문에 글자의 형태간 혼동이 없어야 한다. Duru
          또한 이러한 기능성을 염두에 두고 만들어졌다.
        </Description>
        <ImageContainer>
          <Image
            src={require("../assets/distinguish.svg").default}
            alt="distinguish"
          />
        </ImageContainer>
      </ContentWrapper>
      <Blank />
      <ContentWrapper>
        <Description>
          식별성과 가독성을 높이기 위해 소문자의 속공간 폭을 기존 모노스페이스
          서체들에 비해 넓게 가져갔고, x-height 또한 충분히 확보하려고 했다.
        </Description>
        <ImageContainer>
          <Image
            src={require("../assets/x-height.svg").default}
            alt="x-height"
          />
        </ImageContainer>
      </ContentWrapper>
      <Blank />
      <ContentWrapper>
        <Description>
          대문자는 소문자에 비해 주어진 글자 틀을 가득 채우는듯한 인상이 강한데,
          왼편에 존재하는 세리프가 있어 꽉 찬 글자들을 나란히 써도 획이
          겹쳐보이지 않는다.
        </Description>
        <ImageContainer>
          <Image src={require("../assets/cap-gap.svg").default} alt="cap-gap" />
        </ImageContainer>
      </ContentWrapper>
      <Blank />
      <ContentWrapper>
        <ImageContainer>
          <Image
            src={require("../assets/serif-circled.svg").default}
            alt="serif-circled"
          />
        </ImageContainer>
        <SDescription>
          Duru는 앞서 소개한대로 직각의 세리프를 특징적인 컨셉으로 가져가고
          있다. 형태적인 이유로 세리프가 존재하지 않는 일부 글자를 제외하고는
          영문과 한글 모두 공통된 세리프 요소를 가지고 있다.
        </SDescription>
      </ContentWrapper>
      <Blank />
      <ContentWrapper>
        <SDescription>
          {`이 세리프끼리 만나면서 다른 서체에서 볼 수 없었던 조합의 Ligature*가
          자연스럽게 형성된다. 이외에도 코드 작성에서 빈번히 나타나는 표현식(ex.
          자바스크립트의 화살표 함수 "=>")을 보다 편리하게 만들기 위해 특수문자
          간의 조합도 지원한다.`}
          <FootNote>
            *Ligature: 2개 이상의 글자가 합쳐져서 하나의 모양을 이루는 것
          </FootNote>
        </SDescription>
        <ImageContainer>
          <Image
            src={require("../assets/auto-ligature.svg").default}
            alt="auto-ligature"
          />
        </ImageContainer>
      </ContentWrapper>
      <SImageContainer>
        <Image
          src={require("../assets/arrow-func.svg").default}
          alt="arrow-func"
        />
      </SImageContainer>
    </Section>
  );
}

export default Section2;
