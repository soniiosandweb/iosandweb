import React from "react";
import './style.css';
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import SEO from "../../../components/SEO";

import eCommerceBanner from '../../../images/industries/eCommerce/ecommerce-banner.webp';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot, faChevronRight } from "@fortawesome/free-solid-svg-icons";

// reasons to choose images
import microservices from '../../../images/industries/eCommerce/microservices.png';
import backendFrontend from '../../../images/industries/eCommerce/backend-frontend.png';
import payment from '../../../images/industries/eCommerce/payment-gateway.png';
import pwaEcommerce from '../../../images/industries/eCommerce/pwa-ecommerce.png';
import marketplaces from '../../../images/industries/eCommerce/marketplace.png';
import portals from '../../../images/industries/eCommerce/portals.png';

function Ecommerce(){
    return (
        <>
            <SEO
                title="eCommerce App Development - IosAndWeb Technologies"
            />

            {/* Banner section */}
            <div className="industries-banner banner-padding">
                <Container>
                    <Row className="align-items-center">
                        <Col>
                            <div className="heading-wrapper industries-header text-center">
                                <h1 className="text-black"><span className="text-highlight">eCommerce</span> App Development Services</h1>
                                <div className="heading5">We don't just build apps, we engineer experiences!</div>
                            </div>
                            <div className="industries-banner-image">
                                <img className="img-responsive" src={eCommerceBanner} alt="eCommerce" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Reasons to choose section */}
            <div className="reasons-to-choose industries-reasons-tab section-padding no-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2">We Develop Everything eCommerce</h2>
                            <div className="heading5">As one of the top-tiered eCommerce app development companies, we develop a unified digital experience with a robust backend and frontend that lowers abandonment rates and boosts conversions, loyalty, and customer satisfaction.</div>
                        </Col>
                    </Row>
                    <div className="reasons-tab-block">
                        <Tab.Container id="reasons-tab" defaultActiveKey="first">
                            <div className="reasons-tab-left reasons-tab-cols">
                                <Nav variant="pills" className="reasons-tab flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first"><FontAwesomeIcon icon={faCircleDot} /> Microservices-based eCommerce web and app development</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second"><FontAwesomeIcon icon={faCircleDot} /> Backend, frontend, & CRM development</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third"><FontAwesomeIcon icon={faCircleDot} /> Payment gateways</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fourth"><FontAwesomeIcon icon={faCircleDot} /> PWA eCommerce</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fifth"><FontAwesomeIcon icon={faCircleDot} /> Marketplaces</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="sixth"><FontAwesomeIcon icon={faCircleDot} /> Aggregator portals</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                            <div className="reasons-tab-right reasons-tab-cols">
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <div className="reasons-tab-content">
                                            <img src={microservices} alt="Microservices" className="reasons-content-icon" />
                                            <h3 className="heading3">Microservices-based eCommerce web and app development</h3>
                                            <p className="paragraph">Offering an omnichannel multi-platform experience, we develop intuitive user journeys that integrate engagement into every element and promote conversions with our eCommerce development services. We integrate the cart, the gateway, and the store with the APIs as we develop.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <div className="reasons-tab-content">
                                            <img src={backendFrontend} alt="Backend, frontend" className="reasons-content-icon" />
                                            <h3 className="heading3">Backend, frontend, & CRM development</h3>
                                            <p className="paragraph">We also develop eCommerce stores and apps that elevate the shopping experience for customers across the globe by offering a robust backend architecture (most probably on the cloud) and an intuitive frontend that promotes curiosity, engagement, and retention. As a top-notch eCommerce app development company, we also develop CRM software to scale your marketing and sales initiatives.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <div className="reasons-tab-content">
                                            <img src={payment} alt="Payment gateways" className="reasons-content-icon" />
                                            <h3 className="heading3">Payment gateways</h3>
                                            <p className="paragraph">We develop custom payment gateways that we integrate into your marketplace app or website. We develop PCI-DSS complaint portals safeguarding the data of your consumers. We develop user interfaces that promote checkout.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fourth">
                                        <div className="reasons-tab-content">
                                            <img src={pwaEcommerce} alt="PWA eCommerce" className="reasons-content-icon" />
                                            <h3 className="heading3">PWA eCommerce</h3>
                                            <p className="paragraph">Our dedicated eCommerce app developers design and develop intricate progressive web apps that redefine the shopping experience for your customers without ever having to download an app.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fifth">
                                        <div className="reasons-tab-content">
                                            <img src={marketplaces} alt="Marketplaces" className="reasons-content-icon" />
                                            <h3 className="heading3">Marketplaces</h3>
                                            <p className="paragraph">We design architectures that can support numerous buyers and sellers on a single platform operationalizing the free market for as many businesses as possible. We integrate all this into a functional and thoughtful marketplace portal on the web or mobile.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="sixth">
                                        <div className="reasons-tab-content">
                                            <img src={portals} alt="Aggregator portals" className="reasons-content-icon" />
                                            <h3 className="heading3">Aggregator portals</h3>
                                            <p className="paragraph">Being a leading custom eCommerce software development company we build aggregator apps and portals that you can use to list vendors of a particular product or service in an area connecting the consumers and service providers while you get a fee.</p>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </div>
                        </Tab.Container>
                    </div>
                </Container>
            </div>

            {/* Industries Numbers section */}
            <div className="industries-numbers-section section-padding no-padding">
                <Container>
                    <Row>
                        <Col>
                            <div className="industries-numbers">
                                <div className="industries-numbers-left">
                                    <h2 className="heading2">Build a strong ground to grow your eCommerce app idea</h2>
                                    <a href="/contact-us" className="btn btn-blue-border">Consult Our Experts <FontAwesomeIcon icon={faChevronRight} /></a>
                                </div>
                                <div className="industries-numbers-right">
                                    <ul className="industries-numbers-list">
                                        <li className="industries-numbers-list-item">
                                            <span className="industries-numbers-span">50+</span>
                                            <span className="industries-numbers-text">Ecommerce Experts <br />Under One Roof</span>
                                        </li>
                                        <li className="industries-numbers-list-item">
                                            <span className="industries-numbers-span">10+</span>
                                            <span className="industries-numbers-text">Years of experience</span>
                                        </li>
                                        <li className="industries-numbers-list-item">
                                            <span className="industries-numbers-span">95%</span>
                                            <span className="industries-numbers-text">Clients Stay With Us</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Industries Capabilities section */}
            <div className="what-software-section industries-capabilities-section section-padding text-white">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={9}>
                            <div className="leadtxt">
                                <h2>Capabilities that assure industry-best eCommerce application development services</h2>
                            </div>
                            <div className="leadsubtxt">
                            Our team of highly skilled eCommerce app developers have a varied background in software development, AI/ML, cloud computing, and data security, and with this expertise, the team offers top-class eCommerce app development services helping us become the best eCommerce app development company
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="capabilities-tab-div">
                                <Tab.Container id="capabilities-tab" defaultActiveKey="cpfirst">
                                    <div className="capabilities-tab-left capabilities-tab-cols">
                                        <Nav variant="pills" className="capabilities-tab flex-column">
                                            <Nav.Item>
                                                <Nav.Link eventKey="cpfirst">Award-winning team</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="cpsecond">Best development practices</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="cpthird">Transparency is paramount</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </div>
                                    <div className="capabilities-tab-right capabilities-tab-cols">
                                        <Tab.Content>
                                            <Tab.Pane eventKey="cpfirst">
                                                <div className="capabilities-tab-content">
                                                    <p className="paragraph">As a premium eCommerce mobile app development company, our expertise is reflected in the digital products and apps developed by our eCommerce app developers that have bagged prestigious awards year-on-year.</p>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="cpsecond">
                                                <div className="capabilities-tab-content">
                                                    <p className="paragraph">Using DevOps and Agile methodologies, we quickly and efficiently cater to our client's needs, closing gaps and delivering seamless shopping experiences.</p>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="cpthird">
                                                <div className="capabilities-tab-content">
                                                    <p className="paragraph">Being the best-in-class eCommerce app development company, we believe that an open communication channel translates into more productive and efficient eCommerce app development services. Therefore, we keep our clients updated about the development at all stages.</p>
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </div>
                                </Tab.Container>
                            </div>
                            
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Ecommerce;