import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SEO from "../components/SEO";

function NoPage(){
    return(
        <>
            <SEO
                title="404 Page Not Found - IosAndWeb Technologies"
                name='IosAndWeb Technologies'
            />

            <div className="nopage section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h1>404 Page Not Found</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default NoPage