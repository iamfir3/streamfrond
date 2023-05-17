import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "../Components/Body/Body";
import Home from "../Page/Home/Home";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path='' element={<Body></Body>}></Route>
            <Route path='trend' element={<Body></Body>}></Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
