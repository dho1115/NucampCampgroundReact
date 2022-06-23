import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import ContactForm from '../Components/ContactForm'
import SubHeader from '../Components/SubHeader'


function Contactpage() {
    return (
        <Container>
            <SubHeader current={'Contact Us'} />
            <Row className='row-content align-items-center'>
                <Col sm='3'>
                    <h5>OUR ADDRESS.</h5>
                </Col>
                <Col>
                    <a
                        role='button'
                        className='btn btn-link'
                        href='tel:+12065551234'
                    >
                        <i className='fa fa-phone' /> 1-206-555-1234
                    </a>
                    <br />
                    <a
                        role='button'
                        className='btn btn-link'
                        href='mailto:fakeemail@fakeemail.co'
                    >
                        <i className='fa fa-envelope-o' /> campsites@nucamp.co
                    </a>
                </Col>
            </Row>
            <Row className='row-content'>
                <Col xs='12'>
                    <h3>SEND US YOUR FEEDBACK:</h3>
                    <hr />
                </Col>
                <Col md='10'>
                    <ContactForm />
                </Col>
            </Row>
        </Container>
    )
}

export default Contactpage
