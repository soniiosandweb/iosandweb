import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
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

// why choose icons
import scalability from '../images/services/scalability.png';
import responsive from '../images/services/responsive.png';
import loading from '../images/services/loading.png';
import secure from '../images/services/internet.png';

function Services(){
    const options = {
        loop: false,
        items: 1,
        margin: 30,
        autoplay: true,
        dots: true,
        nav: false,
        dotData: true,
        dotsContainer: ".dots-container",
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
      };
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

            <div className="development-process section-padding">
                <Container>
                    <Row>
                        <Col md={4}>
                            <div className="dots-container owl-dots">
                                <Button className="owl-dot">01</Button>
                                <Button className="owl-dot">02</Button>
                                <Button className="owl-dot">03</Button>
                            </div>
                        </Col>
                        <Col md={8}>
                            <OwlCarousel className="owl-theme" {...options}>
                                <div className="item" data-dot="<button>Name</button>">01</div>
                                <div className="item">02</div>
                                <div className="item">03</div>
                            </OwlCarousel>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    )
}

export default Services