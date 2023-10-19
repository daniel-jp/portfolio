import { Box, Flex, SimpleGrid, Stack} from '@chakra-ui/react';
import React, { Component } from 'react';
import Footer from '../components/footerComponent/FooterComponent';

import ContactComponent from '../components/contactComponent/ContactComponent';
import ContactComponent2 from '../components/contactComponent/ContactComponent2';

function ContactPage() {
    return (
<>
<Stack  bg={"gray.800"} minH={"100vh"}
        ml={{base:0, md:240}} pt={100}>
    <SimpleGrid p={{base:3, sm:3, md:3,lg:100}} columns={{base:1,sm:1, md:1,lg:2}} spacing={{ base: 2,sm:2, md: 4 }}>

    <Flex p={2} w={"full"}  px={2}  flex={1} justify={"center"} align={"center"}>
      <ContactComponent/>
      </Flex>
    <Flex p={2} flex={1} w={"full"} justify={"center"} align={"center"}>
    
      <ContactComponent2 />
     
       </Flex>

    </SimpleGrid>
    </Stack>
    <Footer />
    </>
    )

}

export default ContactPage