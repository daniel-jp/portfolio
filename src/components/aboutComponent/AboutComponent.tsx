import { Box, Flex, Icon, Stat, Text, useColorModeValue } from '@chakra-ui/react';



function AboutComponent ({ title,text,icon}:
  { title: string,
  text: string,
  icon: any}) {
 
  return(
    <Box textAlign={'center'}>
   
      <Stat
            px={{ base:'2', md: '2' }}
            bg={"gray.200"}
            py={'2'}
            borderColor={useColorModeValue('gray.400', 'gray.500')}
            rounded={'lg'}>

          <Flex mx={{base:1 , md:2}} justify={"space-between"}>
             <Box textAlign={'initial'}>
              <Text pb={3} color={"#001d3d"} fontSize={['md','xl']} fontWeight={600}>{title}</Text>
              <Text  textAlign={"start"} fontSize={['sm','md']} color={"gray.700"}>{text}</Text>
            </Box>
            <Box color={useColorModeValue('gray.400', 'gray.400')}>
            <Icon fontWeight={"bold"} as={icon} boxSize={30} color={"purple.600"} />
            </Box>
          </Flex> 
        </Stat>

  </Box>
  ) 
}
export default AboutComponent