import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardImg, CardText, Col } from 'reactstrap';
// import { CAMPSITES } from '../../app/shared/CAMPSITES';


function CampsiteDetail({campsite, campsiteId}) {
    //const returnCampsite = CAMPSITES.find(val => val);
    // const {image, name, description} = campsite
    console.log({campsite})
    const {image, name, description} = campsite
    console.log({ image, name, description})

    return (
        <Col md='5' className='m-1'>
            <Card>
                <CardImg top src={image} alt={name} className='img-fluid' width='50%' />
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
