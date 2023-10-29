import '@fontsource/inter/600.css';

import { Box, Flex, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { CalendarCheck } from '@phosphor-icons/react';

import AboutComponent from '../components/aboutComponent/AboutComponent';
import Layout from '../layouts/Layout';
import AboutProp from '../props/aboutProp/AboutProp';



function AboutPage(){
  const aboutProp = AboutProp();

  
  return(
    <>
    <Layout>
      <Flex textAlign={'center'}  px={3} py={3}
            pt={50} justify={'center'} w={"full"} display={'block'} 
            direction={{ base: 'column', sm: 'row' }}>

        <Stack  w={"full"} mx={{base:0, sm:2, md:3, lg:10}} px={4}  pb={10} textAlign={"start"}>
          <Heading fontSize={['2xl', '3xl', '4xl']} 
                  bgGradient='linear(to-l, #8222AF,#9B19D9, #9B19D9, #386283)' 
                  bgClip='text'> About, me
          </Heading>

            <Heading 
            textAlign={{base:"center", md:"center",
            lg:"start"}} pl={10} pr={10} fontFamily={"'inter',sans-serif"}
            fontSize={['md', 'lg','3xl']} pt={5} color={"gray.600"}>
              Software and Data Engineer
            </Heading>

            <Text pl={2} fontWeight={"500"} color={"gray.500"} fontSize={['sm', 'md','lg']}>
            I'm Daniel Paulino, of Angolan nationality, I live in Morocco for academic training reasons..
            </Text>
          </Stack>
          <Box mx={{base:0, sm:2, md:3, lg:20}}>
            <SimpleGrid columns={{ base: 1,sm:1, md:1,lg:3}} spacing={{ base: 2, md: 2 }}>
              {
                aboutProp.map(( aboutprop ) => (
                  <AboutComponent 
                  key={aboutprop.id}
                  title={aboutprop.title} 
                  text={aboutprop.text} 
                  icon={aboutprop.icon}   />
                )) 
              }
              
            </SimpleGrid>
    </Box>
  

  <Box mx={{base:0, sm:2, md:3, lg:20}}>

        <Box textAlign={'initial'} mt={10} display={"block"}>
          <Text fontSize={{sm:"1xl",md:"2xl",lg:"3xl"}} fontFamily={"'Inter', sans-serif"}>EDUCATION</Text>
          <Text textAlign={"center"} color={"gray.500"} fontSize={{sm:"md",md:"2xl",lg:"2xl"}}>
            Please ensure that the information below represents my educational journey and the diplomas obtained, starting from the bachelor's degree up to the master's degree.
          </Text>
        </Box>

    <Box my={5} position={"sticky"}
    _before={{
      content:'" "',
      position:'absolute',
      width:'2px',
      height:'100%',
      left:"0", 
      top:"0px",
      border:"1px solid #944CAD",
      backgroundColor:'#944CAD',
      }}  w={"full"}>
 
    
      <Box left={-2} position={"absolute"} w={5} h={5} 
            borderRadius={"50%"} bg={"#944CAD"}>
      </Box>

        <Stack p={{base:3, sm:3, md:3, lg:50}} boxShadow="lg"  rounded={3}
         marginBottom={"0"} 
          maxH={"full"} display={'flex'}>
          <Box px={2}> 
          <SimpleGrid columns={{ base: 1, md:1}}  color={"#944CAD"}>
            <Box  display={'flex'} fontWeight={'bold'} p={3} color={"pink.700"}>
              <CalendarCheck size={22}/>
              <Text pl={2}>2020-2022</Text>
            </Box>
         
          <Box p={2}><Text fontSize={['xl','2xl']}  bgGradient='linear(to-l, #8222AF,#9B19D9, #9B19D9, #386283)'
           bgClip='text' fontWeight={'bold'} textAlign={{base:"start", md:"justify",lg:"start"}}>
            Master’s in Software and Data Engineering</Text></Box>
          <Box p={4} bg={"gray.700"}>
            <Text textAlign={"center"} color={"gray.500"}>Right after I finished my degree in Morocco, I joined the Masters in Data Engineering and Software Development at Mohamed V University, Faculty of Sciences.</Text></Box> 
          </SimpleGrid>  
          </Box>
    </Stack>

    <Stack p={{base:3, sm:3, md:3,lg:50}} rounded={3} my={4} py={4} boxShadow="lg"  marginBottom={"0"} px={2} pt={5} maxH={"full"} display={'flex'}>
    <Box left={-2}  position={"absolute"} w={5} h={5} borderRadius={"50%"} bg={"#944CAD"}></Box>
          <Box px={2}> 
            <SimpleGrid columns={{ base: 1, md:1}}   color={"#944CAD"}>
            <Box display={'flex'} fontWeight={'bold'} p={3} color={"pink.700"}>
           
              <CalendarCheck size={22} />
            <Text pl={2}>2019-2020</Text></Box>
         
          <Box p={2}>
          <Text fontSize={['xl','2xl']}  bgGradient='linear(to-l, #8222AF,#9B19D9, #9B19D9, #386283)' 
          bgClip='text' fontWeight={'bold'} textAlign={{base:"start", md:"justify",lg:"start"}} >
            Degree in Software and Web Developer</Text></Box>
          <Box p={4} bg={"gray.700"}>
            <Text textAlign={"center"} color={"gray.500"}>
            I graduated in software at ABDELMALEK ESSAADI university, Higher School of Tetouan-Morocco.</Text></Box> 
          </SimpleGrid> 
          </Box>
    </Stack>

    <Stack p={{base:3, sm:3, md:3,lg:50}} rounded={3} boxShadow="lg"  px={2} my={4} py={4} 
    marginBottom={"0"} pt={5} maxH={"full"}  display={'flex'}>
    <Box left={-2} position={"absolute"} w={5} h={5} borderRadius={"50%"} bg={"#944CAD"}></Box>
        
          <Box px={2}> 
          <SimpleGrid columns={{ base: 1, md:1}}   color={"#944CAD"}>
            <Box display={'flex'} fontWeight={'bold'} p={3} color={"pink.700"}>
              <CalendarCheck size={22} /><Text pl={2} >2017-2019</Text>
            </Box>
         
          <Box w={"full"}>
            <Text fontSize={['xl','2xl']}  bgGradient='linear(to-l, #8222AF,#9B19D9, #9B19D9, #386283)' 
            bgClip='text' fontWeight={'bold'} textAlign={{base:"start", md:"justify",lg:"start"}} >Bachelor's Degree in IT Technician</Text>
            </Box>
          <Box p={4} bg={"gray.700"}><Text textAlign={"center"}  color={"gray.500"}>
            Professional bachelor Technician Specialized in Computer Science.</Text></Box>
          </SimpleGrid>
          </Box>
         
     </Stack>
       <Box left={-2} position={"absolute"} w={5} h={5} borderRadius={"50%"} bg={"#944CAD"}></Box>
     </Box>
    
    </Box>

    </Flex>
    
    </Layout>
    </>

  )
}
export default AboutPage