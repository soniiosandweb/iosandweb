import React from "react";
import './style.css';
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSkype } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import SEO from "../../components/SEO";
import TypeWritter from "../../components/TypeWritter";
import GetStarted from "../../components/GetStarted";
import JoinTeamGallery from "../../components/JoinTeamGallery";

import teamImg from '../../images/IAW-Team.png';
import userMan from '../../images/user-man.png';
import userWoman from '../../images/user-woman.png';
import ourTeam from '../../images/our-team.png';

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
                                        <div className="social-icons">
                                            <a href="skype:live:utkarshkhare2601"><FontAwesomeIcon icon={faSkype} /></a>
                                            <a href="mailto:utkarsh@iosandweb.net"><FontAwesomeIcon icon={faEnvelope} /></a>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="team-item">
                                    <div className="team-profile-image">
                                        <img src={userMan} alt="Profile" className="img-fluid" />
                                    </div>
                                    <div className="profile-content">
                                        <h3 className="team-title">Bhupinder Singh</h3>
                                        <p className="paragraph">Software Development Lead</p>
                                        <div className="social-icons">
                                            <a href="skype:live:dev_5571"><FontAwesomeIcon icon={faSkype} /></a>
                                            <a href="mailto:dev@iosandweb.net"><FontAwesomeIcon icon={faEnvelope} /></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="team-item">
                                    <div className="team-profile-image">
                                        <img src={userMan} alt="Profile" className="img-fluid" />
                                    </div>
                                    <div className="profile-content">
                                        <h3 className="team-title">Pankaj Sharma</h3>
                                        <p className="paragraph">Project Manager</p>
                                        <div className="social-icons">
                                            <a href="skype:live:.cid.f94bbec24b40fa42"><FontAwesomeIcon icon={faSkype} /></a>
                                            <a href="mailto:pankaj@iosandweb.net"><FontAwesomeIcon icon={faEnvelope} /></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="team-item">
                                    <div className="team-profile-image">
                                        <img src={userWoman} alt="Profile" className="img-fluid" />
                                    </div>
                                    <div className="profile-content">
                                        <h3 className="team-title">Diksha Khanna</h3>
                                        <p className="paragraph">HR Manager</p>
                                        <div className="social-icons">
                                            <a href="skype:live:.cid.366ea093c3c5d9ec"><FontAwesomeIcon icon={faSkype} /></a>
                                            <a href="mailto:career@iosandweb.net"><FontAwesomeIcon icon={faEnvelope} /></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="team-item">
                                    <div className="team-profile-image">
                                        <img src={userWoman} alt="Profile" className="img-fluid" />
                                    </div>
                                    <div className="profile-content">
                                        <h3 className="team-title">Aarti</h3>
                                        <p className="paragraph">SEO Lead</p>
                                        <div className="social-icons">
                                            <a href="skype:live:.cid.38a2eff5f8174786"><FontAwesomeIcon icon={faSkype} /></a>
                                            <a href="mailto:aarti@iosandweb.net"><FontAwesomeIcon icon={faEnvelope} /></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="team-item">
                                    <div className="team-profile-image">
                                        <img src={userWoman} alt="Profile" className="img-fluid" />
                                    </div>
                                    <div className="profile-content">
                                        <h3 className="team-title">Soni Saini</h3>
                                        <p className="paragraph">Senior Software Developer</p>
                                        <div className="social-icons">
                                            <a href="skype:live:.cid.451b35beb9f6fa07"><FontAwesomeIcon icon={faSkype} /></a>
                                            <a href="mailto:soni@iosandweb.net"><FontAwesomeIcon icon={faEnvelope} /></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="team-item">
                                    <div className="team-profile-image">
                                        <img src={userMan} alt="Profile" className="img-fluid" />
                                    </div>
                                    <div className="profile-content">
                                        <h3 className="team-title">Jatin Sehgal</h3>
                                        <p className="paragraph">Junior Software Developer</p>
                                        <div className="social-icons">
                                            <a href="skype:live:.cid.7d548bb02426c79b"><FontAwesomeIcon icon={faSkype} /></a>
                                            <a href="mailto:jatin@iosandweb.net"><FontAwesomeIcon icon={faEnvelope} /></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="team-item">
                                    <div className="team-profile-image">
                                        <img src={userWoman} alt="Profile" className="img-fluid" />
                                    </div>
                                    <div className="profile-content">
                                        <h3 className="team-title">Shreyanshi Srivastav</h3>
                                        <p className="paragraph">Junior Software Developer</p>
                                        <div className="social-icons">
                                            <a href="skype:live:.cid.d9baf9987a5191bc"><FontAwesomeIcon icon={faSkype} /></a>
                                            <a href="mailto:shreyanshi@iosandweb.net"><FontAwesomeIcon icon={faEnvelope} /></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="team-item">
                                    <div className="team-profile-image">
                                        <img src={userWoman} alt="Profile" className="img-fluid" />
                                    </div>
                                    <div className="profile-content">
                                        <h3 className="team-title">Palak Singla</h3>
                                        <p className="paragraph">SEO Executive</p>
                                        <div className="social-icons">
                                            <a href="skype:live:.cid.468fbc6c898d9a69"><FontAwesomeIcon icon={faSkype} /></a>
                                            <a href="mailto:palak@iosandweb.net"><FontAwesomeIcon icon={faEnvelope} /></a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* get started section */}
            <GetStarted 
                title="Let's Start Building Web Solutions To Help Achieve Your Business Goals"
                buttonText="Get Started"
                link="/contact"
            />

            {/* Join Team */}
            <JoinTeamGallery />

        </>
    )
}

export default Team;