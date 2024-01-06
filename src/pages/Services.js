import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
import WhyChoose from "../components/WhyChoose";

import OwlCarousel from "react-owl-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

// what we do images
import serviceImage from '../images/services-image.png';
import webDevelop from '../images/services/settings.png';
import mobileDevelop from '../images/services/development.png';
import magentoDevelop from '../images/services/magento_development.png';
import blockchainDevelop from '../images/services/blockchain-development.png';
import smartContract from '../images/services/smart-contract.png';
import poc from '../images/services/letter.png';

// we design images
import { faDesktop, faPaintBrush } from "@fortawesome/free-solid-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import html from '../images/services/html.png';
import psd from '../images/services/xd.png';
import UX from '../images/services/ux.png';
import css from '../images/services/css.png';
import php from '../images/services/php.png';
import afterEffect from '../images/services/after-effects.png';

// development section icons
import planning from '../images/services/planning.png';
import design from '../images/services/design.png';
import webDevelopment from '../images/services/web-development.png';
import qualityAnalyst from '../images/services/quality-analyst.png';
import maintenance from '../images/services/maintenance.png';
import planningImage from '../images/services/planning-image.jpg';
import designImage from '../images/services/web-design-image.png';
import developmentImage from '../images/services/web-development-image.jpg';
import qualityAnalystImage from '../images/services/quality-analyst-image.jpg';
import maintenanceImage from '../images/services/maintenance-image.jpg';

function Services(){
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
            <Helmet>
                <title>Web development services- IAW Technologies</title>
                <meta name="description" content="Looking for high-quality web development services for your business? Look no further than IAW Technologies. Contact us Today." />
            </Helmet>
            <div className="services-banner banner-padding text-white">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <div className="heading-wrapper">
                                <h1>Web Solutions To Boost Your Brand Growth</h1>
                                <div className="heading5">We Develop Customized Websites For Your Precise Business Needs</div>
                                <a href="/contact" className="tn btn-white-border">Consult Our Experts <FontAwesomeIcon icon={faChevronRight} /></a>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <img src={serviceImage} className="responsive-img" alt="Services" />
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* what we do section */}
            <div className="services-what-we-do section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center">What we do ?</h2>
                            <div className="heading5 text-center">We exploit the latest technologies to exceed customer experience. Meet your business aims and objectives with our full-stack iOS, Android and web development solutions with quality assurance and project management. Our employees offer tailored and disruptive solutions that will focus only on your business. </div>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col md={6} lg={4} className="service-col">
                            <a href="/" className="service-link bg-red">
                                <div className="what-do-service-item">
                                    <img src={webDevelop} className="service-icon" alt="Web Development" />
                                    <h3 className="heading2">Web Development</h3>
                                    <p className="paragraph">Development of anything needs planning the design, the appearance, the content, and many more things and we need someone who can work on all the aspects and IosAndWeb is here for helping you.</p>
                                </div>
                            </a>
                        </Col>
                        <Col md={6} lg={4} className="service-col">
                            <a href="/" className="service-link bg-purple">
                                <div className="what-do-service-item">
                                    <img src={mobileDevelop} className="service-icon" alt="Mobile App Development" />
                                    <h3 className="heading2">Mobile App Development</h3>
                                    <p className="paragraph">Leverage your iOS and Android mobile app development needs with us and create a place for your brand in the Apple App Store and Google Play Store. Get fully-featured and pocket-friendly mobile apps.</p>
                                </div>
                            </a>
                        </Col>
                        <Col md={6} lg={4} className="service-col">
                            <a href="/" className="service-link bg-orange">
                                <div className="what-do-service-item">
                                    <img src={magentoDevelop} className="service-icon" alt="Magento Development" />
                                    <h3 className="heading2">Magento Development</h3>
                                    <p className="paragraph">Development of anything needs planning the design, the appearance, the content, and many more things and we need someone who can work on all the aspects and IosAndWeb is here for helping you.</p>
                                </div>
                            </a>
                        </Col>
                        <Col md={6} lg={4} className="service-col">
                            <a href="/" className="service-link bg-blue">
                                <div className="what-do-service-item">
                                    <img src={blockchainDevelop} className="service-icon" alt="Blockchain development" />
                                    <h3 className="heading2">Blockchain development</h3>
                                    <p className="paragraph">Our team of experts is here to help you with everything that concerns Blockchain technology and its recent developments. These areas include finance authority, management, and implementation for blockchain.</p>
                                </div>
                            </a>
                        </Col>
                        <Col md={6} lg={4} className="service-col">
                            <a href="/" className="service-link bg-green">
                                <div className="what-do-service-item">
                                    <img src={smartContract} className="service-icon" alt="Algorand Smart Contract" />
                                    <h3 className="heading2">Algorand Smart Contract</h3>
                                    <p className="paragraph">With the help of our experts, we help your business create smart contracts which in turn helps in the execution process of Hyperledger Fabric and Ethereum cryptocurrency.</p>
                                </div>
                            </a>
                        </Col>
                        <Col md={6} lg={4} className="service-col">
                            <a href="/" className="service-link bg-gray">
                                <div className="what-do-service-item">
                                    <img src={poc} className="service-icon" alt="Development of POC & ICO" />
                                    <h3 className="heading2">Development of POC & ICO</h3>
                                    <p className="paragraph">By means of smart concepts and data management tools, we assist businesses in creating Point of Contact services and also our expert team helps businesses develop ICO.</p>
                                </div>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* we design section */}
            <div className="services-we-design section-padding text-white">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center">We Design</h2>
                            <div className="heading5 text-center">We follow an intense procedure, focussing on your business goals, to develop your web presence.</div>
                        </Col>
                    </Row>
                    <Row className="align-items-center we-design-rows">
                        <Col md={6}>
                            <ul className="services-design-items">
                                <li>
                                    <FontAwesomeIcon icon={faDesktop} />
                                    <span>Web Design</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faPaintBrush} />
                                    <span>Graphic Design</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faHtml5} />
                                    <span>Pdf To HTML</span>
                                </li>
                            </ul>
                        </Col>
                        <Col md={6}>
                            <ul className="services-icons-list">
                                <li>
                                    <img src={html} className="icon-image" alt="HTML" />
                                </li>
                                <li>
                                    <img src={css} className="icon-image" alt="CSS" />
                                </li>
                                <li>
                                    <img src={psd} className="icon-image" alt="XD" />
                                </li>
                                <li>
                                    <img src={afterEffect} className="icon-image" alt="After Effect" />
                                </li>
                                <li>
                                    <img src={php} className="icon-image" alt="PHP" />
                                </li>
                                <li>
                                    <img src={UX} className="icon-image" alt="UX" />
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* why choose */}
            <WhyChoose />

            {/* get started section */}
            <div className="get-started section-padding text-white">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={9}>
                            <h2 className="heading2">Let's Start Building Web Solutions To Help Achieve Your Business Goals</h2>
                        </Col>
                        <Col lg={3}>
                            <div className="get-started-btn">
                               <a href="/contact" className="btn btn-white-border">Get Started <FontAwesomeIcon icon={faChevronRight} /></a> 
                            </div>
                            
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Development process section */}
            <div className="development-process section-padding">
                <Container>
                    <Row>
                        <Col>
                             <h2 className="heading2 text-center">Process of Developing a Mobile App</h2>
                            <div className="heading5 text-center">Grow your business with the most flexible and agile work process</div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center align-items-center mt-5">
                        <Col sm={2} lg={4}>
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
                        <Col sm={10} lg={7}>
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

export default Services