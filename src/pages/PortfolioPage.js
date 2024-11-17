

// pages/PortfolioPage.js
import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { ArrowSquareOut } from '@phosphor-icons/react';
import { useTheme } from '../theme/ThemeContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


const projects = [
    {
        icon: <ArrowSquareOut size={30} color="#ff5ca1" />,
        title: "FD-GROUP",
        description: "Created with React + TypeScript + Vite + Chakra-ui",
        image: "../../assets/cardImg/Card1.png", 
        link:"https://www.fdgroup.company/",// Substitua pelo link da imagem real
    },
    {
        icon: <ArrowSquareOut size={30} color="#ff5ca1" />,
        title: "ACHAHADA",
        description: "Created with Reactjs + TS + MaterialUI",
        image: "../../assets/cardImg/Card2.jpeg",
        link: "https://achahada.vercel.app/",
    },
    {
        icon: <ArrowSquareOut size={30} color="#ff5ca1" />,
        title: "HOUSE RENTAL",
        description: "Created with React + TS, Chakra-Ui and PostgreSQL",
        image: "../../assets/cardImg/Card3.png",
        link:"https://meulugar.vercel.app/",
    },
    {
        icon: <ArrowSquareOut size={30} color="#ff5ca1" />,
        title: "GAME STREAMS & CHANNELS",
        description: "Created with js + Vite + Html5 + Css3",
        image: "../../assets/cardImg/Card4.jpg",
        link:"https://daniel-jp.github.io/Links-Aggregator/",
    },
    {
        icon: <ArrowSquareOut size={30} color="#ff5ca1" />,
        title: "CRUD",
        description: "Created with Angular + SpringBoot + Mysql",
        image: "../../assets/cardImg/Card5.png",
        link:"https://github.com/daniel-jp/angular-springBoot",
    },
    {
      icon: <ArrowSquareOut size={30} color="#ff5ca1" />,
      title: "REST-API & DTO",
      description: "Created with SpringBoot + Mysql + POSTMAN",
      image: "../../assets/cardImg/cardApi.jpeg",
      link:"https://github.com/daniel-jp/SpringREST_API",
  },
    // Adicione mais projetos conforme necessário
];
export default function PortfolioPage() {
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
    <Container className=" pt-4 text-left">
    <h2 className="text-left fw-bold mb-5">Latest Projects</h2>
    <Row>
        <TransitionGroup component={null}>
            {projects.map((project, index) => (

            <CSSTransition key={index} timeout={500}>
                {(state) => (
                <Col md={4} className="mb-4" style={{...animationStyles[state] }}>

                <Card className="bg-dark text-light h-100">
                    <Card.Img 
                    variant="top" src={project.image} alt={project.title}
                    style={{height:"80%"}} />
                    <Card.Body>
                        <Card.Title className="text-pink fw-bold">{project.title}</Card.Title>
                        <Card.Text className="text-secondary">{project.description}</Card.Text>
                        {project.link && (
                                    <Button variant="primary" href={project.link} target="_blank">
                                        Visit the website <ArrowSquareOut size={32} />
                                    </Button>
                        )}
                    </Card.Body>
                </Card>
            </Col>
            )}
            </CSSTransition>
        ))}
       </TransitionGroup>
    </Row>
    <Button variant="secondary" className="mt-4">show more</Button>
</Container>
</div>
  );
}

