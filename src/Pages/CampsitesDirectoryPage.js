import React from 'react';

import { Button, Col, Container, Row } from "reactstrap";
import CampsiteDetail from "../features/Campsites/CampsiteDetail";
import CampsitesList from "../features/Campsites/CampsitesList";
import { selectRandomCampsites } from '../features/Campsites/campsitesSlice';

function CampsitesDirectoryPage() {
    const selectCampsite = selectRandomCampsites();

    return (
        <Container>
            <Row>
                <Col sm='5' md='7'>
                    <CampsitesList />
                </Col>
                <Col sm='7' md='5' >
                    <CampsiteDetail campsite={selectCampsite} />
                </Col>
            </Row>
        </Container>
    )
}

export default CampsitesDirectoryPage
