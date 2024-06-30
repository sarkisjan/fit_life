import React, { useContext } from 'react'
import {Box, Typography} from '@mui/material';
import { ScrollMenu, VisibilityContext  } from 'react-horizontal-scrolling-menu';

import BodyPart from './BodyPart';
import ExerciseCard from './ExerciseCard';

import LeftArrowIcon from '../assets/icons/left-arrow.png';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import { X } from '@mui/icons-material';

const LeftArrow = () => {
  const {scrollPrev} = useContext(VisibilityContext);

  return (<Typography onClick ={()=> scrollPrev()} className = "left-arrow" >
    <img src={LeftArrowIcon} alt="left-arrow" />
  </Typography>)
}
const RightArrow = () => {
  const {scrollNext} = useContext(VisibilityContext);

  return (<Typography onClick ={()=> scrollNext()} className = "right-arrow" >
    <img src={RightArrowIcon} alt="right-arrow" />
  </Typography>)
}

// data is passed from searchExercise component 
// bodyPart is passed from Home component 
// setBodyPart is passed from Home component 
const HorizontalScrollbar = ({data, bodyParts, bodyPart, setBodyPart }) => {
  console.log(`ova e od home horizontal: ${data}`);
  return (      
     <ScrollMenu LeftArrow = {LeftArrow} RightArrow = {RightArrow}
     
     >
          {data.map(item =>( 
          
              <Box 
                  key={item.id || item}
                  itemId={item.id || item}
                  title={item.id || item}
                  m= "0 40px"
                  >
                  {/* instead of rendering the items directly in this component 
                  we are passing to another component BodyPart */}
                  {/* bodyPart (is the selected bodyPart) and setBodyPart are properties that we 
                  gonna pass through Props  */}

                  
                  { bodyParts ? <BodyPart item = {item}  bodyPart = {bodyPart} setBodyPart = {setBodyPart}/> : <ExerciseCard exercise={item} />}
                  
                  {/* // icon = {item.replace(/\s/g, '')} */}
                  
                  
                

              </Box>
          )



    )}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar