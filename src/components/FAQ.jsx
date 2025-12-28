import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqData } from '../data/faq';
import { getWhatsAppLink } from '../data/states';
import './FAQ.css';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
            <button className="faq-item__question" onClick={onClick} aria-expanded={isOpen}>
                <span>{question}</span>
                <ChevronDown size={20} className="faq-item__icon" />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="faq-item__answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <div className="faq-item__answer-content">
                            <p>{answer}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="section faq-section">
            <div className="container">
                <div className="section-title">
                    <span className="badge">Dúvidas Frequentes</span>
                    <h2>Tudo o que você precisa <span className="text-gradient">saber</span></h2>
                    <p>
                        Respondemos as principais perguntas para ajudar você a entender como
                        trabalhamos e como podemos impulsionar seu negócio digital.
                    </p>
                </div>

                <div className="faq__grid">
                    <div className="faq__list">
                        {faqData.map((item, index) => (
                            <FAQItem
                                key={index}
                                question={item.question}
                                answer={item.answer}
                                isOpen={openIndex === index}
                                onClick={() => setOpenIndex(prev => prev === index ? null : index)}
                            />
                        ))}
                    </div>

                    <motion.div
                        className="faq__cta"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="faq__cta-box">
                            <div className="faq__cta-icon">
                                <HelpCircle size={40} />
                            </div>
                            <h3>Ainda tem dúvidas?</h3>
                            <p>
                                Caso não tenha encontrado sua resposta aqui, nossa equipe está
                                pronta para te atender de forma personalizada.
                            </p>
                            <a
                                href={getWhatsAppLink('Olá! Tenho algumas dúvidas sobre a criação de sites.')}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary"
                            >
                                Perguntar no WhatsApp
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
