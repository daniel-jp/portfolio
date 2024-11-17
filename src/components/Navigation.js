import React from 'react';
import { Navbar, Nav, Container , Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Moon, Sun } from 'react-bootstrap-icons'; // Ícones do Bootstrap
import { useTheme } from '../theme/ThemeContext';

function Navigation() {
  const { colorMode, toggleColorMode } = useTheme();


  return (
    <Navbar 
      bg={colorMode === 'light' ? 'light' : 'dark'}
      expand="lg" 
      //variant={colorMode}
      fixed="top"
      className={colorMode === 'light' ? 'navbar-light' : 'navbar-dark'}>
      <Container>
        <Navbar.Brand as={Link} to="/">
        
        <Link to={'/'} target="_blank"
                    aria-label={'Profile'} 
                    className="text-dark">
          
               <Card.Img 
                  variant="top" 
                  src="../assets/logos/logo2.png" // Substitua pelo caminho da sua foto
                  alt="Profile"
                  style={{width:32, height:32,
                    
                    backgroundColor:"dark",
                    borderRadius:"50%"}}  />
            
            </Link>
        
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
            <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
            <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>

          <button onClick={toggleColorMode} className="btn btn-link">
              {colorMode === 'light' ? <Moon size={22} color="black" /> : <Sun size={22} color="white" />}
          </button>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navigation;