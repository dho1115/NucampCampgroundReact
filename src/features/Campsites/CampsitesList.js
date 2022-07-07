import React from 'react'
import { Col, Row } from 'reactstrap'
import CampsiteCard from './CampsiteCard';
import { selectAllCampsites } from './campsitesSlice';
import { useSelector } from 'react-redux';
import Error from '../../Components/Error';
import Loading from '../../Components/Loading';


function CampsitesList() {
    const campsites = useSelector(selectAllCampsites);
    console.log({ campsites })
    
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
