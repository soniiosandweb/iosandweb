import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About(){
    return(
        <>
            <div className="about-banner banner-padding text-white">
                <Container>
                    <Row>
                        <Col>
                            <div className="heading-wrapper">
                                <h1>Transforming Businesses With Innovation</h1>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Who we are */}
            <div className="who-we-are section-padding">
                <Container>
                    <Row>
                        <Col md={5}>
                            <h2 className="heading2">Who We Are?</h2>
                        </Col>
                        <Col md={7}>
                            <div className="about-content">
                                <p>Our Vision reflects our perfection. Being the best team in the digital world, we believe to grow your business at the next level through digitalization.</p>

                                <p>The vision of our organization defines the core spirit of IosAndWeb Technologies. It tells what our company is all about. Our vision motivates us to always be on a path that will make us achieve our goals.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="padding-top-100">
                        <Col md={5}>
                            <h2 className="heading2">What We Do Best</h2>
                        </Col>
                        <Col md={7}>
                            <div className="about-content">
                                <p>With our focus, dedication, and communication, we became an award-winning organization. We believe to deliver the best services in developing, designing and improving your digital intellectual properties. We believe in organic communication and coordination, not just between our team but also with our clients in every manner. This helps us to understand clients’ requirements and their problems and allows us to give our best to the clients as well as their customers.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default About