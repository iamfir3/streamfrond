import { useState } from "react";
import "./App.css";
import Home from "./Page/Home/Home";
import { Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
