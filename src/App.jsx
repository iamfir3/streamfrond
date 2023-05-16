import { useState } from "react";
import "./App.css";
import Home from "./Page/Home/Home";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
