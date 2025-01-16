import React from "react";
import { Helmet } from "react-helmet-async";

function SEO({title, description, name, keywords, canonicalUrl}){
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
                <meta name="twitter:creator" content={name ? name : 'IosAndWeb Technologies'} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />

                <link rel="canonical" href={canonicalUrl ? canonicalUrl : process.env.REACT_APP_API_URL } />

            </Helmet>
        </>
    )
}
export default SEO;