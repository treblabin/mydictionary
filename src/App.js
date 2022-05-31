import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Main from "./Main.js";
import Add from "./Add.js";
import Edit from "./Edit.js";
import NotFound from "./NotFound.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Link
            to="/"
            style={{
              display: "contents",
            }}
          >
            <HCover>영어 단어장</HCover>
          </Link>
          <hr />
        </div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:index" element={<Edit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

const HCover = styled.h1`
  text-align: center;
  color: black;
`;

export default App;
