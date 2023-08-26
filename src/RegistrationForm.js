import React from "react";
import { useFormik } from "formik";
import { Button, TextField, Container, Typography, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    password: "",
    mobile: "",
  };

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Required";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Required";
    }

    if (!values.mobile) {
      errors.mobile = "Required";
    } else if (!/^[0-9]{10}$/i.test(values.mobile)) {
      errors.mobile = "Invalid mobile number";
    }

    return errors;
  };

  const handleSubmit = (values) => {
    alert("registration successful");
    setTimeout(() => {
      navigate("/login");
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
        Sign Up
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
          error={formik.touched.name && !!formik.errors.name} // !!?
          helperText={formik.touched.name && formik.errors.name} // ?
          margin="normal"
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && !!formik.errors.email}
          helperText={formik.touched.email && formik.errors.email}
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
        <TextField
          fullWidth
          id="mobile"
          name="mobile"
          label="Mobile Number"
          value={formik.values.mobile}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.mobile && !!formik.errors.mobile}
          helperText={formik.touched.mobile && formik.errors.mobile}
          margin="normal"
        />
        <Button
          fullWidth
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginTop: "1rem" }}
        >
          Sign Up
        </Button>
      </form>
      <Typography align="center" style={{ marginTop: "1rem" }}>
        Already have an account? <Link href="/login">Login</Link>
      </Typography>
    </Container>
  );
};

export default RegistrationForm;
