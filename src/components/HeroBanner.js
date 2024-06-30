import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

import HeroBannerImage from "../assets/images/hero.png";

import Moto from "./Moto";

const HeroBanner = () => {
  return (
    <Box
      // display="flex"
      gap="40px"
      className="heroBanner"
      sx={{
        mt: { lg: "120px", xs: "70px" },
        ml: { sm: "50px", xs: "20px" },
      }}
    >
      <Typography color="rgb(244,70,48)" fontWeight="600" fontSize="26px">
        FitLife Hub: Your Ultimate Guide to Fitness, Health, and Wellness
      </Typography>

      <Typography
        fontWeight="600"
        sx={{ fontSize: { lg: "22px", xs: "20px" } }}
        color="whitesmoke"
      >
        <Moto />
      </Typography>
      <Typography
        fontSize="22px"
        lineHeight="35px"
        mb="10px"
        color="whitesmoke"
        sx={{ width: { lg: "60vw", xs: "90vw" } }}
      >
        Explore over 1200 exercises with instructional GIFs, detailed
        descriptions, and targeted muscle information.Our Supplementation Page
        offers insights into supplements for fat loss, immunity, heart health,
        and brain function. Additionally, our BMI calculator helps you monitor
        your progress. At FitLife Hub, we are dedicated to helping you empower
        your body, elevate your health, and enhance your mind.
      </Typography>
      <Button
        className="btn"
        href="#exercises"
        variant="contained"
        color="error"
        sx={{ backgroundColor: "rgb(244,70,48)", padding: "10px" }}
      >
        Explore Exercise
      </Button>
      <Typography
        fontWeight={600}
        color="rgb(244,70,48)"
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
        }}
        fontSize="200px"
      >
        Exercises
      </Typography>
      <div className="hero-banner-box">
        <img src={HeroBannerImage} alt="Banner" className="hero-banner-img" />
      </div>
    </Box>
  );
};

export default HeroBanner;
