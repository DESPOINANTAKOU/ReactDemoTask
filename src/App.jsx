import { styles } from "./App.ts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectSelectionPage from "./components/ProjectSelectionPage";
import NLP from "./components/NLPLogicPage";
import LoginPage from "./components/LoginPage";
import { Box } from "@mui/material";

function App() {
  return (
    <>
      <Box sx={styles.body}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />}></Route>
            <Route index path="/Project" element={<ProjectSelectionPage />} />
            <Route index path="/NLP" element={<NLP />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </>
  );
}

export default App;
