import React from "react";
import './style.css';
import { Container, Row, Col } from "react-bootstrap";
import SEO from "../../../components/SEO";
import NumbersCards from "../../../components/NumbersCards";
import ContactForm from "../../../components/ContactForm";
import GetStarted from "../../../components/GetStarted";

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
                                <h1><span className="text-highlight">Web Development</span> Services</h1>
                                <div className="heading5">Let's build your dream website. IosAndWeb Technologies delivers the best <u>web development services</u> by having front end developer and back end developer expert and professional team of web developers and designsers. The Team is especially known for its effective knowledge in creating virtual branding and standardized websites compatible with all the devices. 
                                <br></br>We also offer Website security, smart application architecture, ecommerce developer for Magento development services, long-term cost saving and great support.</div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="banner-overlay bg-60"></div>
            </div>

            {/* Services numbers */}
            <div className="services-numbers section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center">Web Development Company</h2>
                            <div className="heading5 text-center">IosAndWeb Technologies delivers the best web development services in London,Birmingham and many areas of United Kingdom by having an expert and professional team of web developers. The team is especially known for its effective knowledge in creating virtual branding and standardized websites compatible with all the devices.</div>

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
                                <h3>Web Development Services</h3>
                            </div>
                            <div className="leadsubtxt">
                                For over a decade, we have been serving with our web development services in UK as well as abroad. While developing your website, our team uses the latest techniques like ultra-clean and bold styles for the standard-based markup codes of the websites that help in improving the position in SERPs and increase conversions. 
                                <br></br>As a web development company, we know that it is important to have a great website for a good online presence and it leaves the first impression on your website visitors. Some people consider a website just as a virtual representation of their company but it is not only that. Your website is the reflector of your business objectives and goals. That’s why having an appealing, attractive, informative website is necessary for a great online presence.
                            </div>
                        </Col>
                        <Col lg={5}>
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
                                <p className="paragraph">We web development agency providing security assistance to the websites of our clients is our priority. To make the website safe & secure, we implement all the security layers and make the entire web experience effective.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={3} className="why-choose-col">
                            <div className="why-choose-list-item change-bg">
                                <img src={architecture} alt="Architecture" className="why-choose-icon" />
                                <h3 className="heading4">Smart Application Architecture</h3>
                                <p className="paragraph">Our frontend developer and backend developer  make apps and websites with a systematic approach and plan the project from its initial to the final stage. With this, it becomes easy to analyze the complexity and technical needs of the project.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={3} className="why-choose-col">
                            <div className="why-choose-list-item">
                                <img src={costSaving} alt="Cost Saving" className="why-choose-icon" />
                                <h3 className="heading4">Long Term Cost Saving</h3>
                                <p className="paragraph">Our expert team of developers does coding in such a flexible way that in the future if you need to upgrade ecommerce magento development the features then you do not need to do any major changes.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={3} className="why-choose-col">
                            <div className="why-choose-list-item change-bg">
                                <img src={support} alt="Great Support" className="why-choose-icon" />
                                <h3 className="heading4">Great Support</h3>
                                <p className="paragraph">Our work doesn't get completed with the submission of the final project. We provide promising support after services for the maintenance of delivered projects.We Offer An Extensive Range Of Solutions For Web Development Projects Of Every Niche.</p>
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

            {/* final reflection section */}
            <div className="final-reflection-section section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2">Final Reflections</h2>
                            <div className="heading5">IosAndWeb Technologies is a leading Website Development Company that will help you to make your visions into reality. Get our affordable web development services and get an interactive online presence on the web.</div>

                            <div className="services-bottom-flex">
                                <div className="services-bottom-wrap">
                                    <div className="services-bottom-div">
                                        <a href="/software-development">
                                            <img src={webDevelopment} className="services-bottom-front-image" alt="Software Development" />
                                            <h4 className="heading4">Software Development Services</h4>
                                        </a>
                                    </div>
                                </div>

                                <div className="services-bottom-wrap">
                                    <div className="services-bottom-div">
                                        <a href="/">    
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