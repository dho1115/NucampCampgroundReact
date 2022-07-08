import React from 'react'
import { useSelector } from 'react-redux'
import { Col, Row } from 'reactstrap'
import Error from '../../Components/Error'
import Loading from '../../Components/Loading'
import Partner from './Partner'
import { selectAllPartners } from './partnersSlice'


function PartnersList(props) {
    // const partners = useSelector(state => selectAllPartners());
    // const partners = selectAllPartners()

    const partners = useSelector((state) => {
        return state.partners.partnersArray;
    });
    const isLoading = useSelector(state => state.partners.isLoading);
    const errMsg = useSelector(state => state.partners.errMsg);

    return isLoading ? ( <Loading /> ) : errMsg ? ( <Error errMsg={errMsg} /> ) : (
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
