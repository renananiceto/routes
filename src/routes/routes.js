import { BrowserRouter, Routes, Route } from "react-router-dom";

import Menu from "../components/Menu";
import { Home, Foto, Video } from "../pages";

export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Foto" element={<Foto />} />
        <Route path="/Video" element={<Video />} />
      </Routes>
    </BrowserRouter>
  );
};
