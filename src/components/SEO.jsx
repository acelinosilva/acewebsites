import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, canonical, image, keywords, geoRegion, geoPlacename, geoPosition }) => {
    const siteName = 'Aceweb';
    const defaultDescription = 'Especialistas em criação de sites em Brasília - DF e para todo o Brasil. Sites com SEO, design moderno e entrega rápida. Entre em contato agora!';
    const defaultImage = 'https://acewebsites.com.br/og-image.jpg';
    const siteUrl = 'https://acewebsites.com.br';
    const defaultKeywords = 'criação de sites, desenvolvimento web, sites profissionais, landing pages, SEO, agência digital Brasília';

    const fullTitle = title ? `${title} - ${siteName}` : `${siteName} - Criação de Sites Profissionais em Brasília-DF e Todo o Brasil`;
    const metaDescription = description || defaultDescription;
    const metaImage = image || defaultImage;
    const metaCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
    const metaKeywords = keywords || defaultKeywords;

    // Dynamic Geo tags with fallback to Brasília
    const metaGeoRegion = geoRegion || 'BR-DF';
    const metaGeoPlacename = geoPlacename || 'Brasília';
    const metaGeoPosition = geoPosition || '-15.7942;-47.8822';
    const metaICBM = geoPosition ? geoPosition.replace(';', ', ') : '-15.7942, -47.8822';

    return (
        <Helmet>
            {/* Standard Types */}
            <title>{fullTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={metaKeywords} />
            <link rel="canonical" href={metaCanonical} />
            <meta name="robots" content="index, follow" />

            {/* Geo Tags for Local SEO - Dynamic */}
            <meta name="geo.region" content={metaGeoRegion} />
            <meta name="geo.placename" content={metaGeoPlacename} />
            <meta name="geo.position" content={metaGeoPosition} />
            <meta name="ICBM" content={metaICBM} />

            {/* Hreflang for International SEO */}
            <link rel="alternate" href={metaCanonical} hreflang="pt-BR" />
            <link rel="alternate" href={metaCanonical} hreflang="x-default" />

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

