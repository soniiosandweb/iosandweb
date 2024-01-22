import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import SEO from "../components/SEO";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import 'react-phone-number-input/style.css';
import PhoneInput from "react-phone-number-input";

import howWeWorkImage from '../images/how-we-work.png';

import briefing from '../images/briefing.png';
import researching from '../images/researching.png';
import evolving from '../images/evolving.png';
import wrappingUp from '../images/wrapping-up.png';

function HowWeWork(){

    const [phoneValue, setPhoneValue] = useState();

    return (
        <>

            <SEO
                title="How We Work - IosAndWeb Technologies"
                name='IosAndWeb Technologies'
            />

            {/* Banner section */}
            <div className="how-we-work-banner banner-padding text-white">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="heading-wrapper">
                                <p className="subheading"><FontAwesomeIcon icon={faQuestionCircle} /> How We Work</p>
                                <h1>Web Solutions To Boost Your Brand Growth</h1>
                                <div className="heading5">Accelerate Your Business Growth With End-to-End Digital Solutions</div>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <img src={howWeWorkImage} className="responsive-img" alt="Portfolio" />
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Briefing section */}
            <div className="how-we-work-process briefing-section section-less-padding">
                <Container>
                    <Row className="align-items-center row-reverse-mobile">
                        <Col md={6}>
                            <img src={briefing} alt="Briefing" className="responsive-img" />
                        </Col>
                        <Col md={6}>
                            <h2 className="heading3"><strong>Briefing</strong> Of Your Business Idea</h2>
                            <p className="paragraph">Examining your ideas & details, Our app development company propose the best possible solutions that will meet your brand requirements indeed.</p>
                            <ul className="how-we-work-lists">
                                <li>We will connect you with our experts for overall planning & project estimations</li>
                                <li>Thorough research to keep you ahead of your competitors</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Researching section */}
            <div className="how-we-work-process researching-section section-less-padding">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <h2 className="heading3"><strong>Researching</strong> a Perfect Architecture</h2>
                            <p className="paragraph">Browsing our stack of latest technologies, our brewers create a fully-customized solution, made just for your business</p>
                            <ul className="how-we-work-lists">
                                <li>An exceptional UI design for better customer experience</li>
                                <li>Development of the core functionality with advanced features</li>
                            </ul>
                        </Col>
                        <Col md={6}>
                            <img src={researching} alt="Researching" className="responsive-img"/>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Evolving section */}
            <div className="how-we-work-process evolving-section section-less-padding">
                <Container>
                    <Row className="align-items-center row-reverse-mobile">
                        <Col md={6}>
                            <img src={evolving} alt="Evolving" className="responsive-img" />
                        </Col>
                        <Col md={6}>
                            <h2 className="heading3"><strong>Evolving</strong> Bug-Free Business App</h2>
                            <p className="paragraph">Repeated testing of every feature to assure quality & deliver a digital solution that meets your specifications</p>
                            <ul className="how-we-work-lists">
                                <li>Evaluating ease of use & navigation to make your customers stay</li>
                                <li>Performance testing to run it on different screen sizes smoothly</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Wrapping section */}
            <div className="how-we-work-process wrapping-section section-less-padding">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <h2 className="heading3"><strong>Wrapping</strong> Up For Success</h2>
                            <p className="paragraph">Get your custom-made digital solution onboard to reach maximum customers in the most time-efficient manner</p>
                            <ul className="how-we-work-lists">
                                <li>Successful launch of your business app with experts by your side</li>
                                <li>Result-oriented promotional strategies to take your app a long way</li>
                            </ul>
                        </Col>
                        <Col md={6}>
                            <img src={wrappingUp} alt="Wrapping" className="responsive-img"/>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* get started section */}
            <div className="get-started section-padding text-white">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={9}>
                            <h2 className="heading2">Now Is The Right Time To Convert Your Idea Into A Go-To Mobile Application</h2>
                        </Col>
                        <Col lg={3}>
                            <div className="get-started-btn">
                               <a href="/contact" className="btn btn-white-border">Get Started <FontAwesomeIcon icon={faChevronRight} /></a> 
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Join Our Team section */}
            <div className="join-our-team-section section-padding">
                <Container>
                    <Row>
                        <Col md={12} lg={8} className="m-auto">
                            <h2 className="heading2 text-center">Join the IosAndWeb Technologies team!</h2>
                            <p className="paragraph text-center">We are a global technology company that offers team members great potential for professional growth. Would you like to become part of our team? Then we look forward to getting to know you personally. We provide a supportive and inclusive environment with some perks.</p>

                            <div className="join-our-team-form">
                                <Form className="joinOurTeamForm" id="joinOurTeamForm">
                                    <Row className="form-row">
                                        <Col md={6} className="form-col">
                                            <Form.Group controlId="yourFirstName" className="form-group">
                                                <Form.Label>First Name</Form.Label>
                                                <Form.Control type="text" required />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6} className="form-col">
                                            <Form.Group controlId="yourlastName" className="form-group">
                                                <Form.Label>Last Name</Form.Label>
                                                <Form.Control type="text" required />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row className="form-row">
                                        <Col md={6} className="form-col">
                                            <Form.Group controlId="emailAddress" className="form-group">
                                                <Form.Label>Email Address</Form.Label>
                                                <Form.Control type="email" required />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6} className="form-col">
                                            <Form.Group controlId="phoneNumber" className="form-group">
                                                <Form.Label>Phone Number</Form.Label>
                                                <PhoneInput 
                                                international 
                                                id="phoneNumber"
                                                name="phoneNumber"
                                                defaultCountry="IN" 
                                                value={phoneValue} 
                                                onChange={setPhoneValue}
                                                className="form-control" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    
                                    <Row className="form-row">
                                        <Col md={6} className="form-col">
                                            <Form.Group controlId="yourLocation" className="form-group">
                                                <Form.Label>Location</Form.Label>
                                                <Form.Control type="text" required />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6} className="form-col">
                                            <Form.Group controlId="applyingFor" className="form-group">
                                                <Form.Label>Applying for</Form.Label>
                                                <Form.Control as="select" type="select" required>
                                                    <option value="">Select Your Profile</option>
                                                    <option value="PHP Developer (WordPress):- 2 to 6 years">PHP Developer (WordPress):- 2 to 6 years</option>
                                                    <option value="Quality Analyst :- 1 to 3 years">Quality Analyst :- 1 to 3 years</option>
                                                    <option value="UI/UX Designer:- 2 to 5 years">UI/UX Designer:- 2 to 5 years</option>
                                                    <option value="Magento Developer:- 1 to 5 years">Magento Developer:- 1 to 5 years</option>
                                                    <option value="Business Analyst:- 1 to 3 years">Business Analyst:- 1 to 3 years</option>
                                                    <option value="BDM :- 5 to 8 years">BDM :- 5 to 8 years</option>
                                                    <option value="BDE :- 6 months to 2 years">BDE :- 6 months to 2 years</option>
                                                    <option value="Frontend Developer :- 3 to 5 years">Frontend Developer :- 3 to 5 years</option>
                                                    <option value="MEAN Stack Devloper :- 3 to 5 years">MEAN Stack Devloper :- 3 to 5 years</option>
                                                    <option value="Content Writer :- 2 to 5 years">Content Writer :- 2 to 5 years</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row className="form-row">
                                        <Col md={12} className="form-col">
                                            <Form.Group controlId="yourResume" className="form-group">
                                                <Form.Label>Upload your resume</Form.Label>
                                                <Form.Control type="file" />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row className="form-row">
                                        <Col md={12} className="form-col">
                                            <Form.Group className="form-group form-submit-group">
                                                <Button type="submit" className="form-submit-btn">Submit</Button>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    
                                </Form> 
                            </div>
                        </Col>
                    </Row>  
                </Container>
            </div>
        </>
    )
}

export default HowWeWork;