import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Container, Row } from 'reactstrap'
import DisplayList from '../features/Display/DisplayList'


function Homepage() {
    return (
        <Container>
            <Row className='text-center'>
                <h1>WELCOME TO THE HOMEPAGE!!!</h1>
            </Row>
            <DisplayList />
        </Container>
    )
}

export default Homepage
