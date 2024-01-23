import React from "react";
import './style.css';
import { Container, Row, Col } from "react-bootstrap";

// why choose icons
import scalability from '../../images/services/scalability.png';
import responsive from '../../images/services/responsive.png';
import loading from '../../images/services/loading.png';
import secure from '../../images/services/internet.png';

function WhyChoose(){
    return (
        <>
         {/* why choose */}
            <div className="section-why-choose section-padding">
                <Container>
                    <Row>
                        <Col>
                             <h2 className="heading2 text-center">Why Choose IosAndWeb Technologies For Your Web Development Solutions?</h2>
                            <div className="heading5 text-center">We ensure web solutions that work flawlessly across multiple devices</div>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col md={6} lg={3} className="why-choose-col">
                            <div className="why-choose-list-item">
                                <img src={scalability} alt="Scalable" className="why-choose-icon" />
                                <h3 className="heading4">Robust & Scalable</h3>
                                <p className="paragraph">Fully functional and scalable solution that grows with your business</p>
                            </div>
                        </Col>
                        <Col md={6} lg={3} className="why-choose-col">
                            <div className="why-choose-list-item change-bg">
                                <img src={responsive} alt="Highly Responsive" className="why-choose-icon" />
                                <h3 className="heading4">Highly Responsive</h3>
                                <p className="paragraph">Web solutions that work well on mobile, tablet, and desktop devices</p>
                            </div>
                        </Col>
                        <Col md={6} lg={3} className="why-choose-col">
                            <div className="why-choose-list-item">
                                <img src={loading} alt="Quick Loading" className="why-choose-icon" />
                                <h3 className="heading4">Quick Loading</h3>
                                <p className="paragraph">We offer a minimalistic setup to ensure your website load faster</p>
                            </div>
                        </Col>
                        <Col md={6} lg={3} className="why-choose-col">
                            <div className="why-choose-list-item change-bg">
                                <img src={secure} alt="Secure Solutions" className="why-choose-icon" />
                                <h3 className="heading4">Secure Solutions</h3>
                                <p className="paragraph">Highly secure websites to withstand high traffic without any glitches</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default WhyChoose;