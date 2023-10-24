import '@fontsource/inter/800.css';

import { Box, Flex, FormLabel, Image, Stack, useColorModeValue } from '@chakra-ui/react';

function SkillsComponent({language,text,img}:{ language: string, text: string, img: string }){

  return(
   <>
      <Stack py={'5'} bg={"gray.200"}  w={"full"} 
      
     // borderColor={useColorModeValue('gray.100', 'gray.500')}
      rounded={'md'}>
     <Flex justifyContent={'space-between'} align={'center'}  p={4} mr={2} >
        <Box pl={{ base: 2, md: 2 }}>
          <FormLabel fontWeight={"800"} color={"orange.500"} isTruncated>
            {language}
          </FormLabel>
          <FormLabel color={"gray.600"} fontSize={["sm","md","2xl"]} fontWeight={'medium'}>
            {text}
            </FormLabel>
        </Box>
        <Flex  align={"center"} w={"60px"} h={"60px"} maxW={"full"} maxH={"full"}
          p={1} rounded={6}
          color={useColorModeValue('gray.200', 'gray.200')}>
      <Image rounded={6}  src={`/public/assets/langLogos/${img}`} />
        </Flex>
      </Flex>
      </Stack>
             
   </>
  )
}
export default SkillsComponent
