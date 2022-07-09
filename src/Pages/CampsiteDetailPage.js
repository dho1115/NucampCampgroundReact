import React from 'react'
import { useParams } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import SubHeader from '../Components/SubHeader'
import CampsiteDetail from '../features/Campsites/CampsiteDetail'
import { selectCampsiteById } from '../features/Campsites/campsitesSlice'
import CommentsList from '../features/Comments/CommentsList'
import { useSelector } from 'react-redux';
import Error from '../Components/Error'
import Loading from '../Components/Loading'


function CampsiteDetailPage() {
    const {campsiteId} = useParams();
    console.log({ campsiteId })
    // const campsite = useSelector((state, otherProps = campsiteId) => selectCampsiteById(otherProps));

    const campsite = useSelector(selectCampsiteById(campsiteId))

    const isLoading = useSelector(state => state.campsites.isLoading);
    const errMsg = useSelector(state => state.campsites.errMsg);

    let content = null;

    if (isLoading) {
        content = <Loading />
    } else if (errMsg) {
        content = <Error errMsg={errMsg} />
    } else {
        content = (
            <>
                <CampsiteDetail campsite={campsite} />
                <CommentsList campsiteId={campsiteId} />
            </>
        )
    }

    return (
        <Container>
            {campsite && <SubHeader current={campsite.name} detail={true} />}
            <Row>
                { content }
            </Row>
        </Container>
    )
}

export default CampsiteDetailPage
