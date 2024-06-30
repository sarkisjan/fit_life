import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";

import "./App.css";
import Supplementation from "./pages/Supplementation";

const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
        <Route path="/supplementation" element={<Supplementation />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
