import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';
// import zIndex from '@mui/material/styles/zIndex';

import LazyLoad from 'react-lazyload';



const ExerciseCard = ({exercise}) => {
  return (
    <LazyLoad>
      <Link className ="exercise-card" to={`/exercise/${exercise.id}`}>
        
        <img src= {exercise.image} alt={exercise.name} loading="lazy" />
       
        <Stack 
        sx={{
          position:'absolute',
          bottom: '10px',
          right: '50%',
          transform: 'translateX(50%)',
          gap:'10px',
          maxWidth: '100%'

        }}
        >

          <Stack 
            direction="row"
            gap="10px"
          >
          <Button variant="contained" 
          sx={{
            backgroundColor: 'rgba(0, 0, 255, 0.8)',
            fontSize: '10px',
            letterSpacing: '2px',
            fontWeight: '700',
            borderRadius: '20px',
            padding: '0 35px'
          }}
          >{exercise.primaryMuscles}</Button>
          <Button variant="contained" 
                    sx={{
                      backgroundColor: 'rgba(254, 169, 94, 0.8)',
                      fontSize: '10px',
                      letterSpacing: '2px',
                      fontWeight: '700',
                      borderRadius: '20px',
                    
                      // wordBreak: 'break-word',
          
                    }}
          >{exercise.secondaryMuscles.join(" ")}</Button>
          </Stack>
        
          {/* <Button variant="contained" 
            sx={{
              backgroundColor: 'rgba(244,70,48, 0.8)',
              fontSize: '10px',
              letterSpacing: '2px',
              fontWeight: '700',
              borderRadius: '20px',

            }}
           ><a href={exercise.amazonLink} style={{ zIndex: '2'}}>equipment link</a>
          </Button> */}
          <Typography
            sx={{
              textTransform: 'capitalize',
              textAlign: 'center',
              color: 'rgb(47, 49, 66)',
              fontWeight: 'bold'
            }}
          >
            {exercise.name}
          </Typography>
        </Stack>

      </Link>
      </LazyLoad>
  )
}

export default ExerciseCard