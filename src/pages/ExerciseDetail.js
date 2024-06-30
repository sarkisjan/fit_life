import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

// import Navbar from '../components/Navbar';

import { exercisesOptions, fetchData } from '../utilities/fetchData';
import Detail from '../components/Detail';
import SimilarExercises from '../components/SimilarExercises';
// import Banner from '../components/Banner';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState();
  const [primaryMusclesExercises, setPrimaryMusclesExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 150, behavior: 'smooth' });

    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'http://localhost:5000';
      // const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/id/${id}`, exercisesOptions);
      setExerciseDetail(exerciseDetailData);

      // const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions);
      // setExerciseVideos(exerciseVideosData.contents);

      const primaryMusclesExercisesData = await fetchData(`${exerciseDbUrl}/exercises/primaryMuscles/${exerciseDetailData.primaryMuscles}`, exercisesOptions);
      setPrimaryMusclesExercises(primaryMusclesExercisesData);
      console.log(exerciseDetailData);
      const equimentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment[0]}`, exercisesOptions);
      setEquipmentExercises(equimentExercisesData);
    };

    fetchExercisesData();
  }, [id]);

  if (!exerciseDetail) return <div>No Data</div>;
  console.log(exerciseDetail.amazonLinks[0]);
  return (
    
    <Box sx={{ 

      mt: { lg: '96px', xs: '60px' } }}>
     
      {/* <Navbar/> */}
      <Detail  exerciseDetail={exerciseDetail} />
       
      <SimilarExercises primaryMusclesExercises={primaryMusclesExercises} equipmentExercises={equipmentExercises} />
    </Box>
  );
};

export default ExerciseDetail;