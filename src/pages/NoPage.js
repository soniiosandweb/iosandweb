import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function NoPage(){
    return(
        <>
            <div className="nopage">
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