import React, { useState } from 'react';
import styles from './spell-info.module.css';
import SpellInfoDetails from '../spell-info-details/spell-info-details.jsx';

export default function SpellInfo({ spell }) {
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    // Construir la ruta de la imagen local basada en el ID del hechizo
    const getLocalSpellIcon = (spellId) => {
        try {
            // Intentar cargar la imagen local
            return new URL(`../../assets/spells/${spellId}.png`, import.meta.url).href;
        } catch {
            // Si no existe, usar la imagen remota como fallback
            return spell.icon;
        }
    };

    const handleCardClick = () => {
        setIsPopupVisible(true);
    };

    const handleClosePopup = () => {
        setIsPopupVisible(false);
    };
 
    return (
         
        <>
            <div 
                className={styles.spellCard}
                onClick={handleCardClick}
            >
                {/* Card principal compacta */}
                <img 
                    src={getLocalSpellIcon(spell.id)}
                    alt={spell.name} 
                    className={styles.spellIcon}
                    onError={(e) => {
                        // Fallback si la imagen local falla
                        e.target.src = spell.icon;
                    }}
                />
                <div className={styles.spellTextContainer}>
                    <h3 className={styles.spellTitle}>{spell.name}</h3>
                    <span className={styles.spellLevel}>Nivel {spell.level}</span>
                </div>
            </div>

            {/* Popup informativo  */}
            <SpellInfoDetails 
                spell={spell}
                isVisible={isPopupVisible}
                onClose={handleClosePopup}
            />
        </>
    );
}
