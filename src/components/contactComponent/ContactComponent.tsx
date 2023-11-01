import { Box, Flex, Heading, IconButton, Link, Text } from '@chakra-ui/react';
import { At, InstagramLogo, LinkedinLogo, MapPin, PhoneOutgoing, TwitterLogo } from '@phosphor-icons/react';
import { BsGithub } from 'react-icons/bs';

function ContactComponent(){
  return(
   <>
   <Box  w={'full'} > 
   <Heading fontWeight={"bold"} fontSize={{base:'2xl', sm:'2xl',md:'5xl'}} 
              
                bgGradient='linear(to-l,#944CAD,#944CAD,#3E91C0, #3E91C0)' bgClip='text' > 
                Contact
  </Heading>
 
   
            <Text flexGrow={1} display={"flex"}  fontSize={["md","xl"]} 
            textAlign={'start'} color={"gray.600"}> 
                    Fill up the form below to contact
            </Text> 
        

       
            <Text flexGrow={1} display={"flex"} fontSize={["sm","md"]} color={"gray.500"}> 
            <PhoneOutgoing size={32} /> +212 657 226 746 </Text>
         
          
         
          <Text flexGrow={1} display={"flex"}  color={"gray.500"} fontSize={["sm","md"]}>
              <At size={32} /> danieljoaquimpaulinop@gmail.com
          </Text>
        
      

          <Text flexGrow={1} display={"flex"} 
          color={"gray.500" } fontSize={["sm","md"]} > 
           <MapPin size={32} /> Rabat-Morocco
          </Text>
         <Box pt={{base:0, sm:2, md:3, lg:16}} > <Text> SOCIAL MIDIA</Text> </Box>
        <Flex  align={"center"}>
        
          <Box mr={4} >
          <Link as={"a"} >
            <IconButton bg={"purple.700"} 
            icon={<BsGithub color={"white"} size={22}/>}
            borderRadius="50%" 
            aria-label={'github'}
            _hover={{ transform: "scale(1.2)" }}
            _active={{ transform: "scale(0.9)" }}/>  
          
  
       </Link>
       </Box>
        <Box m={4}>
         <Link href={'#'}>
         <IconButton bg={"purple.700"} 
            icon={<TwitterLogo color={"white"} size={22}/>}
            borderRadius="50%" 
            aria-label={'github'}
            _hover={{ transform: "scale(1.2)" }}
            _active={{ transform: "scale(0.9)" }}/>  
          
  

           
         </Link>
         </Box>
         <Box m={4}>
          <Link  href={'#'}>

          <IconButton bg={"purple.700"} 
            icon={<LinkedinLogo color={"white"} size={22}/>}
            borderRadius="50%" 
            aria-label={'github'}
            _hover={{ transform: "scale(1.2)" }}
            _active={{ transform: "scale(0.9)" }}/>  
          

         
          </Link>
          </Box>
          <Box m={4} borderRadius="50%"   bg={"purple.700"}>
          <Link href={'#'}>

          <IconButton bg={"purple.700"} 
            icon={<InstagramLogo color={"white"} size={22}/>}
            borderRadius="50%" 
            aria-label={'github'}
            _hover={{ transform: "scale(1.2)" }}
            _active={{ transform: "scale(0.9)" }}/>  
        
         </Link>

         </Box>
       </Flex>
      </Box>
   </>
  );
}
export default ContactComponent