import { Image } from '@chakra-ui/image';
import { Box } from '@chakra-ui/react';

function Logo () {
  return (
    <Box borderRadius={'50%'} p={1} >
      <Image w={8} h={8} borderRadius={'50%'} src='../../assets/logos/logo.png' alt='logo' />
    </Box>
  )
} 

export default Logo