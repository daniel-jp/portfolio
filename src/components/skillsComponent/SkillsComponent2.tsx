import { Box, Flex, FormLabel, Image, Stack, useColorModeValue } from '@chakra-ui/react';
import React from 'react';


function SkillsComponent2({language,text,img}:{ language: string, text: string, img: string }){

  return(
   <>
      <Stack py={'5'} w={"full"} 
     
     // borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}>
     <Flex justifyContent={'space-between'}  align={'center'}  p={4} mr={2} >
        <Box pl={{ base: 2, md: 2 }}>
          <FormLabel fontWeight={"800"}  color={"orange.500"} isTruncated>
            {language}
          </FormLabel>
          <FormLabel color={"gray.500"} fontSize={["sm","md","2xl"]} fontWeight={'medium'}>
            {text} 
          </FormLabel>
        </Box> 
        <Flex align={"center"}
              w={"60px"} h={"60px"} 
              p={1} bg={"gray.100"}  rounded={6}
              color={useColorModeValue('gray.200', 'gray.200')}>
      <Image rounded={6}  src={`/public/assets/langLogos/${img}`} />
        </Flex>
      </Flex>
      </Stack>
             
   </>
  )
}
export default SkillsComponent2
