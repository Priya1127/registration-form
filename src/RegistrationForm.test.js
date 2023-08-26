import React from "react";
import { render, screen } from "@testing-library/react";
import RegistrationForm from "./RegistrationForm";

test("renders registration form", () => {
  render(<RegistrationForm />);

  const nameLabel = screen.getByLabelText("Name");
  const emailLabel = screen.getByLabelText("Email");
  const passwordLabel = screen.getByLabelText("Password");
  const mobileLabel = screen.getByLabelText("Mobile Number");

  expect(nameLabel).toBeInTheDocument();
  expect(emailLabel).toBeInTheDocument();
  expect(passwordLabel).toBeInTheDocument();
  expect(mobileLabel).toBeInTheDocument();
});
