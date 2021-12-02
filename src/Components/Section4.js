import styled from "styled-components";
import {
  Image,
  Section,
  Separator,
  Subtitle,
} from "./shared/SectionComponents";

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

function Section4() {
  return (
    <Section>
      <Separator />
      <Subtitle>Extra</Subtitle>
      <PosterWrapper>
        <PosterContainer>
          <Image src={require("../assets/poster1.png").default} alt="poster" />
        </PosterContainer>
        <PosterContainer>
          <Image src={require("../assets/poster2.png").default} alt="poster" />
        </PosterContainer>
      </PosterWrapper>
    </Section>
  );
}

export default Section4;
