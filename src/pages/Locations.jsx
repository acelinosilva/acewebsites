import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, MessageCircle } from 'lucide-react';
import { brazilianStates, getWhatsAppLink } from '../data/states';
import './Locations.css';

const Locations = () => {
    // Group states by region
    const regions = {
        'Norte': ['acre', 'amapa', 'amazonas', 'para', 'rondonia', 'roraima', 'tocantins'],
        'Nordeste': ['alagoas', 'bahia', 'ceara', 'maranhao', 'paraiba', 'pernambuco', 'piaui', 'rio-grande-do-norte', 'sergipe'],
        'Centro-Oeste': ['distrito-federal', 'goias', 'mato-grosso', 'mato-grosso-do-sul'],
        'Sudeste': ['espirito-santo', 'minas-gerais', 'rio-de-janeiro', 'sao-paulo'],
        'Sul': ['parana', 'rio-grande-do-sul', 'santa-catarina']
    };

    const getStatesByRegion = (region) => {
        return brazilianStates.filter(state => regions[region].includes(state.slug));
    };

    return (
        <main className="locations-page">
            {/* Hero Section */}
            <section className="page-hero">
                <div className="page-hero__background">
                    <div className="page-hero__glow" />
                </div>
                <div className="container">
                    <motion.div
                        className="page-hero__content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="locations-badge">
                            <MapPin size={14} />
                            27 Estados Atendidos
                        </span>
                        <h1>Criação de Sites em <span className="text-gradient">Todo o Brasil</span></h1>
                        <p>
                            Desenvolvemos sites profissionais para empresas em todos os estados brasileiros.
                            Nosso atendimento é 100% remoto, garantindo a mesma qualidade para clientes
                            de qualquer região do país.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Location */}
            <section className="section locations-main">
                <div className="container">
                    <motion.div
                        className="main-location-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="main-location-card__content">
                            <span className="main-location-card__badge">Sede Principal</span>
                            <h2>Criação de Sites em <span className="text-gradient">Brasília - DF</span></h2>
                            <p>
                                Nossa sede está localizada em Brasília, capital do Brasil.
                                De aqui, atendemos empresas de todo o país com a mesma
                                dedicação e qualidade. A proximidade com o centro político
                                e empresarial do país nos proporciona uma visão privilegiada
                                do mercado nacional.
                            </p>
                            <div className="main-location-card__cta">
                                <Link
                                    to="/locais/criacao-de-sites-em-distrito-federal"
                                    className="btn btn-primary"
                                >
                                    Saiba mais sobre Brasília
                                    <ArrowRight size={18} />
                                </Link>
                                <a
                                    href={getWhatsAppLink('Olá! Sou de Brasília e gostaria de um orçamento.')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-secondary"
                                >
                                    <MessageCircle size={18} />
                                    Falar no WhatsApp
                                </a>
                            </div>
                        </div>
                        <div className="main-location-card__visual">
                            <div className="main-location-card__icon">
                                <MapPin size={48} />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* States by Region */}
            <section className="section locations-regions">
                <div className="container">
                    <div className="section-title">
                        <h2>Escolha seu <span className="text-gradient">Estado</span></h2>
                        <p>
                            Clique no seu estado para ver informações específicas
                            sobre criação de sites na sua região.
                        </p>
                    </div>

                    {Object.keys(regions).map((region, regionIndex) => (
                        <motion.div
                            key={region}
                            className="region-section"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: regionIndex * 0.1 }}
                        >
                            <h3 className="region-title">{region}</h3>
                            <div className="states-grid">
                                {getStatesByRegion(region).map((state, index) => (
                                    <Link
                                        key={state.slug}
                                        to={`/locais/criacao-de-sites-em-${state.slug}`}
                                        className="state-card"
                                    >
                                        <span className="state-card__abbr">{state.abbr}</span>
                                        <span className="state-card__name">{state.name}</span>
                                        <ArrowRight size={16} className="state-card__arrow" />
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* International */}
            <section className="section locations-international">
                <div className="container">
                    <motion.div
                        className="international-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Atendemos também o <span className="text-gradient">Exterior</span></h2>
                        <p>
                            Brasileiros que moram no exterior e precisam de sites profissionais
                            em português ou outros idiomas também podem contar com nossos serviços.
                            Trabalhamos com fusos horários flexíveis para atender você onde estiver.
                        </p>
                        <a
                            href={getWhatsAppLink('Olá! Moro no exterior e gostaria de um orçamento para criação de site.')}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            <MessageCircle size={18} />
                            Falar com Especialista
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="section locations-cta">
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
                                Não importa onde você esteja no Brasil,
                                podemos criar o site perfeito para o seu negócio.
                            </p>
                            <a
                                href={getWhatsAppLink()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary btn-lg"
                            >
                                <MessageCircle size={20} />
                                Solicitar Orçamento Gratuito
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default Locations;
