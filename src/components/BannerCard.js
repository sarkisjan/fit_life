import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const BannerCard = ({ productImage, productName, productLink, data }) => {
  return (
    <Link to={productLink}>
      <Stack
        className="bannerCard-container"
        // height: { lg: "280px", sm: "210px", xs: "140px" },
        // width: { lg: "200px", sm: "150px", xs: "100px" },
        sx={{
          // borderRadius: '5px',
          boxShadow: "1px 1px 10px black",
          width: { lg: "170px", sm: "130px", xs: "130px" },
          height: { lg: "250px", sm: "180px", xs: "auto" },
          padding: "4px",
          alignItems: "center",
          // gap: "2px",
          maxWidth: "100%",
          justifyContent: "space-around",
          textAlign: "center",
        }}
      >
        <Typography
          className="bannerTitle"
          sx={{ color: "rgb(244,70,48)", fontWeight: "bold" }}
        >
          BEST OFFER
        </Typography>
        <img
          className="bannerImage"
          src={productImage}
          alt={productName && productName}
        />
        <Typography>
          {productName && (
            <Button
              variant="contained"
              sx={{
                backgroundColor: "rgba(244,70,48, 0.8)",
                fontSize: "9px",
                letterSpacing: "2px",
                fontWeight: "700",
                borderRadius: "20px",
              }}
            >
              {productName}
            </Button>
          )}
        </Typography>
      </Stack>
    </Link>

    // {exerciseDetail.map(exercise => (
    //     <div key={exercise.id} className="exercise-card">
    //     <a href={exercise.amazonLink} target="_blank" rel="noopener noreferrer">
    //         <img src={exercise.imageUrl} alt={exercise.name} className="exercise-image" />
    //         <div className="exercise-name">{exercise.name}</div>
    //     </a>
    //     </div>
    // ))}
  );
};

export default BannerCard;
