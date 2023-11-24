import { Box, Container, Flex, Heading, Link, SimpleGrid, Stack, Text } from '@chakra-ui/react';

import PortfolioComponent from '../components/portfolioComponent/PortfolioComponent';
import Layout from '../layouts/Layout';
import portfolioProps from '../props/PortfolioProps/PortfolioProps';

function PortfolioPage(){
const portfolioprops = portfolioProps();
  return( 
    <>
    <Layout>
    <Flex h={"1330px"}  display={"block"}  
       mx={{base:0, sm:2, md:3, lg:12}}
       justify={'center'}  mt={20} mb={5}
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'>
  
        <Stack spacing={4} as={Container} pt={50} pb={5}  maxW={'5xl'} textAlign={'center'}>
           <Heading bgGradient='linear(to-l,#944CAD, #3E91C0, #3E91C0, #3E91C0)' 
              bgClip='text'fontSize={{ base: '2xl', sm:'2xl', md:'3xl', lg:'4xl' }}  textAlign={{base:"center", md:"end"}} fontWeight={'bold'}>
                Latest Projects
        </Heading>
        <Text color={'gray.500'} textAlign={"center"} fontSize={{ base: '1xl', sm: '1xl', md:'2xl' }}>
        On this page I present you my portfolio with projects carried out and those that
        are in the process of being carried out
        </Text>
      </Stack>
    <Box  overflow="hidden" >
    <SimpleGrid  overflow="hidden"  columns={{base:1, sm:1, md:1,lg:3}} p={{base:1, md:10}} spacing={{ base: 4, md: 4 }}>
        {
          portfolioprops.map((portfoliop) => (

            <PortfolioComponent
            href={portfoliop.href}
            imgc={portfoliop.imgc}
            titlec={portfoliop.titlec}
            textc={portfoliop.textc}
            iconc={portfoliop.iconc}
            key={portfoliop.id} />

          ))
        }

  </SimpleGrid>
    </Box>

    <Flex  mt={3} align={"center"} justify={"center"} >

      <Link as={"a"} href='https://github.com/daniel-jp?tab=repositories' textAlign={"center"}  bg={"purple.500"} w={"200px"} maxW={"full"} rounded={4}  _hover={{
        bg:"#944CAD"}}>

        <Text color={"gray.900"}  py={1}   px={8}  fontSize={['md','2xl','2xl']} fontWeight={"600"}> show more </Text>
      </Link>

    </Flex>
 
</Flex>
</Layout>
</>
  )
}
export default PortfolioPage