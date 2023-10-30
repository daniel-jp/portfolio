import { Flex, SimpleGrid, Stack } from '@chakra-ui/react';
import React from 'react';

import ContactComponent from '../components/contactComponent/ContactComponent';
import ContactComponent2 from '../components/contactComponent/ContactComponent2';

function ContactPage() {
    return (
<>
<Stack minH={"100vh"} pt={50}>
    <SimpleGrid p={{base:3, sm:3, md:3,lg:100}} 
                columns={{base:1,sm:1, md:1,lg:2}} 
                spacing={{ base: 2,sm:2, md: 4 }}>

    <Flex p={2} w={"full"}  px={2}  flex={1} justify={"center"} align={"center"}>
      <ContactComponent/>
      </Flex>
    <Flex p={2} flex={1} w={"full"} justify={"center"} align={"center"}>
    
      <ContactComponent2 />
     
       </Flex>

    </SimpleGrid>
    </Stack>
    </>
    )

}

export default ContactPage