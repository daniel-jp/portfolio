import { Box, Container, Flex, Icon, Stat, Text, useColorModeValue } from '@chakra-ui/react';
import { IconType } from 'react-icons/lib';



function AboutComponent ({ title,text,icon}:any) {
 
  return(
    <>
   
      <Container mr={200}  maxW="7xl" ml={{base:0, md:250}}>
          <Stat 
            px={{ base:'2', md: '2' }}
            bg={"blackAlpha.50"}
            py={'3'}
          _hover={{ 
            transform: 'scale(1.1)',
          
          }}
           boxShadow='dark-lg'
           borderColor={useColorModeValue('gray.400', 'gray.500')}
          rounded={'lg'}>
          <Flex mx={{base:1 , md:2}} justify={"center"} justifyContent={'space-between'}>
             <Box>
              <Text  color={'gray.300'} fontSize={['md','xl']} fontWeight={600}>{title}</Text>
              <Text  textAlign={"start"} fontSize={['sm','md']} color={'gray.500'}>{text}</Text>
            </Box>
            <Box color={useColorModeValue('gray.100', 'gray.200')}
              alignContent={'center'}>
            <Icon as={icon} boxSize={30} color={"red.400"} />
            </Box>
          </Flex>
        </Stat>

    </Container>

  </>
  ) 
}
export default AboutComponent