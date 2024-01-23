import {  Routes, Route } from "react-router-dom";
import ProjectSelectionPage from "./components/ProjectSelectionPage";
import NLP from "./components/NLPLogicPage";
import LoginPage from "./components/LoginPage";
import React from "react";

function App() {
  return (
    <>
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route index path="/Projects" element={<ProjectSelectionPage />} />
          <Route index path="/NLP" element={<NLP />} />
        </Routes>
      </React.StrictMode>
    </>
  );
}

export default App;
