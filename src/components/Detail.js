import React from "react";
import { Typography, Stack, Button } from "@mui/material";

import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";
import Banner from "./Banner";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, image, name, primaryMuscles, equipment, instructions } =
    exerciseDetail;

  const extraDetail = [
    {
      // icon: BodyPartImage,
      icon: bodyPart.replace(/ /g, ""),
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: primaryMuscles,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap="50px"
      sx={{
        width: { lg: "90vw" },
        flexDirection: { lg: "row" },
        p: "20px",
        alignItems: "center",
      }}
    >
      <img src={image} alt={name} loading="lazy" className="detail-image" />
      <Stack
        direction="column"
        height="90vh"
        justifyContent="space-between"
        alignItems="start"
        sx={{ gap: { lg: "35px", xs: "20px" }, width: { lg: "40%" } }}
      >
        <Typography
          color="rgb(244,70,48)"
          sx={{ fontSize: { lg: "47px", xs: "25px" } }}
          fontWeight={700}
          textTransform="capitalize"
        >
          {name}
        </Typography>

        <Typography
          sx={{
            fontSize: { lg: "20px", sm: "18px", xs: "15px" },
            textAlign: "justify",
          }}
          color="#FFF"
        >
          {/* <ul>
           { instructions.map( inst = > {
            <li>inst</li>;
           })}
          </ul> */}
          <h3>Instructions:</h3>
          {instructions}

          {/* Exercises keep you strong.{' '}
          <span style={{ textTransform: 'capitalize' }}>{name}</span> bup is one
          of the best <br /> exercises to target your {primaryMuscles}. It will help you improve your{' '}
          <br /> mood and gain energy. */}
        </Typography>

        <Stack
          sx={{
            flexDirection: { lg: "row", sm: "column" },
            alignItems: { lg: "center", sm: "start" },
            gap: { lg: "40px", sm: "30px", xs: "20px" },
          }}
        >
          {extraDetail?.map((item) => (
            <Stack
              key={item.name}
              direction="row"
              gap="15px"
              alignItems="center"
            >
              <Button
                sx={{
                  flexShrink: "0",
                  background: "#FFF",
                  borderRadius: "50%",
                  width: { lg: "80px", sm: "70px", xs: "64px" },
                  height: { lg: "80px", sm: "70px", xs: "64px" },
                }}
              >
                <img
                  src={
                    bodyPart === item.name
                      ? `/icons/bodyParts/${item.icon}.png`
                      : item.icon
                  }
                  alt={bodyPart}
                  style={{ width: "40px", height: "40px" }}
                />
              </Button>
              <Typography
                color="#FFF"
                textTransform="capitalize"
                sx={{ fontSize: { lg: "25px", xs: "15px" } }}
              >
                {Array.isArray(item.name) ? item.name.join(", ") : item.name}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
      {exerciseDetail.amazonLinks.length !== 0 && (
        <Banner equipmentName bannerDetail={exerciseDetail} />
      )}
    </Stack>
  );
};

export default Detail;
