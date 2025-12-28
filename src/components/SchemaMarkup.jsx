import React from 'react';
import { Helmet } from 'react-helmet-async';
import { faqData } from '../data/faq';

const SchemaMarkup = () => {
    const orgSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "AceWeb - Criação de Sites em Brasília",
        "image": "https://aceweb.com.br/logo.png",
        "@id": "https://aceweb.com.br",
        "url": "https://aceweb.com.br",
        "telephone": "+5561996986162",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Setor Comercial Sul",
            "addressLocality": "Brasília",
            "addressRegion": "DF",
            "postalCode": "70000-000",
            "addressCountry": "BR"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": -15.7942,
            "longitude": -47.8822
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "09:00",
            "closes": "18:00"
        },
        "sameAs": [
            "https://www.instagram.com/aceweb",
            "https://www.facebook.com/aceweb"
        ],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "512"
        }
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Criação de Sites Profissionais",
        "provider": {
            "@type": "LocalBusiness",
            "name": "AceWeb"
        },
        "areaServed": {
            "@type": "Country",
            "name": "Brazil"
        },
        "description": "Desenvolvimento de sites modernos, rápidos e otimizados para o Google. Criação de landing pages, sites institucionais e lojas virtuais em Brasília e todo o Brasil.",
        "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(orgSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(serviceSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(faqSchema)}
            </script>
        </Helmet>
    );
};

export default SchemaMarkup;
