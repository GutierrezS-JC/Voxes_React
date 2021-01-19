import React from 'react';
import { Spinner, Row } from 'react-bootstrap';

export const SpinnerLoading = () => {
    return (
        <Row className="align-items-center justify-content-center">
            <Spinner animation="border" role="status" >
                <span className="sr-only">Loading...</span>
            </Spinner>
        </Row>
    )
}