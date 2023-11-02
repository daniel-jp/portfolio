import '@fontsource/inter/600.css';

import { Box, Button, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { ArrowCircleDown } from '@phosphor-icons/react';

export default function homComponent() {




  return (
  <Box  mx={{base:0, sm:2, md:3, lg:20}}
      justifyContent={"center"} 
      textAlign={'center'} h={"100vh"} overflowX={"hidden"}>
  

    <Flex  display={{sm:'flex', md:'wrap'}}>

      <Stack flexGrow={1} flexWrap={"wrap-reverse"} justify={'center'} 
            pl={{sm:3, md: 20, lg:24}} pt={5}>
        <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={['2xl', '2xl', '2xl', '4xl']}>
            <Text
              as={'span'} 
              position={'relative'}
              _after={{
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
              
              }} display={"flex"} bgGradient='linear(to-l, #8222AF,#9B19D9, #9B19D9, #386283)' 
              bgClip='text'>
             Hi! it‘s me
            </Text>
           
          </Heading>
         
        <Stack>
        <Text p={2} fontFamily={"'Inter', sans-serif"} fontWeight={"bold"}
        fontSize={['2xl', '2xl', '2xl', '5xl']} pt={{base:2, md:10}} as={'span'} >
            Daniel Joaquim Paulino
            </Text>
            </Stack> 
          <Stack>
        <Text as={'span'} fontSize={['1xl', '2xl', '2xl', '4xl']}> 
        And I’m a  Software and Data Engineer</Text>
        </Stack>

    </Stack>

    

    <Stack  bgGradient="linear(to-l, #7928CA, #FF0080)" p={3} 
    h={{sm:200, md:300, lg:300}} mt={10} w={{sm:200, md:300, lg:300}}
    rounded={{sm:"2%", md:"3%", lg:"50%"}} 
     pr={{sm:3, md: 10, lg:24}} pt={20} justify={'center'}>

             <Image rounded={{sm:"2%", md:"3%", lg:"50%"}} 
              h={{sm:200, md:240, lg:260}}
              w={{sm:200, md:240, lg:260}}
              alt={'Daniel'}
              fit={'cover'}
              align={'center'}
              src={'../../assets/image/danny1.png'}
              
              />

        
    </Stack>


    </Flex>

    <Flex display={'block'}  pb={10} pt={10} >
      <Box>
        <Text px={3} py={1} rounded={6}  
        fontSize={{base:"1xl", sm:"2xl",md:"2xl"}} 
        textAlign={"center"} color={"gray.500"} >
                Ready to take on new challenges in case of a job ou Freelance opportunity. I am actively looking for job in the fields of Software/Web Development and interested in Data.
      </Text>
      </Box>
      <Box pt={10}>
      <Button as={'a'} href="/src/pages/pdf/Daniel_cv_EN.pdf" download maxW={'full'} 
                  rounded={'full'} fontWeight={'normal'}
                  colorScheme={'red'}
                  bg={'#944CAD'}
                  _hover={{ bg: 'green.800', color:'white' }}>
                <Text> Download CV </Text>
                <ArrowCircleDown color='#1A365D' size={22} />
        </Button>
        </Box>
  </Flex>

  </Box>
  );
}

