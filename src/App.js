import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/Home";
import Users from "./pages/Users";
import Contact from "./pages/Contact";
import Menu from "./components/Menu";

function App() {
  return (
    // routing işlemlerini yapacağımız bütün componentleri kapsamalı, route'larımıı routes'un altına tek tek yerleştirmemiz gerekiyor.
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route index element={<Home />} />
        <Route path="users" element={<Users />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
