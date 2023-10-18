import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./subpages/Home";
import About from "./subpages/About";
import OurTeam from "./subpages/OurTeam";
import Clients from "./subpages/Clients";
import Contact from "./subpages/Contact";
import Navbar from "./components/Navbar";
import Subbar from "./components/Subbar";

import { Box } from "@mui/material";
import "./App.css";

function App() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Subbar />
    </Box>
  );
}

export default App;
