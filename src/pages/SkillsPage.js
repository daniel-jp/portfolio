import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import{Database, Laptop} from '@phosphor-icons/react'
import { useTheme } from '../theme/ThemeContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// Dados de habilidades
const skills = {
    frontend: [
        { name: 'React', type: 'JS', icon: '../../assets/langLogos/react-2.svg', color: 'text-warning' },
        { name: 'Angular', type: 'JS', icon: '../../assets/langLogos/angular.svg', color: 'text-warning' },
        { name: 'Bootstrap', type: 'CSS', icon: '../../assets/langLogos/bootstrap.svg', color: 'text-warning' },
        { name: 'Chakra-ui', type: 'CSS', icon: '../../assets/langLogos/chakra1.png', color: 'text-warning' },
        { name: 'Material UI', type: 'CSS', icon: '../../assets/langLogos/mui.png', color: 'text-warning' },
        { name: 'Tailwind CSS', type: 'CSS', icon: '../../assets/langLogos/tailw.png', color: 'text-warning' },
    ],
    backend: [
        { name: 'Spring Boot', type: 'Java', icon: '../../assets/langLogos/spring-1.svg', color: 'text-warning' },
        { name: 'Express js', type: 'Nodejs', icon: '../../assets/langLogos/expNodejs.png', color: 'text-warning' },
        { name: 'SQL Server', type: 'Database', icon: '../../assets/langLogos/microsoft-1.svg', color: 'text-warning' },
        { name: 'PostgreSQL', type: 'Database', icon: '../../assets/langLogos/psql.png', color: 'text-warning' },
        { name: 'MySQL', type: 'Database', icon: '../../assets/langLogos/mysql-3.svg', color: 'text-warning' },
    ]
};

export default function SkillsPage() {


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
    <Container>
    <h2 className="text-purple fw-bold pt-4 mb-4">My Skills</h2>
    
    <h3 className="text-purple mb-3">Frontend <Laptop size={52} color='#641ba3' /></h3>
    <Row className="mb-5 text-center">

        <TransitionGroup component={null}> 
            {skills.frontend.map((skill, index) => (
             <CSSTransition key={index} timeout={500}>
               {(state) => (
             <Col md={4} className="mb-4" style={{...animationStyles[state] }}>
                <Card className="bg-dark p-2 text-light border-0 h-100 ">
                    <Card.Img variant="top" 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="mb-3" 
                    style={{ width: '50px', height:'50px',  borderRadius:'50%' }} />
                    <Card.Body>
                        <Card.Title className={`fw-bold ${skill.color}`}>{skill.type}</Card.Title>
                        <Card.Text>{skill.name}</Card.Text>
                    </Card.Body>
                </Card>
            </Col> 
              )}
            </CSSTransition>
        ))}
       </TransitionGroup>
    </Row>
    
    <h3 className="text-purple mb-3">Backend <Database size={52} color='#641ba3' /></h3>
    <Row>
    <TransitionGroup component={null}> 
        {skills.backend.map((skill, index) => (
            <CSSTransition key={index} timeout={500}>
               {(state) => (

            <Col style={{...animationStyles[state] }} md={4} className="mb-4">
                <Card className="bg-dark p-2 text-light text-center border-0 h-100 ">
                    
                    <Card.Img variant="top" src={skill.icon} alt={skill.name} 
                    className="mb-3" style={{ width: '50px', height:'50px', borderRadius:'50%' }} />
                    
                    <Card.Body>
                        <Card.Title className={`fw-bold ${skill.color}`}>{skill.type}</Card.Title>
                        <Card.Text>{skill.name}</Card.Text>
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
