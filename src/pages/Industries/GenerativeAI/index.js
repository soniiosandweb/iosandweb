import React from "react";
import './style.css';
import { Container, Row, Col } from "react-bootstrap";
import SEO from "../../../components/SEO";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import generativeAIBanner from '../../../images/industries/generative-ai/generative-ai-banner.webp';

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
        </>
    )
}

export default GenerativeAI;