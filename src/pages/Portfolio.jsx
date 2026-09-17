
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Filter,
    ExternalLink,
    ArrowRight,
    Code2,
    Palette,
    Layout,
    X,
    Eye
} from 'lucide-react';
import { projects, categories } from '../data/projects';
import { getWhatsAppLink } from '../data/states';
import SEO from '../components/SEO';
import { FaWhatsapp } from 'react-icons/fa';
import './Portfolio.css';

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [previewProject, setPreviewProject] = useState(null);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setPreviewProject(null);
        };
        if (previewProject) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [previewProject]);

    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter(project => project.category === activeCategory);

    return (
        <main className="portfolio-page">
            <SEO
                title="Portfólio de Sites | Projetos Desenvolvidos pela AceWeb"
                description="Confira nosso portfólio de sites e landing pages a partir de R$ 400. Projetos modernos desenvolvidos para empresas de diversos nichos. Inspire-se!"
                canonical="/portfolio"
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
                        <h1>Nosso <span className="text-gradient">Portfólio</span></h1>
                        <p>
                            Confira alguns dos projetos entregues pela AceWeb.
                            Desenvolvemos soluções personalizadas que unem design premium
                            e alta performance.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filter Section */}
            <section className="portfolio-filter">
                <div className="container">
                    <div className="filter-container">
                        <div className="filter-icon">
                            <Filter size={20} />
                            <span>Filtrar por:</span>
                        </div>
                        <div className="filter-options">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                                    onClick={() => setActiveCategory(category.id)}
                                >
                                    {category.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="section portfolio-grid-section">
                <div className="container">
                    <motion.div
                        layout
                        className="portfolio-grid"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project) => (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className="project-card"
                                >
                                    <div className="project-card__image-container">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="project-card__image"
                                        />
                                        <div className="project-card__overlay">
                                            <div className="project-card__overlay-content">
                                                <span className="project-category">{project.category}</span>
                                                {project.link ? (
                                                    <a
                                                        href={project.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="btn-view-project"
                                                    >
                                                        Ver Projeto <ExternalLink size={16} />
                                                    </a>
                                                ) : (
                                                    <button
                                                        type="button"
                                                        onClick={() => setPreviewProject(project)}
                                                        className="btn-view-project"
                                                    >
                                                        Ver Projeto <ExternalLink size={16} />
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="project-card__content">
                                        <div className="project-card__header">
                                            <h3>{project.title}</h3>
                                            <div className="project-icon">
                                                {(() => {
                                                    const Icon = project.icon;
                                                    return <Icon size={20} />;
                                                })()}
                                            </div>
                                        </div>

                                        <p className="project-description">{project.description}</p>

                                        <div className="project-tags">
                                            {project.tags.map((tag, index) => (
                                                <span key={index} className="project-tag">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {filteredProjects.length === 0 && (
                        <div className="no-projects">
                            <p>Nenhum projeto encontrado nesta categoria.</p>
                            <button
                                className="btn btn-secondary"
                                onClick={() => setActiveCategory('all')}
                            >
                                Ver todos os projetos
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Workflow / CTA */}
            <section className="section portfolio-cta">
                <div className="container">
                    <div className="cta-box-portfolio">
                        <div className="cta-box-portfolio__content">
                            <h2>Quer um site como esses?</h2>
                            <p>
                                Transforme sua ideia em um projeto de sucesso.
                                Nossa equipe está pronta para criar algo exclusivo para você.
                            </p>

                            <div className="portfolio-features">
                                <div className="p-feature">
                                    <div className="p-feature-icon"><Layout size={24} /></div>
                                    <span>Design Exclusivo</span>
                                </div>
                                <div className="p-feature">
                                    <div className="p-feature-icon"><Code2 size={24} /></div>
                                    <span>Tecnologia de Ponta</span>
                                </div>
                                <div className="p-feature">
                                    <div className="p-feature-icon"><Palette size={24} /></div>
                                    <span>Identidade Visual</span>
                                </div>
                            </div>

                            <a
                                href={getWhatsAppLink('Olá! Vi o portfólio e gostaria de um orçamento.')}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary btn-lg"
                            >
                                <FaWhatsapp size={20} />
                                Solicitar Orçamento
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal de Demonstração / Imagem Ampliada */}
            <AnimatePresence>
                {previewProject && (
                    <div
                        className="project-modal-backdrop"
                        onClick={() => setPreviewProject(null)}
                    >
                        <motion.div
                            className="project-modal"
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.25, ease: 'easeOut' }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="project-modal__header">
                                <div className="project-modal__header-info">
                                    <div className="project-modal__badges">
                                        <span className="project-modal__category">{previewProject.category}</span>
                                        <span className="project-modal__status-badge">Demonstração de Projeto</span>
                                    </div>
                                    <h2 className="project-modal__title">{previewProject.title}</h2>
                                </div>
                                <button
                                    type="button"
                                    className="project-modal__close-btn"
                                    onClick={() => setPreviewProject(null)}
                                    aria-label="Fechar demonstração"
                                >
                                    <X size={22} />
                                </button>
                            </div>

                            <div className="project-modal__body">
                                <div className="project-modal__image-container">
                                    <img
                                        src={previewProject.image}
                                        alt={previewProject.title}
                                        className="project-modal__image"
                                    />
                                </div>

                                <div className="project-modal__info">
                                    <p className="project-modal__description">{previewProject.description}</p>
                                    <div className="project-modal__tags">
                                        {previewProject.tags.map((tag, idx) => (
                                            <span key={idx} className="project-tag">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="project-modal__footer">
                                <div className="project-modal__footer-note">
                                    <p>Gostou deste design? Criamos um site exclusivo com a identidade da sua empresa.</p>
                                </div>
                                <div className="project-modal__footer-actions">
                                    <a
                                        href={getWhatsAppLink(`Olá! Vi a demonstração de "${previewProject.title}" no portfólio da AceWeb e gostaria de solicitar um orçamento para um site similar.`)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary"
                                    >
                                        <FaWhatsapp size={18} />
                                        Solicitar Projeto Semelhante
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </main>
    );
};

export default Portfolio;
