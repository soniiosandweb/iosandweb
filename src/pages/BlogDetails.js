import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { Row, Col, Container } from "react-bootstrap";
import SEO from "../components/SEO";

function BlogDetails(){
    const url = useParams().url;
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [date, setDate] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {

        axios.get('/blogs.json')
        .then(res => {
            for(var i = 0; i < res.data.length; i++) {      
                var obj = res.data[i];      
                if(obj.url === url){          
                    setTitle(obj.title);
                    setImage(obj.image);
                    setDate(obj.date);
                    setContent(obj.content);
                } 
             }  
        })
        .catch(() => {
            console.log('Error')
        })
    }, [url]);

    return(
        <>
            <SEO
                title={title}
                name='IosAndWeb Technologies'
            />

            <div className="blog-detail-page section-padding" style={{backgroundImage: `url(${image})`}}>
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
    )
}

export default BlogDetails