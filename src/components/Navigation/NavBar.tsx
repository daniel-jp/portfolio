import '@fontsource/inter/600.css';

import { ChevronDownIcon, CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Collapse,
  Flex,
  HStack,
  Icon,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuList,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { Globe } from '@phosphor-icons/react';

import Language from '../../props/propLanguage/Language';
import { NAV_ITEMS } from '../../utils/navItems';
import LanguageComponent from '../language/LanguageComponent';
import Logo from '../Logo';
import ThemeSelector from '../Theme/ThemeSelector';
import DesktopNav from './DesktopNav';



interface NavItem {
  name: string
  children?: Array<NavItem>
  path?: string
}

// WithSubnavigation function as MAIN

export default function NavBar() {

const languages = Language();

  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box zIndex={10}
    position="relative">
      <Flex  
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex 
              flex={{ base: 1 }} 
              justify={{ base: 'center', md: 'start'}} align={'center'}>

          <Link as={"a"}  href={'/'} fontSize={'md'} fontWeight={600}
            textAlign={{ base: 'center', md: 'left'}}
            fontFamily={'heading'}
            color={"gray.800"}>
            <Logo/>
          </Link>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
        <ThemeSelector/>
      <HStack spacing={{ base: '0', md: '6' }}>
        <Flex alignItems={'center'} >
          <Menu>
            <MenuButton 
              transition="all 0.3s"
              _focus={{ boxShadow: 'none'}}>
              <HStack>
                 <Stack p={1} bg="gray.300"
                   color="white" borderRadius={"50%"}
                   _hover={{
                    cursor:"pointer", 
                    bg:"gray.800",}}
                     display={{ base: 'flex', md: 'flex' }}>
                  <Globe color='black' size={32} />
                </Stack>
              </HStack>
            </MenuButton>

            <MenuList
              bg={useColorModeValue('gray.700', 'gray.900')}
              borderColor={useColorModeValue('gray.800', 'gray.700')}>

            { languages.map((value, index) => (

            <LanguageComponent
                index={index}
                id={value.id}
                language={value.language}
                img={value.img}/>
              ))
            }
            </MenuList>
          </Menu>
          
        </Flex>
       </HStack>

      </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  )
}


// MobileNav for Mobile divices

const MobileNav = () => {
  return (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.name} {...navItem}  />
      ))}
    </Stack>
  )
}


// MobileNavItem function
const MobileNavItem = ({ name, children, path }:NavItem) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={path ?? '/'}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: 'none',
        }}>
        <Text color={useColorModeValue('gray.600', 'gray.200')}>
          {name}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Box as="a" key={child.name} py={2} href={child.path}>
                {child.name}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}
