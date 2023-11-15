import { EmailIcon, InfoIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';




export default function  ContactComponent2(){

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

    function sendEmail(e: {preventDefault: () => void;}){

      e.preventDefault();

      if (name==''|| email==''|| message=='') {
                alert("Fill in all the fields.");

                return;
      }

      const templateParms={
        from_name: name,
        message: message,
        email:email
      }

      emailjs.send("service_g3wnyeg","template_5dcimsm",templateParms,"VYtbYRJVHvmxoHbpp")
      .then((response) => {
        console.log("Email sended", response.status, response.text)
        setName('')
        setEmail('')
        setMessage('')
        
      },(err)=>{
        console.log("Error",err)
      })
    }



   return (
     <>
    <Stack   w={'full'} pt={{base:0, sm:2, md:3}} rounded={6}>
      <Box> 
        <Text  pt={4} textAlign={"center"} fontSize={["md","xl"]}>
          Send me a message using the form, and I will give you a response as soon as possible.
        </Text>
      </Box>
          <form className='form' onSubmit={sendEmail}>
            <FormControl mb={3}>
              <FormLabel color={'gray.500'}> Your name</FormLabel>

                    <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement children={<InfoIcon  color="purple.500" />} />
                          <Input  bg={"gray.700"} border={"none"}
                            name="name" color={"gray.200"} fontWeight={"700"}
                            type="text"
                            size="md" 
                            placeholder="Your name"
                             _hover={{
                              border:"2px solid #805AD5",}}
                           onChange={(e)=>setName(e.target.value)}
                           value={name}
                            />
                           
                    </InputGroup>
                  </FormControl>

                  <FormControl mb={3}>
                        <FormLabel color={'gray.500' }> Email </FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement children={<EmailIcon color="purple.500" />} />
                          <Input bg={"gray.700"} color={"gray.200"} fontWeight={"700"}
                            type="email"  border={"none"}
                            
                            name="email" size="md"
                            placeholder="exemple@portifolio.com" 
                            _hover={{border:"2px solid #805AD5"}}
                            onChange={(e)=>setEmail(e.target.value)}
                           value={email}
                           
                          />
                          
                        </InputGroup>

                    </FormControl>
                      

                    <FormControl mb={3} >
                        <FormLabel color={'gray.500'}> Message </FormLabel>
                        <Textarea  bg={"gray.700"}  border={"none"} color={"gray.200"} 
                          name='message' fontWeight={"700"}
                          _hover={{
                            border:"2px solid #805AD5",
                            borderRadius: 'gray.300'
                          }}

                          onChange={(e)=>setMessage(e.target.value)}
                           value={message}
                        />
                    
                      
                  </FormControl>
                      
                <Stack spacing={6} py={6}>
                  <Button colorScheme={'blue'} variant={'solid'}
                    type="submit"  bg={"purple.700"}
                    color="white"
                    _hover={{
                      bg: 'red.400',
                      cursor: 'pointer'
                    }} >
                  Send Message
                  </Button>
                </Stack>
                </form>
              </Stack>

     </>
   )

}
