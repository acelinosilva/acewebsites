import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    CheckCircle2,
    MapPin,
    ArrowRight,
    Zap,
    Search,
    Smartphone,
    Shield,
    Award,
    Users
} from 'lucide-react';
import SEO from '../components/SEO';
import { getStateBySlug, brazilianStates, getWhatsAppLink } from '../data/states';
import { services } from '../data/services';
import { testimonials, stats } from '../data/testimonials';
import StatsCounter from '../components/StatsCounter';
import TestimonialCard from '../components/TestimonialCard';
import PricingCards from '../components/PricingCards';
import FAQ from '../components/FAQ';
import SchemaMarkup from '../components/SchemaMarkup';
import Breadcrumbs from '../components/Breadcrumbs';
import { FaWhatsapp } from 'react-icons/fa';

import './StateLanding.css';

const StateLanding = () => {
    const { stateSlug } = useParams();

    // Extract state slug from URL pattern "criacao-de-sites-em-{state}"
    const actualSlug = stateSlug?.replace('criacao-de-sites-em-', '');
    const state = getStateBySlug(actualSlug);

    if (!state) {
        return <Navigate to="/locais" replace />;
    }

    const benefits = [
        { icon: Zap, title: 'Carregamento Rápido', description: 'Sites otimizados para carregar em menos de 3 segundos.' },
        { icon: Search, title: 'SEO para ' + state.name, description: `Otimizado para ranquear em buscas locais em ${state.name}.` },
        { icon: Smartphone, title: '100% Responsivo', description: 'Perfeito em qualquer dispositivo: celular, tablet ou desktop.' },
        { icon: Shield, title: 'Seguro e Confiável', description: 'Certificado SSL gratuito e proteção contra ameaças.' },
        { icon: Award, title: 'Design Premium', description: 'Visual moderno e profissional que impressiona seus clientes.' },
        { icon: Users, title: 'Suporte Dedicado', description: 'Atendimento personalizado por WhatsApp.' },
    ];

    const displayTestimonials = testimonials.slice(0, 6);

    const otherStates = brazilianStates
        .filter(s => s.slug !== state.slug)
        .slice(0, 8);

    return (
        <>
            <SEO
                title={`Criação de Sites ${state.preposition} ${state.name} | Desenvolvimento Web Profissional`}
                description={`Criação de Sites Profissionais ${state.preposition} ${state.name} a partir de R$ 400. Desenvolvemos sites modernos, responsivos e otimizados para SEO. Solicite um orçamento grátis!`}
                keywords={`criação de sites ${state.name}, desenvolvimento web ${state.name}, sites profissionais ${state.abbr}, landing pages ${state.name}, SEO ${state.name}`}
                canonical={`/locais/criacao-de-sites-em-${state.slug}`}
                geoRegion={`BR-${state.abbr}`}
                geoPlacename={state.name}
            />
            <SchemaMarkup 
                locationData={{
                    name: state.name,
                    region: state.abbr,
                    type: "AdministrativeArea",
                    coordinates: { lat: -15.7942, lng: -47.8822 } // Default to Brazil center or dynamic if needed
                }}
            />

            <main className="state-landing">
                {/* Hero Section */}
                <section className="state-hero">
                    <div className="state-hero__background">
                        <div className="state-hero__glow state-hero__glow--1" />
                        <div className="state-hero__glow state-hero__glow--2" />
                        <div className="state-hero__grid" />
                    </div>

                    <div className="container state-hero__container">
                        {/* Breadcrumbs */}
                        <Breadcrumbs items={[
                            { name: 'Locais', path: '/locais' },
                            { name: `Criação de Sites ${state.preposition} ${state.name}`, path: `/locais/criacao-de-sites-em-${state.slug}` }
                        ]} />
                        <motion.div
                            className="state-hero__content"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="state-hero__badge">
                                <MapPin size={14} />
                                {state.abbr} - {state.name}
                            </span>

                            <h1>
                                Criação de Sites Profissionais {' '}
                                <span className="text-gradient">
                                    {state.preposition.charAt(0).toUpperCase() + state.preposition.slice(1)} {state.name}
                                </span>
                            </h1>

                            <p className="state-hero__subtitle">
                                Desenvolvemos sites modernos, rápidos e otimizados para o Google
                                para empresas {state.preposition} {state.name}. Transforme sua presença digital
                                e conquiste mais clientes com um site profissional a partir de R$ 400.
                            </p>

                            <div className="state-hero__cta-group">
                                <a
                                    href={getWhatsAppLink(`Olá! Sou de ${state.name} e gostaria de um orçamento para criação de site.`)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary btn-lg"
                                >
                                    <FaWhatsapp size={20} />
                                    Solicitar Orçamento Grátis
                                </a>
                                <a
                                    href={getWhatsAppLink(`Olá! Sou de ${state.name} e gostaria de falar com um especialista.`)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-secondary btn-lg"
                                >
                                    Falar com Especialista
                                    <ArrowRight size={18} />
                                </a>
                            </div>

                            <div className="state-hero__trust">
                                <div className="state-hero__trust-item">
                                    <CheckCircle2 size={18} className="text-primary" />
                                    <span>Atendimento em tod{state.prepDe === 'de' ? 'o' : state.prepDe.slice(1)} {state.name}</span>
                                </div>
                                <div className="state-hero__trust-item">
                                    <CheckCircle2 size={18} className="text-primary" />
                                    <span>Sites a partir de R$ 400</span>
                                </div>
                                <div className="state-hero__trust-item">
                                    <CheckCircle2 size={18} className="text-primary" />
                                    <span>Resposta Rápida</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Stats */}
                <StatsCounter stats={stats} />

                {/* About Local */}
                <section className="section state-about">
                    <div className="container">
                        <div className="state-about__grid">
                            <motion.div
                                className="state-about__content"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2>
                                    Por que criar seu site com a{' '}
                                    <span className="text-gradient">AceWeb</span>?
                                </h2>
                                <p>
                                    A AceWeb é especialista em criação de sites profissionais e atende
                                    empresas {state.preposition} {state.name} há mais de 10 anos. Mesmo estando sediados
                                    em Brasília - DF, nosso atendimento remoto garante a mesma qualidade
                                    e dedicação para clientes em todo o Brasil.
                                </p>
                                <p>
                                    Entendemos as necessidades das empresas locais e desenvolvemos
                                    sites otimizados para aparecer nas buscas regionais, ajudando
                                    seu negócio a conquistar mais clientes {state.preposition} {state.name}.
                                </p>

                                {state.cities && state.cities.length > 0 && (
                                    <div className="state-cities">
                                        <h3>Atendemos todas as cidades {state.prepDe} {state.name}</h3>
                                        <p>
                                            Incluindo {state.cities.slice(0, 4).join(', ')} e todas as outras
                                            cidades do estado.
                                        </p>
                                    </div>
                                )}

                                <a
                                    href={getWhatsAppLink(`Olá! Gostaria de saber mais sobre criação de sites em ${state.name}.`)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                >
                                    <FaWhatsapp size={18} />
                                    Falar no WhatsApp
                                </a>
                            </motion.div>

                            <motion.div
                                className="state-about__visual"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <div className="state-map-card">
                                    <div className="state-map-card__abbr">{state.abbr}</div>
                                    <div className="state-map-card__name">{state.name}</div>
                                    <div className="state-map-card__glow" />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Benefits */}
                <section className="section state-benefits">
                    <div className="container">
                        <div className="section-title">
                            <h2>
                                Benefícios de ter um site profissional{' '}
                                <span className="text-gradient">{state.preposition} {state.name}</span>
                            </h2>
                            <p>
                                Um site bem desenvolvido é a base para o sucesso digital
                                do seu negócio {state.preposition} {state.name}.
                            </p>
                        </div>

                        <div className="state-benefits__grid">
                            {benefits.map((benefit, index) => {
                                const Icon = benefit.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        className="state-benefit-card"
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <div className="state-benefit-card__icon">
                                            <Icon size={24} />
                                        </div>
                                        <h3>{benefit.title}</h3>
                                        <p>{benefit.description}</p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Services */}
                <section className="section state-services">
                    <div className="container">
                        <div className="section-title">
                            <h2>Nossos serviços {state.preposition} <span className="text-gradient">{state.name}</span></h2>
                            <p>Soluções completas para sua presença digital</p>
                        </div>

                        <div className="state-services__grid">
                            {services.slice(0, 6).map((service, index) => {
                                const Icon = service.icon;
                                return (
                                    <motion.div
                                        key={service.id}
                                        className="state-service-card"
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <div className="state-service-card__icon">
                                            <Icon size={24} />
                                        </div>
                                        <h3>{service.title}</h3>
                                        <p>{service.shortDescription}</p>
                                        <a
                                            href={getWhatsAppLink(`Olá! Sou de ${state.name} e tenho interesse em: ${service.title}`)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="state-service-card__link"
                                        >
                                            Solicitar orçamento <ArrowRight size={16} />
                                        </a>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <PricingCards />

                <section className="section state-testimonials">
                    <div className="container">
                        <div className="section-title">
                            <h2>O que nossos <span className="text-gradient">Clientes</span> dizem</h2>
                            <p>Mais de 500 empresas confiam em nosso trabalho</p>
                        </div>

                        <div className="state-testimonials__grid">
                            {displayTestimonials.map((testimonial, index) => (
                                <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <FAQ />

                {/* CTA */}
                <section className="section state-cta-section">
                    <div className="container">
                        <motion.div
                            className="state-cta-box"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="state-cta-box__glow" />
                            <div className="state-cta-box__content">
                                <h2>
                                    Pronto para criar seu site profissional {' '}
                                    <span className="text-gradient">{state.preposition} {state.name}</span>?
                                </h2>
                                <p>
                                    Entre em contato agora mesmo e receba um orçamento personalizado.
                                    Resposta rápida via WhatsApp!
                                </p>
                                <a
                                    href={getWhatsAppLink(`Olá! Sou de ${state.name} e quero criar um site profissional!`)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary btn-lg"
                                >
                                    <FaWhatsapp size={20} />
                                    Solicitar Orçamento Grátis
                                </a>
                                <div className="state-cta-box__features">
                                    <span><CheckCircle2 size={16} /> A partir de R$ 400</span>
                                    <span><CheckCircle2 size={16} /> Resposta Rápida</span>
                                    <span><CheckCircle2 size={16} /> Parcelamento em 12x</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Other States */}
                <section className="section state-other">
                    <div className="container">
                        <div className="section-title">
                            <h2>Também atendemos <span className="text-gradient">outros estados</span></h2>
                            <p>Criação de sites profissionais em todo o Brasil</p>
                        </div>

                        <div className="state-other__grid">
                            {otherStates.map((otherState) => (
                                <Link
                                    key={otherState.slug}
                                    to={`/locais/criacao-de-sites-em-${otherState.slug}`}
                                    className="state-other-card"
                                >
                                    <span className="state-other-card__abbr">{otherState.abbr}</span>
                                    <span className="state-other-card__name">{otherState.name}</span>
                                    <ArrowRight size={16} className="state-other-card__arrow" />
                                </Link>
                            ))}
                        </div>

                        <div className="state-other__cta">
                            <Link to="/locais" className="btn btn-secondary">
                                Ver todos os estados
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default StateLanding;
