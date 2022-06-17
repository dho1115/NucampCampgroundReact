import React from 'react'
import { Col, Row } from 'reactstrap'
import { selectFeaturedCampsite } from '../Campsites/campsitesSlice'
import { selectFeaturedPromotion } from '../Promotions/PromotionsSlice'
import DisplayCard from './DisplayCard'


function DisplayList() {
    const items = [selectFeaturedCampsite(), selectFeaturedPromotion()];

    return (
        <Row>
            {
                items.map((item, idx) => {
                    return(
                        <Col md className='m-1' key={idx}>
                            <DisplayCard item={item} />
                        </Col>
                    )
                })
            }
        </Row>
    )
}

export default DisplayList
