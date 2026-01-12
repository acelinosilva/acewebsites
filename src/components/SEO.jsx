import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, canonical, image }) => {
    const siteName = 'AceWeb';
    const defaultDescription = 'Criação de Sites Profissionais em Brasília DF e todo o Brasil. Sites modernos, rápidos e otimizados para o Google. Landing Pages de Alta Conversão. Solicite um orçamento!';
    const defaultImage = 'https://acewebsites.com.br/og-image.jpg'; // Ensure this image exists or use a variable
    const siteUrl = 'https://acewebsites.com.br';

    const fullTitle = title ? `${title} | ${siteName}` : `${siteName} - Criação de Sites Profissionais`;
    const metaDescription = description || defaultDescription;
    const metaImage = image || defaultImage;
    const metaCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

    return (
        <Helmet>
            {/* Standard Types */}
            <title>{fullTitle}</title>
            <meta name="description" content={metaDescription} />
            {keywords && <meta name="keywords" content={keywords} />}
            <link rel="canonical" href={metaCanonical} />

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
