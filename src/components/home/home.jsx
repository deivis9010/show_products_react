

import React from 'react';
import styles from './home.module.css';

// Importar imágenes de clases
import bardImg from '../../assets/classes/bard.png';
import clericImg from '../../assets/classes/cleric.png';
import druidImg from '../../assets/classes/druid.png';
import sorcererImg from '../../assets/classes/sorcerer.png';
import warlockImg from '../../assets/classes/warlock.png';
import wizardImg from '../../assets/classes/wizard.png';
import ClassCard from '../class-card/class-card';
import SpellInfo from '../spells/spell-info.jsx';
const classImages = {
  bard: bardImg,
  cleric: clericImg,
  druid: druidImg,
  sorcerer: sorcererImg,
  warlock: warlockImg,
  wizard: wizardImg
};

const classes = ['bard', 'cleric', 'druid', 'sorcerer', 'warlock', 'wizard'];

export default function Home({ 
  onClassSelect, 
  selectedClass = '', 
  spellsData = [],  
  showSpells = false ,
  spells = [],
  searchTerm = '',
  onSearchChange,
  levelFilter = 'all',
  onLevelFilterChange = () => {},
  typeFilter = 'all',
  onTypeFilterChange = () => {}

}) {
//   const [levelFilter, setLevelFilter] = useState('all');
//   const [typeFilter, setTypeFilter] = useState('all');

  const handleClassClick = (className) => {
    if (onClassSelect) {
      onClassSelect(className);
    }
    const element = document.getElementById('ShowSelectedClass');
        if (element) {
        setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
            element.focus();
        }, 200);    element.focus();
        }
   
      
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    if (onSearchChange) {
      onSearchChange(value);
    }
  };

  const handleLevelFilterChange = (e) => {
    const value = e.target.value;
    if (onLevelFilterChange) {
      onLevelFilterChange(value);
    }
  };
  const handleTypeFilterChange = (e) => {
    const value = e.target.value;
    if (onTypeFilterChange) {
      onTypeFilterChange(value);
    }
  };
  const totalSpells = spellsData.length;
  const totalClasses = classes.length;
  
  // Calcular hechizos filtrados correctamente
const getFilteredSpells = () => {
    if (!selectedClass || !spells.length) return 0;

    return spells.filter(spell => {
        // Filtro por nombre
        const matchesName = spell.name.toLowerCase().includes(searchTerm.toLowerCase());

        // Filtro por nivel
        const matchesLevel =
            levelFilter === 'all' || String(spell.level) === String(levelFilter);

        // Filtro por tipo
        const matchesType =
            typeFilter === 'all' || spell.type === typeFilter;

        return matchesName && matchesLevel && matchesType;
    }).length;
};
  
  const selectedClassSpells = getFilteredSpells();

  return (
    <div className={styles.homeContainer} style={{ marginTop: '90px' }}>
      {/* Sidebar Navigation */}
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

      {/* Main Content */}
      <main className={styles.mainContent}>
        {/* Header with Search and Filters */}
        <header className={styles.header}>
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Buscar hechizos..."
              className={styles.searchInput}
              value={searchTerm}
              onChange={handleSearchChange}
            />
            
            <div className={styles.filtersContainer}>
              <label className={styles.filterLabel}>Nivel:</label>
              <select 
                className={styles.filterSelect}
                value={levelFilter}
                onChange={handleLevelFilterChange}
              >
                <option value="all">Todos los Niveles</option>
                <option value="0">Cantrip</option>
                <option value="1">Nivel 1</option>
                <option value="2">Nivel 2</option>
                <option value="3">Nivel 3</option>
                <option value="4">Nivel 4</option>
                <option value="5">Nivel 5</option>
                <option value="6">Nivel 6</option>
              </select>

              <label className={styles.filterLabel}>Tipo:</label>
              <select 
                className={styles.filterSelect}
                value={typeFilter}
                onChange={handleTypeFilterChange}
              >
                <option value="all">Todos</option>
                <option value="-">Sin tipo específico</option>
                <option value="Attack roll">Tirada de ataque</option>
                <option value="CHA save">Salvación de carisma</option>
                <option value="CON save">Salvación de constitución</option>
                <option value="DEX save">Salvación de destreza</option>
                <option value="INT save">Salvación de inteligencia</option>
                <option value="STR save">Salvación de fuerza</option>
                <option value="WIS save">Salvación de sabiduría</option>
              </select>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className={styles.contentArea}>
            
           
          {/* Welcome Section */}
         
          <section className={styles.welcomeSection}>
            <h1 className={styles.welcomeTitle}>
              Bienvenido al Libro de Hechizos
            </h1>
            <p className={styles.welcomeSubtitle}>
              Tu guía completa para los hechizos y habilidades mágicas de Baldur's Gate 3
            </p>
            <p className={styles.welcomeDescription}>
              Explora hechizos por clase, busca habilidades específicas y descubre la magia perfecta para tu aventura.
              ¡Selecciona una clase de la barra lateral para comenzar!
            </p>
          </section>          
          {/* Stats Section */}
          <section className={styles.statsSection}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>{totalSpells}</div>
              <div className={styles.statLabel}>Total Hechizos</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>{totalClasses}</div>
              <div className={styles.statLabel}>Clases</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>{selectedClassSpells}</div>
              <div className={styles.statLabel}>
                {selectedClass ? `${selectedClass} Hechizos` : 'Hechizos Seleccionados'}
              </div>
            </div>
          </section>
              {/* Class Cards Section */}
            <section className={styles.classCardsSection}>
                 {showSpells ? <ClassCard name={selectedClass} /> : <></>}
                 
            </section>
            <div id='ShowSelectedClass' style={{ height: '20px' }} />

            {/* Spells Card Section */}
            <div className={styles.spellsContainer}>
            <div className={styles.spellsGrid}>
             {spells.map(spell => (
              <SpellInfo key={spell.id} spell={spell} />
                ))}
            </div>
        </div>

        </div>
      </main>
    </div>
  );
}
