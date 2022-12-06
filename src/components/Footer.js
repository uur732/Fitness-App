import { Typography, Box, Stack } from '@mui/material';
import React from 'react';
import Logo from '../assets/icons/Fitness-App.png';


const Footer = () => {
  return (
    <Box mt="80px" bgcolor="white" >
      <Stack gap="40px" alignItems="center" px="40px" pt="24px" >  
        <img src={Logo} alt="logo" width="200px" height="150px"  />
        <Typography variant='h5' pb="40px" mt="20px">
        Made with by Uğur Bal
      </Typography>
      </Stack>
      
    </Box>
  )
}

export default Footer