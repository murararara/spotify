// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Side from "./pages/SideBar/side";
// import Home from "./pages/Home/home";
// import "./App.css";

// function App() {
//   return (
//     <div className="containerMain">
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<></>} />
//           <Route path="/Home" element={<Home/>} />
//           <Route path="/Search" element={<searchPage/>} />
//           <Route path="/Library" element={<libraryPage/>} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Signup, Login, Home } from "./pages1";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <div>
            <section>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </section>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
