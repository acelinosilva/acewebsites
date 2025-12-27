import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
    MessageCircle,
    CheckCircle2,
    ArrowRight,
    Sparkles,
    Star,
    Zap
} from 'lucide-react';
import { services } from '../data/services';
import { getWhatsAppLink } from '../data/states';
import './Services.css';

const Services = () => {
    const [activeService, setActiveService] = useState(null);

    useEffect(() => {
        // Handle hash navigation
        const hash = window.location.hash;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        }
    }, []);

    return (
        <main className="services-page">
            {/* Hero Section */}
            <section className="services-hero">
                <div className="services-hero__background">
                    <div className="services-hero__glow services-hero__glow--1" />
                    <div className="services-hero__glow services-hero__glow--2" />
                    <div className="services-hero__grid" />
                    <div className="services-hero__particles">
                        {[...Array(15)].map((_, i) => (
                            <div key={i} className="services-hero__particle" style={{
                                '--delay': `${i * 0.7}s`,
                                '--x': `${Math.random() * 100}%`,
                                '--duration': `${15 + Math.random() * 10}s`
                            }} />
                        ))}
                    </div>
                </div>

                <div className="container">
                    <motion.div
                        className="services-hero__content"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.span
                            className="services-hero__badge"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Sparkles size={14} />
                            Soluções Completas
                        </motion.span>

                        <h1>
                            Nossos <span className="text-gradient">Serviços</span>
                        </h1>

                        <p>
                            Transformamos sua visão em realidade digital.
                            Desenvolvemos sites que não apenas impressionam visualmente,
                            mas também <strong>geram resultados reais</strong> para seu negócio.
                        </p>

                        <div className="services-hero__stats">
                            <div className="services-hero__stat">
                                <span className="services-hero__stat-number">+500</span>
                                <span className="services-hero__stat-label">Sites Entregues</span>
                            </div>
                            <div className="services-hero__stat-divider" />
                            <div className="services-hero__stat">
                                <span className="services-hero__stat-number">98%</span>
                                <span className="services-hero__stat-label">Clientes Satisfeitos</span>
                            </div>
                            <div className="services-hero__stat-divider" />
                            <div className="services-hero__stat">
                                <span className="services-hero__stat-number">10+</span>
                                <span className="services-hero__stat-label">Anos de Experiência</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Quick Navigation */}
            <section className="services-nav">
                <div className="container">
                    <div className="services-nav__grid">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <motion.a
                                    key={service.id}
                                    href={`#${service.id}`}
                                    className="services-nav__item"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.querySelector(`#${service.id}`).scrollIntoView({
                                            behavior: 'smooth',
                                            block: 'start'
                                        });
                                    }}
                                >
                                    <div className="services-nav__icon">
                                        <Icon size={20} />
                                    </div>
                                    <span>{service.title}</span>
                                    <ArrowRight size={14} className="services-nav__arrow" />
                                </motion.a>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Services List */}
            <section className="section services-list-section">
                <div className="container">
                    <div className="services-list">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            const isEven = index % 2 === 0;

                            return (
                                <motion.article
                                    key={service.id}
                                    id={service.id}
                                    className={`service-card ${activeService === service.id ? 'service-card--active' : ''}`}
                                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    onMouseEnter={() => setActiveService(service.id)}
                                    onMouseLeave={() => setActiveService(null)}
                                >
                                    <div className="service-card__glow" />

                                    <div className="service-card__header">
                                        <div className="service-card__number">
                                            0{index + 1}
                                        </div>
                                        <div className="service-card__icon">
                                            <Icon size={28} />
                                        </div>
                                        <div className="service-card__title-group">
                                            <h2>{service.title}</h2>
                                            <p>{service.shortDescription}</p>
                                        </div>
                                        <div className="service-card__popular">
                                            {index === 0 && (
                                                <span className="service-card__tag">
                                                    <Star size={12} /> Mais Popular
                                                </span>
                                            )}
                                            {index === 1 && (
                                                <span className="service-card__tag service-card__tag--hot">
                                                    <Zap size={12} /> Alta Conversão
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="service-card__body">
                                        <div className="service-card__description">
                                            <p>{service.description}</p>
                                        </div>

                                        <div className="service-card__grid">
                                            <div className="service-card__column">
                                                <h3>
                                                    <CheckCircle2 size={18} />
                                                    Benefícios
                                                </h3>
                                                <ul>
                                                    {service.benefits.map((benefit, i) => (
                                                        <motion.li
                                                            key={i}
                                                            initial={{ opacity: 0, x: -10 }}
                                                            whileInView={{ opacity: 1, x: 0 }}
                                                            viewport={{ once: true }}
                                                            transition={{ delay: i * 0.05 }}
                                                        >
                                                            {benefit}
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="service-card__column">
                                                <h3>
                                                    <Sparkles size={18} />
                                                    O que está incluso
                                                </h3>
                                                <ul>
                                                    {service.features.map((feature, i) => (
                                                        <motion.li
                                                            key={i}
                                                            initial={{ opacity: 0, x: -10 }}
                                                            whileInView={{ opacity: 1, x: 0 }}
                                                            viewport={{ once: true }}
                                                            transition={{ delay: i * 0.05 }}
                                                        >
                                                            {feature}
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="service-card__footer">
                                            <a
                                                href={getWhatsAppLink(`Olá! Tenho interesse no serviço: ${service.title}`)}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-primary service-card__cta"
                                            >
                                                <MessageCircle size={18} />
                                                Solicitar Orçamento
                                                <span className="btn__shine" />
                                            </a>
                                            <p className="service-card__guarantee">
                                                <CheckCircle2 size={14} />
                                                Orçamento gratuito e sem compromisso
                                            </p>
                                        </div>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="section services-process">
                <div className="container">
                    <div className="section-title">
                        <h2>Como <span className="text-gradient">Funciona</span></h2>
                        <p>Nosso processo de desenvolvimento é simples e transparente</p>
                    </div>

                    <div className="services-process__grid">
                        {[
                            { step: '01', title: 'Contato', desc: 'Você entra em contato via WhatsApp e conta sobre seu projeto' },
                            { step: '02', title: 'Proposta', desc: 'Enviamos uma proposta personalizada com prazo e investimento' },
                            { step: '03', title: 'Desenvolvimento', desc: 'Criamos seu site com acompanhamento em tempo real' },
                            { step: '04', title: 'Entrega', desc: 'Seu site vai ao ar e você começa a receber clientes' }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="services-process__item"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="services-process__step">{item.step}</div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                                {index < 3 && <div className="services-process__connector" />}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section services-final-cta">
                <div className="container">
                    <motion.div
                        className="services-final-cta__box"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="services-final-cta__glow" />
                        <div className="services-final-cta__content">
                            <h2>Pronto para transformar sua presença digital?</h2>
                            <p>
                                Entre em contato agora mesmo e receba um orçamento personalizado.
                                Resposta rápida via WhatsApp!
                            </p>
                            <a
                                href={getWhatsAppLink('Olá! Gostaria de um orçamento para meu projeto.')}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary btn-lg"
                            >
                                <MessageCircle size={20} />
                                Solicitar Orçamento Grátis
                            </a>
                            <div className="services-final-cta__features">
                                <span><CheckCircle2 size={16} /> Orçamento Gratuito</span>
                                <span><CheckCircle2 size={16} /> Resposta em Minutos</span>
                                <span><CheckCircle2 size={16} /> Sem Compromisso</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default Services;
