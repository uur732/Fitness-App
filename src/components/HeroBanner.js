import { Box, Button, Typography } from '@mui/material';
import React from 'react';

import Banner from '../assets/images/homeBanner.png';

const HeroBanner = () => {
    return (
        <Box sx={{
            mt: { lg: '200px', xs: '70px' },
            ml: { sm: '50px' }
        }} position="relative" p="20px" >
            <Typography color="#FF2625" fontWeight="600" fontSize="25px"  >
                FitnessApp
            </Typography>
            <Typography mt={2} fontWeight="600"
                sx={{ fontSize: { lg: "40px", xs: "35px" } }}
            >
                Blood, Sweat <br /> and Tears !
            </Typography>
            <Typography mt={2} fontSize="20px" lineHeight="35px" mb={3}>
                Let's find most effective exercises
            </Typography>
            <Button variant='contained' color="error">Explore!</Button>
            
            <img src={Banner} alt='HeroBanner' className='heroBanner__img' />

        </Box>
    )
}

export default HeroBanner