import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box, IconButton, useColorMode } from '@chakra-ui/react';
import React from 'react';

function ThemeSelector(){

  const { colorMode, toggleColorMode } = useColorMode();


return(

  <Box >
     <IconButton rounded={"50%"}
      aria-label="Toggle color mode"
      icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      onClick={toggleColorMode}
    />
  </Box>

);
};

export default ThemeSelector
