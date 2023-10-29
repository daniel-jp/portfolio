import { Image } from '@chakra-ui/image';
import { Box } from '@chakra-ui/react';

function Logo () {
  return (
    <Box borderRadius={'50%'} bg={"purple.800"} p={1} maxW={"40px"} maxH={"40px"}>
      <Image borderRadius={'50%'} src='../../public/assets/logos/logo.png' alt='logo' />
    </Box>
  )
} 

export default Logo