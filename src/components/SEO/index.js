import React from "react";
import { Helmet } from "react-helmet-async";

function SEO({title, description, name, keywords}){
    return(
        <>
            <Helmet>

                { /* Standard metadata tags */ }
                <title>{title}</title>
                <meta name='description' content={description} />
                { keywords ? 
                    <meta name="keywords" content={keywords} />
                    : ''
                }
                
                { /* Facebook tags */ }
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                
                { /* Twitter tags */ }
                <meta name="twitter:creator" content={name} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />

            </Helmet>
        </>
    )
}
export default SEO;