import { Box, Flex, Heading, IconButton, Link, Text } from '@chakra-ui/react';
import { At, InstagramLogo, LinkedinLogo, MapPin, PhoneOutgoing, TwitterLogo } from '@phosphor-icons/react';
import { BsGithub } from 'react-icons/bs';

function ContactComponent(){
  return(
   <>
   <Box  w={'full'} > 
   <Heading fontWeight={"bold"} textAlign={"start"}
            fontSize={{base:'2xl', sm:'2xl',md:'5xl'}} 
            bgGradient='linear(to-l,#944CAD,#944CAD,#3E91C0, #3E91C0)' 
            bgClip='text' > 
                Contact
  </Heading>
 
   
            <Text flexGrow={1} pt={2} display={"flex"}  fontSize={["md","xl"]} 
            textAlign={'start'} color={"gray.600"}> 
                    Fill up the form below to contact
            </Text> 
        

       
            <Text flexGrow={1} pt={2} display={"flex"} fontSize={["sm","md"]} color={"gray.500"}> 
            <PhoneOutgoing size={32} /> +212 657 226 746 </Text>
         
          
         
          <Text flexGrow={1} display={"flex"}  color={"gray.500"} fontSize={["sm","md"]}>
              <At size={32} /> danieljoaquimpaulinop@gmail.com
          </Text>
        
      

          <Text flexGrow={1} display={"flex"} 
          color={"gray.500" } fontSize={["sm","md"]} > 
           <MapPin size={32} /> Rabat-Morocco
          </Text>
      
       <Box pt={2}> <Text textAlign={"start"}> SOCIAL MIDIA</Text> </Box>

        <Flex  align={"center"}>
        
          <Box mr={4} >
          <Link href={"https://github.com/daniel-jp?tab=repositories"} >
            <IconButton bg={"purple.700"} 
            icon={<BsGithub color={"white"} size={22}/>}
            borderRadius="50%" 
            aria-label={'github'}
            _hover={{ transform: "scale(1.2)" }}
            _active={{ transform: "scale(0.9)" }}/>  
          
  
       </Link>
       </Box>
        <Box m={4}>
         <Link href={'https://twitter.com/Daniel28725148'} target='_blank'>
         <IconButton bg={"purple.700"} 
            icon={<TwitterLogo color={"white"} size={22}/>}
            borderRadius="50%" 
            aria-label={'Twiter'}
            _hover={{ transform: "scale(1.2)" }}
            _active={{ transform: "scale(0.9)" }}/>  
          
  

           
         </Link>
         </Box>
         <Box m={4}>
          <Link href={'https://www.linkedin.com/in/daniel-j-paulino-737808198/'} target='_blank'>

          <IconButton bg={"purple.700"} 
            icon={<LinkedinLogo color={"white"} size={22}/>}
            borderRadius="50%" 
            aria-label={'linkedin'}
            _hover={{ transform: "scale(1.2)" }}
            _active={{ transform: "scale(0.9)" }}/>  
          

         
          </Link>
          </Box>
          <Box m={4} borderRadius="50%"   bg={"purple.700"}>
          <Link href={'https://instagram.com/dannyj.paulino?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr'} target="_blank" >

          <IconButton bg={"purple.700"} 
            icon={<InstagramLogo color={"white"} size={22}/>}
            borderRadius="50%" 
            aria-label={'instagram'}
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