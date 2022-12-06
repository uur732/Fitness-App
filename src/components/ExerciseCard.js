import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const ExerciseCard = ({ exercise }) => {
  return (
    <Link to={`/exercise/${exercise.id}`} className='card__Link' >
      <img src={exercise.gifUrl} alt={exercise.name} className="exerciseCard__Img" loading='lazy' />
      <Stack direction="row" gap="40px">
        <Button sx={{
          ml: '20px',
          color: "black",
          background: '#ff2625',
          fontSize: "16px",
          borderRadius: "20px",
          textTransform: "capitalize",
        }}  >
          {exercise.bodyPart}
        </Button>
        <Button sx={{
          ml: "20px",
          color: "black",
          background: 'yellow',
          fontSize: "16px",
          borderRadius: "20px",
          textTransform: "capitalize",
        }}  >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        color="black"
        textTransform="capitalize"
        fontSize="16px"
        fontWeight="bold"
        m="20px"
        pb='10px'
      >
        {exercise.name}
      </Typography> 
    </Link>
  )
}

export default ExerciseCard