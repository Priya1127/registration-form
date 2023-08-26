import React from "react";
import { Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const { name } = location.state || {};

  return (
    <div>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        style={{ marginTop: "1rem" }}
      >
        Hello {name}
      </Typography>
      <Typography variant="h4" align="center" gutterBottom>
        Home Page
      </Typography>
    </div>
  );
};

export default Home;
