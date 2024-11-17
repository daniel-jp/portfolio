import React from 'react';

import { Container, Row, Col, Card } from 'react-bootstrap';
import { Code, Gift, Flag, MapPinArea,MapPinSimpleArea, CalendarCheck } from '@phosphor-icons/react';
import { useTheme } from '../theme/ThemeContext';

export default function AboutPage() {
    const { colorMode } = useTheme();

  // Defina os estilos para o tema claro e escuro
    const pageStyle = {
        backgroundColor: colorMode === 'light' ? '#ffffff' : '#1a1a1a',
        color: colorMode === 'light' ? '#000000' : '#ffffff',
        paddingTop: '60px'
    };
  return (
    <div style={pageStyle}>
    <Container className="py-5">
            <h1 className="display-4 mt-4 text-left fw-bold mb-4">About Me</h1>
            <h2 className="h3 pt-5 text-center mb-4"> Data and Software Engineer  </h2>
            <p className="text-gray mb-5">
                I am an Angolan national currently residing in Morocco, where I am pursuing academic endeavors.
                I have completed my undergraduate and master's degrees at Moroccan public institutions, acquiring
                extensive knowledge in the field of Information Technology. This academic experience has provided me
                with a strong foundation and significantly enriched my understanding in the technology sector, preparing
                me for future professional challenges.
            </p>

            <Row className="mb-5">
                <Col md={6} className="mb-3">
                    <Card className="bg-dark text-light p-3 d-flex align-items-center">
                        <Code size={32} color='#ef4444' />
                        Freelancer Available  <span className="ms-auto">2 years as a freelancer Developer</span>
                    </Card>
                </Col>
                <Col md={6} className="mb-3">
                    <Card className="bg-dark text-light p-3 d-flex align-items-center">
                        <Gift size={32} color='#ef4444' />
                        Birthday <span className="ms-auto">10 / September... </span>
                    </Card>
                </Col>
                <Col md={6} className="mb-3">
                    <Card className="bg-dark text-light p-3 d-flex align-items-center">
                        <MapPinSimpleArea size={32} color='#ef4444'/>
                        Birth City <span className="ms-auto">Zaire-Soyo</span>
                    </Card>
                </Col>
                <Col md={6} className="mb-3">
                    <Card className="bg-dark text-light p-3 d-flex align-items-center">
                        <Flag size={32} color='#ef4444' />
                        Native Country <span className="ms-auto">Angola</span>
                    </Card>
                </Col>
                <Col md={6} className="mb-3">
                    <Card className="bg-dark text-light p-3 d-flex align-items-center">
                        <MapPinArea size={32} color='#ef4444'/>
                        Country of Residence <span className="ms-auto">Morocco-Rabat</span>
                    </Card>
                </Col>
            </Row>

            <h2 className="h3 text-left mb-4">EDUCATION</h2>
            <p className="text-center mb-5 ">
                Please ensure that the information below represents my educational journey and the diplomas obtained,
                starting from the bachelor's degree up to the master's degree.
            </p>

            <div className='p-4' style={{ position: 'relative', paddingLeft: '20px',}}>
                {/* Linha vertical à esquerda */}
                <div style={{
                    position: 'absolute',
                    left: '0',
                    top: '0',
                    height: '100%',
                    borderLeft: '4px solid #9F7AEA'  // Cor semelhante ao border-purple-300
                }}></div>
                <div className="mb-5">
                    <Row>
                    <Col xs={1}><CalendarCheck size={32} color='#ef4444'/></Col>
                        <Col>
                            <h3 className="text-secondary">2020-2022</h3>
                            <h4 className="h5">Master’s in Software and Data Engineering</h4>
                            <p className="bg-dark  p-3 rounded" 
                            style={{
                                color:'#a5f3fc',

                                }}>
                                Right after I finished my degree in Morocco, I joined the Masters in Data Engineering
                                and Software Development at Mohamed V University, Faculty of Sciences.
                            </p>
                        </Col>
                    </Row>
                </div>

                <div className="mb-5">
                    <Row>
                        <Col xs={1}><CalendarCheck size={32} color='#ef4444'/></Col>
                        <Col>
                            <h3 className="text-secondary">2019-2020</h3>
                            <h4 className="h5">Degree in Software and Web Developer</h4>
                            <p className="bg-dark p-3 rounded"
                            style={{
                                color:'#a5f3fc',
                                }}>
                                I graduated in software at ABDELMALEK ESSAADI university, Higher School of Tetouan-Morocco.
                            </p>
                        </Col>
                    </Row>
                </div>

                <div>
                    <Row>
                        <Col xs={1}>
                        <CalendarCheck size={32} color='#ef4444'/></Col>
                        <Col>
                            <h3 className="text-secondary">2017-2019</h3>
                            <h4 className="h5">Bachelor's Degree in IT Technician</h4>
                            <p className="bg-dark p-3 rounded"style={{
                                color:'#a5f3fc', 
                                }}>
                                Professional bachelor Technician Specialized in Computer Science.
                            </p>
                        </Col>
                    </Row>
                </div>
            </div>
        </Container>
        </div>
    
  );
}
