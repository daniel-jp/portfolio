import { Box, chakra, Container, Flex, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import React, { Component } from 'react';

import SkillsComponent from '../components/skillsComponent/SkillsComponent';
import SkillsComponent2 from '../components/skillsComponent/SkillsComponent2';
import SkillProp from '../skillProp/SkillProp';
import SkillProp2 from '../skillProp/SkillProp2';
import Footer from '../components/footerComponent/FooterComponent';

function SkillPage (){

  const skillpro = SkillProp()
  const skillpro2 = SkillProp2()
    return (
      <div>
    

<Box bg={"gray.800"} ml={{base:0, md:240}}  maxW="7xl" pt={5} pb={20} p={{base:3,sm:3, md:3, lg:20}} >
<chakra.h1 pt={50} 
        bgGradient='linear(to-l, #CA58F2, #3E91C0, #3E91C0, #CA58F2, #CA58F2, #CA58F2)' 
        bgClip='text'
        fontSize={'4xl'}
        textAlign={{ base:"end", sm:"center", md:"end", lg:"end"}} fontWeight={'bold'} pr={{base:0,sm:2, md:50}}>
        My Skills
      </chakra.h1>

      <Text pt={50}  color={'gray.400'} fontWeight={"500"}  textAlign={{ base:"center", sm:"center", md:"justify", lg:"center"}} fontSize={["md","lg"]}>
          My programming skills is in the following languages </Text>
      <chakra.h4
        textAlign={'center'} mt={10}
        fontSize={["md","2xl","3xl"]}
        py={2} bgGradient='linear(to-l, #3E91C0, #3E91C0, #944CAD,  #944CAD, #944CAD)' 
        bgClip='text'
        fontWeight={'bold'} >
         Frontend: Js, CSS & Frameworks
      </chakra.h4>
      <SimpleGrid columns={{ base: 1,sm:1, md: 1,lg:3 }}  spacing={{ base: 3, lg: 3 }}>
      {  
         skillpro.map((skillpr)=>(

           <SkillsComponent
          language={skillpr.language}
          text={skillpr.text}
          img={skillpr.img}
          key={skillpr.id}
        />
         ))
       
       }
      </SimpleGrid>

      <chakra.h4
        textAlign={'center'} mt={4}
        fontSize={["md","2xl","3xl"]}
        py={2} bgGradient='linear(to-l, #3E91C0, #3E91C0, #944CAD,  #944CAD, #944CAD)' 
        bgClip='text'
        fontWeight={'bold'} >
        Backend: Java & Frameworks
      </chakra.h4>
      <SimpleGrid  columns={{ base:1,sm:1, md:1,lg:3 }}  spacing={{ base: 3, lg: 3 }}>
      {  
         skillpro2.map((skillpr2)=>(

           <SkillsComponent2
          language={skillpr2.language}
          text={skillpr2.text}
          img={skillpr2.img}
          key={skillpr2.id}
        />
         ))
       
       }
      </SimpleGrid>
    </Box>
    <Footer />
      </div>
    )
  
}

export default SkillPage