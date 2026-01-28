import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronRight, Home } from 'lucide-react';
import './Breadcrumbs.css';

/**
 * Breadcrumbs component with Schema.org BreadcrumbList markup for SEO
 * @param {Array} items - Array of {name, path} objects representing breadcrumb trail
 */
const Breadcrumbs = ({ items = [] }) => {
    const siteUrl = 'https://acewebsites.com.br';

    // Build full breadcrumb trail with Home
    const breadcrumbTrail = [
        { name: 'Início', path: '/' },
        ...items
    ];

    // Generate Schema.org BreadcrumbList
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbTrail.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": `${siteUrl}${item.path}`
        }))
    };

    return (
        <>
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>
            </Helmet>

            <nav className="breadcrumbs" aria-label="Breadcrumb">
                <ol className="breadcrumbs__list">
                    {breadcrumbTrail.map((item, index) => {
                        const isLast = index === breadcrumbTrail.length - 1;

                        return (
                            <li key={item.path} className="breadcrumbs__item">
                                {index === 0 && (
                                    <Home size={14} className="breadcrumbs__home-icon" />
                                )}

                                {isLast ? (
                                    <span className="breadcrumbs__current" aria-current="page">
                                        {item.name}
                                    </span>
                                ) : (
                                    <>
                                        <Link to={item.path} className="breadcrumbs__link">
                                            {item.name}
                                        </Link>
                                        <ChevronRight size={14} className="breadcrumbs__separator" aria-hidden="true" />
                                    </>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </nav>
        </>
    );
};

export default Breadcrumbs;
