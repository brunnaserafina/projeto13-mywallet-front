import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLogin from "./components/PageLogin";
import PageSignUp from "./components/PageSignUp";
import PageRegisters from "./components/PageRegisters";
import PageReceived from "./components/PageReceived";
import PageSpended from "./components/PageSpended";
import "./assets/css/reset.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageLogin />} />
          <Route path="/cadastro" element={<PageSignUp />} />
          <Route path="/registros" element={<PageRegisters />} />
          <Route path="/entrada" element={<PageReceived />} />
          <Route path="/saida" element={<PageSpended />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
