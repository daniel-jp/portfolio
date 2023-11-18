import { Box, Flex } from '@chakra-ui/react';

import ContactComponent from '../components/contactComponent/ContactComponent';
import ContactComponent2 from '../components/contactComponent/ContactComponent2';
import Layout from '../layouts/Layout';

function ContactPage() {
   return (
    <>
    <Layout>
    <Flex  my={28} alignContent={"center"}  
    h={"100vh"} p={2} mx={{base:0, sm:2, md:3, lg:20}} 
    flexWrap={"wrap"}>

       
                   
      
        <Box flexGrow={1}>
          <ContactComponent/>
        </Box>
        <Box  flexGrow={1}>
          <ContactComponent2 />
        </Box>
        </Flex>
        </Layout>
        </>
    )

}

export default ContactPage