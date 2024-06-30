import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Banner from "./Banner";

function SupplementList({ supplements }) {
  if (supplements.length === 0) {
    return (
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="start"
        textAlign="center"
        gap="0px"
      >
        <Typography
          textAlign="center"
          fontWeight="300"
          fontSize="26px"
          color="rgb(244,70,48)"
        >
          No supplements match your criteria
        </Typography>
      </Box>
    );
  }

  return (
    <Stack
      sx={{ flexDirection: "row", gap: { lg: "50px", sm: "15px", xs: "15px" } }}
    >
      <Stack>
        <Typography
          flexDirectionontWeight="300"
          fontSize="26px"
          color="rgb(244,70,48)"
        >
          <h2>Supplement List</h2>
        </Typography>

        <ul className="supplementList">
          {supplements.map((supplement) => (
            <li key={supplement.id}>
              <Typography
                textAlign="center"
                fontWeight="300"
                fontSize="26px"
                color="rgb(244,70,48)"
              >
                {supplement.name}
              </Typography>
              {console.log(supplement)}
              <p>
                <strong>Type:</strong> {supplement.type} ({supplement.subtype})
              </p>
              <p>
                <strong>Goal:</strong>{" "}
                {Array.isArray(supplement.goal)
                  ? supplement.goal.join(", ")
                  : supplement.goal}
              </p>
              <p>
                <strong>Description:</strong> {supplement.description}
              </p>
              <p>
                <strong>Benefits:</strong> {supplement.benefits}
              </p>
              <p>
                <strong>Best Time to Take:</strong> {supplement.bestTimeToTake}
              </p>
              <p>
                <strong>Side Effects:</strong> {supplement.sideEffects}
              </p>
              <p>
                <strong>Recommended Dose:</strong> {supplement.recommendedDose}
              </p>
              <p>
                <strong>Maximum Dose:</strong> {supplement.maxDose}
              </p>
              <p>
                <strong>Interactions:</strong> {supplement.interactions}
              </p>
            </li>
          ))}
        </ul>
      </Stack>
      <Stack>
        {supplements.map((supplement, index) => (
          <Banner supplementName key={index} bannerDetail={supplement} />
        ))}
      </Stack>
    </Stack>
  );
}

export default SupplementList;
