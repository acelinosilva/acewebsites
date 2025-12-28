import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    MessageCircle,
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
import { getWhatsAppLink } from '../data/states';
import { services } from '../data/services';
import { projects } from '../data/projects';
import { testimonials, stats } from '../data/testimonials';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import TrustIndexWidget from '../components/TrustIndexWidget';
import StatsCounter from '../components/StatsCounter';
import FAQ from '../components/FAQ';
import SchemaMarkup from '../components/SchemaMarkup';
import './Home.css';


const Home = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 100]);
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    const benefits = [
        { icon: Zap, title: 'Sites Ultra-Rápidos', description: 'Carregamento em menos de 3 segundos para melhor experiência.' },
        { icon: Search, title: 'SEO Otimizado', description: 'Apareça nas primeiras posições do Google organicamente.' },
        { icon: Smartphone, title: '100% Responsivo', description: 'Funciona perfeitamente em qualquer dispositivo.' },
        { icon: Shield, title: 'Seguro e Confiável', description: 'SSL gratuito e proteção contra ataques.' },
    ];

    return (
        <main className="home">
            <SchemaMarkup />
            {/* Hero Section */}
            <section className="hero">
                <div className="hero__background">
                    <div className="hero__glow hero__glow--1" />
                    <div className="hero__glow hero__glow--2" />
                    <div className="hero__glow hero__glow--3" />
                    <div className="hero__grid-pattern" />
                    <div className="hero__particles">
                        {[...Array(12)].map((_, i) => (
                            <div key={i} className="hero__particle" style={{
                                '--delay': `${i * 0.5}s`,
                                '--x': `${Math.random() * 100}%`,
                                '--duration': `${15 + Math.random() * 10}s`
                            }} />
                        ))}
                    </div>
                </div>

                <div className="container hero__container">
                    <motion.div
                        className="hero__content"
                        style={{ opacity: opacity }}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.span
                            className="hero__badge"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <span className="hero__badge-pulse" />
                            <Globe size={14} />
                            Atendemos Brasília, todo Brasil e Exterior
                        </motion.span>

                        <motion.h1
                            className="hero__title"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <span className="hero__title-line">Criação de Sites</span>
                            <span className="hero__title-line">
                                Profissionais em{' '}
                                <span className="hero__title-highlight">
                                    <span className="text-gradient">Brasília DF</span>
                                    <svg className="hero__title-underline" viewBox="0 0 200 12" preserveAspectRatio="none">
                                        <path d="M0,10 Q50,0 100,10 T200,10" stroke="url(#gradient)" strokeWidth="3" fill="none" />
                                        <defs>
                                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="#00FF88" />
                                                <stop offset="100%" stopColor="#00CC6A" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </span>
                            </span>
                            <span className="hero__title-line">
                                e <span className="text-gradient">Todo o Brasil</span>
                            </span>
                        </motion.h1>

                        <motion.p
                            className="hero__subtitle"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            Sites <strong>modernos</strong>, <strong>rápidos</strong> e <strong>otimizados para o Google</strong>.
                            Transforme sua presença digital e gere clientes todos os dias
                            com um site que realmente converte.
                        </motion.p>

                        <motion.div
                            className="hero__cta-group"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <a
                                href={getWhatsAppLink('Olá! Gostaria de solicitar um orçamento para criação de site.')}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary btn-lg hero__cta-primary"
                            >
                                <MessageCircle size={20} />
                                <span>Solicitar Orçamento Grátis</span>
                                <span className="btn__shine" />
                            </a>
                        </motion.div>

                        <motion.div
                            className="hero__trust"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            <div className="hero__trust-item">
                                <div className="hero__trust-icon">
                                    <CheckCircle2 size={16} />
                                </div>
                                <div className="hero__trust-text">
                                    <span className="hero__trust-number">+500</span>
                                    <span className="hero__trust-label">Sites Entregues</span>
                                </div>
                            </div>
                            <div className="hero__trust-divider" />
                            <div className="hero__trust-item">
                                <div className="hero__trust-icon">
                                    <CheckCircle2 size={16} />
                                </div>
                                <div className="hero__trust-text">
                                    <span className="hero__trust-number">10+</span>
                                    <span className="hero__trust-label">Anos de Experiência</span>
                                </div>
                            </div>
                            <div className="hero__trust-divider" />
                            <div className="hero__trust-item">
                                <div className="hero__trust-icon">
                                    <CheckCircle2 size={16} />
                                </div>
                                <div className="hero__trust-text">
                                    <span className="hero__trust-number">27</span>
                                    <span className="hero__trust-label">Estados Atendidos</span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="hero__visual"
                        style={{ y: y1 }}
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    >
                        <div className="hero__mockup">
                            <div className="hero__mockup-glow" />
                            <div className="hero__mockup-screen">
                                <div className="hero__mockup-header">
                                    <div className="hero__mockup-dots">
                                        <span></span><span></span><span></span>
                                    </div>
                                    <div className="hero__mockup-url">
                                        <span className="hero__mockup-lock">🔒</span>
                                        www.seusite.com.br
                                    </div>
                                </div>
                                <div className="hero__mockup-content">
                                    <div className="hero__mockup-nav">
                                        <div className="hero__mockup-logo"></div>
                                        <div className="hero__mockup-menu">
                                            <span></span><span></span><span></span>
                                        </div>
                                    </div>
                                    <div className="hero__mockup-hero">
                                        <div className="hero__mockup-hero-text"></div>
                                        <div className="hero__mockup-hero-btn"></div>
                                    </div>
                                    <div className="hero__mockup-cards">
                                        <div className="hero__mockup-card">
                                            <div className="hero__mockup-card-icon"></div>
                                            <div className="hero__mockup-card-lines">
                                                <span></span><span></span>
                                            </div>
                                        </div>
                                        <div className="hero__mockup-card">
                                            <div className="hero__mockup-card-icon"></div>
                                            <div className="hero__mockup-card-lines">
                                                <span></span><span></span>
                                            </div>
                                        </div>
                                        <div className="hero__mockup-card">
                                            <div className="hero__mockup-card-icon"></div>
                                            <div className="hero__mockup-card-lines">
                                                <span></span><span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <motion.div
                                className="hero__float hero__float--1"
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <Zap size={20} />
                                <span>Ultra Rápido</span>
                            </motion.div>
                            <motion.div
                                className="hero__float hero__float--2"
                                animate={{ y: [0, -12, 0] }}
                                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            >
                                <Search size={20} />
                                <span>SEO #1</span>
                            </motion.div>
                            <motion.div
                                className="hero__float hero__float--3"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            >
                                <Smartphone size={20} />
                                <span>Responsivo</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="hero__scroll"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    <span>Role para explorar</span>
                    <div className="hero__scroll-mouse">
                        <div className="hero__scroll-wheel" />
                    </div>
                </motion.div>
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

                    <div className="testimonials__widget">
                        <TrustIndexWidget />
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
                                    <MessageCircle size={18} />
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
                                    <MessageCircle size={20} />
                                    Falar no WhatsApp Agora
                                </a>
                            </div>
                            <div className="cta-box__features">
                                <span><CheckCircle2 size={16} /> Orçamento Gratuito</span>
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
