import React, { ChangeEvent, useState } from "react";
import * as Yup from "yup";
import { Field, FieldArray, Form, Formik, useFormik } from "formik";
import { Paper, TextField, Button, Box, Typography } from "@mui/material";
import { styles } from "./styles";
import HeaderComponent from "../HeaderComponent";

type LoginValues = {
  username: string;
  password: string;
};

const initialValues: LoginValues = {
  username: "",
  password: "",
};

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event !== null && event !== undefined) {
      setUsername(event.target.value);
    }
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event !== null && event !== undefined) {
      setPassword(event.target.value);
    }
  };

  const validationSchema = Yup.object({
    username: Yup.string()
      .min(4, "Username must be at least 4 characters")
      .max(20, "Username must be at most 20 characters")
      .matches(
        /^[a-zA-Z0-9]+$/,
        "Username can only contain alphanumeric characters"
      )
      .required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (event: React.FormEvent) => {
    if (event.nativeEvent instanceof InputEvent) {
      handleUsername(event as React.ChangeEvent<HTMLInputElement>);
      handlePassword(event as React.ChangeEvent<HTMLInputElement>);
    }
  };

  const onSubmit = (values: any) => {
    console.log("Submitted values:", values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  console.log(username, password);

  return (
    <Box sx={styles.componentContainer}>
      <HeaderComponent />
      <Box sx={styles.formContainer}>
        <Paper elevation={16} square={false} sx={styles.paper}>
          <Typography variant="h4" component="h4">
            User Login
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <Box sx={styles.formContainer}>
              <TextField
                label="Username"
                variant="outlined"
                error={false}
                onChange={handleUsername}
                value={username}
                sx={styles.textField}
              />
              <TextField
                label="Password"
                variant="outlined"
                fullWidth
                onChange={handlePassword}
                value={password}
                sx={styles.textField}
              />{" "}
              <Button
                variant="contained"
                sx={styles.button}
                onClick={handleSubmit}
              >
                Log In
              </Button>{" "}
            </Box>
          </form>{" "}
        </Paper>
      </Box>
    </Box>
  );
};

export default LoginPage;
