import React from "react";
import './style.css';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

import SEO from "../../../components/SEO";
import ContactForm from "../../../components/ContactForm";
import GetStarted from "../../../components/GetStarted";
import NumbersCards from "../../../components/NumbersCards";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";

// reasons to choose images
import designDevelopment from '../../../images/services/software-development/design-development.png';
import moreSecure from '../../../images/services/software-development/more-secure.png';
import participate from '../../../images/services/software-development/participate.png';
import lowerCosts from '../../../images/services/software-development/lower-costs.png';
import stepAbove from '../../../images/services/software-development/step-above.png';
import routineTasks from '../../../images/services/software-development/routine-tasks.png';
import humanErrors from '../../../images/services/software-development/human-error.png';
import integration from '../../../images/services/software-development/integration.png';
import instantSupport from '../../../images/services/software-development/instant-support.png';
import license from '../../../images/services/software-development/license.png';

// final reflection images
import webDevelopment from '../../../images/services/software-development/app-development.png';
import magento from '../../../images/services/software-development/magento.png';
import shopify from '../../../images/services/software-development/shopify.png';

function SoftwareDevelopment(){

    return(
        <>

            <SEO
                title='Custom Software Development Company - IAW Technologies'
                description='Our custom software development services are designed to help businesses in streamline processes, boost productivity, and achieve success.'
                name='IosAndWeb Technologies'
            />

            {/* Software Development Banner */}
            <div className="software-development-banner banner-padding text-white position-relative">
                <Container className="z-index-1">
                    <Row>
                        <Col lg={8} xl={6}>
                            <div className="heading-wrapper full-width">
                                <h1>Custom <span className="text-highlight">Software Development</span> Company</h1>
                                <div className="heading5">Business organizations should be aware of these developments and react if they don't want to fall below their competitors. The corporate world is always evolving and changing in terms of technology. Utilizing specialised business software solutions aims to improve and simplify daily work, data management, and general customer interactions. It's common to want to be more creative, productive, and economical. Actually, industries witnessed a revolution as a result of this.</div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="banner-overlay"></div>
            </div>

            {/* Services numbers */}
            <div className="services-numbers section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center">Software Development Company</h2>
                            <div className="heading5 text-center">But in the contemporary world, the goals are achieved by putting into practise customised software solutions that are built to exactly match certain business needs with Custom software development company. Because of this, every company today gives business software solutions the highest importance conceivable. The various applications of custom software solutions entirely depend on the distinct needs of each company.</div>

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
                                <h3>What is a software solution?</h3>
                            </div>
                            <div className="leadsubtxt">
                                In its simplest form, a software solution is a programme made to handle all the moment repetitive duties or for the routine jobs that are meant to be automated. Its goal is to encourage convenience and quickness.
                                <br></br>
                                A focused development method is used to generate a custom software solution, which results in a special software programme that is tailored to the particular needs of a given firm. Today, every organisation, regardless of size, requires a custom software solution to satisfy its own business requirements with Software development company.
                            </div>
                        </Col>
                        <Col lg={5}>
                            <ContactForm />
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Reasons to choose section */}
            <div className="reasons-to-choose section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2">Reasons to Choose Software</h2>
                            <div className="heading5">Custom software development aims to produce software solutions that are customized to a company's particular business needs. Many organisations often reject the idea of developing, implementing, and maintaining a custom software solution for themselves due to the expenses involved with software developer.</div>
                            <div className="heading5">Rest assured, though, that these are merely initial investments that can be swiftly recovered by addressing certain problems that the market's typical, off-the-shelf solutions are unable to solve. Because there are so many commercially accessible software solutions, many organisations may not require a software solution that is specifically tailored for them with software development services. But it has been shown that when a piece of software is made especially to meet a particular set of business demands, performance and efficiency rise, providing the business a competitive edge in the market.The top ten reasons for developing a unique software solution are listed below.</div>
                        </Col>
                    </Row>
                    <div className="reasons-tab-block">
                        <Tab.Container id="reasons-tab" defaultActiveKey="first">
                                <div className="reasons-tab-left reasons-tab-cols">
                                    <Nav variant="pills" className="reasons-tab flex-column">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first"><FontAwesomeIcon icon={faCircleDot} /> Accurate Design and Development to Meet Your Unique Business Needs</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second"><FontAwesomeIcon icon={faCircleDot} /> Custom software that is Clearly More Secure</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third"><FontAwesomeIcon icon={faCircleDot} /> You Can Participate In The Development Process Yourself</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="fourth"><FontAwesomeIcon icon={faCircleDot} /> Lower Operating Costs</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="fifth"><FontAwesomeIcon icon={faCircleDot} /> A step above the opposition</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="sixth"><FontAwesomeIcon icon={faCircleDot} /> Computerization of Routine Tasks</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="seventh"><FontAwesomeIcon icon={faCircleDot} /> Lower rates of human error</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="eight"><FontAwesomeIcon icon={faCircleDot} /> Integration With Third-Party Software</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="ninth"><FontAwesomeIcon icon={faCircleDot} /> Instant Technical Support</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="tenth"><FontAwesomeIcon icon={faCircleDot} /> Contract for Individual Software License</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </div>
                                <div className="reasons-tab-right reasons-tab-cols">
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <div className="reasons-tab-content">
                                                <img src={designDevelopment} alt="Accurate Design" className="reasons-content-icon" />
                                                <h3 className="heading3">Accurate Design and Development to Meet Your Unique Business Needs</h3>
                                                <p className="paragraph">Because each organisation has specific criteria that are also unique, finding a solution that precisely fits all the requirements is very difficult with software development consultant. By choosing a custom software for your business, you have a wide range of alternatives and choices for the development and success of your enterprise. The software and application will be developed specifically for your company because custom software development is tailored to the person. It may be used easily and implemented throughout your entire firm.</p>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <div className="reasons-tab-content">
                                                <img src={moreSecure} alt="More Secure" className="reasons-content-icon" />
                                                <h3 className="heading3">Custom software that is Clearly More Secure</h3>
                                                <p className="paragraph">The additional security that your programme delivers is unequalled by any other commercial software because it cannot be used by other companies with Top Custom software development company. 
                                                <br></br>Use software designed expressly for your company to limit the risks and hazards associated with outside hacking and data theft.Using a custom software solution secures and protects all of your data, and you can add extra security levels according to your tastes and needs with a tech company. 
                                                <br></br>The level of protection provided by a custom software programme is simply unequalled by any other business application that is created for use by a variety of enterprises.</p>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third">
                                            <div className="reasons-tab-content">
                                                <img src={participate} alt="Participate" className="reasons-content-icon" />
                                                <h3 className="heading3">You Can Participate In The Development Process Yourself</h3>
                                                <p className="paragraph">Since you undoubtedly possess the most in-depth knowledge of your field, the majority of software development companies value your suggestions, ideas, and feedback for crucial features as well as your involvement in the software development process.</p>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="fourth">
                                            <div className="reasons-tab-content">
                                                <img src={lowerCosts} alt="Lower Costs" className="reasons-content-icon" />
                                                <h3 className="heading3">Lower Operating Costs</h3>
                                                <p className="paragraph">Typical, commercially available software incurs additional costs due to the need to purchase auxiliary hardware in order for it to operate effectively with software company. ROI is another crucial component that any business seeks (Return on Investment). A customized software solution also unquestionably enhances workflow and increases investment returns.</p>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="fifth">
                                            <div className="reasons-tab-content">
                                                <img src={stepAbove} alt="A step above" className="reasons-content-icon" />
                                                <h3 className="heading3">A step above the opposition</h3>
                                                <p className="paragraph">The major objective of a general off-the-shelf solution is to boost productivity and accessibility for your business. Additionally, this gives your business an advantage over rivals. Pre-made software will be very similar to what your competitors now have. Your company would have very little chance of successfully differentiating itself and securing a dominant position in the market because you too have a matching tool at your disposal with experience software developer. However, you will surely enhance your dominance if your procedures are simplified and you provide better, more efficient service.</p>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="sixth">
                                            <div className="reasons-tab-content">
                                                <img src={routineTasks} alt="Routine Tasks" className="reasons-content-icon" />
                                                <h3 className="heading3">Computerization of Routine Tasks</h3>
                                                <p className="paragraph">All corporate organization has a variety of monotonous and repetitive tasks that quickly wear out its staff. These duties are automated by a well-crafted, custom software solution, saving time and resources that may be better utilised for generating new client leads, employee training, or extending your service offering. Your mundane business operations can be expertly automated by a custom software solution, and WhoppingSEO.com may be a terrific supplier.</p>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="seventh">
                                            <div className="reasons-tab-content">
                                                <img src={humanErrors} alt="Human Errors" className="reasons-content-icon" />
                                                <h3 className="heading3">Lower rates of human error</h3>
                                                <p className="paragraph">The chance of making a human error increases significantly when running a business manually. A specialised software solution can considerably reduce these fluctuations, protecting your business from negative repercussions with Custom software development services.</p>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="eight">
                                            <div className="reasons-tab-content">
                                                <img src={integration} alt="Integration" className="reasons-content-icon" />
                                                <h3 className="heading3">Integration With Third-Party Software</h3>
                                                <p className="paragraph">The compatibility of pre-made software with your current tools is not always indicated. However, if your software solution were custom-made for you, you could simply ask for an integration that functions with your current hardware and other running third-party services with a Software consulting company. Customized software easily integrates into the environment of existing company software, eliminating any integration difficulties.</p>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="ninth">
                                            <div className="reasons-tab-content">
                                                <img src={instantSupport} alt="Instant Support" className="reasons-content-icon" />
                                                <h3 className="heading3">Instant Technical Support</h3>
                                                <p className="paragraph">Instant access to the technical support department of your provider or software development firm is a crucial benefit of using a bespoke solution for your company. You may easily correct all of your flaws as a result of this.</p>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="tenth">
                                            <div className="reasons-tab-content">
                                                <img src={license} alt="Software License" className="reasons-content-icon" />
                                                <h3 className="heading3">Contract for Individual Software License</h3>
                                                <p className="paragraph">You are given complete ownership of the optimizer code as well as complete authority and administration when you develop custom software for your business.</p>
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </div>
                        </Tab.Container>
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
                            <div className="heading5">There are certain technical abilities you must possess to become a successful programmer, regardless of whether you are studying computer science or taking a course to become a software engineer or developer with CRM software development. Technology is enormous, and there are a huge number of new tools, systems, and languages being released every day. Regardless of your level of expertise, as a contemporary developer you should know how to incorporate cutting-edge technologies as well as other technical aspects into your work to produce high-quality hardware or software. Our reliance on software will only increase as we gradually move towards a new era of smartphone apps, automation, and post-pandemic living. This is not always a bad thing because applications have the ability to significantly improve our lives. </div>

                            <div className="services-bottom-flex">
                                <div className="services-bottom-wrap">
                                    <div className="services-bottom-div">
                                        <a href="/web-development">
                                            <img src={webDevelopment} className="services-bottom-front-image" alt="Web Development" />
                                            <h4 className="heading4">Web Development Services</h4>
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

export default SoftwareDevelopment;