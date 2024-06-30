import React, { useEffect, useState }  from 'react';
import { Box, Typography, Stack } from '@mui/material';
import Pagination from '@mui/material/Pagination';

import { exercisesOptions, fetchData } from '../utilities/fetchData';
import ExerciseCard from './ExerciseCard';



const Exercises = ({exercises, setExercises, bodyPart, searched, setSearched, currentPage, setCurrentPage}) => {
  // const [currentPage, setCurrentPage] = useState('1');
  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise =  indexOfLastExercise - exercisesPerPage;
 const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);
 
  const paginate = (e, value) => {
    setCurrentPage(value);
    document.getElementById("searchStart").scrollIntoView({ behavior: 'smooth'});
  }

  // we call the useEffect when the dependancies [bodyPart] changes
  useEffect(()=>{
    if(bodyPart!== ''){
      const fetchExercisesData = async ()=> {
        let fetchedData = [];
        if(bodyPart === 'all') {
          fetchedData = await fetchData('http://localhost:5000/exercises', exercisesOptions);
  
  
        } 
        else {
          fetchedData = await fetchData(`http://localhost:5000/exercises/bodyPart/${bodyPart}`, exercisesOptions);
  
        }
        setExercises(fetchedData);
        setSearched('');
        setCurrentPage('1');
      }
      fetchExercisesData();
    }

  }, [bodyPart]);
  return (
    <Box id="exercises"
    sx={{ mt:{lg:'110px'}}}
    mt="50px"
    p="20px"
    >
      <Typography id="searchStart" textAlign="center" color="rgb(244,70,48)" variant ="h3" mb="46px" sx={{ fontSize: {xs: '24px'}}}>
      {   !searched && bodyPart === 'all' ? `List of All exercises` :  !searched ? `Exercises For ${bodyPart.toUpperCase()}`: exercises.length>0 ? `${exercises.length}  exercises found for: "${searched}"` : `No exercises found for "${searched}". Try again` }
       
      </Typography>
      <Stack 
     
      sx={{ gap: { lg: '110px', xs: '50px' }}}
      flexDirection="row"
      flexWrap="wrap" 
      justifyContent="center"
      alignItems="center"
      >
            
        {currentExercises.map(( exercise, index)=>
          <ExerciseCard exercise= {exercise} key={index}/>
         
        )}
        

      </Stack>
      <Stack  alignItems="center" mt="80px">
        { exercises.length > 9 && (
                    <Pagination
                    variant="outlined"
                    size="large"
                    count = {Math.ceil(exercises.length/9)}
                    defaultPage={1}
                    page = {parseInt(currentPage)}
                    onChange = {paginate}
                    />

                    
         )}
      </Stack>
      </Box>
  )
}

export default Exercises