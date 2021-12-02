import {
  ContentWrapper,
  Description,
  Image,
  ImageContainer,
  Section,
  Separator,
  Subtitle,
} from "./shared/SectionComponents";

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
        <Description>
          Duru는 영문과 한글 타이핑에 '두루' 사용될 수 있는 모노스페이스 폰트로,
          각진 세리프와 기하학적 형태감을 바탕으로 만들어졌다. 소프트웨어 개발
          환경에서 주로 사용되는 모노스페이스 폰트는 영문 위주의 디자인이
          지배적이고, 한글은 보통 산세리프 계열의 기본 서체로 표시된다. 코드를
          작성하면서 한글을 타이핑하게 되는 순간은 많지는 않지만, 그 때 마다
          보이는 그 부자연스러움을 그냥 지나치기엔 무언가 아쉬운 면이 있다.
          이렇게 코드 안에서 한글이 쓰여지는 몇 안되는 순간들에도 한글과 영문
          텍스트들과 조화를 이루게 하고자 Duru가 탄생했다. Duru를 통해서
          모노스페이스 텍스트를 작성할 때 일관된 느낌의 서체 사용 경험을
          만들어보고자 한다.
        </Description>
        <ImageContainer>
          <Image src={require("../assets/screenshot.png").default} alt="" />
        </ImageContainer>
      </ContentWrapper>
    </Section>
  );
}

export default Section1;
