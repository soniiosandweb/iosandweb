import React from "react";
import './style.css';
import { Container, Row, Col } from "react-bootstrap";
import SEO from "../../../components/SEO";

import eCommerceBanner from '../../../images/industries/eCommerce/ecommerce-banner.avif';

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
        </>
    )
}

export default Ecommerce;