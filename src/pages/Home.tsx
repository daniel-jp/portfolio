import { Box } from '@chakra-ui/react';

import HomComponent from '../components/homComponent/HomComponent';
import Layout from '../layouts/Layout';


export default function Home() {
  return (

    <Layout>
      <Box h={"100vh"}> <HomComponent /></Box>
       
    </Layout>
  
  )
}
