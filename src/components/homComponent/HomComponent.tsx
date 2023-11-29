import '@fontsource/inter/600.css';

import { Box, Button, chakra, Flex, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { ArrowCircleDown, Code, Database } from '@phosphor-icons/react';

import Layout from '../../layouts/Layout';
import HeadHome from './HeadHome';

export default function homComponent() {




  return (

  <Layout>
  <Stack     
      mx={{base:0, sm:2, md:3, lg:20}}
      textAlign={'center'} mt={20} >

          <chakra.h3 textAlign={'right'}
          fontFamily={'Work Sans'}
          fontWeight={'bold'} 
          fontSize={20} bgGradient='linear(to-l,#9B19D9, #386283, #8222AF,#9B19D9, )' 
          bgClip='text' 
          //textTransform={'lowercase'}
        >
         Home 
        </chakra.h3>
  
      <HeadHome/>

     <Flex justify={"center"}>
      <Code size={40} color={useColorModeValue( 'gray.500','orange')} />  
      <Text p={5}></Text>
      <Database size={40}  color={useColorModeValue( 'gray.500','orange')} /></Flex>

    <Flex display={'block'}>
      <Box>
         
        <Text  py={1} rounded={6}  
        fontSize={{base:"1xl", sm:"2xl",md:"2xl"}} 
        textAlign={"center"} color={"gray.500"} >
                I'm ready to take on new professional challenges, whether in a conventional workplace or in a remote work setting. I am actively seeking employment opportunities in the fields of Software Development/Web and also have a keen interest in Data-related roles. I am eager to apply my skills and knowledge in a challenging and dynamic environment, contributing to innovative projects and advancing professionally.
      </Text>
      </Box>
      


      <Box pt={5} mb={5}>
      <Button as={'a'} href="/src/pages/pdf/cv.pdf" maxW={'full'} target='_blank'
                  rounded={'full'} fontWeight={'normal'}
                  colorScheme={'red'}
                  bg={'#944CAD'}
                  _hover={{ bg: 'green.800', color:'white' }}>
                <Text> Download CV </Text>
                <ArrowCircleDown color='#1A365D' size={22} />
        </Button>
      </Box>


  </Flex>

  </Stack>
  </Layout>
  );
}

