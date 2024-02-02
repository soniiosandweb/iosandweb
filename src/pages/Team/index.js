import React from "react";
import './style.css';
import { Container, Row, Col } from "react-bootstrap";
import SEO from "../../components/SEO";
import TypeWritter from "../../components/TypeWritter";
import GetStarted from "../../components/GetStarted";

import teamImg from '../../images/IAW-Team.png';
import userMan from '../../images/user-man.png';
import userWoman from '../../images/user-woman.png';
import ourTeam from '../../images/our-team.png';

// Join Team images
import teamImage1 from '../../images/about/team-galler1.jpg';
import teamImage2 from '../../images/about/team-galler2.jpg';
import teamImage3 from '../../images/about/team-galler3.jpg';

function Team(){
    return(
        <>
            <SEO
                title="IAW Team - Grow With Us - IosAndWeb Technologies"
                name='Meet IAW Team - The vision of our Team defines the core spirit of IosAndWeb Technologies. It tells what our company is all about.'
            />

            {/* Banner section */}
            <div className="our-team-banner banner-padding text-white">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <div className="heading-wrapper">
                                <h1>Our Core <br></br>Team <TypeWritter text="Leaders" delay={300} infinite  /></h1>
                                <div className="heading5">Meet an exceptional team of technology advisors, growth facilitators, and subject matter experts with proven experience</div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <img src={ourTeam} className="responsive-img" alt="How We Work" />
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Our Team */}
            <div className="our-team-section section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center">Meet Our Team</h2>
                            <div className="heading5 text-center">The vision of our Team defines the core spirit of IosAndWeb Technologies. It tells what our company is all about. Our vision motivates us to always be on a path that will make us achieve our goals.</div>
                            <div className="team-grid-row">
                                <div className="team-item">
                                    <div className="team-profile-image">
                                        <img src={teamImg} alt="Profile" className="img-fluid" />
                                    </div>
                                    <div className="profile-content">
                                        <h3 className="team-title">Utkarsh Khare</h3>
                                        <p className="paragraph">Founder & CEO</p>
                                    </div>
                                </div>
                                
                                <div className="team-item">
                                    <div className="team-profile-image">
                                        <img src={userMan} alt="Profile" className="img-fluid" />
                                    </div>
                                    <div className="profile-content">
                                        <h3 className="team-title">Bhupinder Singh</h3>
                                        <p className="paragraph">Software Development Lead</p>
                                    </div>
                                </div>

                                <div className="team-item">
                                    <div className="team-profile-image">
                                        <img src={userMan} alt="Profile" className="img-fluid" />
                                    </div>
                                    <div className="profile-content">
                                        <h3 className="team-title">Pankaj Sharma</h3>
                                        <p className="paragraph">Project Manager</p>
                                    </div>
                                </div>

                                <div className="team-item">
                                    <div className="team-profile-image">
                                        <img src={userWoman} alt="Profile" className="img-fluid" />
                                    </div>
                                    <div className="profile-content">
                                        <h3 className="team-title">Diksha Khanna</h3>
                                        <p className="paragraph">HR Manager</p>
                                    </div>
                                </div>

                                <div className="team-item">
                                    <div className="team-profile-image">
                                        <img src={userWoman} alt="Profile" className="img-fluid" />
                                    </div>
                                    <div className="profile-content">
                                        <h3 className="team-title">Aarti</h3>
                                        <p className="paragraph">SEO Lead</p>
                                    </div>
                                </div>

                                <div className="team-item">
                                    <div className="team-profile-image">
                                        <img src={userWoman} alt="Profile" className="img-fluid" />
                                    </div>
                                    <div className="profile-content">
                                        <h3 className="team-title">Soni Saini</h3>
                                        <p className="paragraph">Senior Software Developer</p>
                                    </div>
                                </div>

                                <div className="team-item">
                                    <div className="team-profile-image">
                                        <img src={userMan} alt="Profile" className="img-fluid" />
                                    </div>
                                    <div className="profile-content">
                                        <h3 className="team-title">Jatin Sehgal</h3>
                                        <p className="paragraph">Junior Software Developer</p>
                                    </div>
                                </div>

                                <div className="team-item">
                                    <div className="team-profile-image">
                                        <img src={userWoman} alt="Profile" className="img-fluid" />
                                    </div>
                                    <div className="profile-content">
                                        <h3 className="team-title">Shreyanshi Srivastava</h3>
                                        <p className="paragraph">Junior Software Developer</p>
                                    </div>
                                </div>

                                <div className="team-item">
                                    <div className="team-profile-image">
                                        <img src={userWoman} alt="Profile" className="img-fluid" />
                                    </div>
                                    <div className="profile-content">
                                        <h3 className="team-title">Palak Singla</h3>
                                        <p className="paragraph">SEO Executive</p>
                                    </div>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* get started section */}
            <GetStarted 
                title="Now Is The Right Time To Convert Your Idea Into A Go-To Mobile Application"
                buttonText="Get Started"
                link="/contact"
            />

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

export default Team;