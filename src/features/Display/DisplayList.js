import React from 'react'
import { useSelector } from 'react-redux'
import { Col, Row } from 'reactstrap'
import Error from '../../Components/Error'
import Loading from '../../Components/Loading'
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

    const promotionsSelector = useSelector((state)=> {
        // console.log({ state });
        return state.promotions.promotionsArray.find(val => val.featured)
    })

    console.log({ promotionsSelector })

    return (
        <Row>
            {
                items.map((item, idx) => {
                    const { isLoading, errMsg, featuredItem } = item;

                    if (isLoading) {
                        return <Loading key={ idx } />
                    }

                    if (errMsg) {
                        return <Error errMsg={errMsg} />
                    }
                    return(
                        featuredItem && 
                        <Col md className='m-1' key={idx}>
                            <AnimatedDisplayCard item={featuredItem} />
                        </Col>
                    )
                })
            }
        </Row>
    )
}

export default DisplayList
