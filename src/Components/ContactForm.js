import React from 'react';
import { Button, Col, FormGroup, Label } from 'reactstrap';
import { Field, Form, Formik } from 'formik';

function ContactForm() {
    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                phoneNum: '',
                email: '',
                agree: false,
                contactType: 'By Phone',
                feedback: ''
            }}
        >
            <Form>
                <FormGroup row>
                    <Label htmlFor='firstName' md='2'>FIRST NAME.</Label>
                    <Col md='10'>
                        <Field name="firstName" placeholder="First Name." className='form-control' />
                    </Col>
                </FormGroup>
                
                <FormGroup row>
                    <Label htmlFor='lastName' md='2'>LAST NAME.</Label>
                    <Col md='10'>
                        <Field name="lastName" placeholder="Last Name." className='form-control' />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label htmlFor='phoneNum' md='2'>PHONE NUMBER.</Label>
                    <Col md='10'>
                        <Field name='phoneNum' placeholder='phone number here.' className='form-control' />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label htmlFor='email' md='2'>EMAIL.</Label>
                    <Col md='10'>
                        <Field type='email' name='email' placeholder='email address here.' className='form-control' />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label check md={{size: 4, offset: 2}}>May we contact you? </Label>
                    <Col md='4'>
                        <Field className='form-control' name='contactType' as='select'>
                            <option>By Phone.</option>
                            <option>By Text.</option>
                            <option>By Email.</option>
                        </Field>
                    </Col>
                </FormGroup>
            
                <FormGroup row>
                    <Label htmlFor='feedback' md='2'>FEEDBACK.</Label>
                    <Col md='10'>
                        <Field className='form-control' />
                    </Col>
                </FormGroup>

                <FormGroup row>

                </FormGroup>
            </Form>
        </Formik>
    )
}

export default ContactForm
