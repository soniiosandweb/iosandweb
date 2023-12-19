import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Contact(){
    return(
        <>
            <div className="contact-banner banner-padding text-white">
                <Container>
                    <Row>
                        <Col md={7}>
                            <div className="heading-wrapper">
                                <h1>We Are Here To Help You!</h1>
                                <div className="heading5">Discover A Bespoke, IosAndWeb Technologies an honest & results-driven web-mobile development and digital marketing agency. We deliver a personal, passionate & tailored web development and digital marketing service to each and every one of our clients.</div>
                                <a href="/" className="consult-expert-btn">Consult Our Experts <FontAwesomeIcon icon={faChevronRight} /></a>
                            </div>
                        </Col>
                        <Col md={5}>
                            <div className="contact-form">
                                <Form className="contactForm" method="post">
                                    <Form.Group controlId="yourName" className="form-group">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="Name" />
                                    </Form.Group>
                                    <Form.Group controlId="emailAddress" className="form-group">
                                        <Form.Label>Email Address</Form.Label>
                                        <Form.Control type="email" placeholder="Email Address" />
                                    </Form.Group>
                                    <Form.Group controlId="phoneNumber" className="form-group">
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control type="text" placeholder="Phone Number" />
                                    </Form.Group>
                                    <Form.Group controlId="yourMessage" className="form-group">
                                        <Form.Label>Message or Questions</Form.Label>
                                        <Form.Control as="textarea" placeholder="Message or Questions" />
                                    </Form.Group>
                                    <Form.Group className="form-group form-submit-group">
                                        <Button type="submit" className="form-submit-btn btn">Send</Button>
                                    </Form.Group>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default Contact