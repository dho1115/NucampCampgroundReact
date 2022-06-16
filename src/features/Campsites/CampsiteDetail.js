import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardImg, CardText, Col } from 'reactstrap';
import { CAMPSITES } from '../../app/shared/CAMPSITES';


function CampsiteDetail({campsite, campsiteId}) {
    const returnCampsite = CAMPSITES.find(val => val.id === campsiteId);
    const {image, name, description} = returnCampsite

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
