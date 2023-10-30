import { Box } from '@chakra-ui/react';
import React from 'react';

import HomComponent from '../components/homComponent/HomComponent';
import Layout from '../layouts/Layout';

export default function Home() {
  return (
 <Box>
    <Layout>
        <HomComponent />
    </Layout>
    </Box>
  )
}
