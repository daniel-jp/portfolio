import { Box, ChakraProvider, CSSReset } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import NavBar from './components/Navigation/NavBar';
import Routes from './Routes';



function App() {
  

  return (
    
    <ChakraProvider>
        <CSSReset/>
        <NavBar />
        <Box p={4}>
        <RouterProvider router={Routes()} />
       </Box>
        <Footer/>
    </ChakraProvider>
  )
}

export default App
