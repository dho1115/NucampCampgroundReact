import React from 'react';
import { Col } from 'reactstrap';


const Error = ({ errMsg }) => {
    return (
        <div>
            <Col>
                <h4>{ errMsg }.</h4>
            </Col>
        </div>
    )
}

export default Error
