import React from 'react';

import { Container } from "reactstrap";
import SubHeader from '../Components/SubHeader';
import CampsitesList from "../features/Campsites/CampsitesList";


function CampsitesDirectoryPage() {

    return (
        <Container>
            <SubHeader current='Directory' />
            <CampsitesList />
        </Container>
    )
}

export default CampsitesDirectoryPage
