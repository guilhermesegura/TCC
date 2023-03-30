import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Container from "./components/layout/Container";

import Home from "./pages/Home";
import Cursos from "./pages/Cursos";
import Sobre from "./pages/Sobre";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Navbar />

      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route exact path="/cursos" element={<Cursos />} />
        </Routes>
        <Routes>
          <Route exact path="/sobre" element={<Sobre />} />
        </Routes>
        <Routes>
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Container>

      <Footer />
    </Router>
  );
}

export default App;
