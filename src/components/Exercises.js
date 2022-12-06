import { Box, Pagination, Stack, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'

import { exerciseOptions, fetchData } from '../utils/fetchData';

import ExerciseCard from './ExerciseCard'


const Exercises = ({ exercises, setExercises, bodyPart }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise, indexOfLastExercise
  );

  const paginate = (e, value) => {
    setCurrentPage(value);
  }

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart} `, exerciseOptions)
      }
      setExercises(exercisesData);

    }
    fetchExercisesData();
  }, [bodyPart])




  return (
    <Box
      sx={{ mt: { lg: "110px" } }}
      p="25px"
      mt="25px"
    >
      <Typography variant="h4" m="25px" >Showing Results</Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "150px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {
          currentExercises.map((exercise, index) => (
            <ExerciseCard key={index} exercise={exercise} />
          ))
        }
      </Stack>
      <Stack mt="100px" alignItems="center">
        {
          exercises.length > 9 && (
            <Pagination
              color="secondary"
              defaultPage={1}
              count={Math.ceil(exercises.length / exercisesPerPage)}
              page={currentPage}
              onChange={paginate}
              size="large"
            />
          )
        }
      </Stack>
    </Box>
  )
}

export default Exercises