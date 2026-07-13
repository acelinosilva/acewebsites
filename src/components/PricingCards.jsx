import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { getWhatsAppLink } from '../data/states';
import './PricingCards.css';

const PricingCards = () => {
    const plans = [
        {
            name: "Essencial",
            price: "400",
            description: "Ideal para iniciar com um visual profissional. Em até 12x.",
            features: [
                "Landing Page de Alta Conversão",
                "Design Responsivo (Mobile First)",
                "Página Única (One Page)",
                "Otimização Básica de SEO",
                "Botão Flutuante de WhatsApp"
            ],
            highlight: false,
            isPromo: true
        },
        {
            name: "Profissional",
            price: "550",
            description: "A solução completa para gerar autoridade e vendas. Em até 12x.",
            features: [
                "Site Institucional Completo",
                "Até 5 Seções/Páginas",
                "Otimização Avançada para Google (SEO)",
                "Integração com Redes Sociais",
                "Formulário Avançado de Contato"
            ],
            highlight: true
        },
        {
            name: "Loja Virtual",
            price: null,
            description: "Para vender 24h por dia com estoque e pagamentos online.",
            features: [
                "E-commerce Completo",
                "Gestão de Estoque e Produtos",
                "Integração Cartão, PIX e Boleto",
                "Cálculo de Frete (Correios/Outros)",
                "Carrinho Otimizado para Conversão"
            ],
            highlight: false
        }
    ];

    return (
        <section className="section pricing-section" id="planos">
            <div className="container">
                <div className="section-title">
                    <h2>Planos e <span className="text-gradient">Valores Promocionais</span></h2>
                    <p>Qualidade premium com o melhor custo-benefício. Aproveite o preço por tempo limitado.</p>
                </div>
                
                <div className="pricing__grid">
                    {plans.map((plan, index) => (
                        <motion.div 
                            key={index}
                            className={`pricing-card ${plan.highlight ? 'pricing-card--highlight' : ''} ${plan.isPromo ? 'pricing-card--promo' : ''}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            {plan.highlight && (
                                <div className="pricing-card__badge">Mais Recomendado</div>
                            )}
                            {plan.isPromo && !plan.highlight && (
                                <div className="pricing-card__badge pricing-card__badge--promo">Oferta Especial</div>
                            )}
                            <h3 className="pricing-card__name">{plan.name}</h3>
                            {plan.price ? (
                                <div className="pricing-card__pricebox">
                                    <span className="pricing-card__currency">R$</span>
                                    <span className="pricing-card__price">{plan.price}</span>
                                </div>
                            ) : (
                                <div className="pricing-card__pricebox pricing-card__pricebox--consult">
                                    <span className="pricing-card__consult">Consultar disponibilidade</span>
                                </div>
                            )}
                            <p className="pricing-card__description">{plan.description}</p>
                            
                            <ul className="pricing-card__features">
                                {plan.features.map((feature, fIndex) => (
                                    <li key={fIndex}>
                                        <Check size={18} className="pricing-card__check" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            
                            <a 
                                href={getWhatsAppLink(`Olá! Tenho interesse no Plano ${plan.name} e gostaria de mais detalhes.`)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`btn ${plan.highlight ? 'btn-primary' : 'btn-secondary'} pricing-card__btn`}
                            >
                                {plan.price ? <>Quero este plano <ArrowRight size={18} /></> : <>Consultar disponibilidade <ArrowRight size={18} /></>}
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingCards;
