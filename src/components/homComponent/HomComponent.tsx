import '@fontsource/inter/600.css';

import { Box, Button, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { ArrowCircleDown } from '@phosphor-icons/react';

import Layout from '../../layouts/Layout';

export default function homComponent() {




  return (

  <Layout>
  <Box mx={{base:0, sm:2, md:3, lg:20}} mt={20} mb={10} 
      justifyContent={"center"} 
      textAlign={'center'}>
  

    <Flex display={{sm:'flex', md:'wrap'}}>

      <Stack flexGrow={1} flexWrap={"wrap-reverse"} justify={'center'} 
            pl={{sm:3, md: 20, lg:24}} pt={5}>
        <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={['2xl', '2xl', '2xl', '4xl']}>
            <Text m={2}
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
        fontSize={['2xl', '2xl', '2xl', '5xl']} pt={{base:2, md:10}} as={'span'} 
        pl={{sm:3, md: 12, lg:16}}>
            Daniel Joaquim Paulino
            </Text>
            </Stack> 
          <Stack>
        <Text as={'span'} fontSize={['1xl', '2xl', '2xl', '4xl']}> 
        And I’m a  Software and Data Engineer</Text>
        </Stack>

    </Stack>

    

    <Stack  bg={"blackAlpha.800"}
    //bgGradient="linear(to-l, #7928CA, #FF0080)" 
      p={3} rounded={{sm:"2%", md:"50%", lg:"50%"}} 
      h={{sm:100, md:200, lg:200}} mt={10} w={{sm:100, md:200, lg:200}}
      justify={'center'}>

             <Image rounded={{sm:"2%", md:"50%", lg:"50%"}} p={3}
              h={{sm:100, md:200, lg:200}}
              w={{sm:100, md:200, lg:200}}
              alt={'Daniel'}
              fit={'cover'}
              align={'center'}
              src={'../../assets/image/danny1.png'}
              
              />

        
    </Stack>


    </Flex>

    <Flex   display={'block'} pt={10}>
      <Box>
        <Text  py={1} rounded={6}  
        fontSize={{base:"1xl", sm:"2xl",md:"2xl"}} 
        textAlign={"center"} color={"gray.500"} >
                I am ready to take on new professional challenges, whether in a conventional workplace or in a remote work setting. I am actively seeking employment opportunities in the fields of Software Development/Web and also have a keen interest in Data-related roles. I am eager to apply my skills and knowledge in a challenging and dynamic environment, contributing to innovative projects and advancing professionally.
      </Text>
      </Box>
      <Box h={"20vh"} pt={5} mb={5}>
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
  </Layout>
  );
}

