import React from 'react';
import styles from './spell-info-details.module.css';

export default function SpellInfoDetails({ 
    spell, 
    isVisible, 
    onClose 
}) {
    
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

    const handleOverlayClick = () => {
        if (onClose) {
            onClose();
        }
    };

    const handlePopupClick = (e) => {
        e.stopPropagation();
    };

    if (!isVisible) {
        return null;
    }

    return (
        <>
            <div 
                className={styles.popupOverlay} 
                onClick={handleOverlayClick}
            />
            <div 
                className={styles.spellPopup}
                onClick={handlePopupClick}
            >
                <div className={styles.popupHeader}>
                    <img 
                        src={getLocalSpellIcon(spell.id)}
                        alt={spell.name} 
                        className={styles.popupIcon}
                        onError={(e) => {
                            e.target.src = spell.icon;
                        }}
                    />
                    <div className={styles.popupTitleContainer}>
                        <h2 className={styles.popupTitle}>{spell.name}</h2>
                        <span className={styles.popupLevel}>
                            Nivel {spell.level} {spell.upcast ? "(Upcast)" : ""}
                        </span>
                    </div>
                </div>
            
                <div className={styles.popupContent}>
                    <div className={styles.popupInfo}>
                        <span className={styles.popupLabel}>Tipo:</span> 
                        <div className={styles.popupValue}>{spell.type}</div>
                    </div>
                    <div className={styles.popupInfo}>
                        <span className={styles.popupLabel}>Acción:</span> 
                        <div className={styles.popupValue}>{spell.action}</div>
                    </div>
                    <div className={styles.popupInfo}>
                        <span className={styles.popupLabel}>Duración:</span> 
                        <div className={styles.popupValue}>{spell.duration}</div>
                    </div>
                    <div className={styles.popupInfo}>
                        <span className={styles.popupLabel}>Rango:</span> 
                        <div className={styles.popupValue}>{spell.range}</div>
                    </div>
                    
                    {spell.damage && spell.damage.length > 0 && (
                        <div className={styles.popupDamageSection}>
                            <span className={styles.popupLabel}>Daño:</span>
                            <ul className={styles.popupDamageList}>
                                {spell.damage.map((dmg, idx) => (
                                    <li key={idx} className={styles.popupDamageItem}>
                                        {dmg.dice} {dmg.damageType}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    
                    <a 
                        href={spell.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={styles.popupLink}
                    >
                        Más información
                    </a>
                </div>
            </div>
        </>
    );
}
