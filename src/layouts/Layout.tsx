import { Box, Container, ContainerProps } from '@chakra-ui/react';


export default function Layout({children, ...rest }: ContainerProps) {
  return (
    <Container bg={"gray.50"} margin="0" padding="0" left={"0"} right={"0"} maxW={'full'}
    maxH="100%">
        {children}
    </Container>
  );
}