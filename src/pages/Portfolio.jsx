
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Filter,
    ExternalLink,
    ArrowRight,
    Layers,
    Code2,
    Palette,
    Layout,
    GraduationCap,
    Waves,
    Shield,
    Bug
} from 'lucide-react';
import { projects, categories } from '../data/projects';
import { getWhatsAppLink } from '../data/states';
import SEO from '../components/SEO';
import { FaWhatsapp } from 'react-icons/fa';
import './Portfolio.css';

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [hoveredProject, setHoveredProject] = useState(null);

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
                                    onMouseEnter={() => setHoveredProject(project.id)}
                                    onMouseLeave={() => setHoveredProject(null)}
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
                                                <a href="#" className="btn-view-project">
                                                    Ver Projeto <ExternalLink size={16} />
                                                </a>
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
        </main>
    );
};

export default Portfolio;
