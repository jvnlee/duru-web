import styled from "styled-components";

const MobileViewContainer = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  overflow: hidden;
`;

const Guidance = styled.h2`
  font-size: 16px;
  line-height: 1.5em;
  text-align: center;
`;

function Mobile() {
  return (
    <MobileViewContainer>
      <Guidance>
        이 웹사이트는 데스크탑 크롬 브라우저 환경에 최적화 되어있습니다. 해당
        환경에 맞게 접속해주시면 감사하겠습니다!
        <br />
        <br />
        This website is optimized in Desktop Chrome browser environment. Please
        access with the notified condition. Thank you!
        <br />
        <br />- 👨‍💻 Hyun Jun Lee -
      </Guidance>
    </MobileViewContainer>
  );
}

export default Mobile;
