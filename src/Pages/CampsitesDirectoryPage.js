import React, {useState} from 'react';

import { Col, Container, Row } from "reactstrap";
import CampsiteDetail from "../features/Campsites/CampsiteDetail";
import CampsitesList from "../features/Campsites/CampsitesList";
import { selectCampsiteById } from '../features/Campsites/campsitesSlice';


function CampsitesDirectoryPage() {
    const [selectedCampsite, toggleCampsite] = useState();


    return (
        <Container>
            <Row>
                <Col sm='5' md='7'>
                    <CampsitesList />
                </Col>
                <Col sm='7' md='5' >
                    <CampsiteDetail campsite={{img: 'null', name: 'null', id: 'null'}}  />
                </Col>
            </Row>
        </Container>
    )
}

export default CampsitesDirectoryPage
