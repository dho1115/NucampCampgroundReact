import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';


function DisplayCard({item}) {
    const { image, name, description } = item;

    return (
        <Card>
            <CardImg src={image} alt={name} />
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardText>{description}</CardText>
            </CardBody>
        </Card>
    )
}

export default DisplayCard
