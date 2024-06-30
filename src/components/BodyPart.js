import React from "react";
import { Stack, Typography } from "@mui/material";
// import Icon from '../assets/icons/gym.png';

// item is passed from the HorizontalScrollbar component
// bodyPart, setBodyPart are passed from Home to HorizontalScrollbar component and from there here.
const BodyPart = ({ item, icon, bodyPart, setBodyPart }) => {
  // console.log(`ova e od BodyPart bodyPart: ${bodyPart}`);

  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        border: bodyPart === item ? "6px solid rgb(244,70,48)" : "",
        backgroundColor: "white",
        borderRadius: "50%",
        paddingTop: "10px",
        width: { lg: "270px", xs: "170px" },
        height: { lg: "270px", xs: "170px" },
        cursor: "pointer",
        gap: { lg: "47px", xs: "10px" },
      }}
      onClick={() => {
        setBodyPart(item);
      }}
    >
      <img
        className="bodyIcon"
        src={`/icons/bodyParts/${item.replace(/\s/g, "")}.png`}
        alt="body part"
      />
      <Typography style={{ fontWeight: "bold", color: "rgb(244,70,48)" }}>
        {item.toUpperCase()}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
