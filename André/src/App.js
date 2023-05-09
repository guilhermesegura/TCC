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

// const express = require("express");
// const app = express();

// // Importar as rotas
// const userRoutes = require("./routes/user");
// const teachersRoutes = require("./routes/teachers");
// const studentsRoutes = require("./routes/students");
// const classesRoutes = require("./routes/classes");

// // Usar as rotas
// app.use("/api/v1/users", userRoutes);
// app.use("/api/v1/teachers", teachersRoutes);
// app.use("/api/v1/students", studentsRoutes);
// app.use("/api/v1/classes", classesRoutes);

// // Iniciar o servidor
// app.listen(3000, () => {
//   console.log("Servidor iniciado na porta 3000");
// });

// importar os módulos necessários
// const express = require("express");
// const path = require("path");
// require("express-async-errors");
// const connectDB = require("./db/connect");
// require("dotenv").config();

// // importar as rotas
// const TeachersRoutes = require("./routes/teachers");
// const ClassRoutes = require("./routes/classes");
// const StudentRoutes = require("./routes/students");
// const UserRoutes = require("./routes/user");

// const app = express();

// // middlewares
// app.use(express.json());

// // usar as rotas
// app.use("/api/v1/teachers", TeachersRoutes);
// app.use("/api/v1/classes", ClassRoutes);
// app.use("/api/v1/students", StudentRoutes);
// app.use("/api/v1/users", UserRoutes);

// // conexão com o banco de dados e inicialização do servidor
// const port = process.env.PORT || 3000;

// const start = async () => {
//   try {
//     await connectDB(process.env.MONGO_URI);
//     app.listen(port, () => console.log(`Server is listening on port ${port}`));
//   } catch (error) {
//     console.log(error);
//   }
// };

// start();

var express = require("express");
var path = require("path");
require("express-async-errors");

const connectDB = require("./db/connect");
require("dotenv").config();

var TeachersRoutes = require("./routes/teachers");
var ClassRoutes = require("./routes/classes");
var StudentRoutes = require("./routes/students");
var UserRoutes = require("./routes/user.js");
var app = express();

app.use(express.json());

app.use("/api/v1/teachers", TeachersRoutes);
app.use("/api/v1/classes", ClassRoutes);
app.use("/api/v1/students", StudentRoutes);
app.use("/api/v1/users", UserRoutes);

const port = process.env.PORT || 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server is listening port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();

export default App;
