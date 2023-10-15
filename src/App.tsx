import { ChakraProvider, CSSReset } from '@chakra-ui/react';

import Footer from './components/Footer/Footer';
import NavBar from './components/Navigation/NavBar';
import Home from './pages/Home';


function App() {
  

  return (
    <ChakraProvider>
 
        <CSSReset/>
        <NavBar />
        <Home/>
        <Footer/>
       
    </ChakraProvider>
  )
}

export default App
