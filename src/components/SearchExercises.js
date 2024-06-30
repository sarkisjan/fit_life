import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

import { exercisesOptions, fetchData } from "../utilities/fetchData";

import HorizontalScrollbar from "./HorizontalScrollbar";

// the props setExercise, bodyPart and setBodyPart
// will come from Home pages component

const SearchExercises = ({
  setExercises,
  bodyPart,
  setBodyPart,
  setSearched,
  setCurrentPage,
}) => {
  // console.log(`ova e od home searchExercise: ${bodyPart}`)
  const [search, setSearch] = useState("");
  // const [searched, setSearched] = useState('');
  // const [exercises, setExercises] = useState(''); this line is moved to Home component
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchBodyPartList = async () => {
      const bodyPartsList = await fetchData(
        "http://localhost:5000/exercises/bodyPartList",
        exercisesOptions
      );
      setBodyParts(["all", ...bodyPartsList]);
    };
    fetchBodyPartList();
  }, []);

  const handleSearch = async () => {
    if (search) {
      setBodyPart("");
      setCurrentPage("1");
      setSearched(search);

      const exercisesData = await fetchData(
        "http://localhost:5000/exercises",
        exercisesOptions
      );
      // console.log( exercisesData.results[0]);
      const searchedExercises = exercisesData.filter((exercise) => {
        return (
          exercise.bodyPart.toLowerCase().includes(search.toLowerCase()) ||
          exercise.primaryMuscles
            .toLowerCase()
            .includes(search.toLowerCase()) ||
          exercise.equipment[0].toLowerCase().includes(search.toLowerCase()) ||
          exercise.name.toLowerCase().includes(search.toLowerCase())
        );
      });

      setSearch("");

      setExercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
        }}
        mb="50px"
        textAlign="center"
        color="whitesmoke"
      >
        Types Of Exercises <br />
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          className="inputField"
          sx={{
            input: {
              color: "whitesmoke",
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
            width: { lg: "950px", xs: "350px" },
            height: "76px ",
            borderRadius: "40px",
          }}
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          placeholder="Search for exercise"
        />
        <Button
          className="btn search-btn"
          sx={{
            backgroundColor: "rgb(244,70,48)",
            color: "#fff",
            width: { lg: "175px", xs: "80px" },
            height: "55px",
            fontSize: { lg: "20px", xs: "14px" },
            position: "absolute",
            right: 0,
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        {/* instead {bodyParts} to be directly rendered here we are passing 
          to horizontalScrollbar component through data argument */}
        <HorizontalScrollbar
          data={bodyParts}
          bodyParts
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
