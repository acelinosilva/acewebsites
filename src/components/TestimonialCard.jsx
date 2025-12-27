import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import './TestimonialCard.css';

const TestimonialCard = ({ testimonial, index = 0 }) => {
    return (
        <motion.div
            className="testimonial-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div className="testimonial-card__quote">
                <Quote size={24} />
            </div>
            <div className="testimonial-card__rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                ))}
            </div>
            <p className="testimonial-card__content">{testimonial.content}</p>
            <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">
                    {testimonial.name.charAt(0)}
                </div>
                <div className="testimonial-card__info">
                    <h4 className="testimonial-card__name">{testimonial.name}</h4>
                    <p className="testimonial-card__role">
                        {testimonial.role} - {testimonial.company}
                    </p>
                    <p className="testimonial-card__location">{testimonial.location}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default TestimonialCard;
