import React from 'react';
import { Tag } from 'lucide-react';
import './PromoBar.css';

const PromoBar = () => {
    return (
        <div className="promo-bar">
            <div className="container promo-bar__container">
                <Tag size={16} className="promo-bar__icon" />
                <a href="#planos" className="promo-bar__link">
                    <strong>Oferta por tempo limitado:</strong> Criação de site profissional a partir de <strong>R$ 400</strong>!
                </a>
            </div>
        </div>
    );
};

export default PromoBar;
