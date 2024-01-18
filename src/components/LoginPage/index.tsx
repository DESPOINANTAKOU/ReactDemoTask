import { Form, ErrorMessage, useFormik, useFormikContext } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { styles } from "./styles";
import HeaderComponent from "../HeaderComponent";
import React, { ChangeEvent, useState } from "react";

type LoginValues = {
  username: string;
  password: string;
  setSubmitting: (isSubmitting: boolean) => void;
  isSubmitting: boolean;
  onSubmit: (values: any, formikBag: any) => void | Promise<any>;
};

export default function LoginForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { handleReset, handleSubmit } = useFormikContext();
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
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

  const formik = useFormik({
    initialValues: {
      username: "Please insert your username",
      password: "Please insert your password",
    },
    onSubmit: (values, actions) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }, 1000);
    },
    validationSchema: validationSchema,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    formik.setFieldValue(name, value);
  };

  // const handleSubmit = (values: string) => {
  //   setIsSubmitting(true);
  //   navigate("/Project", { replace: true });
  //   setTimeout(() => {
  //     alert(JSON.stringify(values, null, 2));
  //     // setSubmitting(false);
  //   }, 1000);
  // };

  return (
    <Box sx={styles.componentContainer}>
      <HeaderComponent />
      <Box sx={styles.formContainer}>
        <Paper elevation={16} square={false} sx={styles.paper}>
          <Typography variant="h4" component="h4" sx={styles.typography}>
            User Login
          </Typography>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
              formik.resetForm();
            }}
          >
            {/* onSubmit={async (values, actions) => {
              actions.setSubmitting(false);
              console.log(values);
              if (authenticated === true) {
                setIsSubmitting(true);
              
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  actions.setSubmitting(false);
                }, 1000);
              }
            }}  */}
            <TextField
              variant="outlined"
              margin="normal"
              name="username"
              type="username"
              placeholder="Please enter your Username"
              helperText={
                formik.touched.username
                  ? formik.errors.username
                  : "Please give a valid username"
              }
              label="Username"
              value={formik.values.username}
              onChange={handleChange}
            />

            <ErrorMessage name="username" />
            <TextField
              variant="outlined"
              margin="normal"
              name="password"
              type="password"
              placeholder="Please enter your Password"
              helperText={
                formik.touched.username
                  ? formik.errors.username
                  : "Please give a valid password"
              }
              label="Password"
              value={formik.values.password}
              onChange={handleChange}
            />

            <ErrorMessage name="password" />
            <Button type="submit">Submit</Button>
          </Form>
        </Paper>
      </Box>
    </Box>
  );
}
