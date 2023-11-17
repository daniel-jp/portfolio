import { Box, Container, Flex, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react';

import ServiceComponent from '../../components/servicesComponent/ServicesComponent';
import Layout from '../../layouts/Layout';
import ServiceProps from '../../props/serviceProp/ServiceProps';

function ServicePage(){
const serviceProps = ServiceProps();
  return( 
    <>
    <Layout>

    <Flex  mx={{base:0, sm:2, md:3, lg:20}} 
           display={"block"} justify={'center'}  my={20} 
           h={"100vh"} direction={{ base: 'column', sm: 'row' }}>

        <Stack spacing={4} as={Container} pt={50} pb={5}  maxW={'4xl'} textAlign={'center'}>
        <Heading bgGradient='linear(to-l,#944CAD, #3E91C0, #3E91C0, #3E91C0)' 
    bgClip='text'fontSize={{ base: '2xl', sm: '4xl' }}  textAlign={{base:"center", md:"end"}} 
    fontWeight={'bold'}>
        My services
        </Heading>
        <Text fontSize={{ base: '2xl', sm: '2xl', md:'3xl' }}>
        I would like to illustrate the areas where I work and the types of services I do.
        </Text>
      </Stack>


    <Box  overflow={"hidden"}  pb={20}>
    <SimpleGrid  columns={{base:1,sm:1, md:1,lg:3}}  spacing={{ base: 2, md: 4 }}>
        {
          serviceProps.map((servicep)=>(

            <ServiceComponent 
            icon={servicep.icon} 
            title={servicep.title} 
            text={servicep.text} 
            button={servicep.button}
            id={servicep.id} />

          ))
        }

  </SimpleGrid>
  </Box>

 
</Flex>
</Layout>
</>
  )
}
export default ServicePage