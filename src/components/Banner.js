import React, { useState } from "react";
import { Box, Typography, Stack, Button } from "@mui/material";

import BannerCard from "./BannerCard";

const Banner = ({ bannerDetail, supplementName }) => {
  return (
    <Box
      className="banner-container"
      sx={{
        // position: { lg: "absolute" },
        display: "flex",
        gap: { lg: "0px", sm: "0px", xs: "0px" },
        flexDirection: {
          lg: "column",
          sm: supplementName ? "column" : "row",
          xs: supplementName ? "column" : "row",
        },
        justifyContent: { sm: "center" },
        alignItems: "center",
        // flexWrap: { lg: "nowrap", sm: "wrap" },
        top: { lg: "160px" },
        right: { lg: "20px" },
        width: {
          lg: "auto ",
          sm: supplementName ? "auto" : "600px",
          xs: supplementName ? "auto" : "400px",
        },
        height: {
          lg: "auto",
          sm: supplementName ? "auto" : "300px",
          xs: supplementName ? "auto" : "200px",
        },
      }}
    >
      {bannerDetail.bannerImage.map((img, index) => (
        <Stack
          key={index}
          sx={{
            backgroundColor: "rgb(255,255,255)",
            display: "flex",
            flexDirection: { lg: "column", sm: "row", sx: "row" },
            justifyContent: "space-around",
            alignItems: "center",
            // gap: '20px',
            position: { lg: "relative" },
            top: { lg: "50px" },
            height: {
              lg: "280px",
              sm: "210px",
              xs: "210px",
              //   xs: supplementName ? "100px" : "210px",
            },
            width: {
              lg: "200px",
              sm: "150px",
              xs: "150px",
              //   xs: supplementName ? "60px" : "150px",
            },
            margin: "0 auto",
          }}
        >
          <BannerCard
            productName={supplementName && bannerDetail.name}
            productImage={img}
            productLink={bannerDetail.amazonLinks[index]}
            data={bannerDetail}
          />
        </Stack>
      ))}
    </Box>
  );
};

export default Banner;
