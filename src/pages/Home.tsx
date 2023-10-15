import { Box, Flex, flexbox, Text } from '@chakra-ui/react';
import { wrap } from 'framer-motion';

import Layout from '../layouts/Layout';


export default function Home() {
  return (
 <div>
    <Layout>

      <Flex flexBasis={1} >
      <Box bg={'gray.600'} w={200} h={200}>
         <Text>TESTING</Text>
      </Box>

      <Box bg={'blue.600'} w={200} h={200}>
         <Text>TESTING</Text>
      </Box>

      <Box bg={'red.600'} w={200} h={200}>
         <Text>TESTING</Text>
      </Box>
      <Box bg={'green.600'} w={200} h={200} >
         <Text>TESTING</Text>
      </Box>
      </Flex>

    </Layout>
    </div>
  )
}
