import styled from "styled-components";
import { Element, Events, animateScroll, scrollSpy } from "react-scroll";
import { useEffect } from "react";

const Dummy = styled.div`
  padding-top: 50px;
  height: auto;
`;

const SElement = styled(Element)`
  padding: 30px 30px 0;
  height: 1500px;
  font-size: 40px;
  border-bottom: 1px solid white;
`;

const EmptyArea = styled.div`
  width: 100%;
  height: 300px;
  background-color: darkgray;
  font-size: 40px;
  padding: 30px 30px 0;
`;

const BtnWrapper = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid white;
  background-color: blue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 80px;
  right: 30px;
`;

const Btn = styled.div`
  padding: 8px 10px;
  border: 1px solid white;
  width: 200px;
  text-align: center;
  margin-top: 20px;
  :first-child {
    margin-top: 0;
  }
`;

function Home() {
  // useEffect(() => {
  //   Events.scrollEvent.register("begin", function (to, element) {
  //     console.log("begin", arguments);
  //   });

  //   Events.scrollEvent.register("end", function (to, element) {
  //     console.log("end", arguments);
  //   });

  //   scrollSpy.update();

  //   return () => {
  //     Events.scrollEvent.remove("begin");
  //     Events.scrollEvent.remove("end");
  //   };
  // }, []);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };
  const scrollToBottom = () => {
    animateScroll.scrollToBottom();
  };
  const scrollTo = () => {
    animateScroll.scrollTo(100);
  };
  const scrollMore = () => {
    animateScroll.scrollMore(100);
  };
  const handleSetActive = (to) => {
    console.log(to);
  };

  return (
    <Dummy>
      <EmptyArea>Empty Area</EmptyArea>

      <SElement name="test1" className="element">
        Test 1
      </SElement>

      <SElement name="test2" className="element">
        Test 2
      </SElement>

      <SElement id="anchor" className="element">
        Test 3 (anchor)
      </SElement>

      <EmptyArea>Empty Area</EmptyArea>

      <BtnWrapper>
        <Btn onClick={scrollToTop}>To the top!</Btn>
        <Btn onClick={scrollToBottom}>To the bottom!</Btn>
        <Btn onClick={scrollTo}>Scroll to 100px from the top</Btn>
        <Btn onClick={scrollMore}>
          Scroll 100px more from the current position!
        </Btn>
      </BtnWrapper>
    </Dummy>
  );
}

export default Home;
