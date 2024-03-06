import React from "react";
import './style.css';
import { Container, Row, Col, Button } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";

// development section icons
import planning from '../../images/services/planning.png';
import design from '../../images/services/design.png';
import webDevelopment from '../../images/services/web-development.png';
import qualityAnalyst from '../../images/services/quality-analyst.png';
import maintenance from '../../images/services/maintenance.png';

import planningImage from '../../images/services/planning-image.webp';
import designImage from '../../images/services/web-design-image.webp';
import developmentImage from '../../images/services/web-development-image.webp';
import qualityAnalystImage from '../../images/services/quality-analyst-image.webp';
import maintenanceImage from '../../images/services/maintenance-image.webp';

function DevelopmentProcess(){
    const options = {
        loop: true,
        items: 1,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 6000,
        dots: true,
        nav: false,
        dotData: true,
        dotsContainer: ".dots-container",
        touchDrag: false,
        mouseDrag: false
    };

    return(
        <>
            <div className="development-process section-padding">
                <Container>
                    <Row>
                        <Col>
                             <h2 className="heading2 text-center">Process of Developing a Mobile App</h2>
                            <div className="heading5 text-center">Grow your business with the most flexible and agile work process</div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center align-items-center mt-5">
                        <Col sm={2} lg={4} xl={4}>
                            <div className="dots-container owl-dots">
                                <Button className="owl-dot">
                                    <span className="planning-image-wrap">
                                        <img src={planning} alt="Planning" />
                                    </span>
                                    <span>Planning</span>
                                </Button>
                                <Button className="owl-dot">
                                    <span className="planning-image-wrap">
                                        <img src={design} alt="Designing" />
                                    </span>
                                    <span>Designing</span>
                                </Button>
                                <Button className="owl-dot">
                                    <span className="planning-image-wrap">
                                        <img src={webDevelopment} alt="Development" />
                                    </span>
                                    <span>Development</span>
                                </Button>
                                <Button className="owl-dot">
                                    <span className="planning-image-wrap">
                                        <img src={qualityAnalyst} alt="QA & Launch" />
                                    </span>
                                    <span>QA & Launch</span>
                                </Button>
                                <Button className="owl-dot">
                                    <span className="planning-image-wrap">
                                        <img src={maintenance} alt="Maintenance" />
                                    </span>
                                    <span>Maintenance</span>
                                </Button>
                            </div>
                        </Col>
                        <Col sm={10} lg={8} xl={7}>
                            <OwlCarousel className="owl-theme development-process-block" {...options}>
                                <div className="item">
                                    <img src={planningImage} alt="Planning" className="process-image" />
                                    <div className="process-content">
                                        <div className="heading5">Planning</div>
                                        <p className="paragraph">We analyze your requirements, define goals, & create the project schedule</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <img src={designImage} alt="Designing" className="process-image" />
                                    <div className="process-content">
                                        <div className="heading5">Designing</div>
                                        <p className="paragraph">We create an attractive & innovative design that looks great & help you stand out</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <img src={developmentImage} alt="Development" className="process-image" />
                                    <div className="process-content">
                                        <div className="heading5">Development</div>
                                        <p className="paragraph">We transform the design created into a well-structured code with all required functionalities</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <img src={qualityAnalystImage} alt="QA & Launch" className="process-image" />
                                    <div className="process-content">
                                        <div className="heading5">QA & Launch</div>
                                        <p className="paragraph">We optimize & test your website and its features on top browsers before launching</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <img src={maintenanceImage} alt="Maintenance" className="process-image" />
                                    <div className="process-content">
                                        <div className="heading5">Maintenance</div>
                                        <p className="paragraph">We provide constant updates, ensuring smooth and efficient functioning of your web solution</p>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default DevelopmentProcess;