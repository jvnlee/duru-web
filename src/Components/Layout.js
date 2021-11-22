import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

const Content = styled.main`
  max-width: auto;
  width: 100%;
  height: 100%;
`;

function Layout({ children }) {
  return (
    <>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  );
}

export default Layout;
