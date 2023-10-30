import { Box, Flex } from '@chakra-ui/react';

import Layout from '../layouts/Layout';

export default function Test() {
  return (
    <div>
      <Layout>
      <Flex display={"flex"}>
        <Box  bg={"blackAlpha.600"} w={400} h={400}>

        </Box>

        <Box bg={"green.600"} w={400} h={400}>

        </Box>
        
        </Flex>
        </Layout>
    </div>
  )
}
