import { Stack } from '@mui/material'
import React from 'react'

import { InfinitySpin } from 'react-loader-spinner'

const Loader = () => {
  return (
    <Stack>
        <InfinitySpin color='gray' />
    </Stack>
  )
}

export default Loader