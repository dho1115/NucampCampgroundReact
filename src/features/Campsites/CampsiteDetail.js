import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardImg, CardText, Col } from 'reactstrap';


function CampsiteDetail({campsite}) {
    const { image, name, description } = campsite;
    console.log({image, name, description});
    return (
        <Col md='12' className='m-4'>
            <Card>
                <CardImg top src={image} alt={name} />
                <CardBody>
                    <CardText>
                        {description}
                    </CardText>
                </CardBody>
            </Card>
        </Col>
    )
}

export default CampsiteDetail
