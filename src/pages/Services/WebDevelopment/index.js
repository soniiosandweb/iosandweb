import React from "react";
import './style.css';
import { Container, Row, Col } from "react-bootstrap";
import SEO from "../../../components/SEO";
import NumbersCards from "../../../components/NumbersCards";
import ContactForm from "../../../components/ContactForm";
import GetStarted from "../../../components/GetStarted";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktopAlt, faCode, faShoppingBag, faGlobeAsia, faMobileScreen } from "@fortawesome/free-solid-svg-icons";

// Services includes images
import security from '../../../images/services/software-development/more-secure.png';
import architecture from '../../../images/services/software-development/routine-tasks.png';
import costSaving from '../../../images/services/software-development/lower-costs.png';
import support from '../../../images/services/software-development/instant-support.png';

// final reflection images
import webDevelopment from '../../../images/services/software-development/app-development.png';
import magento from '../../../images/services/software-development/magento.png';
import shopify from '../../../images/services/software-development/shopify.png';

function WebDevelopment(){
    return(
        <>
            <SEO
                title='Web Development Services Hire Experienced Web Developer Now'
                description='Develop your own business sites to grab the business opportunities. Hire certified and experienced web developer. Get quote for your project.'
                name='IosAndWeb Technologies'
            />

            {/* Web Development Banner */}
            <div className="web-development-banner banner-padding text-white position-relative">
                <Container className="z-index-1">
                    <Row>
                        <Col lg={8} xl={6}>
                            <div className="heading-wrapper full-width">
                                <h1><span className="text-highlight">Web </span>Development Services</h1>
                                <div className="heading5">Let's build your dream website. IosAndWeb Technologies delivers the best <u>web development services</u> by having front end developer and back end developer expert and professional team of web developers and designsers. The Team is especially known for its effective knowledge in creating virtual branding and standardized websites compatible with all the devices. 
                                <br/>We also offer Website security, smart application architecture, ecommerce developer for Magento development services, long-term cost saving and great support.</div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="banner-overlay bg-40"></div>
            </div>

            {/* Services numbers */}
            <div className="services-numbers section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center">Web Development Company</h2>
                            <div className="heading5 text-center">IosAndWeb Technologies delivers the best <b>web development services in London,Birmingham and many areas of United Kingdom</b> by having an expert and professional team of web developers.</div>

                            <NumbersCards />
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* what is Software section */}
            <div className="what-software-section section-padding text-white">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="leadtxt">
                                <h2>Web Development Services</h2>
                            </div>
                            <div className="leadsubtxt">
                                For over a decade, we have been serving with our web development services in UK as well as abroad. While developing your website, our team uses the latest techniques like ultra-clean and bold styles for the standard-based markup codes of the websites that help in improving the position in SERPs and increase conversions. 
                                <br/>As a web development company, we know that it is important to have a great website for a good online presence and it leaves the first impression on your website visitors. Some people consider a website just as a virtual representation of their company but it is not only that. Your website is the reflector of your business objectives and goals. That's why having an appealing, attractive, informative website is necessary for a great online presence.
                            </div>
                            <ul className="services-listing">
                                <li>Magento Development</li>
                                <li>PHP Frameworks</li>
                                <li>Asp.net</li>
                                <li>WordPress</li>
                                <li>WooCommerce</li>
                                <li>Shopify</li>
                            </ul>
                        </Col>
                        <Col lg={5}>
                            <div className="leadsubtxt mb-3 text-center">
                                Fill the form and get quote for your project.
                            </div>
                            <ContactForm />
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Services includes */}
            <div className="section-why-choose services-includes-section section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center">Our Web Development Services Includes</h2>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col md={6} lg={3} className="why-choose-col">
                            <div className="why-choose-list-item">
                                <img src={security} alt="Website Security" className="why-choose-icon" />
                                <h3 className="heading4">Website Security</h3>
                                <p className="paragraph">We <u>web development agency</u> providing security assistance to the websites of our clients is our priority. To make the website safe & secure, we implement all the security layers and make the entire web experience effective.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={3} className="why-choose-col">
                            <div className="why-choose-list-item change-bg">
                                <img src={architecture} alt="Architecture" className="why-choose-icon" />
                                <h3 className="heading4">Smart Application Architecture</h3>
                                <p className="paragraph">Our <u>frontend developer</u> and <u>backend developer</u> make apps and websites with a systematic approach and plan the project from its initial to the final stage. With this, it becomes easy to analyze the complexity and technical needs of the project.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={3} className="why-choose-col">
                            <div className="why-choose-list-item">
                                <img src={costSaving} alt="Cost Saving" className="why-choose-icon" />
                                <h3 className="heading4">Long Term Cost Saving</h3>
                                <p className="paragraph">Our expert team of developers does coding in such a flexible way that in the future if you need to upgrade <u>ecommerce magento development</u> the features then you do not need to do any major changes.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={3} className="why-choose-col">
                            <div className="why-choose-list-item change-bg">
                                <img src={support} alt="Great Support" className="why-choose-icon" />
                                <h3 className="heading4">Great Support</h3>
                                <p className="paragraph">Our work doesn't get completed with the submission of the final project. We provide promising support after services for the maintenance of delivered projects.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Specification section */}
            <div className="sepcification-section text-white section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center">Our Web Application Solutions Will Perfectly <br/>Conforming Your Specifications</h2>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faDesktopAlt}></FontAwesomeIcon>
                                <h4 className="heading4">Front-End Development</h4>
                                <p className="paragraph">Get End-To-End Solutions for your web development needs from our expert and professional developers.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
                                <h4 className="heading4">Custom Web Development</h4>
                                <p className="paragraph">Hire our expert developers to get customized and tailored websites as per your requirements with high-reliability and advanced technology.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon>
                                <h4 className="heading4">E-Commerce Development</h4>
                                <p className="paragraph">We provide you with custom eCommerce Web Development and <u>Magento website design</u> solutions to make your customers experience better and increase sales of your brand. We add value to your products by delivering flexible platforms.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faMobileScreen}></FontAwesomeIcon>
                                <h4 className="heading4">Web Application Frameworks</h4>
                                <p className="paragraph">Our Web application solutions use the PHP framework which is best till now and satisfy the client's needs and increase the performance of the website.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faGlobeAsia}></FontAwesomeIcon>
                                <h4 className="heading4">Open Source Platform Development</h4>
                                <p className="paragraph">We have great expertise in <u>content management</u> services so that we provide some out of the range of custom solutions to our esteemed clients. We include WordPress, magento web development, Joomla, Drupal and many more in our open-source platform development services.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Development process section */}
            <div className="section-development-process section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center">Our Process Of Web Development</h2>
                            <div className="heading5 text-center">An impressive Web Development needs Design, user experience, and path. The experienced team of our company makes a plan, develops and then executes the business objectives to satisfy the customers.</div>
                        </Col>
                    </Row>
                    <div className="development-process-blocks mt-4">
                        <Row className="no-gutters">
                            <div className="col-lg"></div>
                            
                            <div className="col-lg-1 text-center flex-column d-none d-lg-flex dots-center">
                                <div className="row h-50">
                                    <div className="col">&nbsp;</div>
                                    <div className="col">&nbsp;</div>
                                </div>
                                <h5 className="m-2">
                                    <span className="badge badge-pill bg-light border">01</span>
                                </h5>
                                <div className="row h-50">
                                    <div className="col border-right">&nbsp;</div>
                                    <div className="col">&nbsp;</div>
                                </div>
                            </div>
                        
                            <div className="col-lg py-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Project Scope & Planning</h4>
                                        <p className="card-text">Our experts conduct a deep study of your business and understand the requirements of your business. After reviewing the needs, we decide the technology and the framework that will be used for your site.</p>
                                    </div>
                                </div>
                            </div>
                        </Row>

                        <Row className="no-gutters">

                            <div className="col-lg py-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Design & Coding</h4>
                                        <p className="card-text">At this step, we code the website efficiently and avoid the unnecessary code inclusions.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-1 text-center flex-column d-none d-lg-flex dots-center">
                                <div className="row h-50">
                                    <div className="col">&nbsp;</div>
                                    <div className="col">&nbsp;</div>
                                </div>
                                <h5 className="m-2">
                                    <span className="badge badge-pill bg-light border">02</span>
                                </h5>
                                <div className="row h-50">
                                    <div className="col border-right">&nbsp;</div>
                                    <div className="col">&nbsp;</div>
                                </div>
                            </div>
                            <div className="col-lg"></div>
                            
                        </Row>

                        <Row className="no-gutters">
                            <div className="col-lg"></div>
                            
                            <div className="col-lg-1 text-center flex-column d-none d-lg-flex dots-center">
                                <div className="row h-50">
                                    <div className="col">&nbsp;</div>
                                    <div className="col">&nbsp;</div>
                                </div>
                                <h5 className="m-2">
                                    <span className="badge badge-pill bg-light border">03</span>
                                </h5>
                                <div className="row h-50">
                                    <div className="col border-right">&nbsp;</div>
                                    <div className="col">&nbsp;</div>
                                </div>
                            </div>
                        
                            <div className="col-lg py-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Testing & Launch</h4>
                                        <p className="card-text">Before making any site live on the internet, we make it bug-free and conduct testing on various platforms to enhance the user experience.</p>
                                    </div>
                                </div>
                            </div>
                        </Row>

                        <Row className="no-gutters">

                            <div className="col-lg py-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Maintenance</h4>
                                        <p className="card-text">We provide after-service support & maintenance to the client's project and ensure its smooth working.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-1 text-center flex-column d-none d-lg-flex dots-center">
                                <div className="row h-50">
                                    <div className="col">&nbsp;</div>
                                    <div className="col">&nbsp;</div>
                                </div>
                                <h5 className="m-2">
                                    <span className="badge badge-pill bg-light border">04</span>
                                </h5>
                                <div className="row h-50">
                                    <div className="col border-right">&nbsp;</div>
                                    <div className="col">&nbsp;</div>
                                </div>
                            </div>
                            <div className="col-lg"></div>
                            
                        </Row>

                    </div>

                </Container>
            </div>

            {/* get started section */}
            <GetStarted 
                title="Let's Start Building Web Solutions To Help Achieve Your Business Goals"
                buttonText="Get Started"
                link="/contact"
            />

            {/* final reflection section */}
            <div className="final-reflection-section section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2">Final Reflections</h2>
                            <div className="heading5"><b>IosAndWeb Technologies</b> is a leading <u>Website Development Company</u> that will help you to make your visions into reality. Get our affordable <b>web development services</b> and get an interactive online presence on the web.</div>

                            <div className="services-bottom-flex">
                                <div className="services-bottom-wrap">
                                    <div className="services-bottom-div">
                                        <a href="/software-development-services">
                                            <img src={webDevelopment} className="services-bottom-front-image" alt="Software Development" />
                                            <h4 className="heading4">Software Development Services</h4>
                                        </a>
                                    </div>
                                </div>

                                <div className="services-bottom-wrap">
                                    <div className="services-bottom-div">
                                        <a href="/magento-development-services">    
                                            <img src={magento} className="services-bottom-front-image" alt="Magento Development" />
                                            <h4 className="heading4">Magento Development Services</h4>
                                        </a>
                                    </div>
                                </div>

                                <div className="services-bottom-wrap">
                                    <div className="services-bottom-div">
                                        <a href="/">    
                                            <img src={shopify} className="services-bottom-front-image" alt="Shopify Development" />
                                            <h4 className="heading4">Shopify Development</h4>
                                        </a>
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

export default WebDevelopment;