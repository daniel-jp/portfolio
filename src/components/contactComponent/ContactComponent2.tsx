import { EmailIcon, InfoIcon } from '@chakra-ui/icons';
import { Box, Button,Text, FormControl, FormLabel, Input, InputGroup, InputLeftElement, Stack, Textarea } from '@chakra-ui/react';

export default function  ContactComponent2(){

   return (
     <>
    <Stack   w={'full'} pt={{base:0, sm:2, md:3}}  rounded={6}>
      <Box> 
        <Text fontSize={["md","xl"]}>Send me a message using the form, and I will give you a response as soon as possible.
        </Text>
      </Box>
          <form>
            <FormControl mb={3}>
              <FormLabel color={'gray.500'}> Your name</FormLabel>

                    <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement children={<InfoIcon  color="purple.500" />} />
                          <Input  bg={"gray.700"} border={"none"}
                            name="from_name" color={"gray.200"} fontWeight={"700"}
                            type="text"
                            size="md" 
                            placeholder="Your name"
                             _hover={{
                              border:"2px solid #805AD5",
                           

                            }} />
                    </InputGroup>
                     
                  </FormControl>

                  <FormControl mb={3}>
                        <FormLabel color={'gray.500' }> Email </FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement children={<EmailIcon color="purple.500" />} />
                          <Input bg={"gray.700"} color={"gray.200"} fontWeight={"700"}
                            type="email"  border={"none"}  _hover={{
                              border:"2px solid #805AD5"

                            }} 
                            name="to_name" size="md"
                            placeholder="exemple@portifolio.com"
                          />

                        </InputGroup>  
                      
                    </FormControl>
                      

                    <FormControl mb={3} >
                        <FormLabel color={'gray.500'}> Message </FormLabel>
                        <Textarea  bg={"gray.700"}  border={"none"} color={"gray.200"} fontWeight={"700"}
                          _hover={{  
                            border:"2px solid #805AD5",
                            borderRadius: 'gray.300'
                          }}
                          name="message"
                          placeholder="Enter your message here"
                        />
                      
                  </FormControl>
                      
                <Stack spacing={6} py={6}>
                  <Button colorScheme={'blue'} variant={'solid'}
                    type="submit"  bg={"purple.700"}
                    color="white"
                    _hover={{
                      bg: 'red.400',
                      cursor: 'pointer'
                    }}>
                  Send Message
                  </Button>
                </Stack>
                </form>
              </Stack>   

     </>
   )

}
