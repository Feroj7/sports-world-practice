import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import './HeroSection.css';
import '../../components/MenuBar/MenuBar';
import MenuBar from '../../components/MenuBar/MenuBar';

const HeroSection = () => {
    return (
        <div>
            <div className="hero-section text-white">
                <MenuBar></MenuBar>
            <Container>
                <Row>
                    <Col className="text-area">
                        <h1>BE THE BASKETBALL
                            STAR AND SHINE</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <Button variant="danger">About</Button>
                    </Col>
                    <Col>
                    
                    </Col>
                </Row>
            </Container>
        </div>
        </div>
    );
};

export default HeroSection;