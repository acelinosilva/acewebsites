import { FaWhatsapp } from 'react-icons/fa';
import { getWhatsAppLink } from '../data/states';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
    return (
        <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
            aria-label="Falar no WhatsApp"
        >
            <div className="whatsapp-button__pulse" />
            <FaWhatsapp size={28} />
            <span className="whatsapp-button__tooltip">Fale Conosco!</span>
        </a>
    );
};

export default WhatsAppButton;
