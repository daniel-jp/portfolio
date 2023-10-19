import { Box, Button, Container, Flex, Heading, Hide, Link, Show, SimpleGrid, Stack, Text } from '@chakra-ui/react';

import PortfolioComponent from '../components/portfolioComponent/PortfolioComponent';
import portfolioProps from '../PortfolioProps/PortfolioProps';
import Footer from '../components/footerComponent/FooterComponent';

function PortfolioPage(){
const portfolioprops = portfolioProps();
  return( 
    <>
    <Flex  display={"block"}
      ml={{base:0, md:240}}  justify={'center'} pb={100} 
      bg={"gray.800"} 
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'>
  

        <Stack spacing={4} as={Container} pt={100} pb={10}  maxW={'5xl'} textAlign={'center'}>
        <Heading bgGradient='linear(to-l,#944CAD, #3E91C0, #3E91C0, #3E91C0)' 
    bgClip='text'fontSize={{ base: '2xl', sm:'2xl', md:'3xl', lg:'4xl' }}  textAlign={{base:"center", md:"end"}} fontWeight={'bold'}>
      Latest Projects
        </Heading>
        <Text color={'gray.400'} textAlign={"center"} fontSize={{ base: '1xl', sm: '1xl', md:'2xl' }}>
        On this page I present you my portfolio with projects carried out and those that 
        are in the process of being carried out        </Text>
      </Stack>
    <Box>
    <SimpleGrid  columns={{base:1, sm:1, md:1,lg:3}} p={{base:3, md:10}} spacing={{ base: 4, md: 4 }}>
        {
          portfolioprops.map((portfoliop) => (

            <PortfolioComponent 
            imgc={portfoliop.imgc}
            titlec={portfoliop.titlec} 
            textc={portfoliop.textc} 
            iconc={portfoliop.iconc} 
            key={portfoliop.id} /> 

          ))
        }

  </SimpleGrid>
    </Box>

    <Flex mt={3} ml={{base:0, md:240}} align={"center"} justify={"center"} >

      <Link as={"a"} textAlign={"center"}  bg={"purple.500"} w={"200px"} maxW={"full"} rounded={4}  _hover={{
        bg:"#944CAD"}}>

        <Text color={"gray.900"}  py={1}   px={8}  fontSize={['md','2xl','2xl']} fontWeight={"600"}> Learn more </Text>
      </Link>

    </Flex>
 
</Flex>
<Footer />
</>
  )
}
export default PortfolioPage