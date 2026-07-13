import { motion } from 'framer-motion';
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    CheckCircle2
} from 'lucide-react';
import { getWhatsAppLink } from '../data/states';
import { FaWhatsapp } from 'react-icons/fa';
import SEO from '../components/SEO';
import './Contact.css';

const Contact = () => {
    const contactInfo = [
        {
            icon: MapPin,
            title: 'Localização',
            content: 'Brasília - DF, Brasil',
            subtitle: 'Atendimento em todo o Brasil'
        },
        {
            icon: Phone,
            title: 'Telefone / WhatsApp',
            content: '(61) 9 9698-6162',
            subtitle: 'WhatsApp disponível'
        },
        {
            icon: Mail,
            title: 'E-mail',
            content: 'acewebdf@gmail.com',
            subtitle: 'Respondemos em até 24h'
        },
        {
            icon: Clock,
            title: 'Horário',
            content: 'Seg a Sex: 9h às 18h',
            subtitle: 'Sáb: 9h às 13h'
        }
    ];

    const whyContact = [
        'Orçamento gratuito e sem compromisso',
        'Resposta rápida via WhatsApp',
        'Atendimento personalizado',
        'Consultoria inicial gratuita',
        'Atendemos todo o Brasil'
    ];

    return (
        <main className="contact-page">
            <SEO
                title="Fale Conosco | AceWeb - Criação de Sites"
                description="Entre em contato com a AceWeb e solicite um orçamento para seu site a partir de R$ 400. Atendimento rápido via WhatsApp, E-mail ou Telefone."
                canonical="/contato"
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
                        <h1>Entre em <span className="text-gradient">Contato</span></h1>
                        <p>
                            Estamos prontos para transformar sua presença digital.
                            Fale conosco e receba um orçamento personalizado para seu projeto.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="section contact-section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Info */}
                        <motion.div
                            className="contact-info"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2>Fale <span className="text-gradient">Conosco</span></h2>
                            <p className="contact-info__description">
                                Preferimos conversar pelo WhatsApp para oferecer um atendimento
                                mais rápido e personalizado. Clique no botão abaixo e fale
                                diretamente com nossa equipe!
                            </p>

                            <a
                                href={getWhatsAppLink()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary btn-lg contact-whatsapp-btn"
                            >
                                <FaWhatsapp size={24} />
                                Falar no WhatsApp Agora
                            </a>

                            <div className="contact-info__cards">
                                {contactInfo.map((info, index) => {
                                    const Icon = info.icon;
                                    return (
                                        <motion.div
                                            key={index}
                                            className="contact-info-card"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: index * 0.1 }}
                                        >
                                            <div className="contact-info-card__icon">
                                                <Icon size={20} />
                                            </div>
                                            <div className="contact-info-card__content">
                                                <h3>{info.title}</h3>
                                                <p className="contact-info-card__main">{info.content}</p>
                                                <p className="contact-info-card__sub">{info.subtitle}</p>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>

                        {/* Why Contact */}
                        <motion.div
                            className="contact-why"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="contact-why__box">
                                <h3>Por que falar conosco?</h3>
                                <ul className="contact-why__list">
                                    {whyContact.map((item, index) => (
                                        <li key={index}>
                                            <CheckCircle2 size={18} className="text-primary" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="contact-why__cta">
                                    <p>Não perca tempo! Seu novo site está a uma mensagem de distância.</p>
                                    <a
                                        href={getWhatsAppLink('Olá! Vim pelo site e gostaria de um orçamento.')}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary"
                                    >
                                        <FaWhatsapp size={18} />
                                        Solicitar Orçamento
                                    </a>
                                </div>
                            </div>

                            <div className="contact-response">
                                <div className="contact-response__icon">⚡</div>
                                <div className="contact-response__content">
                                    <h4>Resposta Rápida</h4>
                                    <p>Nosso tempo médio de resposta é de apenas 5 minutos durante o horário comercial!</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section contact-faq">
                <div className="container">
                    <div className="section-title">
                        <h2>Perguntas <span className="text-gradient">Frequentes</span></h2>
                        <p>Tire suas dúvidas sobre nossos serviços</p>
                    </div>

                    <div className="faq-grid">
                        <motion.div
                            className="faq-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                        >
                            <h3>Quanto custa criar um site?</h3>
                            <p>
                                O valor varia de acordo com o projeto, mas nossos planos começam a partir de R$ 400.
                                Entre em contato para receber um orçamento personalizado e sem compromisso.
                            </p>
                        </motion.div>

                        <motion.div
                            className="faq-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                        >
                            <h3>Qual o prazo de entrega?</h3>
                            <p>
                                O prazo médio é de 7 a 15 dias úteis, dependendo da complexidade
                                do projeto. Sites mais simples podem ser entregues em menos tempo.
                            </p>
                        </motion.div>

                        <motion.div
                            className="faq-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                        >
                            <h3>Vocês atendem fora de Brasília?</h3>
                            <p>
                                Sim! Atendemos clientes em todos os estados do Brasil e também
                                brasileiros no exterior. Todo o processo é feito de forma remota.
                            </p>
                        </motion.div>

                        <motion.div
                            className="faq-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                        >
                            <h3>Quais formas de pagamento?</h3>
                            <p>
                                Aceitamos PIX, transferência bancária e parcelamento em até 3x
                                no cartão de crédito. Trabalhamos com entrada + parcelas.
                            </p>
                        </motion.div>

                        <motion.div
                            className="faq-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                        >
                            <h3>O site é otimizado para celular?</h3>
                            <p>
                                Sim! Todos os nossos sites são 100% responsivos e funcionam
                                perfeitamente em qualquer dispositivo: celular, tablet ou computador.
                            </p>
                        </motion.div>

                        <motion.div
                            className="faq-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.5 }}
                        >
                            <h3>Vocês fazem SEO?</h3>
                            <p>
                                Sim! Todos os nossos sites já são desenvolvidos com SEO básico incluso.
                                Também oferecemos pacotes de SEO avançado para quem deseja resultados ainda melhores.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
