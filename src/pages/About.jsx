import { motion } from 'framer-motion';
import {
    CheckCircle2,
    Target,
    Lightbulb,
    Eye,
    Award,
    Users,
    Globe,
    Rocket
} from 'lucide-react';
import { getWhatsAppLink } from '../data/states';
import { FaWhatsapp } from 'react-icons/fa';
import { stats } from '../data/testimonials';
import StatsCounter from '../components/StatsCounter';
import teamOffice from '../assets/team-office.png';
import teamSession from '../assets/team-session.png';
import SEO from '../components/SEO';
import './About.css';

const About = () => {
    const values = [
        { icon: Target, title: 'Foco em Resultados', description: 'Cada projeto é desenvolvido com o objetivo de gerar resultados reais para o seu negócio.' },
        { icon: Lightbulb, title: 'Inovação', description: 'Utilizamos as tecnologias mais modernas do mercado para entregar soluções de ponta.' },
        { icon: Users, title: 'Parceria', description: 'Trabalhamos lado a lado com nossos clientes, construindo relacionamentos duradouros.' },
        { icon: Award, title: 'Excelência', description: 'Comprometimento total com a qualidade em cada detalhe do projeto.' },
    ];

    const differentials = [
        'Sites otimizados para SEO desde a primeira linha de código',
        'Foco total em conversão e geração de leads',
        'Atendimento personalizado e próximo ao cliente',
        'Suporte técnico rápido e eficiente',
        'Preços justos e transparentes',
        'Experiência comprovada com mais de 500 projetos',
        'Atendimento em todo o Brasil e exterior',
        'Metodologia ágil e entregas no prazo',
    ];

    return (
        <main className="about-page">
            <SEO
                title="Sobre a AceWeb | Agência de Criação de Sites"
                description="Conheça a AceWeb, agência especializada em Criação de Sites Profissionais a partir de R$ 400. Mais de 10 anos de experiência transformando negócios."
                canonical="/sobre"
            />
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
                        <h1>Sobre a <span className="text-gradient">AceWeb</span></h1>
                        <p>
                            Conheça nossa história, missão e o que nos motiva a criar
                            sites profissionais que transformam negócios em todo o Brasil.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Story Section */}
            <section className="section about-story">
                <div className="container">
                    <div className="about-story__grid">
                        <motion.div
                            className="about-story__content"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2>Nossa <span className="text-gradient">História</span></h2>
                            <p>
                                A AceWeb nasceu em Brasília - DF com uma missão clara:
                                democratizar o acesso a sites profissionais de alta qualidade
                                para empresas de todos os tamanhos.
                            </p>
                            <p>
                                Ao longo de mais de 10 anos de atuação no mercado, desenvolvemos
                                mais de 500 projetos para clientes em todos os estados brasileiros,
                                além de atender brasileiros no exterior.
                            </p>
                            <p>
                                Nossa equipe é formada por profissionais apaixonados por tecnologia
                                e comprometidos em entregar resultados reais. Acreditamos que um
                                bom site não é apenas bonito, mas sim uma ferramenta estratégica
                                para o crescimento do seu negócio.
                            </p>
                        </motion.div>

                        <motion.div
                            className="about-story__visual"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="about-story__image-wrapper">
                                <img src={teamOffice} alt="Equipe AceWeb em ação" className="about-story__main-image" />
                                <div className="about-story__image-overlay">
                                    <Globe size={40} className="text-primary" />
                                    <span>Presença em 27 Estados</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Team/Culture Section */}
            <section className="section about-team">
                <div className="container">
                    <div className="about-team__grid">
                        <motion.div
                            className="about-team__image-side"
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <img src={teamSession} alt="Brainstorming na AceWeb" className="about-team__image" />
                        </motion.div>

                        <motion.div
                            className="about-team__content"
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="badge">Nossa Cultura</span>
                            <h2>Inovação e <span className="text-gradient">Colaboração</span></h2>
                            <p>
                                Na AceWeb, acreditamos que as melhores ideias surgem da diversidade e do trabalho em equipe.
                                Nosso ambiente é projetado para fomentar a criatividade e a troca constante de conhecimentos.
                            </p>
                            <div className="about-team__features">
                                <div className="about-team__feature">
                                    <Users size={24} />
                                    <div>
                                        <h4>Equipe Especialista</h4>
                                        <p>Designers, desenvolvedores e especialistas em SEO trabalhando juntos.</p>
                                    </div>
                                </div>
                                <div className="about-team__feature">
                                    <Rocket size={24} />
                                    <div>
                                        <h4>Foco em Performance</h4>
                                        <p>Apaixonados por velocidade e código limpo.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <StatsCounter stats={stats} />

            {/* Mission, Vision, Values */}
            <section className="section about-mvv">
                <div className="container">
                    <div className="about-mvv__grid">
                        <motion.div
                            className="about-mvv__card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="about-mvv__icon">
                                <Target size={28} />
                            </div>
                            <h3>Missão</h3>
                            <p>
                                Transformar a presença digital de empresas brasileiras através
                                de sites profissionais, modernos e focados em resultados,
                                contribuindo para o crescimento sustentável de nossos clientes.
                            </p>
                        </motion.div>

                        <motion.div
                            className="about-mvv__card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <div className="about-mvv__icon">
                                <Eye size={28} />
                            </div>
                            <h3>Visão</h3>
                            <p>
                                Ser reconhecida como a principal referência em criação de sites
                                no Brasil, sinônimo de qualidade, inovação e resultados
                                comprovados para nossos clientes.
                            </p>
                        </motion.div>

                        <motion.div
                            className="about-mvv__card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className="about-mvv__icon">
                                <Rocket size={28} />
                            </div>
                            <h3>Valores</h3>
                            <p>
                                Excelência, inovação, transparência, compromisso com resultados
                                e respeito aos nossos clientes e parceiros são os pilares
                                que guiam todas as nossas ações.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Grid */}
            <section className="section about-values">
                <div className="container">
                    <div className="section-title">
                        <h2>O que nos <span className="text-gradient">move</span></h2>
                        <p>
                            Nossos valores guiam cada decisão e cada linha de código
                            que escrevemos para nossos clientes.
                        </p>
                    </div>

                    <div className="about-values__grid">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <motion.div
                                    key={index}
                                    className="about-value-card"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <div className="about-value-card__icon">
                                        <Icon size={24} />
                                    </div>
                                    <h3>{value.title}</h3>
                                    <p>{value.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Differentials */}
            <section className="section about-differentials">
                <div className="container">
                    <div className="about-differentials__grid">
                        <motion.div
                            className="about-differentials__content"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2>Por que escolher a <span className="text-gradient">AceWeb</span>?</h2>
                            <p>
                                Nosso compromisso vai além de criar sites bonitos.
                                Focamos em entregar soluções que realmente funcionam
                                e geram resultados para o seu negócio.
                            </p>

                            <ul className="about-differentials__list">
                                {differentials.map((diff, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: index * 0.05 }}
                                    >
                                        <CheckCircle2 size={18} className="text-primary" />
                                        <span>{diff}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            className="about-differentials__cta"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="about-cta-box">
                                <h3>Pronto para começar?</h3>
                                <p>
                                    Entre em contato pelo WhatsApp e receba um orçamento
                                    personalizado para o seu projeto.
                                </p>
                                <a
                                    href={getWhatsAppLink()}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary btn-lg"
                                >
                                    <FaWhatsapp size={20} />
                                    Falar no WhatsApp
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
