import React from "react";
import './style.css';
import { Container, Row, Col } from "react-bootstrap";
import SEO from "../../components/SEO";
import TypeWritter from "../../components/TypeWritter";

// Join Team images
import teamImage1 from '../../images/about/team-galler1.jpg';
import teamImage2 from '../../images/about/team-galler2.jpg';
import teamImage3 from '../../images/about/team-galler3.jpg';

// work life images
import learningDev from '../../images/about/learning-dev.jpg';
import mindful from '../../images/about/Mindful-Personal-Guidance.jpg';
import constructiveFeedback from '../../images/about/Constructive-Feedback.jpg';
import inclusive from '../../images/about/Inclusive-Open-Culture.jpg';
import innovation from '../../images/about/Innovation-Quality-First.jpg';
import proactive from '../../images/about/Proactive-Implementation.jpg';
import bestGlobal from '../../images/about/Best-Global-Opportunities.jpg';
import workLatest from '../../images/about/Work-with-Latest-Technology.jpg';

// achievements images
import clutch from '../../images/about/clutch-logo.png';
import appFutura from '../../images/about/appfutura-logo.jpg';
import itFirms from '../../images/about/it-firms-logo.png';
import goodFirms from '../../images/about/goodfirms-logo.png';
import topDevelopers from '../../images/about/top-developers-logo.png';
import upWork from '../../images/about/upwork-logo.png';

function About(){
    return(
        <>
            <SEO
                title='IosAndWeb Technologies - We approach with a purpose. Visit Now'
                description='Team of IosAndWeb Technologies - We approach with a purpose. Effective Team Communication and collaboration. Visit Now Know About Us.'
                name='IosAndWeb Technologies'
            />

            <div className="about-banner banner-padding text-white">
                <Container>
                    <Row>
                        <Col>
                            <div className="heading-wrapper">
                                <h1>Transforming Businesses With <TypeWritter text="Innovation" delay={300} infinite  /></h1>
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

            {/* Core values section */}
            <div className="core-values-section section-padding text-white">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center">Our Core Values</h2>
                            <div className="heading5 text-center width-55">We're enthusiastic learners and seasoned inventors. Together, we can create solutions that serve not just technology but the humans behind it.</div>
                            <div className="core-values-flex">

                                <div className="core-values-grid">
                                    <div className="core-values-number">01</div>
                                    <div className="core-values-heading">Ensure impactful innovations</div>
                                    <p className="paragraph">An unwavering commitment to drive maximum customer satisfaction, infused with integrity and passion.</p>
                                </div>

                                <div className="core-values-grid">
                                    <div className="core-values-number">02</div>
                                    <div className="core-values-heading">Focus on self-development</div>
                                    <p className="paragraph">Training and mentorship programs, interactive sessions and community meetups to drive personal growth.</p>
                                </div>

                                <div className="core-values-grid">
                                    <div className="core-values-number">03</div>
                                    <div className="core-values-heading">Integrate work-life balance</div>
                                    <p className="paragraph">Latest infrastructure and flexible working hours along with many other privileges that inculcate healthy lifestyle choices.</p>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Our Achievements */}
            <div className="our-achievements-section section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2">Our Achievements</h2>
                            <div className="heading5">With the utmost priority of adding value to the projects we undertake, we ensure that our partners stay ahead of the clutter and achieve excellence.</div>
                            <div className="achieve-flex">
                                <div className="achieve-flip-wrap">
                                    <div className="flipper">
                                        <div className="front">
                                            <img src={appFutura} className="front-image" alt="Appfutura" />
                                        </div>
                                        <div className="back">
                                            <p className="paragraph">Number 1 mobile app development company</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="achieve-flip-wrap">
                                    <div className="flipper">
                                        <div className="front">
                                            <img src={clutch} className="front-image" alt="Clutch" />
                                        </div>
                                        <div className="back">
                                            <p className="paragraph">No. 1 App Development Company</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="achieve-flip-wrap">
                                    <div className="flipper">
                                        <div className="front">
                                            <img src={goodFirms} className="front-image" alt="Appfutura" />
                                        </div>
                                        <div className="back">
                                            <p className="paragraph">App development company of the year</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="achieve-flip-wrap">
                                    <div className="flipper">
                                        <div className="front">
                                            <img src={itFirms} className="front-image" alt="Appfutura" />
                                        </div>
                                        <div className="back">
                                            <p className="paragraph">India's Growth Champions in IT</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="achieve-flip-wrap">
                                    <div className="flipper">
                                        <div className="front">
                                            <img src={topDevelopers} className="front-image" alt="Appfutura" />
                                        </div>
                                        <div className="back">
                                            <p className="paragraph">Number 1 software development company</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="achieve-flip-wrap">
                                    <div className="flipper">
                                        <div className="front">
                                            <img src={upWork} className="front-image" alt="Upwork" />
                                        </div>
                                        <div className="back">
                                            <p className="paragraph">Top software development company</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* progress section */}
            <div className="progress-section">
                <Container>
                    <Row>
                        <Col>
                            <div className="progress-block text-white">
                                <div className="progress-block-flex">
                                    <div className="progress-number">
                                        <span>1000+</span>
                                        <div className="progress-heading">Projects Delivered</div>
                                    </div>
                                    <div className="progress-number">
                                        <span>1000+</span>
                                        <div className="progress-heading">Tech experts On-board</div>
                                    </div>
                                    <div className="progress-number">
                                        <span>$950M</span>
                                        <div className="progress-heading">Investment Raised for Startups</div>
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
                                <a href="contact" className="btn btn-blue">Apply Now</a>
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