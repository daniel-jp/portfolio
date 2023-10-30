import { Box, ChakraProvider, CSSReset } from '@chakra-ui/react';
import React from 'react';
import { RouterProvider } from 'react-router';

import Footer from './components/Footer/Footer';
import NavBar from './components/Navigation/NavBar';
import Routes from './Router';




function App() {
  
  
  return (
    <>
    <CSSReset/>
    <NavBar /> 
        <Box p={2}>
          <RouterProvider router={Routes()} />
     </Box>
  <Footer/>
 </>
  )
}

export default App
