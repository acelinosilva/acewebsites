import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin, ArrowUp } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { brazilianStates, getWhatsAppLink } from '../data/states';
import { services } from '../data/services';
import './Footer.css';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();

    const mainStates = brazilianStates.filter(state =>
        ['distrito-federal', 'sao-paulo', 'rio-de-janeiro', 'minas-gerais', 'bahia', 'parana'].includes(state.slug)
    );

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__grid">
                    {/* About Column */}
                    <div className="footer__column footer__column--about">
                        <Link to="/" className="footer__logo">
                            <span className="text-gradient">Ace</span>Web
                        </Link>
                        <p className="footer__description">
                            Criação de sites profissionais em Brasília DF e todo o Brasil.
                            Desenvolvemos soluções digitais que geram resultados reais para o seu negócio.
                        </p>
                        <div className="footer__social">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Instagram">
                                <Instagram size={20} />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Facebook">
                                <Facebook size={20} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="LinkedIn">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div className="footer__column">
                        <h4 className="footer__title">Serviços</h4>
                        <ul className="footer__list">
                            {services.slice(0, 6).map((service) => (
                                <li key={service.id}>
                                    <Link to={`/servicos#${service.id}`} className="footer__link">
                                        {service.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Locations Column */}
                    <div className="footer__column">
                        <h4 className="footer__title">Locais</h4>
                        <ul className="footer__list">
                            {mainStates.map((state) => (
                                <li key={state.slug}>
                                    <Link to={`/locais/criacao-de-sites-em-${state.slug}`} className="footer__link">
                                        Criação de Sites em {state.name}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link to="/locais" className="footer__link footer__link--highlight">
                                    Ver todos os estados →
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="footer__column">
                        <h4 className="footer__title">Contato</h4>
                        <address className="footer__contact-list">
                            <div className="footer__contact-item">
                                <MapPin size={18} className="footer__contact-icon" />
                                <span>Brasília - DF, Brasil</span>
                            </div>
                            <div className="footer__contact-item">
                                <Phone size={18} className="footer__contact-icon" />
                                <a href="tel:+5561996986162" className="footer__contact-link">(61) 9 9698-6162</a>
                            </div>
                            <div className="footer__contact-item">
                                <Mail size={18} className="footer__contact-icon" />
                                <a href="mailto:contato@aceweb.com.br" className="footer__contact-link">contato@aceweb.com.br</a>
                            </div>
                        </address>
                        <a
                            href={getWhatsAppLink()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary footer__cta"
                        >
                            <FaWhatsapp size={18} />
                            Fale no WhatsApp
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer__bottom">
                    <div className="footer__bottom-content">
                        <p className="footer__copyright">
                            © {currentYear} AceWeb. Todos os direitos reservados.
                        </p>
                        <div className="footer__bottom-links">
                            <Link to="/privacidade" className="footer__bottom-link">Política de Privacidade</Link>
                            <Link to="/termos" className="footer__bottom-link">Termos de Uso</Link>
                        </div>
                    </div>
                    <button
                        onClick={scrollToTop}
                        className="footer__scroll-top"
                        aria-label="Voltar ao topo"
                    >
                        <ArrowUp size={20} />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
