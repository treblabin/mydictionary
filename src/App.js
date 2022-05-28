import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main.js";
import Add from "./Add.js";
import NotFound from "./NotFound.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/add" element={<Add />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
