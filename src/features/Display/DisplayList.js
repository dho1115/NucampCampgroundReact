import React from 'react'
import { Col, Row } from 'reactstrap'
import { selectFeaturedCampsite } from '../Campsites/campsitesSlice'
import { selectFeaturedPartners } from '../Partners/partnersSlice'
import { selectFeaturedPromotion } from '../Promotions/PromotionsSlice'
import AnimatedDisplayCard from './AnimatedDisplayCard'
// import DisplayCard from './DisplayCard'


function DisplayList() {
    const items = [selectFeaturedCampsite(), selectFeaturedPromotion(), selectFeaturedPartners()];

    return (
        <Row>
            {
                items.map((item, idx) => {
                    return(
                        item && (<Col md className='m-1' key={idx}>
                            <AnimatedDisplayCard item={item} />
                        </Col>)
                    )
                })
            }
        </Row>
    )
}

export default DisplayList
