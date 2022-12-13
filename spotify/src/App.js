import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Side from "./pages/sideBar/side";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/Home" element={<homePage />} />
          <Route path="/Search" element={<searchPage />} />
          <Route path="/Library" element={<libraryPage />} />
        </Routes>
        <Side/>
      </BrowserRouter>
    </>
  );
}

export default App;
