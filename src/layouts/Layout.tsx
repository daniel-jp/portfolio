import { Container, ContainerProps } from '@chakra-ui/react';

export default function Layout({children, ...rest }: ContainerProps) {
  return (
    <>
    <Container {...rest} 
                textAlign={"center"} justifyContent={"center"} h={"100vh"}
                overflowX={"hidden"} margin="0" padding="0" left={"0"} 
                right={"0"} maxW={'full'}>
        {children}
       
    </Container>
    </>
  );
}