import React from 'react';
import { Helmet } from 'react-helmet-async';
import { faqData } from '../data/faq';

const SchemaMarkup = ({ locationData }) => {
    const siteUrl = "https://acewebsites.com.br";
    
    // Fallback to Brasília if no locationData is provided
    const location = locationData || {
        name: "Brasília",
        region: "DF",
        coordinates: { lat: -15.7942, lng: -47.8822 },
        type: "City"
    };

    const orgSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": `AceWeb - Criação de Sites em ${location.name}`,
        "image": `${siteUrl}/logo.png`,
        "@id": siteUrl,
        "url": siteUrl,
        "telephone": "+5561996986162",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": location.street || "Setor Comercial Sul",
            "addressLocality": location.name,
            "addressRegion": location.region,
            "postalCode": location.postalCode || "70000-000",
            "addressCountry": "BR"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": location.coordinates.lat,
            "longitude": location.coordinates.lng
        },
        "areaServed": [
            {
                "@type": location.type || "City",
                "name": location.name
            },
            {
                "@type": "Country",
                "name": "Brazil"
            }
        ],
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
            ],
            "opens": "09:00",
            "closes": "18:00"
        },
        "sameAs": [
            "https://www.instagram.com/aceweb_sites",
            "https://www.facebook.com/acewebsites",
            "https://br.linkedin.com/company/aceweb-sites"
        ],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
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
        "description": `Desenvolvimento de sites modernos, rápidos e otimizados para o Google em ${location.name} e todo o Brasil.`,
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
