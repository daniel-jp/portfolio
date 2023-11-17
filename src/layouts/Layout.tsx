import { Container, ContainerProps } from '@chakra-ui/react';

export default function Layout({children, ...rest }: ContainerProps) {
  return (
    <>
    <Container {...rest}  
                textAlign={"center"} justifyContent={"center"}
                overflowX={"hidden"} margin="0" padding="0" left={"0"}  overflowY={"hidden"} 
                right={"0"} maxW={'full'} h={"100vh"}>
        {children}
       
    </Container>
    </>
  );
}