import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
    CheckCircle2,
    ArrowRight,
    Sparkles,
    ShieldCheck,
    Clock,
    Zap,
    Star,
    Layers,
    ChevronRight,
    Check
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { services, getServiceById } from '../data/services';
import { getWhatsAppLink } from '../data/states';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import FAQ from '../components/FAQ';
import PricingCards from '../components/PricingCards';
import './ServiceDetail.css';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const service = getServiceById(serviceId);

    if (!service) {
        return <Navigate to="/servicos" replace />;
    }

    const otherServices = services.filter(s => s.id !== service.id);
    const siteUrl = 'https://acewebsites.com.br';

    // Structured Data Schema for Service
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.title,
        "serviceType": service.title,
        "provider": {
            "@type": "LocalBusiness",
            "name": "AceWeb",
            "url": siteUrl,
            "telephone": "+5561996986162",
            "priceRange": "$$"
        },
        "areaServed": {
            "@type": "Country",
            "name": "Brazil"
        },
        "description": service.metaDescription,
        "image": service.ogImage,
        "offers": {
            "@type": "Offer",
            "price": service.priceStarting ? service.priceStarting.replace(/[^0-9]/g, '') : "400",
            "priceCurrency": "BRL",
            "availability": "https://schema.org/InStock",
            "url": `${siteUrl}/servicos/${service.id}`
        }
    };

    // Structured Data Schema for FAQs
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": (service.faqs || []).map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };

    return (
        <main className="service-detail-page">
            <SEO
                title={service.metaTitle}
                description={service.metaDescription}
                keywords={service.keywords}
                canonical={`/servicos/${service.id}`}
                image={service.ogImage}
            />

            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(serviceSchema)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            {/* Hero Section */}
            <section className="service-detail-hero">
                <div className="service-detail-hero__background">
                    <div className="service-detail-hero__glow service-detail-hero__glow--1" />
                    <div className="service-detail-hero__glow service-detail-hero__glow--2" />
                    <div className="service-detail-hero__grid" />
                </div>

                <div className="container">
                    <Breadcrumbs items={[
                        { name: 'Serviços', path: '/servicos' },
                        { name: service.title, path: `/servicos/${service.id}` }
                    ]} />

                    <div className="service-detail-hero__layout">
                        <motion.div
                            className="service-detail-hero__content"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="service-detail-hero__badge-wrapper">
                                <span className="service-detail-hero__badge">
                                    <Sparkles size={14} />
                                    {service.badge || 'Serviço Especializado'}
                                </span>
                                {service.priceStarting && (
                                    <span className="service-detail-hero__price-badge">
                                        Investimento a partir de {service.priceStarting}
                                    </span>
                                )}
                            </div>

                            <h1 className="service-detail-hero__title">
                                {service.title}
                            </h1>

                            <p className="service-detail-hero__lead">
                                {service.headline || service.shortDescription}
                            </p>

                            <p className="service-detail-hero__text">
                                {service.heroSubtitle || service.description}
                            </p>

                            <div className="service-detail-hero__actions">
                                <a
                                    href={getWhatsAppLink(service.whatsappMessage)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary btn-lg service-detail-hero__cta"
                                >
                                    <FaWhatsapp size={20} />
                                    <span>Solicitar Orçamento Grátis</span>
                                    <span className="btn__shine" />
                                </a>

                                <a
                                    href="#incluso"
                                    className="btn btn-secondary btn-lg"
                                >
                                    Ver Detalhes do Serviço
                                    <ArrowRight size={18} />
                                </a>
                            </div>

                            <div className="service-detail-hero__highlights">
                                <div className="service-detail-hero__highlight-item">
                                    <ShieldCheck size={18} className="text-primary" />
                                    <span>Garantia de Entrega & Suporte</span>
                                </div>
                                <div className="service-detail-hero__highlight-item">
                                    <Zap size={18} className="text-primary" />
                                    <span>Alta Velocidade e SEO Nativo</span>
                                </div>
                                <div className="service-detail-hero__highlight-item">
                                    <Clock size={18} className="text-primary" />
                                    <span>Entrega Rápida em Poucos Dias</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Realistic Image Card */}
                        <motion.div
                            className="service-detail-hero__media"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            <div className="service-detail-hero__image-frame">
                                <img
                                    src={service.image}
                                    alt={`${service.title} - AceWeb`}
                                    className="service-detail-hero__image"
                                    loading="eager"
                                />
                                <div className="service-detail-hero__image-overlay">
                                    <div className="service-detail-hero__image-tag">
                                        <Star size={14} className="text-yellow" />
                                        <span>Projetos 100% Personalizados</span>
                                    </div>
                                    <p className="service-detail-hero__image-caption">
                                        Desenvolvido sob medida com tecnologia de ponta
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features / What is included */}
            <section id="incluso" className="section service-detail-features">
                <div className="container">
                    <div className="section-title">
                        <span className="badge">Tudo Incluso</span>
                        <h2>O que está incluso em <span className="text-gradient">{service.title}</span></h2>
                        <p>Cada aspecto do seu projeto é planejado e executado com os mais altos padrões do mercado.</p>
                    </div>

                    <div className="service-detail-features__grid">
                        {service.features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                className="service-detail-feature-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                            >
                                <div className="service-detail-feature-card__icon">
                                    <Check size={20} />
                                </div>
                                <div className="service-detail-feature-card__content">
                                    <p>{feature}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="section service-detail-benefits">
                <div className="container">
                    <div className="service-detail-benefits__container">
                        <div className="service-detail-benefits__header">
                            <span className="badge">Principais Vantagens</span>
                            <h2>Por que investir neste serviço com a <span className="text-gradient">AceWeb</span>?</h2>
                            <p>
                                Não entregamos apenas linhas de código. Entregamos um ativo estratégico
                                projetado para atrair, impressionar e gerar receita recorrente para seu negócio.
                            </p>
                        </div>

                        <div className="service-detail-benefits__grid">
                            {service.benefits.map((benefit, idx) => (
                                <motion.div
                                    key={idx}
                                    className="service-detail-benefit-card"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                >
                                    <div className="service-detail-benefit-card__check">
                                        <CheckCircle2 size={22} />
                                    </div>
                                    <div className="service-detail-benefit-card__text">
                                        <h4>{benefit}</h4>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            {service.process && service.process.length > 0 && (
                <section className="section service-detail-process">
                    <div className="container">
                        <div className="section-title">
                            <span className="badge">Metodologia Ágil</span>
                            <h2>Como funciona o <span className="text-gradient">Processo</span></h2>
                            <p>Da concepção à entrega final, mantemos transparência absoluta e pontualidade.</p>
                        </div>

                        <div className="service-detail-process__grid">
                            {service.process.map((step, idx) => (
                                <motion.div
                                    key={idx}
                                    className="service-detail-process__card"
                                    initial={{ opacity: 0, y: 25 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <div className="service-detail-process__step-number">{step.step}</div>
                                    <h3>{step.title}</h3>
                                    <p>{step.desc}</p>
                                    {idx < service.process.length - 1 && (
                                        <div className="service-detail-process__connector" />
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Detailed Description Block */}
            <section className="section service-detail-deepdive">
                <div className="container">
                    <div className="service-detail-deepdive__box">
                        <div className="service-detail-deepdive__glow" />
                        <div className="service-detail-deepdive__content">
                            <span className="badge">Visão Estratégica</span>
                            <h2>Maximize seus resultados com excelência digital</h2>
                            <p className="service-detail-deepdive__paragraph">
                                {service.description}
                            </p>
                            <div className="service-detail-deepdive__cta-row">
                                <a
                                    href={getWhatsAppLink(service.whatsappMessage)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary btn-lg"
                                >
                                    <FaWhatsapp size={20} />
                                    Tire suas Dúvidas via WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <PricingCards />

            {/* Service FAQ */}
            {service.faqs && service.faqs.length > 0 && (
                <FAQ
                    items={service.faqs}
                    badge="Perguntas Frequentes"
                    title={<>Dúvidas sobre <span className="text-gradient">{service.title}</span></>}
                    subtitle="Confira as respostas para as perguntas mais comuns dos nossos clientes antes de contratar."
                />
            )}

            {/* Internal Linking: Other Services */}
            <section className="section service-detail-others">
                <div className="container">
                    <div className="section-title">
                        <span className="badge">Conheça Também</span>
                        <h2>Outros <span className="text-gradient">Serviços AceWeb</span></h2>
                        <p>Soluções integradas de desenvolvimento web, SEO e marketing digital para seu negócio crescer.</p>
                    </div>

                    <div className="service-detail-others__grid">
                        {otherServices.map((other, idx) => {
                            const OtherIcon = other.icon;
                            return (
                                <motion.div
                                    key={other.id}
                                    className="service-detail-other-card"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                >
                                    <div className="service-detail-other-card__thumb">
                                        <img src={other.image} alt={other.title} loading="lazy" />
                                    </div>
                                    <div className="service-detail-other-card__body">
                                        <div className="service-detail-other-card__icon-title">
                                            <OtherIcon size={20} className="text-primary" />
                                            <h3>{other.title}</h3>
                                        </div>
                                        <p>{other.shortDescription}</p>
                                        <Link
                                            to={`/servicos/${other.id}`}
                                            className="service-detail-other-card__link"
                                        >
                                            Ver Serviço Completo <ChevronRight size={16} />
                                        </Link>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="section service-detail-final-cta">
                <div className="container">
                    <div className="service-detail-final-cta__box">
                        <div className="service-detail-final-cta__content">
                            <span className="badge">Comece Hoje Mesmo</span>
                            <h2>Pronto para iniciar seu projeto de <span className="text-gradient">{service.title}</span>?</h2>
                            <p>
                                Nossa equipe de especialistas está a postos para entender seu desafio e montar uma proposta personalizada sem nenhum compromisso.
                            </p>
                            <a
                                href={getWhatsAppLink(service.whatsappMessage)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary btn-lg service-detail-final-cta__button"
                            >
                                <FaWhatsapp size={22} />
                                Falar com um Consultor no WhatsApp
                            </a>
                            <div className="service-detail-final-cta__guarantees">
                                <span><CheckCircle2 size={16} className="text-primary" /> Proposta em minutos</span>
                                <span><CheckCircle2 size={16} className="text-primary" /> Sem taxa oculta</span>
                                <span><CheckCircle2 size={16} className="text-primary" /> Parcelamento disponível</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ServiceDetail;
