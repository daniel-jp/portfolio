import { EmailIcon, InfoIcon } from '@chakra-ui/icons';
import { Button, FormControl, FormLabel, Input, InputGroup, InputLeftElement, Stack, Textarea } from '@chakra-ui/react';

export default function  ContactComponent2(){

   return (
     <>
    <Stack    w={'full'}  bg={"blackAlpha.600"} my={"5%"} p={{base:"4", sm:"4",md:"4",lg:"10"}} rounded={6}>
          <form>
            <FormControl mb={3}>
              <FormLabel color={'gray.300'}> Your name</FormLabel>

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
                        <FormLabel color={'gray.300' }> Email </FormLabel>
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
                        <FormLabel color={'gray.300'}> Message </FormLabel>
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
