
import React from 'react';

import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Code, Laptop, PenNib } from '@phosphor-icons/react';
import { useTheme } from '../theme/ThemeContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const services = [
    {
        icon: <Code size={30} color="#ff5ca1" />,
        title: "Front-End Developer",
        description: "I develop web applications using JavaScript language, with React and Angular frameworks.",
    },
    {
        icon: <Laptop size={30} color="#ff5ca1" />,
        title: "Back-End Developer",
        description: "I develop web services or REST APIs with Java using SpringBoot and testing with Postman and Insomnia.",
    },
    {
        icon: <PenNib size={30} color="#ff5ca1" />,
        title: "Designer UI/UX",
        description: "I develop interfaces for web and mobile applications using Figma, and frameworks like Tailwind CSS, Chakra UI, and Material-UI.",
    },
    {
        icon: <PenNib size={30} color="#ff5ca1" />,
        title: "Learning Data",
        description: "In progress...",
    }
];
export default function ServicesPage() {
    const { colorMode } = useTheme();

  // Defina os estilos para o tema claro e escuro
    const pageStyle = {
        backgroundColor: colorMode === 'light' ? '#ffffff' : '#1a1a1a',
        color: colorMode === 'light' ? '#000000' : '#ffffff',
        minHeight: '100vh',
        paddingTop: '60px'
    };
    const animationStyles = {
        entering: { opacity: 0, transform: 'translateY(30px)' },
        entered: { opacity: 1, transform: 'translateY(0)', transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out' },
        exiting: { opacity: 1, transform: 'translateY(0)' },
        exited: { opacity: 0, transform: 'translateY(-30px)', transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out' },
      };
  return (
    <div style={pageStyle}>
    <Container className="my-5 ">
    <h2 className="pt-4 text-left fw-bold mb-5"> My Services</h2>
    <Row>
    <TransitionGroup component={null}>

        {services.map((service, index) => (
            <CSSTransition key={index} timeout={500}>
                {(state) => (
            <Col  md={6} lg={4} className="mb-4" style={{...animationStyles[state] }}>
                <Card className="bg-dark text-light h-100">
                    <Card.Body className="d-flex flex-column align-items-center">
                        <div className="mb-3">{service.icon}</div>
                        <Card.Title className="text-pink fw-bold">{service.title}</Card.Title>
                        <Card.Text className="text-secondary mb-3">
                            {service.description}
                        </Card.Text>
                        <Button variant="primary" className="mt-auto">Read more</Button>
                    </Card.Body>
                </Card>
            </Col>
           )}
            </CSSTransition>
        ))}
       </TransitionGroup>
    </Row>
</Container>
</div>
  );
}
