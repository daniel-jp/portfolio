import { Box, IconButton, useColorMode } from '@chakra-ui/react';
import { Moon, SunDim } from '@phosphor-icons/react';


function ThemeSelector(){

  const { colorMode, toggleColorMode } = useColorMode();


return(

  <Box >
     <IconButton 
      aria-label="Toggle color mode"
      icon={colorMode === "light" ? <Moon /> : <SunDim />}
      onClick={toggleColorMode}
    />
  </Box>

);
};

export default ThemeSelector
