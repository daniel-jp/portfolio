import { Box, IconButton, useColorMode } from '@chakra-ui/react';
import { Moon, SunDim } from '@phosphor-icons/react';


function ThemeSelector(){

  const { colorMode, toggleColorMode } = useColorMode();


return(

  <Box pt={1}>
     <IconButton borderRadius={"50%"}
      aria-label="Toggle color mode"
      icon={colorMode === "light" ? <Moon size={22} color='black'/> : <SunDim size={22} color='white'/>}
      onClick={toggleColorMode}
    />
  </Box>

);
};

export default ThemeSelector
