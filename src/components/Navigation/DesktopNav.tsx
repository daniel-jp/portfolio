import '@fontsource/inter/700.css';

import { Box, Popover, PopoverContent, PopoverTrigger, Stack, useColorModeValue } from '@chakra-ui/react';

import { NAV_ITEMS } from '../../utils/navItems';
import DesktopSubNav from '../Navigation/DesktopSubNav';


const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.500', 'gray.200')
  const linkHoverColor = useColorModeValue('pink.800', 'white')
  const popoverContentBgColor = useColorModeValue('white', 'gray.800')


  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.id}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Box
               as='a' 
               href={navItem.path ?? '/'}
                p={2}
               
                fontSize={'md'}
                fontWeight={'400'} fontFamily={"'Inter',sans-serif"}
                color={linkColor}
                
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                
                }}>
                {navItem.name}
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav
                    key={child.name} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}

export default DesktopNav