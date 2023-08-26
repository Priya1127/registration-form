import React from "react";
import { render, screen } from "@testing-library/react";
import RegistrationForm from "./RegistrationForm";

test("renders Login Page", () => {
  render(<RegistrationForm />);

  const nameLabel = screen.getByLabelText("Name");
  const passwordLabel = screen.getByLabelText("Password");

  expect(nameLabel).toBeInTheDocument();
  expect(passwordLabel).toBeInTheDocument();
});
