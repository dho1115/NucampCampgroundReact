import React from 'react';
import { Col } from 'reactstrap';

const Loading = () => {
    return (
        <Col>
            <i className='fa fa-spinner fa-pulse fa-3x fa-fw text-danger' />
            <p>LOADING...</p>
        </Col>
    )
}

export default Loading
