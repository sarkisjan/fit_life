import express from 'express';
import { Exercises } from '../exercisesData/Exercises.js';


const router = express.Router();
// all routes in here starts with '/'
router.get('/', (req, res) => {

    res.send(Exercises);
});

// 
// Using the map method to iterate over all 1200 exercises in your API route to extract 
// unique body parts may not be the most efficient approach, especially if the array of exercises (Exercises) is large.

// router.get('/bodyPartList', (req, res) => {
//     const bodyParts = [];
//     Exercises.map(exercise => {
//         bodyParts.indexOf(exercise.bodyPart) === -1 && bodyParts.push(exercise.bodyPart);
        
//     });
//     res.send(bodyParts);

// });
// here is more efficiant way. using Set

router.get('/bodyPartList', (req, res) => {
    const bodyParts = new Set();
    Exercises.forEach(exercise => {
        bodyParts.add(exercise.bodyPart);
        
    });
    res.send([...bodyParts]);

});

router.get('/equipmentList', (req, res) => {
    const equipments = [];
    Exercises.map(exercise => {
        equipments.indexOf(exercise.equipment) === -1 && equipments.push(exercise.equipment);
        
    });
    res.send(equipments);

});

// router.get('/equipmentList', (req, res) => {
//     const equipments = new Set();
//     Exercises.forEach(exercise => {
//         equipments.add(exercise.equipment);
        
//     });
//     res.send([...equipments]);

// });

// router.get('/primaryMusclesList', (req, res) => {
//     const primaryMuscles = [];
//     Exercises.map(exercise => {
//         primaryMuscles.indexOf(exercise.primaryMuscles) === -1 && primaryMuscles.push(exercise.primaryMuscles);
        
//     });
//     res.send(primaryMuscles);

// });

router.get('/primaryMusclesList', (req, res) => {
    const primaryMuscles = new Set();
    Exercises.forEach(exercise => {
        primaryMuscles.add(exercise.primaryMuscles);
        
    });
    res.send([...primaryMuscles]);

});

router.get('/amazonLinksList', (req, res) => {

    //mapping through Exercises, selecting only the amazonLinks who has an value and making an object from {equipment: link}
    const amazonObj = {};
    Exercises.forEach(exercise =>{
        
        if(exercise.amazonLink !== null) {
            amazonObj[exercise.equipment] = exercise.amazonLink;
        }
    });

    res.send(amazonObj);

});

router.get('/id/:id', (req, res) => {


    // const reqID = req.params.id;
    // let filteredExercise = Exercises.find(exercise =>  exercise.id ===reqID);
       
    // if(!filteredExercise) {
    //     return res.status(404).send("exercise not found");
    // }
    //     res.send(filteredExercise);


    const reqID = req.params.id;
    let filteredExercise = Exercises.filter(exercise => {
        exercise.id.includes(reqID) &&  res.send(exercise);
        
    });


    // res.send(filteredExercise);
    // const exerciseID = req.params.id;
    // Exercises.map(exercise => {
    //     exercise.id.includes(exerciseID) && res.send(exercise);
        
    // });
    
});

router.get('/name/:name', (req, res) => {
    const reqName = req.params.name.toLowerCase();
    let filteredExercise = Exercises.filter(exercise => {
        return exercise.name.toLowerCase().includes(reqName);
        
    });
    res.send(filteredExercise);


});
router.get('/primaryMuscles/:primaryMuscles', (req, res) => {
    const reqPrimaryMuscles = req.params.primaryMuscles.toLowerCase();
    let filteredExercise = Exercises.filter(exercise => {
        return exercise.primaryMuscles.toLowerCase().includes(reqPrimaryMuscles);
        
    });
    res.send(filteredExercise);


});
router.get('/equipment/:equipment', (req, res) => {
    const reqEquipment = req.params.equipment;
    let filteredExercise = Exercises.filter(exercise => {
        return exercise.equipment.includes(reqEquipment);
        
    });
    res.send(filteredExercise);


});
router.get('/bodyPart/:bodyPart', (req, res) => {
    const reqBodyPart = req.params.bodyPart.toLowerCase();
    let filteredExercise = Exercises.filter(exercise => {
        return exercise.bodyPart.toLowerCase().includes(reqBodyPart);
        
    });
    res.send(filteredExercise);

});

export default router;