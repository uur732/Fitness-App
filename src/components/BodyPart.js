import { Stack, Typography } from '@mui/material'
import React from 'react'
import gymIcon from '../assets/icons/gymIcon.png'


const BodyPart = ({ item, bodyPart, setBodyPart }) => {
    return (
        <Stack
            justifyContent="center"
            alignItems="center"
            type="button"
            className="bodyPart"
            sx={{
                borderTop: bodyPart === item ? '4px solid #ff2625' : "",
                backgroundColor: "#fff",
                borderBottomLeftRadius: "20px",
                width: "250px",
                height: "250px",
                cursor: "pointer",
                gap: "35px"
            }}

            onClick={() => {
                setBodyPart(item);
            }}
        >
            <img src={gymIcon} alt="dumbbell" className='bodyPart__Img' />

            <Typography
                fontSize="25px"
                fontWeight="bold"
                color="#3A1212"
                textTransform="capitalize"
                className='bodyPart__Text'
            >
                {item}
            </Typography>

        </Stack>
    )
}

export default BodyPart