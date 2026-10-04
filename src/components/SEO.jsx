import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, canonical, image, keywords, geoRegion, geoPlacename, geoPosition }) => {
    const siteName = 'Aceweb';
    const defaultDescription = 'Especialistas em criação de sites em Brasília - DF e para todo o Brasil. Sites com SEO, design moderno e entrega rápida. Entre em contato agora!';
    const defaultImage = 'https://acewebsites.com.br/og-image.jpg';
    const siteUrl = 'https://acewebsites.com.br';
    const defaultKeywords = 'criação de sites em Brasília, criação de sites no df, criação de sites em são paulo, criação de sites em Minas Gerais, criação de sites em Brasília DF, desenvolvimento de sites Brasília, empresa de criação de sites DF, criação de sites no Rio de Janeiro, criação de sites em Belo Horizonte, criação de sites em Campo Grande, site profissional para empresa, criação de site com WordPress, criação de sites com ia, criação de sistemas web, orçamento para criação de site em Brasília, criação de site para advogado Brasília, criação de sites para dentistas, criação de site para clínica Brasília';

    // Format fullTitle avoiding duplicate brand names
    let fullTitle = `${siteName} - Criação de Sites Profissionais em Brasília-DF e Todo o Brasil`;
    if (title) {
        fullTitle = title.toLowerCase().includes(siteName.toLowerCase()) ? title : `${title} | ${siteName}`;
    }

    const metaDescription = description || defaultDescription;
    const metaImage = image || defaultImage;
    const metaCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
    const metaKeywords = keywords || defaultKeywords;

    // Dynamic Geo tags with fallback to Brasília
    const metaGeoRegion = geoRegion || 'BR-DF';
    const metaGeoPlacename = geoPlacename || 'Brasília';
    const metaGeoPosition = geoPosition || '-15.7942;-47.8822';
    const metaICBM = geoPosition ? geoPosition.replace(';', ', ') : '-15.7942, -47.8822';

    // Directly update DOM to ensure browser extensions and inspectors immediately see the dedicated SEO tags
    useEffect(() => {
        document.title = fullTitle;

        const updateTag = (selector, attr, val) => {
            const el = document.querySelector(selector);
            if (el) {
                el.setAttribute(attr, val);
            }
        };

        updateTag('meta[name="description"]', 'content', metaDescription);
        updateTag('meta[name="keywords"]', 'content', metaKeywords);
        updateTag('meta[property="og:title"]', 'content', fullTitle);
        updateTag('meta[property="og:description"]', 'content', metaDescription);
        updateTag('meta[property="og:image"]', 'content', metaImage);
        updateTag('meta[property="og:url"]', 'content', metaCanonical);
        updateTag('meta[name="twitter:title"]', 'content', fullTitle);
        updateTag('meta[name="twitter:description"]', 'content', metaDescription);
        updateTag('meta[name="twitter:image"]', 'content', metaImage);
        updateTag('link[rel="canonical"]', 'href', metaCanonical);
    }, [fullTitle, metaDescription, metaKeywords, metaCanonical, metaImage]);

    return (
        <Helmet>
            {/* Standard Types */}
            <title>{fullTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={metaKeywords} />
            <link rel="canonical" href={metaCanonical} />
            <meta name="robots" content="index, follow" />

            {/* Geo Tags for Local SEO */}
            <meta name="geo.region" content={metaGeoRegion} />
            <meta name="geo.placename" content={metaGeoPlacename} />
            <meta name="geo.position" content={metaGeoPosition} />
            <meta name="ICBM" content={metaICBM} />

            {/* Hreflang for International SEO */}
            <link rel="alternate" href={metaCanonical} hrefLang="pt-BR" />
            <link rel="alternate" href={metaCanonical} hrefLang="x-default" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={metaCanonical} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={metaImage} />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:locale" content="pt_BR" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={metaCanonical} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={metaImage} />
        </Helmet>
    );
};

export default SEO;
