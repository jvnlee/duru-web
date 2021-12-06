import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../Routes/Home";
import Guestbook from "../Routes/Guestbook";
import Layout from "./Layout";
import { BrowserView, MobileView } from "react-device-detect";
import Mobile from "./Mobile";

function DuruWebRouter() {
  return (
    <BrowserRouter>
      <BrowserView>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/guestbook" element={<Guestbook />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </Layout>
      </BrowserView>
      <MobileView>
        <Mobile />
      </MobileView>
    </BrowserRouter>
  );
}

export default DuruWebRouter;
