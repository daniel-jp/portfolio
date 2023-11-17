import { Box, Flex, Icon, Stat, Text, useColorModeValue } from '@chakra-ui/react';




function AboutComponent ({ title,text,icon}:
  { title: string,
  text: string,
  icon: any}) {
 
  return(

    <Box textAlign={'center'}>
   
      <Stat bg={"gray.700"}  
            px={{ base:'3', md: '3' }}
            boxShadow="lg"
            rounded={'lg'}>

          <Flex mx={{base:1 , md:2}} justify={"space-between"}>
             <Box textAlign={'initial'}> 
              <Text color={"orange.600"} pb={3}  fontSize={['md','xl']} fontWeight={600}>{title}</Text>
              <Text  textAlign={"start"} fontSize={['sm','md']} color={"gray.400"}>{text}</Text>
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