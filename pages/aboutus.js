import React from 'react'
import Headx from '../components/Headx'
import { Container, Row, Col, Jumbotron, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap'
function aboutus() {
    return (
        <Headx title={'About Us'}>
            <Container style={{background:'#fff'}}>
                <Row>
                    <Col md="12" style={{marginTop:'100px'}}>
                        <Card style={{marginTop:'20px', marginBottom:'20px'}}>
                                <CardImg top width="100%" height="200px" src="../static/image/aboutus/aboutus.jpg" style={{objectFit:'cover', objectPosition:'20% 80%'}} alt="aboutus" />
                                <CardBody>
                                    <CardTitle className="text-center">About Us</CardTitle>
                                </CardBody>
                        </Card>
                        <Jumbotron>
                            <p className="lead">FAISAL NAZRI & ASSOCIATES is headed by chartered accountants registered with Malaysian Institute of Accountants (MIA) and Association of Chartered Certified Accountants (ACCA).</p>
                            <p>Our company covers wide range of industries and sectors which include retailing, trading, manufacturing, associations, construction, property development, services, food & beverage businesses and hospitality. We serve clients from public listed and large companies to small and medium companies and businesses in Kuala Lumpur  and Selangor.</p>
                            <hr className="my-2" />
                            <p className="lead">OUR MOTTO:</p>
                            <p>ALL PROFESSIONAL ALL THE TIME</p>
                            <hr className="my-2" />
                            <p className="lead">OUR SPECIALISATION:</p>
                            <p>We are a team of dedicated professionals, ready to do what ever it takes to make your business grow</p>
                        </Jumbotron>
                    </Col>
                    <Col md="4">
                        <Card>
                            <CardImg top width="100%" height="180px" src="../static/image/aboutus/acca.jpg" alt="acca" />
                            <CardBody>
                                <CardTitle className="text-center">ACCA</CardTitle>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="4">
                        <Card>
                            <CardImg top width="100%" height="180px" src="../static/image/aboutus/miit.png" alt="miit" />
                            <CardBody>
                                <CardTitle className="text-center">MIA</CardTitle>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="4">
                        <Card>
                            <CardImg top width="100%" height="180px" src="../static/image/aboutus/ssm.png" alt="ssm" />
                            <CardBody>
                                <CardTitle className="text-center">SSM</CardTitle>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="4">
                        <Card style={{marginTop:'20px', marginBottom:'20px'}}>
                            <CardImg top width="100%" height="180px" src="../static/image/aboutus/fimm.png" alt="fimm" />
                            <CardBody>
                                <CardTitle className="text-center">FIMM</CardTitle>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="4">
                        <Card style={{marginTop:'20px', marginBottom:'20px'}}>
                            <CardImg top width="100%" height="180px" src="../static/image/aboutus/ibfim.jpg" alt="ibfim" />
                            <CardBody>
                                <CardTitle className="text-center">IBFIM</CardTitle>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="4">
                        <Card style={{marginTop:'20px', marginBottom:'20px'}}>
                            <CardImg top width="100%" height="180px" src="../static/image/aboutus/lhdn.jpg" alt="lhdn" />
                            <CardBody>
                                <CardTitle className="text-center">LHDN</CardTitle>
                            </CardBody>
                        </Card>
                    </Col>


                </Row>
                <Row>
                    
                    
                </Row>
               
            </Container>
        </Headx>
    )
}

export default aboutus
