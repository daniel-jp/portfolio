import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box, IconButton, useColorMode } from '@chakra-ui/react';

function ThemeSelector(){

  const { colorMode, toggleColorMode } = useColorMode();


return(

  <Box>
     <IconButton
      aria-label="Toggle color mode"
      icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      onClick={toggleColorMode}
    />
  </Box>

);
};

export default ThemeSelector
