import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router";
import { Box, Button, Paper, Typography } from "@mui/material";
import { styles } from "./styles";
import HeaderComponent from "../HeaderComponent";
import React, { useState } from "react";

type LoginValues = {
  username: string;
  password: string;
  onSubmit: () => void;
};

export default function LoginForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  return (
    <Box sx={styles.componentContainer}>
      <HeaderComponent />
      <Box sx={styles.formContainer}>
        <Paper elevation={16} square={false} sx={styles.paper}>
          <Typography variant="h4" component="h4" sx={styles.typography}>
            User Login
          </Typography>
          <Formik
            initialValues={{
              username: "Please insert your username",
              password: "Please insert your password",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              setIsSubmitting(false);
              console.log(values);
              if (authenticated === true) {
                setIsSubmitting(true);
                navigate("/Project", { replace: true });
              }
            }}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form>
                <Field name="username" />{" "}
                {errors.username && touched.username ? (
                  <div>{errors.username}</div>
                ) : null}
                <ErrorMessage name="username" />
                <Field name="password" type="password" />{" "}
                {errors.password && touched.password ? (
                  <div>{errors.password}</div>
                ) : null}
                <ErrorMessage name="password" />
                <Button type="submit">Submit</Button>
              </Form>
            )}
          </Formik>
        </Paper>
      </Box>
    </Box>
  );
}
