import { Card, CardBody, CardFooter, CardHeader, Flex, Heading, Icon, Link, Text } from '@chakra-ui/react';

interface PortfolioData {
  iconc: any;
  titlec: string;
  textc: string;
  imgc: string;
  href:string;
}
function PortfolioComponent({iconc, titlec,textc, imgc, href}:PortfolioData){


  return(
<Flex w={"full"} align={"center"} overflow={"hidden"} 
    position="relative"
    bgPosition="center" backgroundRepeat="no-repeat" visibility={'visible'}
    backgroundSize="cover" rounded={6}
    bgImage={`url(${imgc})`}
    _hover={{
      opacity:'1.0',
      padding: "0px",visibility:'visible',
      zIndex:"1",}}  justifyContent={"center"}>

 {/* */}
   <Card opacity='1.0' w={"full"} h={"full"} bg={"gray.900"} zIndex={-1} align={"center"}>
          
    <CardHeader mb={-4} textAlign={"center"}>
      <Heading color={"pink.600"} fontWeight={"bold"} fontSize={["sm","mg","lg"]} > {titlec}</Heading>
    </CardHeader>
    <CardBody pt={-2}>
      <Text textAlign={"center"} fontSize={['md','md']}  fontWeight={"bold"} color={"gray.100"} >{textc}</Text>
     
    </CardBody>
     <CardFooter pt={-4}>
        <Link  color={"gray.400"} 
        href={`${href}`} _hover={{ textDecoration: "none"}}
        target="_blank" rounded={22}  
        alignItems={"center"} p={4} h={8} 
        bg={"purple.800"} display={"flex"}>
         
         <Text>visit the website </Text>
         <Icon as={iconc} fontSize={32} fontWeight={"bold"} 
         _hover={{cursor:"pointer"}}/>
         
         </Link>
    </CardFooter>
  </Card>



</Flex>
  )
}
export default PortfolioComponent