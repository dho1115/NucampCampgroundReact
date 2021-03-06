import React from 'react';
import { Button, Col, FormGroup, Label, Alert } from 'reactstrap';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { validateContactForm } from '../Utils/validateContactForm';


function ContactForm() {

    function handleSubmit(values, {resetForm}) {
        console.log({values});
        resetForm()
    }

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

            onSubmit={handleSubmit}

            validate={validateContactForm}
        >
            <Form>
                <FormGroup row>
                    <Label htmlFor='firstName' md='2'>FIRST NAME.</Label>
                    <Col md='10'>
                        <Field name="firstName" placeholder="First Name." className='form-control' />
                        <ErrorMessage name='firstName'>
                            {
                                msg => <Alert color='danger'><h5>{msg}</h5></Alert>
                            }
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                
                <FormGroup row>
                    <Label htmlFor='lastName' md='2'>LAST NAME.</Label>
                    <Col md='10'>
                        <Field name="lastName" placeholder="Last Name." className='form-control' />
                        <ErrorMessage name='lastName'>
                            {
                                msg => <Alert color='danger'><h5>{msg}</h5></Alert>
                            }
                        </ErrorMessage>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label htmlFor='phoneNum' md='2'>PHONE NUMBER.</Label>
                    <Col md='10'>
                        <Field name='phoneNum' placeholder='phone number here.' className='form-control' />
                        <ErrorMessage name='phoneNum'>
                            {
                                msg => <Alert color='danger'><h5>{msg}</h5></Alert>
                            }
                        </ErrorMessage>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label htmlFor='email' md='2'>EMAIL.</Label>
                    <Col md='10'>
                        <Field type='email' name='email' placeholder='email address here.' className='form-control' />
                        <ErrorMessage name='email'>
                            {
                                msg => <Alert color='danger'><h5>{msg}</h5></Alert>
                            }
                        </ErrorMessage>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label check md={{size: 4, offset: 2}}>
                        <Field
                            name='agree'
                            type='checkbox'
                            className='form-check-input'
                        />
                        {"   "}
                        May we contact you? 
                    </Label>
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
                        <Field name='feedback' as='textarea' rows='15' className='form-control' />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Col md={{size: 10, offset: 2}}>
                        <Button type='submit' color='danger'>PLEASE SEND FEEDBACK.</Button>
                    </Col>
                </FormGroup>
            </Form>
        </Formik>
    )
}

export default ContactForm
