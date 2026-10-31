import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Rumah from "./pages/Rumah";
import Menu from "./pages/Menu";
import Ruang from "./pages/Ruang";
import Meja from "./pages/Meja";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="rumah" element={<Rumah />} />
          <Route path="menu" element={<Menu />} />
          <Route path="ruang" element={<Ruang />} />
          <Route path="meja" element={<Meja />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
