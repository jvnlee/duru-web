import styled from "styled-components";
import {
  Description,
  Heading,
  Image,
  Section,
  Separator,
  Subtitle,
} from "./shared/SectionComponents";

const SHeading = styled(Heading)`
  margin-bottom: 10px;
`;

const SDescription = styled(Description)`
  margin-bottom: 40px;
`;

const PosterWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
`;

const PosterContainer = styled.div`
  width: calc((100vw - 150px) / 2);
  border: 0.5px solid #6b6b6b;
`;

function Section4() {
  return (
    <Section>
      <Separator />
      <Subtitle>Extra</Subtitle>
      <SHeading>Type Poster</SHeading>
      <SDescription>Size: A1 (594mm × 841mm)</SDescription>
      <PosterWrapper>
        <PosterContainer>
          <Image src={require("../assets/poster1.svg").default} alt="poster" />
        </PosterContainer>
        <PosterContainer>
          <Image src={require("../assets/poster2.svg").default} alt="poster" />
        </PosterContainer>
      </PosterWrapper>
    </Section>
  );
}

export default Section4;
