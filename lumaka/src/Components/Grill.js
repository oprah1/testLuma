import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import './Css/Grill.css'

import Films from './Films.js'



class Grill extends Component {
    render() {
    return (
        <div>
            <Container className="container-fluid">
                <Row>
                    <Col xs="auto" sm="auto"><Films /></Col>
                    <Col xs="auto" sm="auto"><Films /></Col>
                    <Col xs="auto" sm="auto"><Films /></Col>
                </Row>
            </Container>
            
        </div>
    )
    }
}

export default Grill;