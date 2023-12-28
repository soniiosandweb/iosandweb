import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReactPaginate from "react-paginate"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from 'axios';

import portfolioImage from '../images/Project-Portfolio.png';

function Portfolio(){

    const [data, setData] = useState([])
    const [page, setPage] = useState(0);
    const [filterData, setFilterData] = useState();
    const n = 8

    useEffect(() => {

        axios.get('/portfolio.json')
        .then(res => {
            setData(res.data);
            setFilterData(
                res.data.filter((item, index) => {
                  return (index >= page * n) & (index < (page + 1) * n);
                })
            );
        })
        .catch(() => {
            console.log('Error')
        })
    }, [page]);

    return(
        <>
            <div className="portfolio-banner banner-padding text-white">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="heading-wrapper">
                                <h1>We Love To Make Websites That Make A Difference</h1>
                                <div className="heading5">Explore Why Choose IosAndWeb Technologies To Transform Your Business Ideas Into Reality</div>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <img src={portfolioImage} className="responsive-img" alt="Portfolio" />
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* portfolio list section */}

            <div className="portfolio-page section-padding">
                <Container>
                    <Row className="portfolio-list">
                        {filterData && filterData.map((item, index) => 
                            <Col md={12} className="portfolio-col" key={item.id}>
                                <div className="portfolio-list-item">
                                    <a href={item.url} rel="noreferrer" target="_blank" className="portfolio-link">
                                        <img src={item.image} alt={item.title} className="portfolio-image responsive-img" />
                                    </a>
                                    <div className="portfolio-detail">
                                        <h2 className="portfolio-title heading2">{item.title}</h2>
                                        <p className="paragraph">{item.description}</p>
                                        <a href={item.url} rel="noreferrer" target="_blank" className="btn btn-white-border portfolio-btn">View Case Study <FontAwesomeIcon icon={faChevronRight} /></a>
                                    </div>
                                </div>
                            </Col>
                        )}

                        <ReactPaginate
                            containerClassName={"pagination"}
                            pageClassName={"page-item"}
                            activeClassName={"active"}
                            onPageChange={(event) => setPage(event.selected)}
                            pageCount={Math.ceil(data.length / n)}
                            breakLabel="..."
                            previousLabel={
                                <FontAwesomeIcon icon={faChevronLeft} />
                            }
                            nextLabel={
                                <FontAwesomeIcon icon={faChevronRight} />
                            }
                        />

                    </Row>
                </Container>
            </div>
        </>
    )
}
export default Portfolio