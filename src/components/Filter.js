import React from "react";
import { Box, Stack, Typography } from "@mui/material";

function Filter({ filters, onFilterChange }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onFilterChange({ ...filters, [name]: value });
  };
  // const handleBlur = (event) => {
  //   const selectElement = event.target;
  //   const selectedIndex = selectElement.selectedIndex;
  //   const options = selectElement.options;

  //   for (let i = 0; i < options.length; i++) {
  //     options[i].classList.remove("selected-option");
  //   }

  //   options[selectedIndex].classList.add("selected-option");
  // };
  return (
    <Box className="supplementFilter">
      <Typography color="rgb(244,70,48)">
        <h1>Supplement Filter</h1>
      </Typography>

      <Stack
        color="black"
        gap="40px"
        justifyContent="center"
        alignItems="center"
        sx={{
          flexDirection: { lg: "column", sm: "row" },
        }}
      >
        <Box className="filterComponent select-container">
          <label className="label-box">
            Goal:
            <select
              id="typeSelect"
              className="select-box"
              name="goal"
              value={filters.goal}
              onChange={handleInputChange}
              // onFocus={(this.size = 10)}
              // onBlur={(this.size = 0)}
              // onChange="this.size=1; this.blur();"
              // onBlur={handleBlur}
            >
              <option value="">All</option>
              <option value="Fat Loss">Fat Loss</option>
              <option value="Brain Health">Brain Health</option>
              <option value="Muscle Growth">Muscle Growth</option>
              <option value="Heart Health">Heart Health</option>
              <option value="Immunity">Immunity</option>
            </select>
          </label>
          <div className="icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
            </svg>
          </div>
        </Box>

        <Box className="filterComponent select-container">
          <label className="label-box">
            Type:
            <select
              className="select-box"
              name="type"
              value={filters.type}
              onChange={handleInputChange}
            >
              <option value="">All</option>
              <option value="Amino Acid">Amino Acid</option>
              <option value="Vitamin">Vitamin</option>
              <option value="Mineral">Mineral</option>
              <option value="Creatine">Creatine</option>
              <option value="Protein">Protein</option>
            </select>
          </label>
          <div className="icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
            </svg>
          </div>
        </Box>
      </Stack>
    </Box>
  );
}

export default Filter;
