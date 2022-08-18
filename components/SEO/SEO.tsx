import Head from 'next/head'

import { config } from '../../blogConfig';

interface Props {
    title: string;
    description: string;
    keywords: string[];
    socialImgPic: string | undefined;

}

function SEO({ title, description, keywords, socialImgPic = "/public/images/ITMAGINATION_Logo_big_with_bg.png" }: Props) {
    return (
        <Head>
            <title key={"seo-title"}>{title}</title>
            <meta key="seo-description" name="description" content={description} />
            <meta key="seo-keywords" name="keywords" content={keywords.join(", ")} />
            <meta key="seo-twitter-card" name="twitter:card" content="summary_large_image" />
            {config.twitterUserName && <meta key="seo-tt-creator" name="twitter:creator" content={config.twitterUserName} />}
            <meta key="seo-tt-title" name="twitter:title" content={title} />
            <meta key="seo-tt-description" name="twitter:description" content={description} />
            <meta key="seo-tt-img" name="twitter:image" content={`${config.domainName}/${socialImgPic}`} />
            <meta key="seo-og-title" property="og:title" content={title} />
            <meta key="seo-og-type" property="og:type" content="website" />
            <meta key="seo-og-img" property="og:image" content={`${config.domainName}/${socialImgPic}`} />
        </Head>
    )
}

export default SEO