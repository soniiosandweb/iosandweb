import React from "react";
import './style.css';
import { Container, Row, Col } from "react-bootstrap";
import {useCountUp} from "react-countup";

function SoftwareDevelopment(){
    // website delivered countup
    useCountUp({
        ref: 'website_delivered',
        start: 0,
        end: 1000,
        separator: '',
        suffix: '+',
        enableScrollSpy: true,
        scrollSpyDelay: 1000,
        scrollSpyOnce: true
    });

    // countries served countup
    useCountUp({
        ref: 'countries_served',
        start: 0,
        end: 25,
        separator: '',
        suffix: '+',
        enableScrollSpy: true,
        scrollSpyDelay: 1000,
        scrollSpyOnce: true
    });

    // web developers countup
    useCountUp({
        ref: 'web_developers',
        start: 0,
        end: 50,
        separator: '',
        suffix: '+',
        enableScrollSpy: true,
        scrollSpyDelay: 1000,
        scrollSpyOnce: true
    });

    // years experience countup
    useCountUp({
        ref: 'years_experience',
        start: 0,
        end: 10,
        separator: '',
        suffix: '+',
        enableScrollSpy: true,
        scrollSpyDelay: 1000,
        scrollSpyOnce: true
    });

    return(
        <>
            <div className="software-development-banner banner-padding text-white position-relative">
                <Container className="z-index-1">
                    <Row>
                        <Col lg={8}>
                            <div className="heading-wrapper full-width">
                                <h1>Custom <span className="text-highlight">Software Development</span> Company</h1>
                                <div className="heading5">Business organizations should be aware of these developments and react if they don't want to fall below their competitors. The corporate world is always evolving and changing in terms of technology. Utilizing specialised business software solutions aims to improve and simplify daily work, data management, and general customer interactions. It's common to want to be more creative, productive, and economical. Actually, industries witnessed a revolution as a result of this.</div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="banner-overlay"></div>
            </div>

            {/* Services panel */}
            <div className="services-numbers section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center">Software Development Company</h2>
                            <div className="heading5 text-center">But in the contemporary world, the goals are achieved by putting into practise customised software solutions that are built to exactly match certain business needs with Custom software development company. Because of this, every company today gives business software solutions the highest importance conceivable. The various applications of custom software solutions entirely depend on the distinct needs of each company. The top ten reasons for using custom software in your business are listed below.</div>

                            <div className="services-numbers-cards">
                                <div className="services-numbers-card bg-red">
                                    <span id="website_delivered" />
                                    <p className="services-numbers-text">Websites Delivered</p>
                                </div>
                                <div className="services-numbers-card bg-orange">
                                    <span id="countries_served" />
                                    <p className="services-numbers-text">Countries Served</p>
                                </div>
                                <div className="services-numbers-card bg-green">
                                    <span id="web_developers" />
                                    <p className="services-numbers-text">Web Developers</p>
                                </div>
                                <div className="services-numbers-card bg-blue">
                                    <span id="years_experience" />
                                    <p className="services-numbers-text">Years of experience</p>
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