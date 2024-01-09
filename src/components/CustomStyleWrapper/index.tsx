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
          box-sizing: border-box;
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
