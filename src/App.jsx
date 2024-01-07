import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import NLP from "./components/NLPLogicPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />}>
            <Route index path="/NLP" element={<NLP />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
