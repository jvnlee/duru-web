import styled from "styled-components";
import {
  Blank,
  ContentWrapper,
  Description,
  Image,
  ImageContainer,
  Section,
  Separator,
  Subtitle,
} from "./shared/SectionComponents";

const SImage = styled(Image)`
  margin-top: -80px;
`;

function Section1() {
  return (
    <Section name="test1" className="element">
      <Separator />
      <Subtitle>
        Outline
        <br />
        개요
      </Subtitle>
      <ContentWrapper>
        <ImageContainer>
          <SImage
            src={require("../assets/code-sample.png").default}
            alt="code-sample"
          />
        </ImageContainer>
        <Description>
          코드 에디터 상에서 모노스페이스 폰트를 보다 보면 문득 이런 의문이
          생긴다. “영문 모노스페이스는 디자인된 서체가 나오는데, 왜 한글은 기본
          서체로만 출력될까?” 답은 꽤 간단하다. 코드 작성은 주로 영문으로
          이루어지고, 한글을 사용할 일은 매우 적기 때문이다. 그렇지만 코딩을
          하면서 한글을 아예 사용하지 않는 것도 아니다. 한국어가 지원되는
          소프트웨어에는 군데 군데 한글을 쓰고, 코드를 작성하다가 남기는
          주석에도 한국인이라면 한글을 주로 쓸 것이다.
        </Description>
      </ContentWrapper>
      <Blank />
      <ContentWrapper>
        <Description>
          이렇듯 모노스페이스 서체로 쓰여진 코드 안에서 한글은 필연적으로 쓰이고
          있다. 그런 한글을 그대로 방치하지 말자는 취지에서 Duru를 고안하게
          되었다. Duru는 잘 디자인된 영문 폰트와 기본 폰트로 출력되는 한글
          사이의 괴리를 막고자 한다. 그리고 이미 태생적으로 모노스페이스라고 볼
          수 있는 한글의 특성을 살려 한글과 영문을 동일한 고정폭을 가진 서체로
          만들어보려는 시도가 담겨 있다.
        </Description>
        <ImageContainer>
          <Image
            src={require("../assets/outline-main.svg").default}
            alt="outline-main"
          />
        </ImageContainer>
      </ContentWrapper>
    </Section>
  );
}

export default Section1;
