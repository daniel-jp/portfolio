import React from 'react';
import { Container } from 'react-bootstrap';
import { useTheme } from '../theme/ThemeContext';

export default function Footer() {
  const { colorMode } = useTheme();

  // Defina os estilos para o tema claro e escuro
  const pageStyle = {
    backgroundColor: colorMode === 'light' ? '#ffffff' : '#1a1a1a',
    color: colorMode === 'light' ? '#000000' : '#ffffff',
    
  };
  return (
  
    <footer className="py-3" style={pageStyle} >
      <Container>
        <p className="text-center mb-0">
          © {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
      </Container>
    </footer>

  );
}
