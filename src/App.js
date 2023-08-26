import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationForm from "./RegistrationForm";
import Home from "./Home";
import Login from "./Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<RegistrationForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
