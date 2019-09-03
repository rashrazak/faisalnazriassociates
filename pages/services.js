import React from 'react'
import Headx from '../components/Headx'
import { Container, Row, Col, Card, CardImg, CardBody,
    CardTitle, Alert} from 'reactstrap'
function services() {
    
    return (
        <Headx title={'About Us'}>
            <Container style={{background:'#fff'}}>
                <Row>
                    <Col md="12" style={{marginTop:'60px'}}>
                        <Card style={{marginTop:'20px', marginBottom:'20px'}}>
                                <CardImg top width="100%" height="300px" style={{objectFit:'cover', objectPosition:'20% 80%'}} src="../static/image/career/career.jpg" alt="career" />
                                <CardBody>
                                    <CardTitle className="text-center">Career</CardTitle>
                                </CardBody>
                        </Card>
                        <Alert color="warning">
                            There are currently <b>NO</b> vacancies available. <br/>
                            However, we are always keen to meet energetic and talented professionals who would like to join our team. <br/>
                            If you wish to be considered for any future positions, please send your CV and cover letter to : <br/>
                            <a href="mailto:business@faisalnazriassociates.com">business@faisalnazriassociates.com</a> <br/><br/>
                            OR <br/><br/>
                            FAISAL NAZRI & ASSOCIATES <br/>
                            No 42-2,Jalan Prima Sri Gombak,68100 Batu Caves,Selangor

                            
                        </Alert>  
                    </Col>
                </Row>
            </Container>
        </Headx>
    )
}

export default services
