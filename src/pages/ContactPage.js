import React from 'react';
import { Container, Row, Col,Card, Form, Button } from 'react-bootstrap';
import { useTheme } from '../theme/ThemeContext';

export default function ContactPage() {
  const { colorMode } = useTheme();

  // Defina os estilos para o tema claro e escuro
    const pageStyle = {
        backgroundColor: colorMode === 'light' ? '#ffffff' : '#1a1a1a',
        color: colorMode === 'light' ? '#000000' : '#ffffff',
        minHeight: '100vh',
        paddingTop: '60px'
    };
  return (
    <div style={pageStyle}>
    <Container style={{
      height:'100%', backgroundColor:'white'}} className="py-5 mt-4 text-light">

      <h2 className='fw-bold text-dark'>Contact Me</h2>
      <Row className='align-items-center justify-content-center'>

        <Col md={6}>
          <Form className='text-black p-4'>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" required/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} required/>
            </Form.Group>
            <button type="submit" className="btn btn-outline-danger" >
              Send Message
            </button>
          </Form>
        </Col>

        <Col md={6}>
        <Card.Img variant="top" src='../../assets/images/contact.jpg' alt='image' 
                    className="mb-3"/>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

