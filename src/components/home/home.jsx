

import React from 'react';
import styles from './home.module.css';

import ClassCard from '../class-card/class-card';
import SpellInfo from '../spells-info/spell-info.jsx';
import Header from '../header/header.jsx';
import Menu from '../menu/menu.jsx';
export default function Home({ 
  onClassSelect, 
  selectedClass = '', 
  spellsData = [],  
  showSpells = false ,
  spells = [], 
  onSearchChange= () => {},  
  onLevelFilterChange = () => {},  
  onTypeFilterChange = () => {},
  spellByClassData = [],
  loading = false,
  filters = { term: '', level: 'all', type: 'all' }
  
}) {
  const totalSpells = spellsData.length;
  const totalClasses = spellByClassData.length || 6; // Número dinámico de clases disponibles
  
  // Calcular hechizos filtrados correctamente
const getFilteredSpells = () => {
    if (!selectedClass || !spells.length) return 0;

    return spells.filter(spell => {
        // Filtro por nombre
        const matchesName = spell.name.toLowerCase().includes(filters.term.toLowerCase());

        // Filtro por nivel
        const matchesLevel =
            filters.level === 'all' || String(spell.level) === String(filters.level);

        // Filtro por tipo
        const matchesType =
            filters.type === 'all' || spell.type === filters.type;

        return matchesName && matchesLevel && matchesType;
    }).length;
};
  
  const selectedClassSpells = getFilteredSpells();

  return (
    <div className={styles.homeContainer} style={{ marginTop: '90px' }}>
      {/* Sidebar Navigation */}
      <Menu 
        selectedClass={selectedClass}
        onClassSelect={onClassSelect}
        classes={spellByClassData}
      />

      {/* Main Content */}
      <main className={styles.mainContent}>
        {/* Header with Search and Filters */}
        <Header          
          onSearchChange={onSearchChange}          
          onLevelFilterChange={onLevelFilterChange}
          onTypeFilterChange={onTypeFilterChange}
          filters={filters}
        />

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
                {selectedClass ? `${selectedClass} Hechizos válidos` : 'Hechizos Seleccionados'}
              </div>
            </div>
            
          </section>

          <div id='ShowSelectedClass' style={{ height: '110px' }} ></div>

              {/* Class Cards Section */}
            <section className={styles.classCardsSection}>
                 {showSpells ? <ClassCard name={selectedClass} /> : <></>}
                 
            </section>
            
            {loading && (
              <div className={styles.loadingContainer}>
                <img src="/Loading.gif" alt="Cargando..." className={styles.loadingSpinner} />
                <span></span>
              </div>
            )}

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
