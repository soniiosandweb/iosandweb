import React from "react";
import './style.css';
import { Container, Row, Col } from "react-bootstrap";
import SEO from "../../../components/SEO";

function WebDesigning(){
    return(
        <>
            <SEO
                title='Best Web Designing Services in UK | IosandWeb Technologies'
                description='IosAndWeb Tech-Make your imagination in reality. Best in class web designing services. Our in-house web designer has 12+ years of experience.'
                name='IosAndWeb Technologies'
            />

            {/* Web Designing Banner */}
            <div className="web-development-banner banner-padding text-white position-relative">
                <Container className="z-index-1">
                    <Row>
                        <Col lg={8} xl={6}>
                            <div className="heading-wrapper full-width">
                                <h1><span className="text-highlight">Web Designing</span> Services</h1>
                                <div className="heading5">Being a renowned company in web designing services near me IosAndWeb Technologies provides the best custom based web designing services. The websites designed by Iosandweb are user-friendly, SEO, highly responsive and also helps in improving the experience and conversions. Consult with our experts to get web designing services.</div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="banner-overlay bg-60"></div>
            </div>
        </>
    )
}

export default WebDesigning;