import { Image } from '@chakra-ui/image';
import { Box } from '@chakra-ui/react';

function Logo () {
  return (
    <Box textAlign={"center"} justifyContent={"center"}>
      <Image bgColor={"gray.500"}   borderRadius={"50%"} maxH={8} maxW={8} src='../../assets/logos/logo.png' alt='logo' />
    </Box>
  )
} 

export default Logo