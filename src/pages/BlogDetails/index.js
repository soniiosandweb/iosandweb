import React, { useState, useEffect } from "react";
import './style.css';
import { useLocation, useParams } from "react-router-dom";
import axios from 'axios';
import { Row, Col, Container, Spinner } from "react-bootstrap";
import SEO from "../../components/SEO";
const defaultImage = `${process.env.REACT_APP_API_URL}/assests/images/placeholder-image.webp`;

function BlogDetails(){
    const url = useParams().url;
    const location = useLocation();
    const [blogId, setBlogId] = useState(null);
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [date, setDate] = useState("");
    const [content, setContent] = useState("");
    const [seoTitle, setSeoTitle] = useState("");
    const [seoDescription, setSeoDescription] = useState("");
    const [seoKeyword, setSeoKeyword] = useState("");
    const [loading, setLoading] = useState(true);

    const [relatedPost, setRelatedPost] = useState([]);
    const [relatedLoading, setRelatedLoading] = useState(true);

    useEffect(() => {

        axios({
            method: "post",
            url: `${process.env.REACT_APP_BLOG_API_URL}/blog-details-api.php`,
            data: JSON.stringify({
                post_url: url
                }),
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
        })
        .then(res => {
            for(var i = 0; i < res.data.length; i++) {
                var obj = res.data[i];
                if(obj.url === url){
                    setBlogId(obj.id);
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

        // Related Post
        if(blogId && blogId !== null){
            axios({
                method: "post",
                url: `${process.env.REACT_APP_BLOG_API_URL}/related-blog-api.php`,
                data: JSON.stringify({
                    post_url: blogId
                    }),
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
            })
            .then(res => {
                setRelatedPost(res.data);
            })
            .catch(() => {
                console.log('Error')
            })
            .finally(() => {
                setRelatedLoading(false);
            })
        }
        

    }, [url, blogId]);

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
                        name={"IosAndWeb Technologies"}
                        keywords={seoKeyword}
                        canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
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

            <div className="blog-page section-padding no-top-padding">
                <Container>
                    <Row>
                        <Col>
                            <div className="leadtxt text-center">
                                <h3>Feature Blog</h3>
                            </div>
                        </Col>
                    </Row>
                    <Row className="related-blogs-list">
                        
                        {
                            relatedLoading ?
                            <>
                                <div className="blog_spinner text-center">
                                    <Spinner as="span" animation="border" size="xl" role="status" aria-hidden="true" />
                                </div>
                            </>
                            : 
                            <>
                                {relatedPost && relatedPost.map((item, index) => 
                            
                                    <Col lg={6} xl={3} className="blog-col" key={item.id}>
                                        <div className="blog-list-item related-blog-item">
                                            <a key={index} href={"/blog/"+item.url}>
                                                <img src={item.image ? item.image : defaultImage} className="blog-image" alt="Proven Strategies" />
                                            </a>
                                            <div className="blog-detail">
                                                <h5><span className="blog-date">{item.date}</span></h5>
                                                <a key={index} href={"/blog/"+item.url}>
                                                    <h4>{item.title}</h4>
                                                </a>
                                            </div>
                                        </div>
                                    </Col>
                                )}
                            </>
                        }
                        

                    </Row>
                </Container>
            </div>

        </>
    )
}

export default BlogDetails