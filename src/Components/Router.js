import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Layout from "./Layout";

function DuruWebRouter() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default DuruWebRouter;
