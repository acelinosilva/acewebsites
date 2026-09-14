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
            {/* Hero Section - Premium Digital Agency */}
            <section
                className="hero-agency"
                aria-label="Criação de Sites Profissionais em Brasília e Todo o Brasil"
                itemScope
                itemType="https://schema.org/Service"
            >
                {/* Background Ambient Glows */}
                <div className="hero-agency__ambient">
                    <div className="hero-agency__glow hero-agency__glow--top" />
                    <div className="hero-agency__glow hero-agency__glow--center" />
                    <div className="hero-agency__grid-overlay" />
                </div>

                <div className="container hero-agency__container">
                    {/* Header Content */}
                    <motion.div
                        className="hero-agency__content"
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {/* Top Proof Badge */}
                        <div className="hero-agency__badge">
                            <span className="hero-agency__badge-glow" />
                            <span className="hero-agency__badge-text">✦ Agência Especializada em Sites de Alta Performance</span>
                            <span className="hero-agency__badge-dot">•</span>
                            <span className="hero-agency__badge-rating">
                                5.0 <span className="hero-agency__stars">★★★★★</span> no Google
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="hero-agency__title" itemProp="name">
                            Criação de Sites e Landing Pages<br className="hero-title-break" />
                            em <span className="text-gradient">Brasília e todo o Brasil</span>
                        </h1>

                        {/* Subtitle - Otimizado para SEO com palavras-chave */}
                        <p className="hero-agency__subtitle" itemProp="description">
                            Somos uma <strong>empresa de criação e desenvolvimento de sites em Brasília - DF</strong> especializada em <strong>sites profissionais</strong>, <strong>landing pages de alta conversão</strong> e <strong>lojas virtuais</strong>. Projetos com <strong>otimização de SEO para o Google</strong>, carregamento ultrarrápido e design responsivo para gerar autoridade e vendas para o seu negócio em todo o país.
                        </p>

                        {/* Dual CTA Buttons */}
                        <div className="hero-agency__cta-group">
                            <a
                                href={getWhatsAppLink('Olá! Gostaria de solicitar um orçamento para criação de site.')}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary btn-lg hero-agency__cta-primary"
                                aria-label="Solicitar orçamento via WhatsApp"
                            >
                                <FaWhatsapp size={20} />
                                <span>Solicitar Orçamento no WhatsApp</span>
                            </a>

                            <Link to="/portfolio" className="btn btn-secondary btn-lg hero-agency__cta-secondary">
                                <span>Ver Projetos Entregues</span>
                                <ArrowRight size={18} />
                            </Link>
                        </div>

                        {/* Fast Trust Indicators */}
                        <div className="hero-agency__assurances">
                            <span className="hero-agency__assurance-item">
                                <CheckCircle2 size={16} className="text-primary" /> Entrega em tempo recorde
                            </span>
                            <span className="hero-agency__assurance-item">
                                <CheckCircle2 size={16} className="text-primary" /> 100% Otimizado para SEO
                            </span>
                            <span className="hero-agency__assurance-item">
                                <CheckCircle2 size={16} className="text-primary" /> Planos a partir de R$ 400
                            </span>
                        </div>
                    </motion.div>

                    {/* Interactive Hero Showcase (Real Work Preview) */}
                    <motion.div
                        className="hero-agency__showcase"
                        initial={{ opacity: 0, y: 35 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="hero-showcase__window">
                            {/* Browser Header */}
                            <div className="hero-showcase__topbar">
                                <div className="hero-showcase__dots">
                                    <span className="hero-showcase__dot hero-showcase__dot--red" />
                                    <span className="hero-showcase__dot hero-showcase__dot--yellow" />
                                    <span className="hero-showcase__dot hero-showcase__dot--green" />
                                </div>
                                <div className="hero-showcase__url-bar">
                                    <Shield size={13} className="hero-showcase__lock" />
                                    <span>aceweb.com.br/projetos-em-destaque</span>
                                </div>
                                <div className="hero-showcase__actions">
                                    <span className="hero-showcase__live-pill">AO VIVO</span>
                                </div>
                            </div>

                            {/* Showcase Screen */}
                            <div className="hero-showcase__screen">
                                <img
                                    src={projects[0]?.image || projects[3]?.image}
                                    alt="Demonstração de Site Profissional desenvolvido pela AceWeb"
                                    className="hero-showcase__image"
                                    loading="eager"
                                />
                                <div className="hero-showcase__overlay">
                                    <div className="hero-showcase__project-info">
                                        <span className="hero-showcase__category">{projects[0]?.category || 'Site Institucional'}</span>
                                        <h4 className="hero-showcase__project-title">{projects[0]?.title || 'Unity IT Solutions'}</h4>
                                        <p className="hero-showcase__project-desc">{projects[0]?.description || 'Plataforma moderna de alta performance com design exclusivo e SEO integrado.'}</p>
                                    </div>
                                    <Link to="/portfolio" className="hero-showcase__overlay-btn">
                                        Ver Caso de Sucesso <ExternalLink size={15} />
                                    </Link>
                                </div>
                            </div>

                            {/* Floating Micro-Metric Badges */}
                            <div className="hero-showcase__badge hero-showcase__badge--speed">
                                <Zap size={18} className="hero-showcase__badge-icon text-primary" />
                                <div>
                                    <span className="hero-showcase__badge-title">99/100 PageSpeed</span>
                                    <span className="hero-showcase__badge-sub">Carregamento Instantâneo</span>
                                </div>
                            </div>

                            <div className="hero-showcase__badge hero-showcase__badge--seo">
                                <Search size={18} className="hero-showcase__badge-icon" style={{ color: '#38BDF8' }} />
                                <div>
                                    <span className="hero-showcase__badge-title">1º Lugar no Google</span>
                                    <span className="hero-showcase__badge-sub">SEO Técnico Avançado</span>
                                </div>
                            </div>

                            <div className="hero-showcase__badge hero-showcase__badge--clients">
                                <Users size={18} className="hero-showcase__badge-icon text-primary" />
                                <div>
                                    <span className="hero-showcase__badge-title">+300 Projetos</span>
                                    <span className="hero-showcase__badge-sub">Entregues com Excelência</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
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
                            Mais de 300 empresas confiam em nosso trabalho.
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
