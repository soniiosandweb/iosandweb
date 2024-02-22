import React from "react";
import './style.css';
import { Container, Row, Col } from "react-bootstrap";
import SEO from "../../../components/SEO";

function MagentoDevelopment(){
    return(
        <>
            <SEO
                title='Get Magento development services | Contact Us'
                description='Looking for top Magento development Services in United kingdom? Hire our Certified Magento developer at affordable cost. Get quote Today!'
                name='IosAndWeb Technologies'
            />

            {/* Magento Development Banner */}
            <div className="magento-development-banner banner-padding text-white position-relative">
                <Container className="z-index-1">
                    <Row>
                        <Col lg={8} xl={6}>
                            <div className="heading-wrapper full-width">
                                <h1><span className="text-highlight">Magento</span> Development Services</h1>
                                <div className="heading5">The process of developing an e-commerce platform can be facilitated with the assistance of Magento Development Services, which makes it possible to bring in new customers and offer them a shopping experience that perfectly satisfies their needs. Magento is a well-known and well-liked e-commerce platform.</div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="banner-overlay"></div>
            </div>
        </>
    )
}

export default MagentoDevelopment;