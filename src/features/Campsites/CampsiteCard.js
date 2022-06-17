import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap'


function CampsiteCard({campsite}) {
    const { id, image, name } = campsite
    return (
        <Link to={`${id}`}>
            <Card>
                <CardImg 
                    width='100%'
                    src={image}
                    alt={name}
                />
                <CardImgOverlay>
                    <CardTitle>{name}</CardTitle>
                </CardImgOverlay>
            </Card>
        </Link>
    )
}

export default CampsiteCard


