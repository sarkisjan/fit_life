import React, { useState } from "react";
import { Stack } from "@mui/material";
import Filter from "../components/Filter";
import SupplementList from "../components/SupplementList";
import BmiCalculator from "../components/BmiCalculator";
// import Banner from "../components/Banner";
import { supplements } from "../utilities/supplements";

function Supplementation() {
  const [filters, setFilters] = useState({
    goal: "",
    type: "",
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const filteredSupplements = supplements.filter((supplement) => {
    return (
      (!filters.goal || supplement.goal.includes(filters.goal)) &&
      (!filters.type || supplement.type === filters.type)
    );
  });

  return (
    <Stack
      sx={{ flexDirection: { lg: "row", sm: "column" } }}
      width="100%"
      gap="40px"
      justifyContent="space-between"
    >
      <Stack id="filterSupplements" sx={{ width: { lg: "25vw" } }}>
        <Filter filters={filters} onFilterChange={handleFilterChange} />
        <BmiCalculator />
      </Stack>

      <SupplementList
        sx={{ width: { lg: "75vw" } }}
        supplements={filteredSupplements}
      />

      {/* <Stack id="BmiCalculator" sx={{ width: { lg: "25vw" } }}>
        <BmiCalculator />
        <a className="filterLink" href="#filterSupplements">
          <Button
            variant="contained"
            sx={{
              height: "50px",
              width: "130px",
              backgroundColor: "rgb(35, 180, 98)",
              fontSize: "10px",
              letterSpacing: "2px",
              fontWeight: "700",
              // borderRadius: "20px",
              // onclick: () => {
              //   ref.current?.scrollIntoView({ behavior: "smooth" });
              // },
              // wordBreak: 'break-word',
            }}
          >
            Filter Supplements
          </Button>
        </a>
      </Stack> */}
    </Stack>
  );
}

export default Supplementation;
