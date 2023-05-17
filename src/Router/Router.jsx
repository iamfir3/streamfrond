import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "../Components/Body/Body";
import Home from "../Page/Home/Home";
import Login from "../Page/Login";
import Signup from "../Page/Signup";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path='' element={<Body></Body>}></Route>
            <Route path='trend' element={<Body></Body>}></Route>
          </Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
