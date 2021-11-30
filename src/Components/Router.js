import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../Routes/Home";
import Guestbook from "../Routes/Guestbook";
import Layout from "./Layout";

function DuruWebRouter() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guestbook" element={<Guestbook />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default DuruWebRouter;
