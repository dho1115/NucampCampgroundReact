import React from 'react'
import { useParams } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import CampsiteDetail from '../features/Campsites/CampsiteDetail'
import { selectCampsiteById } from '../features/Campsites/campsitesSlice'


function CampsiteDetailPage() {
    const {campsiteId} = useParams();
    const campsite = selectCampsiteById(campsiteId);

    return (
        <Container>
            <Row>
                <Col></Col>
                <CampsiteDetail campsite={campsite} />
                <Col></Col>
            </Row>
        </Container>
    )
}

export default CampsiteDetailPage
