import { Box, chakra, SimpleGrid, Text } from '@chakra-ui/react';

import SkillsComponent from '../components/skillsComponent/SkillsComponent';
import SkillsComponent2 from '../components/skillsComponent/SkillsComponent2';
import Layout from '../layouts/Layout';
import SkillProp from '../props/skillProp/SkillProp';
import SkillProp2 from '../props/skillProp/SkillProp2';

function SkillPage (){

  const skillpro = SkillProp()
  const skillpro2 = SkillProp2()
    return (

      <div>
    <Layout>

    <Box  pt={5} pb={10} p={{base:3,sm:3, md:3}}>
    <chakra.h1 
            bgGradient='linear(to-l, #CA58F2, #3E91C0, #3E91C0, #CA58F2, #CA58F2, #CA58F2)' 
            bgClip='text'
            fontSize={'4xl'} textAlign={{ base:"end", sm:"center", md:"end", lg:"end"}} 
            fontWeight={'bold'}>
            My Skills
          </chakra.h1>

          <Text pt={5}  color={'gray.500'} fontWeight={"500"}  textAlign={{ base:"center", sm:"center", md:"justify", lg:"center"}} fontSize={["md","lg"]}>
              My programming skills is in the following languages </Text>
          <chakra.h4
            textAlign={'center'} mt={5}
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
    </Layout>
  </div>
    )
  
}

export default SkillPage