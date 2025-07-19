import React from 'react';
import styles from './class-card.module.css';
import SpellInfo from '../spells-info/spell-info.jsx';

// Img importadas
import bardImg from '../../assets/classes/bard.png';
import clericImg from '../../assets/classes/cleric.png';
import druidImg from '../../assets/classes/druid.png';
import sorcererImg from '../../assets/classes/sorcerer.png';
import warlockImg from '../../assets/classes/warlock.png';
import wizardImg from '../../assets/classes/wizard.png';

// Mapeo de nombres de clases a imágenes
const classImages = {
    bard: bardImg,
    cleric: clericImg,
    druid: druidImg,
    sorcerer: sorcererImg,
    warlock: warlockImg,
    wizard: wizardImg
};

export default function ClassCard({ name, onClick }) {
    return (
        <div className={styles.classCard} onClick={onClick}>
            <div className={styles["class-card-content"]}> 
                <h2 className={styles["class-card-title"]}>{name}</h2>
                <img 
                    src={classImages[name]} 
                    alt={name} 
                    className={styles.classImage}
                />
               
            </div>
        </div>
    );
}

