import React from 'react'
import { useParams } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import SubHeader from '../Components/SubHeader'
import CampsiteDetail from '../features/Campsites/CampsiteDetail'
import { selectCampsiteById } from '../features/Campsites/campsitesSlice'
import CommentsList from '../features/Comments/CommentsList'


function CampsiteDetailPage() {
    const {campsiteId} = useParams();
    const campsite = selectCampsiteById(campsiteId);

    return (
        <Container>
            <SubHeader current={campsite.name} detail={true} />
            <Row>
                <Col></Col>
                <CampsiteDetail campsite={campsite} />
                <CommentsList campsiteId={campsiteId} />
                <Col></Col>
            </Row>
        </Container>
    )
}

export default CampsiteDetailPage
