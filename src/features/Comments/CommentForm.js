import { Field, Formik, Form, ErrorMessage } from 'formik';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Button, Modal, ModalBody, ModalHeader, Label, FormGroup } from 'reactstrap';
import validateCommentForm from '../../Utils/validateCommentForm';
import { addComment } from './commentsSlice';


function CommentForm({ campsiteId} ) {
    const [modalOpen, setModalOpen] = useState(false);
    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        const comment = {
            campsiteId: parseInt(campsiteId),
            rating: values.rating,
            author: values.author,
            text: values.commentText
        };
        console.log(comment);
        setModalOpen(false);
    }

    return (
        <>
            <Button onClick={() => setModalOpen(true)} className='danger' outline><i className='fa fa-pencil fa-lg'/>ADD COMMENTS</Button>

            <Modal isOpen={modalOpen}>
                <ModalHeader toggle={() => setModalOpen(false)}>
                    Add Comment.
                </ModalHeader>
                <ModalBody>
                    <Formik
                        initialValues={{rating: undefined, author: '', commentText: ''}}
                        onSubmit={handleSubmit}
                        validate={validateCommentForm}
                    >
                        <Form>
                            <FormGroup>
                                <Label htmlFor='rating'>Rating</Label>
                                <Field name='rating'
                                    as='select'
                                    className='form-control'
                                >
                                    <option>Select...</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Field>
                                <ErrorMessage name='rating'>
                                    {
                                        msg => <p className='text-danger'>{msg}</p>
                                    }
                                </ErrorMessage>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='author'>Your Name</Label>
                                <Field
                                    name='author'
                                    placeholder='Your Name'
                                    className='form-control'
                                />
                                <ErrorMessage name='author'>
                                    {
                                        msg => <p className='text-danger'>{msg}</p>
                                    }
                                </ErrorMessage>
                            </FormGroup>
                            
                            <FormGroup>
                                <Label htmlFor='commentText'>Comment</Label>
                                <Field
                                    name='commentText'
                                    as='textarea'
                                    rows='12'
                                    className='form-control'
                                />
                            </FormGroup>
                            <Button type='submit' color='primary'>
                                Submit
                            </Button>
                        </Form>
                    </Formik>
                </ModalBody>
            </Modal>
        </>
    )
}

export default CommentForm
