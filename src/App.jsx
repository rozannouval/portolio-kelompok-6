import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/frontend/Home.jsx";
import About from "./pages/frontend/About.jsx";
import Layout from "./components/layout/layout.jsx";

import ScrollToTop from "../lib/ScrollToTop.jsx";

// for api
import Panduan from "./pages/frontend/ForAPI/Panduan.jsx";
import Card from "./pages/frontend/ForAPI/details/Card.jsx";
import FormLogin from "./pages/frontend/ForAPI/login/FormLogin.jsx";
import ShowCard from "./pages/frontend/ForAPI/details/ShowCard.jsx";
import ShowPages from "./pages/frontend/ForAPI/details/ShowPages.jsx";

import Admin from "./pages/frontend/AdminPage/Admin.jsx";
import HomeAdmin from "./pages/frontend/AdminPage/HomeAdmin.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />

            <Route path="/panduan" element={<Panduan />} />
            <Route path="/card" element={<Card />} />
            <Route path="/login" element={<FormLogin />} />
            <Route path="/card/:id" element={<ShowCard />} />
            <Route path="/card/all" element={<ShowPages />} />
          </Route>

          <Route
            path="/username=admin&&password=admin123/admin"
            element={<Admin />}
          >
            <Route index element={<HomeAdmin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
