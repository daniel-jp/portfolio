import { Box, chakra, Container, Stack, Text, useColorModeValue, VisuallyHidden } from '@chakra-ui/react';
import { InstagramLogo, LinkedinLogo, TwitterLogo } from '@phosphor-icons/react';
import { ReactNode } from 'react';
import { BsGithub } from 'react-icons/bs';

'use client'


const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode
  label: string
  href: string
}) => {
  return (
    <chakra.button
      rounded={'full'} 
      w={8} bg={"purple.700"} 
      h={8}
      cursor={'pointer'}
      as={'a'} 
      href={href} color={"white"}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{ color:"black",
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function Footer() {
  return (
    
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'7xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
       <SocialButton  label={'Linkedin'}
        href={'https://www.linkedin.com/in/daniel-j-paulino-737808198/'}>
            <BsGithub size={22} />
        </SocialButton>
        <Text> © 2023 Daniel portfolio. All rights reserved</Text>


        <Stack direction={'row'} spacing={6}>
        <SocialButton  label={'Linkedin'}
        href={'https://www.linkedin.com/in/daniel-j-paulino-737808198/'}>
            <LinkedinLogo size={22} />
        </SocialButton>
        <SocialButton  label={'Twitter'} href={'https://twitter.com/Daniel28725148'}>
            <TwitterLogo size={22} />
        </SocialButton>
       
        <SocialButton label={'Instagram'} href={'https://instagram.com/dannyj.paulino?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr'}>
            <InstagramLogo size={22} />
        </SocialButton>
        </Stack>
      </Container>
    </Box>
   
  )
}
