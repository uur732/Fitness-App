import { Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around" sx={{ gap: { sm: '120px', xs: '40px', }, mt: { sm: '30px', xs: '20px' }, justifyContent: 'none', px: '20px' }}
    >
      <Link to="/">
        <img src="https://t3.ftcdn.net/jpg/02/44/60/90/360_F_244609035_Tg08nWgKMeiNEPh7LEbvtvAu49C7b64u.jpg" alt="Logo" className='nav__img' />
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontSize="24px"
        alignItems="flex-end"
      >
        <Link to="/" className="nav__links" >Home</Link>
        <a href="/" className="nav__links" >Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar