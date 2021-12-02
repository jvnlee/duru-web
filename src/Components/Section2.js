import { Section, Separator, Subtitle } from "./shared/SectionComponents";

function Section2() {
  return (
    <Section name="test2" className="element">
      <Separator />
      <Subtitle>
        Features
        <br />
        특징
      </Subtitle>
    </Section>
  );
}

export default Section2;
