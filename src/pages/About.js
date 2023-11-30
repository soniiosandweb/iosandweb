import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// Join Team images
import teamImage1 from '../images/team-galler1.jpg';
import teamImage2 from '../images/team-galler2.jpg';
import teamImage3 from '../images/team-galler3.jpg';

// work life images
import learningDev from '../images/learning-dev.jpg';
import mindful from '../images/Mindful-Personal-Guidance.jpg';
import constructiveFeedback from '../images/Constructive-Feedback.jpg';
import inclusive from '../images/Inclusive-Open-Culture.jpg';
import innovation from '../images/Innovation-Quality-First.jpg';
import proactive from '../images/Proactive-Implementation.jpg';
import bestGlobal from '../images/Best-Global-Opportunities.jpg';
import workLatest from '../images/Work-with-Latest-Technology.jpg';

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

            {/* Work life section */}
            <div className="work-life-section section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center">Work Life <br></br>At Its <span>Best</span></h2>
                            <div className="its-best-wrap">
                                <div className="its-best">
                                    <div className="its-best-inner">
                                        <figure><img src={learningDev} alt="Learning" /></figure>
                                        <span>Learning <br></br>& Development</span>
                                    </div>
                                </div>

                                <div className="its-best">
                                    <div className="its-best-inner">
                                        <figure><img src={mindful} alt="Mindful" /></figure>
                                        <span>Mindful <br></br>Personal Guidance</span>
                                    </div>
                                </div>

                                <div className="its-best">
                                    <div className="its-best-inner">
                                        <figure><img src={constructiveFeedback} alt="Constructive" /></figure>
                                        <span>Constructive <br></br>Feedback</span>
                                    </div>
                                </div>

                                <div className="its-best">
                                    <div className="its-best-inner">
                                        <figure><img src={inclusive} alt="Inclusive" /></figure>
                                        <span>Inclusive <br></br>& Open-Culture</span>
                                    </div>
                                </div>

                                <div className="its-best">
                                    <div className="its-best-inner">
                                        <figure><img src={innovation} alt="Innovation" /></figure>
                                        <span>Innovation <br></br>& Quality First</span>
                                    </div>
                                </div>

                                <div className="its-best">
                                    <div className="its-best-inner">
                                        <figure><img src={proactive} alt="Proactive" /></figure>
                                        <span>Proactive <br></br>Implementation</span>
                                    </div>
                                </div>

                                <div className="its-best">
                                    <div className="its-best-inner">
                                        <figure><img src={bestGlobal} alt="Best & Global" /></figure>
                                        <span>Best & Global <br></br>Opportunities</span>
                                    </div>
                                </div>

                                <div className="its-best">
                                    <div className="its-best-inner">
                                        <figure><img src={workLatest} alt="Work with" /></figure>
                                        <span>Work with <br></br>Latest Technology</span>
                                    </div>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Join Team */}
            <div className="join-the-team section-padding">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6} lg={5}>
                            <h2 className="heading2">Join the IosAndWeb Technologies team!</h2>
                            <div className="heading5">Innovate with the latest and greatest technologies & get to work on some of the coolest projects you can imagine.</div>
                            <div className="apply-btn btn-section">
                                <a href="/" className="btn btn-blue">Apply Now</a>
                            </div>
                        </Col>
                        <Col md={6} lg={7}>
                            <div className="display-flex">
                                <div className="image-wrap">
                                    <img src={teamImage1} alt="Team" className="team-join-img" />
                                </div>
                                <div className="image-wrap">
                                    <div className="image-wrap-inner">
                                        <img src={teamImage2} alt="Team" className="team-join-img" />
                                    </div>
                                    <div className="image-wrap-inner">
                                        <img src={teamImage3} alt="Team" className="team-join-img" />
                                    </div>
                                </div>  
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default About