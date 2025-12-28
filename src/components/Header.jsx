import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { brazilianStates, getWhatsAppLink } from '../data/states';
import logoAceweb from '../assets/logo-aceweb.png';
import ThemeToggle from './ThemeToggle';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isLocaisOpen, setIsLocaisOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMenuOpen(false);
        setIsLocaisOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Serviços', path: '/servicos' },
        { name: 'Portfólio', path: '/portfolio' },
        { name: 'Sobre', path: '/sobre' },
        { name: 'Locais', path: '/locais', hasDropdown: true },
        { name: 'Contato', path: '/contato' },
    ];

    return (
        <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
            <div className="container header__container">
                <Link to="/" className="header__logo">
                    <img
                        src={logoAceweb}
                        alt="AceWeb - Criação de Sites e Lojas Virtuais"
                        className="header__logo-img"
                    />
                </Link>

                <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
                    <ul className="header__nav-list">
                        {navLinks.map((link) => (
                            <li key={link.name} className="header__nav-item">
                                {link.hasDropdown ? (
                                    <div className="header__dropdown">
                                        <button
                                            className="header__nav-link header__dropdown-toggle"
                                            onClick={() => setIsLocaisOpen(!isLocaisOpen)}
                                        >
                                            {link.name}
                                            <ChevronDown
                                                size={16}
                                                className={`header__dropdown-icon ${isLocaisOpen ? 'header__dropdown-icon--open' : ''}`}
                                            />
                                        </button>
                                        <AnimatePresence>
                                            {isLocaisOpen && (
                                                <motion.div
                                                    className="header__dropdown-menu"
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <Link to="/locais" className="header__dropdown-item header__dropdown-item--main">
                                                        Ver todos os estados
                                                    </Link>
                                                    <div className="header__dropdown-divider" />
                                                    <div className="header__dropdown-grid">
                                                        {brazilianStates.map((state) => (
                                                            <Link
                                                                key={state.slug}
                                                                to={`/locais/criacao-de-sites-em-${state.slug}`}
                                                                className="header__dropdown-item"
                                                            >
                                                                {state.abbr} - {state.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ) : (
                                    <Link
                                        to={link.path}
                                        className={`header__nav-link ${location.pathname === link.path ? 'header__nav-link--active' : ''}`}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="header__actions">
                    <ThemeToggle />
                    <a
                        href={getWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary header__cta"
                    >
                        <MessageCircle size={18} />
                        <span>Fale no WhatsApp</span>
                    </a>
                </div>

                <button
                    className="header__menu-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="header__mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ul className="header__mobile-nav">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    {link.hasDropdown ? (
                                        <>
                                            <button
                                                className="header__mobile-link"
                                                onClick={() => setIsLocaisOpen(!isLocaisOpen)}
                                            >
                                                {link.name}
                                                <ChevronDown
                                                    size={16}
                                                    className={`header__dropdown-icon ${isLocaisOpen ? 'header__dropdown-icon--open' : ''}`}
                                                />
                                            </button>
                                            <AnimatePresence>
                                                {isLocaisOpen && (
                                                    <motion.div
                                                        className="header__mobile-dropdown"
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                    >
                                                        <Link to="/locais" className="header__mobile-dropdown-item">
                                                            Ver todos os estados
                                                        </Link>
                                                        {brazilianStates.slice(0, 10).map((state) => (
                                                            <Link
                                                                key={state.slug}
                                                                to={`/locais/criacao-de-sites-em-${state.slug}`}
                                                                className="header__mobile-dropdown-item"
                                                            >
                                                                {state.name}
                                                            </Link>
                                                        ))}
                                                        <Link to="/locais" className="header__mobile-dropdown-item header__mobile-dropdown-item--more">
                                                            Ver mais estados...
                                                        </Link>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </>
                                    ) : (
                                        <Link to={link.path} className="header__mobile-link">
                                            {link.name}
                                        </Link>
                                    )}
                                </li>
                            ))}
                            <li>
                                <a
                                    href={getWhatsAppLink()}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary header__mobile-cta"
                                >
                                    <MessageCircle size={18} />
                                    Fale no WhatsApp
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
