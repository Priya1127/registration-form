import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Container, Typography, Link } from "@mui/material";

const Login = () => {
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    password: "",
  };

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Required";
    }

    if (!values.password) {
      errors.password = "Required";
    }

    return errors;
  };

  const handleSubmit = (values) => {
    alert("Logged In successfully");
    setTimeout(() => {
      navigate("/home", { state: { name: values.name } });
    }, 1000);
  };

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: handleSubmit,
  });

  return (
    <Container maxWidth="xs">
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        style={{ marginTop: "1rem" }}
      >
        Login
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && !!formik.errors.name}
          helperText={formik.touched.name && formik.errors.name}
          margin="normal"
        />

        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && !!formik.errors.password}
          helperText={formik.touched.password && formik.errors.password}
          margin="normal"
        />
        <Button
          fullWidth
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginTop: "1rem" }}
        >
          Login{" "}
        </Button>
      </form>
      <Typography align="center" style={{ marginTop: "1rem" }}>
        Already a member? <Link href="/">Register</Link>
      </Typography>
    </Container>
  );
};

export default Login;
