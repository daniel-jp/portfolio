import { Image } from '@chakra-ui/image';
import { Box } from '@chakra-ui/react';
import * as React from 'react';

function Logo () {
  return (
    <Box w={50} h={50} >
      <Image borderRadius={'50px'} src='../../assets/logos/logo1.svg' alt='logo' />
    </Box>
  )
} 

export default Logo