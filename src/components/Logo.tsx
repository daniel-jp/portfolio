import { Image } from '@chakra-ui/image';
import { Box } from '@chakra-ui/react';

function Logo () {
  return (
    <Box w={50} h={50} >
      <Image borderRadius={'50px'} src='../../public/assets/logos/logo7.png' alt='logo' />
    </Box>
  )
} 

export default Logo