import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import MainPage from "./container/Main";
import MakeText from "./container/Make";
import Header from "./component/Header";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/make" element={<MakeText />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
