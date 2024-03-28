import React from "react";
import './style.css';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import SEO from "../../../components/SEO";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faCircleDot } from "@fortawesome/free-solid-svg-icons";

import generativeAIBanner from '../../../images/industries/generative-ai/generative-ai-banner.webp';

// reasons to choose images
import modelDevelopment from '../../../images/industries/generative-ai/model-development.png';
import modelReplication from '../../../images/industries/generative-ai/model-replication.png';
import modelDeployment from '../../../images/industries/generative-ai/model-deployment.png';
import maintenance from '../../../images/industries/generative-ai/maintenance.png';
import modelTuning from '../../../images/industries/generative-ai/model-tuning.png';
import modelArchitecting from '../../../images/industries/generative-ai/architecting.png';

function GenerativeAI(){
    return(
        <>
            <SEO
                title="Generative AI Development - IosAndWeb Technologies"
            />

            {/* Banner section */}
            <div className="industries-banner banner-padding">
                <Container>
                    <Row className="align-items-center">
                        <Col>
                            <div className="heading-wrapper industries-header text-center">
                                <h1 className="text-black"><span className="text-highlight">Generative AI</span> Development Services</h1>
                                <div className="heading5">Deploy the revolutionary capabilities of Generative AI to scale your business to a new growth landscape</div>

                                <div className="btn-section mb-5">
                                    <a href="/contact-us" className="btn btn-blue-border">Consult Our Experts <FontAwesomeIcon icon={faChevronRight} /></a>
                                </div>

                            </div>
                            <div className="industries-banner-image">
                                <img className="responsive-img" src={generativeAIBanner} alt="Generative AI" />
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
                            <h2 className="heading2 max-width-70">Capture Global Attention with State-of-the-Art Generative AI Services</h2>
                            <div className="heading5 max-width-70">Our 100+ adept professionals leverage generative artificial intelligence to create intelligent applications unlocking boundless possibilities. By seamlessly integrating generative AI into your digital products, we help you enhance efficiency, streamline processes, and skyrocket your business to new heights.</div>
                        </Col>
                    </Row>
                    <div className="reasons-tab-block">
                        <Tab.Container id="reasons-tab" defaultActiveKey="first">
                            <div className="reasons-tab-left reasons-tab-cols">
                                <Nav variant="pills" className="reasons-tab flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first"><FontAwesomeIcon icon={faCircleDot} /> Generative AI Model Development</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second"><FontAwesomeIcon icon={faCircleDot} /> Generative AI Model Replication</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third"><FontAwesomeIcon icon={faCircleDot} /> Model Integration and Deployment</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fourth"><FontAwesomeIcon icon={faCircleDot} /> Upgrade and Maintenance</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fifth"><FontAwesomeIcon icon={faCircleDot} /> AI Model Fine Tuning</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="sixth"><FontAwesomeIcon icon={faCircleDot} /> AI Model Architecting</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                            <div className="reasons-tab-right reasons-tab-cols">
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <div className="reasons-tab-content">
                                            <img src={modelDevelopment} alt="Model Development" className="reasons-content-icon" />
                                            <h3 className="heading3">Generative AI Model Development</h3>
                                            <p className="paragraph">Our team harnesses the power of machine learning algorithms, including RNNs, Transformers, Markov Chain, GANs, and Autoencoders for developing bespoke generative AI models that meet your specific business requirements. We carefully configure and train these models as per industry standards to ensure high-quality generative AI solutions development.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <div className="reasons-tab-content">
                                            <img src={modelReplication} alt="Model Replication" className="reasons-content-icon" />
                                            <h3 className="heading3">Generative AI Model Replication</h3>
                                            <p className="paragraph">As a leading generative AI development company, we offer high-end generative AI model replication services that enable businesses to replicate successful models such as ChatGPT and DALL-E, thus accelerating growth and innovation. Our generative AI modeling services help them unlock new growth opportunities and gain a competitive edge in their niche.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <div className="reasons-tab-content">
                                            <img src={modelDeployment} alt="Model Deployment" className="reasons-content-icon" />
                                            <h3 className="heading3">Model Integration and Deployment</h3>
                                            <p className="paragraph">Our team thoroughly evaluates your business needs to guarantee a secure and efficient integration and deployment of AI models. Our all-inclusive Generative AI development services comprise building the most suitable model, customizing it to meet your specifications, and effectively managing the integration, testing, and deployment process.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fourth">
                                        <div className="reasons-tab-content">
                                            <img src={maintenance} alt="Maintenance" className="reasons-content-icon" />
                                            <h3 className="heading3">Upgrade and Maintenance</h3>
                                            <p className="paragraph">Our highest priority is helping our clients stay at the forefront of technology. As a leading generative AI consulting services provider, our skilled developers upgrade and maintain generative AI models, allowing businesses to optimize performance, adapt to evolving requirements, and drive continued growth and innovation.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fifth">
                                        <div className="reasons-tab-content">
                                            <img src={modelTuning} alt="Model Tuning" className="reasons-content-icon" />
                                            <h3 className="heading3">AI Model Fine Tuning</h3>
                                            <p className="paragraph">Our AI model fine-tuning service involves optimizing and customizing the previously-trained AI models, allowing them to adapt to changing or domain-specific use cases and data sets. Leveraging the existing AI models and tweaking them finely allows for more accurate predictions and improved decision-making capabilities.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="sixth">
                                        <div className="reasons-tab-content">
                                            <img src={modelArchitecting} alt="Model Architecting" className="reasons-content-icon" />
                                            <h3 className="heading3">AI Model Architecting</h3>
                                            <p className="paragraph">Our team of artificial intelligence experts is highly equipped to collaborate with you in designing and architecting new or existing AI models, selecting the appropriate neural network architecture and optimizing hyperparameters. As a dedicated Generative AI solutions provider, our unmatched efficiency and proven experience can convert your business vision into functional solutions that effectively addresses real-world problems in real time.</p>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </div>
                        </Tab.Container>
                    </div>
                </Container>
            </div>

            {/* Industries Numbers section */}
            <div className="industries-numbers-section section-padding">
                <Container>
                    <Row>
                        <Col>
                            <div className="industries-numbers">
                                <div className="industries-numbers-left">
                                    <h2 className="heading2">Build a strong ground to grow your Generative AI idea</h2>
                                    <a href="/contact-us" className="btn btn-blue-border">Consult Our Experts <FontAwesomeIcon icon={faChevronRight} /></a>
                                </div>
                                <div className="industries-numbers-right">
                                    <ul className="industries-numbers-list">
                                        <li className="industries-numbers-list-item">
                                            <span className="industries-numbers-span">50+</span>
                                            <span className="industries-numbers-text">Tech Experts Under One Roof</span>
                                        </li>
                                        <li className="industries-numbers-list-item">
                                            <span className="industries-numbers-span">10+</span>
                                            <span className="industries-numbers-text">Years of experience</span>
                                        </li>
                                        <li className="industries-numbers-list-item">
                                            <span className="industries-numbers-span">95%</span>
                                            <span className="industries-numbers-text">Client Satisfaction Rate</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default GenerativeAI;