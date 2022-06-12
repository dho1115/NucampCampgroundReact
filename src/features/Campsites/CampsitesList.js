import React from 'react'
import { Col, Row } from 'reactstrap'
import { CAMPSITES } from '../../app/shared/CAMPSITES';
import CampsiteCard from './CampsiteCard';


function CampsitesList() {
    return (
        <Row className='ms-auto'>
            {
                CAMPSITES.map(campsite => (
                    <Col md='5' className='m-4' key={campsite.id}>
                        <CampsiteCard campsite={campsite} />
                    </Col>
                ))
            }
        </Row>
    )
}

export default CampsitesList
