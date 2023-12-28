import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import serviceImage from '../images/services-image.png';
import webDevelop from '../images/services/settings.png';
import mobileDevelop from '../images/services/development.png';
import magentoDevelop from '../images/services/magento_development.png';
import blockchainDevelop from '../images/services/blockchain-development.png';
import smartContract from '../images/services/smart-contract.png';
import poc from '../images/services/letter.png';

function Services(){
    return(
        <>
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
                            <a href="/" className="service-link bg-pink">
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
        </>
    )
}

export default Services