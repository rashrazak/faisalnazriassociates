import React from 'react'
import { Container, Row, Col} from 'reactstrap'
import Headx from '../components/Headx'
import Carousel from '../components/CarouselMain'
import ListGroup1 from '../components/ListGroupMain1'
// import '../css/index.css'

function index() {
    return (
        <Headx title={'Faisal Nazri Associates'}>
            <Container style={{background:'#fff'}}>
                <Row>
                    <Col style={{marginTop:'60px'}}>
                    <h1 style={{fontWeight:'bold', textAlign:'center', padding:'10px'}}>ONE STOP SOLUTIONS <br/> for your Business</h1>
                    </Col>
                </Row>
                <Row>
                    <Col style={ {background:'', marginBottom:'40px'} }>
                        <Carousel style={{background:'grey'}} />
                    </Col>
                    
                </Row>
                <Row>
                    {/* <Col md="12" style={{margin:'20px 0px'}}>
                        
                    </Col> */}
                    <Col md="8" style={ {padding:'20px'} }>
                        <h3 style={{fontWeight:'bold', textAlign:'center' }}>Are You Facing This Problems ???</h3>
                        <ListGroup1 />
                        <p style={{textAlign:'center'}}>Let us handle all the hassle for you, so you can focus and develop your business.</p>

                    </Col>
                    <Col md="4" style={ {padding:'20px'} }>
                        <h4><a href="">Register</a> your Interest so that we can schedule an appointment with you </h4> <br/>
                        <ul>
                            <li>Quality Ensured</li>
                            <li>Professional member of certified chartered accountant</li>
                            <li>Work with Integrity</li>
                            <li>Confidentiality</li>
                            <li>Simple, fast and easy</li>
                            <li>Best package for our services</li>
                        </ul>
                    </Col>
                    <Col style={ {padding:'10px'} }>
                        {/* <ListGroup2 /> */}
                    </Col>
                </Row>
                
            </Container>
        </Headx>
    )
}

export default index
