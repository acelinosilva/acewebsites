import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll } from 'framer-motion';
import {
    ArrowRight,
    CheckCircle2,
    Zap,
    Search,
    Smartphone,
    Shield,
    Globe,
    MapPin,
    Users,
    ExternalLink
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { getWhatsAppLink } from '../data/states';
import { services } from '../data/services';
import { projects } from '../data/projects';
import { testimonials, stats } from '../data/testimonials';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';

import StatsCounter from '../components/StatsCounter';
import PricingCards from '../components/PricingCards';
import FAQ from '../components/FAQ';
import SchemaMarkup from '../components/SchemaMarkup';
import SEO from '../components/SEO';
import './Home.css';


const Home = () => {
    const { scrollY } = useScroll();

    const particles = useMemo(() => {
        return [...Array(12)].map((_, i) => ({
            delay: `${i * 0.5}s`,
            x: `${Math.random() * 100}%`,
            duration: `${15 + Math.random() * 10}s`
        }));
    }, []);

    const benefits = [
        { icon: Zap, title: 'Sites Ultra-Rápidos', description: 'Carregamento em menos de 3 segundos para melhor experiência.' },
        { icon: Search, title: 'SEO Otimizado', description: 'Apareça nas primeiras posições do Google organicamente.' },
        { icon: Smartphone, title: '100% Responsivo', description: 'Funciona perfeitamente em qualquer dispositivo.' },
        { icon: Shield, title: 'Seguro e Confiável', description: 'SSL gratuito e proteção contra ataques.' },
    ];

    return (
        <main className="home">
            <SEO
                title="Criação de Sites Profissionais em Brasília-DF e Todo o Brasil"
                description="Especialistas em criação de sites em Brasília - DF e para todo o Brasil. Sites com SEO, design moderno e entrega rápida. Entre em contato agora!"
            />
            <SchemaMarkup 
                locationData={{
                    name: "Brasília",
                    region: "DF",
                    type: "City",
                    coordinates: { lat: -15.7942, lng: -47.8822 }
                }}
            />
            {/* Hero Section - Clean Layout & SEO Optimized */}
            <section
                className="hero-clean"
                aria-label="Criação de Sites Profissionais em Brasília"
                itemScope
                itemType="https://schema.org/Service"
            >
                {/* Decorative Elements */}
                <div className="hero-clean__decorations">
                    <motion.div
                        className="hero-clean__decoration hero-clean__decoration--left"
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <div className="hero-clean__browser-icon">
                            <div className="hero-clean__browser-dots">
                                <span /><span /><span />
                            </div>
                            <div className="hero-clean__browser-content">
                                <Globe size={24} />
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="hero-clean__decoration hero-clean__decoration--right"
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <div className="hero-clean__code-icon">
                            <span>&lt;/&gt;</span>
                        </div>
                    </motion.div>
                    {/* Floating Dots */}
                    <span className="hero-clean__dot hero-clean__dot--1" />
                    <span className="hero-clean__dot hero-clean__dot--2" />
                    <span className="hero-clean__dot hero-clean__dot--3" />
                    <span className="hero-clean__dot hero-clean__dot--4" />
                </div>

                <div className="container hero-clean__container">
                    {/* Centered Content */}
                    <motion.header
                        className="hero-clean__content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {/* Top Badge */}
                        <motion.div
                            className="hero-clean__badge"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <span>CRIAÇÃO DE SITE PROFISSIONAL</span>
                            <span className="hero-clean__badge-separator">•</span>
                            <span>LÍDER EM AVALIAÇÕES NO GOOGLE</span>
                            <span className="hero-clean__badge-rating">
                                5.0 <span className="hero-clean__stars">★★★★★</span>
                            </span>
                        </motion.div>

                        {/* Main Heading - SEO Optimized */}
                        <motion.h1
                            className="hero-clean__title"
                            itemProp="name"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                        >
                            CRIAÇÃO DE SITES EM<br />
                            <span className="hero-clean__title-highlight">BRASÍLIA DF</span>
                        </motion.h1>

                        {/* Subtitle - SEO Rich */}
                        <motion.p
                            className="hero-clean__subtitle"
                            itemProp="description"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            Somos uma <strong>agência de criação de sites em Brasília-DF</strong> especializada em {' '}
                            <strong>sites profissionais</strong>, <strong>landing pages de alta conversão</strong> e {' '}
                            <strong>lojas virtuais</strong>. Nosso <strong>desenvolvimento de sites em Brasília</strong> {' '}
                            é otimizado para <strong>SEO e Google</strong>, garantindo mais visibilidade e vendas para seu negócio.
                        </motion.p>

                        {/* Secondary Text */}
                        <motion.p
                            className="hero-clean__cta-text"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            Descubra quanto custa o site ideal para você em <strong>1 minuto</strong>. Planos a partir de <strong>R$ 400</strong>.
                        </motion.p>

                        {/* Single CTA Button */}
                        <motion.div
                            className="hero-clean__cta"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                        >
                            <a
                                href={getWhatsAppLink('Olá! Gostaria de solicitar um orçamento para criação de site.')}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hero-clean__btn"
                                aria-label="Solicitar orçamento via WhatsApp"
                            >
                                <Zap size={20} aria-hidden="true" />
                                <span>Peça um Orçamento</span>
                            </a>
                        </motion.div>

                        {/* Trust Metrics */}
                        <motion.div
                            className="hero-clean__metrics"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.9 }}
                        >
                            <div className="hero-clean__metric">
                                <span className="hero-clean__metric-value">+300</span>
                                <span className="hero-clean__metric-label">Sites Entregues</span>
                            </div>
                            <div className="hero-clean__metric-divider" />
                            <div className="hero-clean__metric">
                                <span className="hero-clean__metric-value">5+</span>
                                <span className="hero-clean__metric-label">Anos de Mercado</span>
                            </div>
                            <div className="hero-clean__metric-divider" />
                            <div className="hero-clean__metric">
                                <span className="hero-clean__metric-value">100%</span>
                                <span className="hero-clean__metric-label">Clientes Satisfeitos</span>
                            </div>
                        </motion.div>
                    </motion.header>
                </div>
            </section>

            {/* Stats Section */}
            <StatsCounter stats={stats} />

            {/* Benefits Section */}
            <section className="section benefits">
                <div className="container">
                    <div className="section-title">
                        <h2>Por que escolher a <span className="text-gradient">AceWeb</span>?</h2>
                        <p>
                            Desenvolvemos sites que não apenas impressionam visualmente,
                            mas também geram resultados reais para o seu negócio.
                        </p>
                    </div>

                    <div className="benefits__grid">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                className="benefit-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="benefit-card__icon">
                                    <benefit.icon size={24} />
                                </div>
                                <h3 className="benefit-card__title">{benefit.title}</h3>
                                <p className="benefit-card__description">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="section services-section">
                <div className="container">
                    <div className="section-title">
                        <h2>Nossos <span className="text-gradient">Serviços</span></h2>
                        <p>
                            Soluções completas em desenvolvimento web para impulsionar
                            seu negócio no mundo digital.
                        </p>
                    </div>

                    <div className="services__grid">
                        {services.slice(0, 6).map((service, index) => (
                            <ServiceCard key={service.id} service={service} index={index} />
                        ))}
                    </div>

                    <div className="services__cta">
                        <Link to="/servicos" className="btn btn-secondary">
                            Ver Todos os Serviços
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section className="section portfolio-section">
                <div className="container">
                    <div className="section-title">
                        <h2>Últimos <span className="text-gradient">Projetos</span></h2>
                        <p>
                            Confira alguns dos nossos trabalhos mais recentes desenvolvidos com
                            excelência e alta performance.
                        </p>
                    </div>

                    <div className="portfolio-home-grid">
                        {projects.slice().reverse().slice(0, 3).map((project, index) => (
                            <motion.div
                                key={project.id}
                                className="project-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="project-card__image-container">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="project-card__image"
                                    />
                                    <div className="project-card__overlay">
                                        <div className="project-card__overlay-content">
                                            <span className="project-category">{project.category}</span>
                                            <Link to="/portfolio" className="btn-view-project">
                                                Ver Projeto <ExternalLink size={16} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="project-card__content">
                                    <div className="project-card__header">
                                        <h3>{project.title}</h3>
                                        <div className="project-icon">
                                            {(() => {
                                                const Icon = project.icon;
                                                return <Icon size={20} />;
                                            })()}
                                        </div>
                                    </div>

                                    <p className="project-description">{project.description}</p>

                                    <div className="project-tags">
                                        {project.tags.slice(0, 3).map((tag, index) => (
                                            <span key={index} className="project-tag">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="portfolio-home-cta">
                        <Link to="/portfolio" className="btn btn-secondary">
                            Ver Portfólio Completo
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <PricingCards />

            {/* Testimonials Section */}
            <section className="section testimonials-section">
                <div className="container">
                    <div className="section-title">
                        <h2>O que nossos <span className="text-gradient">Clientes</span> dizem</h2>
                        <p>
                            Mais de 500 empresas confiam em nosso trabalho.
                            Veja o que elas têm a dizer sobre a AceWeb.
                        </p>
                    </div>

                    <div className="testimonials__grid">
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
                        ))}
                    </div>


                </div>
            </section>

            {/* FAQ Section */}
            <FAQ />

            {/* Locations Section */}
            <section className="section locations-section">
                <div className="container">
                    <div className="locations__content">
                        <motion.div
                            className="locations__text"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="locations__badge">
                                <MapPin size={14} />
                                Atendimento Nacional
                            </span>
                            <h2>
                                Criação de Sites em{' '}
                                <span className="text-gradient">Todo o Brasil</span>
                            </h2>
                            <p>
                                Estamos sediados em Brasília - DF, mas atendemos empresas
                                em todos os 27 estados brasileiros. Trabalhamos de forma
                                remota com excelência, garantindo a mesma qualidade para
                                clientes de qualquer região do país.
                            </p>
                            <p>
                                Também atendemos brasileiros no exterior que precisam de
                                sites profissionais em português ou outros idiomas.
                            </p>

                            <div className="locations__cta-group">
                                <Link to="/locais" className="btn btn-primary">
                                    <MapPin size={18} />
                                    Ver Todos os Estados
                                </Link>
                                <a
                                    href={getWhatsAppLink()}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-secondary"
                                >
                                    <FaWhatsapp size={18} />
                                    Solicitar Orçamento
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            className="locations__visual"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="locations__map">
                                <div className="locations__map-marker locations__map-marker--main">
                                    <MapPin size={20} />
                                    <span>Brasília - DF</span>
                                </div>
                                <div className="locations__map-glow" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section cta-section">
                <div className="container">
                    <motion.div
                        className="cta-box"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="cta-box__glow" />
                        <div className="cta-box__content">
                            <h2>Pronto para ter um site profissional?</h2>
                            <p>
                                Entre em contato agora mesmo e receba um orçamento personalizado
                                para o seu projeto. Resposta rápida via WhatsApp!
                            </p>
                            <div className="cta-box__buttons">
                                <a
                                    href={getWhatsAppLink()}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary btn-lg"
                                >
                                    <FaWhatsapp size={20} />
                                    Falar no WhatsApp Agora
                                </a>
                            </div>
                            <div className="cta-box__features">
                                <span><CheckCircle2 size={16} /> Sites a partir de R$ 400</span>
                                <span><CheckCircle2 size={16} /> Resposta Rápida</span>
                                <span><CheckCircle2 size={16} /> Atendimento Personalizado</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main >
    );
};

export default Home;
