import { Box, Flex, FormLabel, Image, Stack, useColorModeValue } from '@chakra-ui/react';


function SkillsComponent2({language,text,img}:{ language: string, text: string, img: string }){

  return(
   <>
      <Stack mb={10} w={"full"} _hover={{bg:"blackAlpha.500", cursor :'pointer'}}
     
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
              p={3} bg={"gray.700"}  rounded={6} maxW={"full"} maxH={"full"}
              color={useColorModeValue('gray.700', 'gray.700')}>
      <Image rounded={6}  src={`../../assets/langLogos/${img}`} />
        </Flex>
      </Flex>
      </Stack>
             
   </>
  )
}
export default SkillsComponent2
