import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Register from "./components/register/Register";

import Home from "./pages/home/Home"; // landing Page

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
