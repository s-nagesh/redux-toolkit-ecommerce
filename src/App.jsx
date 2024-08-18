import { useState } from "react";
import "./App.css";
import Header from "../components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import CartDetails from "../components/CardDetails";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartDetails />} />
      </Routes>
      <Toaster/>
    </>
  );
}

export default App;
