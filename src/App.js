import { React, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";
import Home from "./components/Home/Home"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Projects from "./components/ProjectPage/Projects";
import About from "./components/About/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";



const App = () => {

  useEffect(() => {
    document.body.style.backgroundImage = `url("./assets/images/coding.jpg")`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.width = "100vw";
    document.body.style.height = "100vh";

  }, [])

  return (
    <BrowserRouter>
      <CssBaseline />
      <Box>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
        <Footer />
      </Box>
    </BrowserRouter>
  );
}

export default App;
