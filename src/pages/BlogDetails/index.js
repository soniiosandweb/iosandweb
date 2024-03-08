import React, { useState, useEffect } from "react";
import './style.css';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { Row, Col, Container, Spinner } from "react-bootstrap";
import SEO from "../../components/SEO";
import defaultImage from '../../images/placeholder-image.webp';

function BlogDetails(){
    const url = useParams().url;
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [date, setDate] = useState("");
    const [content, setContent] = useState("");
    const [seoTitle, setSeoTitle] = useState("");
    const [seoDescription, setSeoDescription] = useState("");
    const [seoKeyword, setSeoKeyword] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        axios({
            method: "post",
            url: "/api/blog-details-api.php",
            data: JSON.stringify({
                post_url: url
                }),
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
        })
        .then(res => {
            for(var i = 0; i < res.data.length; i++) {
                var obj = res.data[i];
                if(obj.url === url){
                    setTitle(obj.title);
                    setImage(obj.image);
                    setDate(obj.date);
                    setContent(obj.content);
                    setSeoTitle(obj.seo_title);
                    setSeoDescription(obj.seo_description);
                    setSeoKeyword(obj.seo_keywords);
                }
            }
        })
        .catch(() => {
            console.log('Error')
        })
        .finally(() => {
            setLoading(false);
        })
    }, [url]);

    return(
        <>

            {
                loading ?
                <>
                    <div className="blog-detail-content section-padding">
                        <Container>
                            <Row>
                                <Col>
                                    <div className="blog_spinner text-center">
                                        <Spinner as="span" animation="border" size="xl" role="status" aria-hidden="true" />
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div> 
                </>
                :
                <>
                    <SEO
                        title={seoTitle}
                        description={seoDescription}
                        name='IosAndWeb Technologies'
                        keywords={seoKeyword}
                    />

                    <div className="blog-detail-page section-padding" style={{backgroundImage: `url(${image ? image : defaultImage})`}}>
                        <div className="blog-bg"></div>
                        <Container>
                            <Row>
                                <Col lg={10} className="m-auto">
                                    <h1>{title}</h1>
                                    <p className="paragraph text-white text-center">{date}</p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div className="blog-detail-content section-padding">
                        <Container>
                            <Row>
                                <Col>
                                    <div className="blog-details-content-div" dangerouslySetInnerHTML={ { __html: content } }></div>
                                </Col>
                            </Row>
                        </Container>
                    </div> 
                </>
            }

        </>
    )
}

export default BlogDetails