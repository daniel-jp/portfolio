import { Box, Container, Stack } from '@chakra-ui/react';


export default function Layout({children}: any) {
  return (
    <Box>
    
      <Container as={Stack}>
        {children}
      </Container>
      
    </Box>
  );
}