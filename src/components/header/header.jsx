import React from 'react';
import styles from './header.module.css';

export default function Header({
  onSearchChange,
  onLevelFilterChange,
  onTypeFilterChange,
  filters = { term: '', level: 'all', type: 'all' }
}) {

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

  return (
    <header className={styles.header}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Buscar hechizos..."
          className={styles.searchInput}
          value={filters.term}
          onChange={handleSearchChange}
        />
        
        <div className={styles.filtersContainer}>
          <label className={styles.filterLabel}>Nivel:</label>
          <select 
            className={styles.filterSelect}
            value={filters.level}
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
            value={filters.type}
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
  );
}
