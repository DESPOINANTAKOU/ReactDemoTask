import React from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { ReactNode } from "react";

// Define your global styles
const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        :root {
          margin: 0;
          padding: 0;
          width: 100vw;
          height: 100vh;
          box-sizing: border-box;
          background-color: #b0afae;
        }
      `,
    },
  },
});

// Wrap your entire app with the ThemeProvider
export const AppWrapper = ({ children }: { children: ReactNode }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);
