import { Box, Flex, Image, Text } from '@chakra-ui/react';

import Layout from '../../layouts/Layout';

export default function Error() {
  return (
    <div>
      <Layout>
        <Flex flexWrap={"wrap"} justify={"center"} align={"center"} w={"100%"}  h={"100vh"}>
          <Box p={1}>
           <Image src='../../assets/error-image.gif' />
          </Box>

          <Box p={1}>
            <Text fontSize={"3xl"}> 404 Page not found</Text>
         </Box>

        </Flex>

        
      </Layout>
      
    </div>
  )
}
