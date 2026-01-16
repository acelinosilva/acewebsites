import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, canonical, image }) => {
    const siteName = 'AceWeb';
    const defaultDescription = 'Agência de Criação de Sites em Brasília DF. Especialistas em Desenvolvimento Web, Landing Pages e SEO. Sites rápidos que geram resultados. Peça seu orçamento!';
    const defaultImage = 'https://acewebsites.com.br/og-image.jpg';
    const siteUrl = 'https://acewebsites.com.br';

    const fullTitle = title ? `${title} | ${siteName}` : `${siteName} - Criação de Sites em Brasília e Todo Brasil`;
    const metaDescription = description || defaultDescription;
    const metaImage = image || defaultImage;
    const metaCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

    return (
        <Helmet>
            {/* Standard Types */}
            <title>{fullTitle}</title>
            <meta name="description" content={metaDescription} />
            <link rel="canonical" href={metaCanonical} />
            <meta name="robots" content="index, follow" />

            {/* Geo Tags for Local SEO */}
            <meta name="geo.region" content="BR-DF" />
            <meta name="geo.placename" content="Brasília" />
            <meta name="geo.position" content="-15.7942;-47.8822" />
            <meta name="ICBM" content="-15.7942, -47.8822" />

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
