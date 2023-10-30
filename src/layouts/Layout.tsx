import { Container, ContainerProps } from '@chakra-ui/react';
import React from 'react';

export default function Layout({children, ...rest }: ContainerProps) {
  return (
    <>
    <Container {...rest}  
                textAlign={"center"} justifyContent={"center"}
                overflowX={"hidden"} margin="0" padding="0" left={"0"} 
                right={"0"} maxW={'full'} maxH="100%">
        {children}
       
    </Container>
    </>
  );
}