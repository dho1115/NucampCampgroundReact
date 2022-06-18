import React from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem, Col, Row } from 'reactstrap'


function SubHeader({ current, detail }) {
    return (
        <Row>
            <Col>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='/'>HOME.</Link>
                    </BreadcrumbItem>
                    {
                        detail && (
                            <BreadcrumbItem>
                                <Link to='/directory'>DIRECTORY.</Link>
                            </BreadcrumbItem>
                        )
                    }
                    <BreadcrumbItem active>{current}</BreadcrumbItem>
                </Breadcrumb>
                <h3>{current}</h3>
                <hr />
            </Col>
        </Row>
    )
}

export default SubHeader
