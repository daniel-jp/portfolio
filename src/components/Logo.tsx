import { Image } from '@chakra-ui/image';
import { Box } from '@chakra-ui/react';

function Logo () {
  return (
    <Box borderRadius={'50%'} bg={"gray.700"} p={1} maxW={"32px"} maxH={"32px"}>
      <Image borderRadius={'50%'} src='../../assets/logos/logo.png' alt='logo' />
    </Box>
  )
} 

export default Logo