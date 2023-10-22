import { Box, Container, Flex, Icon, Stat, Text, useColorModeValue } from '@chakra-ui/react';
import { IconType } from 'react-icons/lib';



function AboutComponent ({ title,text,icon}:any) {
 
  return(
    <Box textAlign={'center'}>
   
      <Stat
            px={{ base:'2', md: '2' }}
            bg={"gray.800"}
            py={'2'} boxShadow='dark-lg'
            borderColor={useColorModeValue('gray.400', 'gray.500')}
            rounded={'lg'}>

          <Flex mx={{base:1 , md:2}} justify={"space-between"}>
             <Box textAlign={'initial'}>
              <Text  color={'gray.100'} fontSize={['md','xl']} fontWeight={600}>{title}</Text>
              <Text  textAlign={"start"} fontSize={['sm','md']} color={'gray.400'}>{text}</Text>
            </Box>
            <Box color={useColorModeValue('gray.400', 'gray.400')}>
            <Icon as={icon} boxSize={30} color={"red.500"} />
            </Box>
          </Flex>
        </Stat>

  </Box>
  ) 
}
export default AboutComponent