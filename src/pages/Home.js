import React, {useState} from 'react';
import {Box} from '@mui/material';
// import Navbar from '../components/Navbar';

import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';



// the props setExercise, bodyPart and setBodyPart 
// are passed to searchExercises component 
const Home = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);
  const [searched, setSearched] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
//  console.log(`ova e od home bodyPart: ${bodyPart}`)
  // console.log(bodyPart);
return (
    <Box>
      {/* <Navbar /> */}
      <HeroBanner/>
      <SearchExercises 
          setExercises = {setExercises}
          bodyPart = {bodyPart}
          setBodyPart = {setBodyPart}
          setSearched = {setSearched}
          setCurrentPage ={setCurrentPage}
      />
      <Exercises
            exercises={exercises}
            setExercises = {setExercises}
            bodyPart = {bodyPart}
            searched = {searched}
            setSearched = {setSearched}
            currentPage ={currentPage}
            setCurrentPage ={setCurrentPage}
            
      />
    </Box>

  )
}

export default Home