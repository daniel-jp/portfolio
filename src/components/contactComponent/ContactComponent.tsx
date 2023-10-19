import { Box, Flex, Heading, IconButton, Link, Text, VStack } from '@chakra-ui/react';
import { At, MapPin, PhoneOutgoing } from '@phosphor-icons/react';
import { BsGithub } from 'react-icons/bs';

function ContactComponent(){
  return(
   <>
   <Flex  alignItems={"center"} display={"block"} w={"full"}  my={"5%"}> 
          <VStack w={"full"} align={{base:"center", sm:"center", md:"center", lg:"start"}}> 
            
           
                   <VStack mt={5} spacing={3}>
                      <Heading  fontWeight={"bold"} fontSize={{base:'2xl', sm:'2xl',md:'5xl'}} 
                     p={2} px={20}  
                      bgGradient='linear(to-l,#944CAD,#944CAD,#3E91C0, #3E91C0)' bgClip='text' > 
                      Contact
                      </Heading>
                   </VStack>

                    <Text pt={2} fontSize={'md'} textAlign={'start'} color={"gray.200"}> Fill up the form below to contact</Text> 
    
                    <Box>
                     <Flex py={2} align={"center"} gap={2}>
                      <Text color={"blue.700"}>
                     <PhoneOutgoing size={32} /></Text><Text fontSize={["sm","md"]} color={"gray.400"}> +212 657 226 746</Text>
                     </Flex>

                    <Flex  pb={2}  align={"center"} gap={2}>
                      <Text color={"blue.700"} >
                      <At size={32} /></Text>
                      <Text color={"gray.400"} fontSize={["sm","md"]}>danieljoaquimpaulinop@gmail.com
                      </Text>
                      </Flex>

                      <Flex align={"center"} gap={2}>
                      <Text color={"blue.700"} >
                      <MapPin size={32} /></Text>
                      <Text color={"gray.400" } fontSize={["sm","md"]} >  Rabat-Morocco
                      </Text>
                      </Flex>
                    <Link as={"a"} >
                      <Flex py={2} maxW={"full"} mt={2} align={"center"} 
                      justify={"center"} gap={2} bg={"#222831"} 
                      rounded={6}> 
                      <IconButton bg={"purple.700"} 
                      icon={<BsGithub color={"white"} size={22}/>}
                      borderRadius="50%" 
                      aria-label={'github'}
                      _hover={{ transform: "scale(1.2)" }}
                      _active={{ transform: "scale(0.9)" }}/>  
                      <Text ml={2} color='white'> GitHub</Text>
                    </Flex>

                      </Link>
                    </Box>
                  </VStack> 
 

        </Flex>

   </>
  )
}
export default ContactComponent 