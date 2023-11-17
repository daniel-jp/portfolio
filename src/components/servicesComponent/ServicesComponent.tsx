import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Icon,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

function Services({icon, title,text,button}:any){
  return( 
<Box w={"full"} overflow={"hidden"} >

   <Card  _hover={{bg:'whiteAlpha.50', cursor :'pointer',}} 
   align={"center"} pt={4} px={3} boxShadow="lg">
   <Flex
          w={12} 
          h={12}
          align={'center'}
          justify={'center'}
          borderRadius={'50%'}
           bg={useColorModeValue('gray.200', 'gray.800')}>

         <Icon as={icon} fontSize={32} color={"orange.600"} />
        </Flex>
    <CardHeader textAlign={"center"} color={"pink.500"} >
      <Heading fontSize={{ base: '1xl', sm: '2xl' }} > {title}</Heading>
    </CardHeader>
    <CardBody  mt={-8}>
      <Text textAlign={"center"}>{text}</Text> 
      
    
    </CardBody>
     <CardFooter pt={-20} justify={'center'}>
      <Button as={'a'} href="../../pages/404/" bg={"#944CAD"}  px={6} maxW={"full"} borderRadius={"30"} >{button}</Button>
    </CardFooter>
  </Card>

</Box>
  )
}
export default Services