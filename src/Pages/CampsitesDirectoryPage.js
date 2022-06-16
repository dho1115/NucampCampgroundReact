import React, {useState} from 'react';

import { Col, Container, Row } from "reactstrap";
import { CAMPSITES } from '../app/shared/CAMPSITES';
import CampsiteDetail from "../features/Campsites/CampsiteDetail";
import CampsitesList from "../features/Campsites/CampsitesList";
import { selectCampsiteById } from '../features/Campsites/campsitesSlice';


function CampsitesDirectoryPage() {
    const [campsiteId, setCampsiteId] = useState(0);
    const selectedCampsite = selectCampsiteById(campsiteId);

    return (
        <Container>
            <Row>
                <Col sm='5' md='7'>
                    <CampsitesList setCampsiteId={setCampsiteId} />
                </Col>
                <Col sm='7' md='5' >
                    <CampsiteDetail campsiteId={campsiteId} campsite={selectedCampsite} />
                </Col>
            </Row>
        </Container>
    )
}

export default CampsitesDirectoryPage
