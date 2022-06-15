import React from 'react';
import { Card, CardBody, CardImg, CardText, Col } from 'reactstrap';


function CampsiteDetail({campsite}) {
    const { image, name, description } = campsite;

    return (
        <Col md='12' className='m-4'>
            <Card>
                <CardImg top src={image} alt={name} />
                <CardBody>
                    {description}
                </CardBody>
            </Card>
        </Col>
    )
}

export default CampsiteDetail
