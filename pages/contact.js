import React from 'react'
import Headx from '../components/Headx'
import { Container, Row, Col, Card, CardImg, CardBody,
    CardTitle, Toast, ToastBody, ToastHeader, Form, FormGroup, Input, Label, Button} from 'reactstrap'
function contact() {
    const handleChange = (e) => {

    }
    return (
        <Headx title={'About Us'}>
            <Container style={{background:'#fff'}}>
                <Row>
                    <Col md="12" style={{marginTop:'60px'}}>
                        <Card style={{marginTop:'20px', marginBottom:'20px'}}>
                                <CardImg top width="50%" height="200px" src="../static/image/contact/contact.jpg" style={{objectFit:'cover', objectPosition:'60% 40%'}} alt="contact" />
                                <CardBody>
                                    <CardTitle className="text-center">Contact Us</CardTitle>
                                </CardBody>
                        </Card>  
                    </Col>
                    <Col md="6">
                        <div className="p-3 my-2 rounded bg-docs-transparent-grid">
                            <Toast>
                                <ToastHeader>
                                    Booking Apppointment Office
                                </ToastHeader>
                                <ToastBody>
                                    <i>Office:</i> <br/>
                                    No 42-2,Jalan Prima Sri Gombak,68100 Batu Caves,Selangor <br/><br/>
                                    03-61779077 <br/><br/>
                                    <i>Business Hours:</i> <br/>
                                    8:30 AM - 5:30 PM
                                </ToastBody>
                            </Toast>
                        </div>
                    </Col>
                    <Col md="6">
                        <div className="p-3 my-2 rounded bg-docs-transparent-grid">
                            <Toast>
                                <ToastHeader>
                                    Email
                                </ToastHeader>
                                <ToastBody>
                                    business@faisalnazriassociates.com
                                </ToastBody>
                            </Toast>
                        </div>
                        <div className="p-3 my-2 rounded bg-docs-transparent-grid">
                            <Toast>
                                <ToastHeader>
                                    Facebook
                                </ToastHeader>
                                <ToastBody>
                                    faisalnazri&associates
                                </ToastBody>
                            </Toast>
                        </div>
                    </Col>
                    <Col md="12">
                        <hr className="my-2" />
                        <div className="p-3 my-2 rounded bg-docs-transparent-grid">
                            <Toast>
                                <ToastHeader>
                                    Email For Appointment
                                </ToastHeader>
                                <ToastBody>
                                    <Row form>
                                        <Col md="6">
                                            <FormGroup>
                                                <Label for="name">Name:</Label>
                                                <Input type="text" name="name" onChange={(e) => handleChange(e)} />
                                            </FormGroup>
                                        </Col>
                                        <Col md="6">
                                            <FormGroup>
                                                <Label for="email">Email:</Label>
                                                <Input type="email" name="email" onChange={(e) => handleChange(e)} />
                                            </FormGroup>
                                        </Col>
                                        
                                        <Col md="6">
                                            <FormGroup>
                                                <Label for="company">Company Name:</Label>
                                                <Input type="text" name="company" onChange={(e) => handleChange(e)} />
                                            </FormGroup>
                                        </Col>
                                        <Col md="6">
                                            <FormGroup>
                                                <Label for="contact">Contact Number:</Label>
                                                <Input type="text" name="contact" onChange={(e) => handleChange(e)} />
                                            </FormGroup>
                                        </Col>
                                        <Col md="12">
                                            <FormGroup>
                                                <Label for="message">Message:</Label>
                                                <Input type="textarea" name="message" />
                                            </FormGroup>
                                        </Col>
                                        <Col md="12">
                                        <FormGroup check>
                                            <Input type="checkbox" name="check" id="proceedTo"/>
                                            <Label for="proceedTo" check>By completing this form, you agree that FAISAL NAZRI & ASSOCIATES will manage your personal data in accordance with the Malaysian Personal Data Protection Act 2010 (Act 709) (“The Act”) and our data protection policy.</Label>
                                        </FormGroup>
                                        <br/>
                                        <Button type="submit">Submit</Button>
                                        </Col>
                                        
                                    </Row>
                                </ToastBody>
                            </Toast>
                        </div>
                    </Col>
                    
                </Row>
            </Container>
        </Headx>
    )
}

export default contact
