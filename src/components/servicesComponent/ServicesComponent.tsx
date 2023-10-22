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
<Box w={"full"} >

   <Card align={"center"} pt={4} px={3} bg={"gray.50"}>
   <Flex
          w={12}
          h={12}
          align={'center'}
          justify={'center'}
          borderRadius={'50%'}
          bg={useColorModeValue('gray.700', 'gray.800')}>
         <Icon as={icon} fontSize={32} color={"orange.600"} />
        </Flex>
    <CardHeader textAlign={"center"} color={"gray.800"} >
      <Heading fontSize={{ base: '1xl', sm: '2xl' }} > {title}</Heading>
    </CardHeader>
    <CardBody  mt={-8} color={"gray.600"}>
      <Text textAlign={"center"} >{text}</Text> 
      
    
    </CardBody>
     <CardFooter pt={-20} justify={'center'}>
      <Button bg={"#944CAD"}  px={6} maxW={"full"} borderRadius={"30"} >{button}</Button>
    </CardFooter>
  </Card>

</Box>
  )
}
export default Services