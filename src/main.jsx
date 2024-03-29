import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import "./main.css";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const theme = {};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Router>
          <App />
        </Router>{" "}
      </CssBaseline>
    </ThemeProvider>
  </React.StrictMode>
);
