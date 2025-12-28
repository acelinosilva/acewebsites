import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import './ThemeToggle.css';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            className={`theme-toggle theme-toggle--${theme}`}
            onClick={toggleTheme}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Alternar tema"
        >
            <div className="theme-toggle__track">
                <motion.div
                    className="theme-toggle__thumb"
                    animate={{ x: theme === 'dark' ? 0 : 32 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                >
                    {theme === 'dark' ? (
                        <Moon size={16} className="theme-toggle__icon" />
                    ) : (
                        <Sun size={16} className="theme-toggle__icon" />
                    )}
                </motion.div>
            </div>
        </motion.button>
    );
};

export default ThemeToggle;
