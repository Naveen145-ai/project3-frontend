import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import DiseaseDetail from "./pages/diseaseDetail";
import Register from "./pages/Register";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import GoogleTranslate from "./components/GoogleTranslate";
import Location from "./pages/Location";
import Footer from "./components/Footer"; // Import the Location component

function App() {
  return (
    <Router>
      <Header />
      <GoogleTranslate />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Home />} />
        <Route path="/disease/:id" element={<DiseaseDetail />} />
        <Route path="/register/:id" element={<Register />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/location" element={<Location />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
