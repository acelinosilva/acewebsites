import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import './StatsCounter.css';

const StatsCounter = ({ stats }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className="stats-counter" ref={ref}>
            <div className="container">
                <div className="stats-counter__grid">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="stats-counter__item"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <span className="stats-counter__number text-gradient">{stat.number}</span>
                            <span className="stats-counter__label">{stat.label}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StatsCounter;
