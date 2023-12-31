import { Box, ChakraProvider, CSSReset } from '@chakra-ui/react';
import { RouterProvider } from 'react-router';

import Footer from './components/Footer/Footer';
import NavBar from './components/Navigation/NavBar';
import Routes from './Routes';



function App() {
  
  
  return (
    <>
     <ChakraProvider>
        <CSSReset/>
        <NavBar/>
            <Box>  {/*<WithSubnavigation />*/}
            <RouterProvider router={Routes()} />
        </Box>
      <Footer/>
  </ChakraProvider>
 </>
  )
}

export default App
