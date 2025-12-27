import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './ServiceCard.css';

const ServiceCard = ({ service, index = 0 }) => {
    const Icon = service.icon;

    return (
        <motion.div
            className="service-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div className="service-card__icon">
                <Icon size={28} />
            </div>
            <h3 className="service-card__title">{service.title}</h3>
            <p className="service-card__description">{service.shortDescription}</p>
            <Link to={`/servicos#${service.id}`} className="service-card__link">
                Saiba mais <ArrowRight size={16} />
            </Link>
        </motion.div>
    );
};

export default ServiceCard;
