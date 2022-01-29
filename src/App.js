import React from "react";
import Header from "./components/Header";
import CssBaseline from "@mui/material/CssBaseline";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <div style={{ height: "700px", textAlign: "center" }}>
        <h1 style={{ color: "white", marginTop: "200px", fontSize:"100px" }}>Site Under Construction!</h1>
      </div>
      <Footer />
    </>
  );
}

export default App;
