import React from 'react'
import { Col, Row } from 'reactstrap'
import CampsiteCard from './CampsiteCard';
import { selectAllCampsites } from './campsitesSlice';


function CampsitesList() {
    const campsites = selectAllCampsites()
    return (
        <Row className='ms-auto' >
            {
                campsites.map(campsite => (
                    <Col md='5' className='m-4' key={campsite.id}>
                        <CampsiteCard campsite={campsite} />
                    </Col>
                ))
            }
        </Row>
    )
}

export default CampsitesList
