import { Container, ContainerProps } from '@chakra-ui/react';

export default function Layout({children, ...rest }: ContainerProps) {
  return (
    <>
    <Container {...rest} 
                textAlign={"center"} justifyContent={"center"} 
                alignContent={'center'} overflowX={"hidden"} 
                right={"0"} maxW={"8xl"}>
        {children}
       
    </Container>
    </>
  );
}