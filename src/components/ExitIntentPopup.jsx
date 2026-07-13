import { useState, useEffect } from 'react';
import { FaRocket, FaSearchLocation, FaTools, FaTimes } from 'react-icons/fa';
import { getWhatsAppLink } from '../data/states';
import './ExitIntentPopup.css';

const ExitIntentPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasShown, setHasShown] = useState(false);

    useEffect(() => {
        const hasSeenPopup = sessionStorage.getItem('hasSeenExitIntent');
        if (hasSeenPopup) {
            setHasShown(true);
        }

        const handleMouseLeave = (e) => {
            if (!hasShown && e.clientY <= 0) {
                setIsVisible(true);
                setHasShown(true);
                sessionStorage.setItem('hasSeenExitIntent', 'true');
            }
        };

        const handleEscape = (e) => {
            if (e.key === 'Escape' && isVisible) {
                setIsVisible(false);
            }
        };

        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('keydown', handleEscape);

        return () => {
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('keydown', handleEscape);
        };
    }, [hasShown, isVisible]);

    if (!isVisible) return null;

    return (
        <div className="exit-intent-overlay">
            <div className="exit-intent-modal">
                <button 
                    className="exit-intent-close" 
                    onClick={() => setIsVisible(false)}
                    aria-label="Fechar modal"
                >
                    <FaTimes />
                </button>
                
                <div className="exit-intent-content">
                    <div className="exit-intent-badge">OFERTA POR TEMPO LIMITADO</div>
                    <h2 className="exit-intent-title">Espere! 🛑 Não saia de mãos vazias.</h2>
                    <p className="exit-intent-subtitle">
                        Tenha o site perfeito para o seu negócio por um preço incrível!
                    </p>
                    
                    <div className="exit-intent-price">
                        <span className="price-label">A partir de</span>
                        <span className="price-value">R$ 350</span>
                    </div>

                    <ul className="exit-intent-benefits">
                        <li>
                            <div className="benefit-icon"><FaRocket /></div>
                            <div className="benefit-text">
                                <strong>Entrega Rápida</strong>
                                <span>Seu site no ar em tempo recorde</span>
                            </div>
                        </li>
                        <li>
                            <div className="benefit-icon"><FaSearchLocation /></div>
                            <div className="benefit-text">
                                <strong>SEO Otimizado</strong>
                                <span>Encontrado no Google pelos seus clientes</span>
                            </div>
                        </li>
                        <li>
                            <div className="benefit-icon"><FaTools /></div>
                            <div className="benefit-text">
                                <strong>Suporte Dedicado</strong>
                                <span>Acompanhamento e manutenção sempre que precisar</span>
                            </div>
                        </li>
                    </ul>

                    <a 
                        href={getWhatsAppLink()} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="exit-intent-cta-btn"
                        onClick={() => setIsVisible(false)}
                    >
                        Quero meu site agora!
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ExitIntentPopup;
