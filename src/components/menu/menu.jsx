import React from 'react';
import styles from './menu.module.css';

// Importar imágenes de clases
import bardImg from '../../assets/classes/bard.png';
import clericImg from '../../assets/classes/cleric.png';
import druidImg from '../../assets/classes/druid.png';
import sorcererImg from '../../assets/classes/sorcerer.png';
import warlockImg from '../../assets/classes/warlock.png';
import wizardImg from '../../assets/classes/wizard.png';

const classImages = {
  bard: bardImg,
  cleric: clericImg,
  druid: druidImg,
  sorcerer: sorcererImg,
  warlock: warlockImg,
  wizard: wizardImg
};

const classes = ['bard', 'cleric', 'druid', 'sorcerer', 'warlock', 'wizard'];

export default function Menu({
  selectedClass,
  onClassSelect
}) {

  const handleClassClick = (className) => {
    if (onClassSelect) {
      onClassSelect(className);
    }
    const element = document.getElementById('ShowSelectedClass');
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        element.focus();
      }, 200);
    }
  };

  return (
    <nav className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <h1 className={styles.sidebarTitle}>Libro de Hechizos</h1>
        <p className={styles.sidebarSubtitle}>Act. 2 Frontend Frameworks</p>
      </div>
      
      <ul className={styles.classList}>
        {classes.map(className => (
          <li 
            key={className}
            className={`${styles.classItem} ${selectedClass === className ? styles.active : ''}`}
            onClick={() => handleClassClick(className)}
          >
            <img 
              src={classImages[className]} 
              alt={className} 
              className={styles.classIcon}
            />
            <span className={styles.className}>{className}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
