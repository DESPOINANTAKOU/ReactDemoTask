import React, { ChangeEvent, useState } from "react";
import * as Yup from "yup";
import { Field, FieldArray, Form, Formik, useFormik } from "formik";
import {
  Paper,
  TextField,
  Button,
  Box,
  Typography,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { styles } from "./styles";
import HeaderComponent from "../HeaderComponent";
import { Navigate } from "react-router-dom";

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "&:active": {},
          "&:disabled": {},
          "&:hover": {},
        },
      },
    },
  },
});

type LoginValues = {
  username: string;
  password: string;
};

const LoginPage = () => {
  //initializing states of React
  const [error, setError] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const validationSchema = Yup.object({
    username: Yup.string()
      .email("Must be a valid email")
      .min(4, "Username must be at least 4 characters")
      .max(20, "Username must be at most 20 characters")
      .matches(
        /^[a-zA-Z0-9]+$/,
        "Username can only contain alphanumeric characters"
      )
      .required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const onSubmit = (values: any) => {
    console.log("Submitted values:", values);
    setIsClicked(true);
    // if (authenticated === true) {
    <Navigate to="/Project" state={{ todos: [] }} replace={true} />;
    // }
  };

  //initializing formik initial Values
  const formik = useFormik({
    initialValues: {
      formValues: {
        username: "Please insert your username",
        password: "Please insert your password",
      },
      formErrors: {
        username: "",
        password: "",
      },
      formValidity: {
        username: false,
        password: false,
      },
      isSubmitting: false,
    },
    validationSchema,
    onSubmit,
  });

  return (
    <Box sx={styles.componentContainer}>
      <HeaderComponent />
      <Box sx={styles.formContainer}>
        <Paper elevation={16} square={false} sx={styles.paper}>
          <Typography variant="h4" component="h4" sx={styles.typography}>
            User Login
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <Box sx={styles.formContainer}>
              <TextField
                helperText={formik.initialValues.formErrors.username}
                className="textField"
                label="Username"
                variant="outlined"
                error={false}
                value={formik.values.formValues.username}
                sx={styles.textField}
                onChange={formik.handleChange}
              />
              <TextField
                helperText={formik.initialValues.formErrors.password}
                className="textField"
                label="Password"
                variant="outlined"
                fullWidth
                value={formik.values.formValues.password}
                sx={styles.textField}
                onChange={formik.handleChange}
              />
              <ThemeProvider theme={theme}>
                <Button
                  disabled={formik.initialValues.isSubmitting}
                  type="submit"
                  variant="contained"
                  sx={{
                    ...styles.button,
                    backgroundColor: isClicked ? "white" : "black",
                  }}
                >
                  Log In
                </Button>
              </ThemeProvider>
            </Box>
          </form>{" "}
        </Paper>
      </Box>
    </Box>
  );
};

export default LoginPage;
