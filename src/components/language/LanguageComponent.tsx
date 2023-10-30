import { Image, MenuItem, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

export default function LanguageComponent({language, img}: any) {
  return (
    
              <MenuItem justifyContent={'space-between'} color={'orange.500'}
              bg={useColorModeValue('gray.700', 'gray.900')}
              _hover={{ bg:"gray.600"}}>

              <Text as={'span'}>{language}</Text>

              <Image w={4} h={4} src={`/public/assets/flag/${img}`} />
              </MenuItem>

  )
}
