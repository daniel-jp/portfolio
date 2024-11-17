import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {Code,Database} from '@phosphor-icons/react'
import { Link } from 'react-router-dom';
import{GithubLogo,LinkedinLogo,XLogo} from'@phosphor-icons/react'
import { useTheme } from '../theme/ThemeContext';


function HomePage() {
  const { colorMode } = useTheme();

  // Defina os estilos para o tema claro e escuro
  const pageStyle = {
    backgroundColor: colorMode === 'light' ? '#ffffff' : '#1a1a1a',
    color: colorMode === 'light' ? '#000000' : '#ffffff',
    minHeight: '100vh',
    paddingTop: '60px'
  };
  return (
    <div style={pageStyle} >
    <Container className="min-vh-100 d-flex flex-column">
      <Row className="w-100 justify-content-center  align-items-center" style={{marginTop:'30px'}}>
        <Col md={6} className="mb-md-0" >
          <div className="home-content">
            <h1 className="display-4 mt-4 fw-bold">Welcome to My Portfolio</h1>
            <p className="lead mb-4">
              I'm a Web Developer passionate about creating amazing web experiences
            </p>

            <div>
              <p className="text-center">
              <Code size={40} color='orange' />  <Database color='orange' size={40}  /> 
              </p>
              <p className='text-center'>
                  Ready to take on new professional challenges, whether in a conventional workplace 
                  or in a remote work setting. I am actively seeking employment opportunities in the fields 
                  of Software Development/Web and also have a keen interest in Data-related roles. I am eager 
                  to apply my skills and knowledge in a challenging and dynamic environment, contributing to 
                  innovative projects and advancing professionally. </p>
            </div>

            <div className="d-flex py-4 gap-3 justify-content-center align-items-center">
              <Link className="btn btn-outline-success" to={'../assets/Daniel_Paulino_CV_en_.pdf'} target="_blank" download={"Daniel_Paulino_CV_en_"}>Download CV</Link>
              <Link className="btn btn-outline-info" to={'/contact'}>Contact Me</Link>
            </div>
          </div>
        </Col>
        
        <Col md={6} className="pt-5 mb-md-0">
          <Card className="border-0">
            <Card.Img 
              variant="top" 
              src="../assets/images/avatar1.png" // Substitua pelo caminho da sua foto
              alt="Profile"
              style={ {
                objectFit: 'cover',
                backgroundColor: colorMode === 'light' ? '#ffffff' : '#1a1a1a',
                color: colorMode === 'light' ? '#000000' : '#ffffff',
               }}
            />
            <Card.Body className="text-center"  style={ {
               
                backgroundColor: colorMode === 'light' ? '#ffffff' : '#1a1a1a',
                color: colorMode === 'light' ? '#000000' : '#ffffff',
               }}>
              <Card.Title className="h2"> My name is 
                Daniel Joaquim Paulino
                </Card.Title>
              <Card.Text>
              Data  and Software Engineer
              </Card.Text>
              <div className="d-flex justify-content-center gap-3">
                <Link to={'https://github.com/daniel-jp?tab=repositories'} target="_blank"
                    aria-label={'GitHub'} className="text-dark">
                  <div 
                  style={{
                   
                    backgroundColor:'#0891b2',  
                    borderRadius:"50%",
                    justifyContent:"center",
                    alignItems:"center",
                    padding:"6px"

                    }}>
                      <GithubLogo size={32} color='white' />
                  </div>
                </Link>
                <Link to={'https://www.linkedin.com/in/daniel-j-paulino-737808198/'}  target="_blank"
                      aria-label={'Linkedin'} className="text-dark">
                  <div style={{
                   
                        backgroundColor:'#0891b2',  
                        borderRadius:"50%",
                        justifyContent:"center",
                        alignItems:"center",
                        padding:"6px"
                   }}>
                      <LinkedinLogo size={32} color='white' />
                  </div>
                </Link>

                <Link to={"https://twitter.com/Daniel28725148"} target="_blank"
                      aria-label='Twitter' className="text-dark ">
                  <div  
                  style={{
                   
                    backgroundColor:'#0891b2', 
                    borderRadius:"50%",
                    justifyContent:"center",
                    alignItems:"center",
                    padding:"6px"

                    }}>
                     <XLogo size={32} color='white' />
                  </div>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container></div>
  );
}

export default HomePage;