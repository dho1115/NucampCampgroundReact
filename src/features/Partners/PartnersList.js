import React from 'react'
import { useSelector } from 'react-redux'
import { Col, Row } from 'reactstrap'
import Partner from './Partner'
import { selectAllPartners } from './partnersSlice'


function PartnersList(props) {
    // const partners = useSelector(state => selectAllPartners());
    // const partners = selectAllPartners()

    const partners = useSelector(({ partners: { partnersArray }}) => {
        return partnersArray;
    })

    return (
        <Col className='mt-4'>
            <Row>
                {
                    partners.map(partner => {
                        return (
                            <div className='d-flex mb-5' key={partner.id}>
                                <Partner partner={partner} />
                            </div>
                        )
                    })
                }
            </Row>
        </Col>
    )
}

export default PartnersList
