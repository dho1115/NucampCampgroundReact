import React from 'react'
import { useSelector } from 'react-redux'
import { Col, Row } from 'reactstrap'
import { selectFeaturedCampsite } from '../Campsites/campsitesSlice'
import { selectFeaturedPartners } from '../Partners/partnersSlice'
import { selectFeaturedPromotion } from '../Promotions/PromotionsSlice'
import AnimatedDisplayCard from './AnimatedDisplayCard';
// import DisplayCard from './DisplayCard'


function DisplayList() {
    const items = useSelector( state => {
        console.log({ state })
        return [selectFeaturedCampsite(state), selectFeaturedPromotion(state), selectFeaturedPartners(state)]
    } ) //state is the initialState inside campsitesSlice which is actually CAMPSITES.js.

    console.log({ items })

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
