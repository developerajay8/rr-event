import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home/home";
import About from "./pages/about/about";


const App = () => {
  return (
    <Router>
      <Header />
      
      <main className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          
        </Routes>
      </main>
      
    </Router>
  );
};

export default App;
