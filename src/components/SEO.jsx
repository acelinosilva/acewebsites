import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, canonical, image, keywords, geoRegion, geoPlacename, geoPosition }) => {
    const siteName = 'Aceweb';
    const defaultDescription = 'Especialistas em criação de sites em Brasília - DF e para todo o Brasil. Sites com SEO, design moderno e entrega rápida. Entre em contato agora!';
    const defaultImage = 'https://acewebsites.com.br/og-image.jpg';
    const siteUrl = 'https://acewebsites.com.br';
    const defaultKeywords = 'Criação de sites em São Paulo, Criação de sites em Brasília, Criação de sites em Minas Gerais, Criação de sites no Acre, Criação de sites em Alagoas, Criação de sites no Amazonas, Criação de sites na Bahia, Criação de sites no Ceará, Criação de sites no Espirito Santo, Criação de sites em Goiás, Criação de sites no Maranhão, Criação de sites no Mato Grosso, Criação de sites no Mato Grosso do Sul, Criação de sites no Pará, Criação de sites na Paraíba, Criação de sites no Paraná, Criação de sites em Pernambuco, Criação de sites no Piauí, Criação de sites no Rio de Janeiro, Criação de sites no Rio Grande do Norte, Criação de sites no Rio Grande do Sul, Criação de sites em Rondônia, Criação de sites em Roraima, Criação de sites em Santa Catarina, Criação de sites em Sergipe, Criação de sites em Tocantins, Criação de sites no Taboão da Serra, Criação de sites na Suíça, Criação de sites nos Estados Unidos, Criação de sites no DF, criação de sites brasília, sites brasília';

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

