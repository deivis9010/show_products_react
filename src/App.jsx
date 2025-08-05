import React, { useState } from 'react'

import './App.css'
import Home from './components/home/home.jsx'
import { useLoadClasses } from './hooks/use-load-classes.js'
import { useLoadSpellsInfo } from './hooks/use-load-spells-info.js'


function App() {
  // Cargar datos de clases desde el hook personalizado
  const spellByClassData = useLoadClasses();  
  const [selectedClass, setSelectedClass] = useState('')
  const { spellsData, spells, clearSpells, isLoading } = useLoadSpellsInfo(selectedClass);
  //const [showSpells, setShowSpells] = useState(false)
  // const [searchTerm, setSearchTerm] = useState('')
  // const [levelFilter, setLevelFilter] = useState('all')
  // const [typeFilter, setTypeFilter] = useState('all')
   const [filters, setFilters] = useState({ term: '', level: 'all', type: 'all' })



 const showSpells = spells.length > 0 && selectedClass


  const onClickClassCard = async(className) => {
    console.log(`Clicked on ${className}`);  
    
    clearSpells(); // Limpiar los hechizos antes de cargar los nuevos
    setSelectedClass(className);
    //setShowSpells(true);
  }

  const handleSearchChange = (value) => {
    setFilters(filters => ({ ...filters, term: value }));
  }
  const handleLevelFilterChange = (value) => {
    setFilters(filters => ({ ...filters, level: value }));
  }
  const handleTypeFilterChange = (value) => {
    setFilters(filters => ({ ...filters, type: value }));
  }

  // Filtrar hechizos basado en el término de búsqueda
  // Calcular hechizos filtrados correctamente
  const filteredSpells = spells.filter(spell => {
    // Filtro por nombre
    const matchesName = spell.name.toLowerCase().includes(filters.term.toLowerCase());

    // Filtro por nivel
    const matchesLevel =
      filters.level === 'all' || String(spell.level) === String(filters.level);

    // Filtro por tipo
    const matchesType =
      filters.type === 'all' || spell.type === filters.type;

    return matchesName && matchesLevel && matchesType;
  });

  


 

  // Vista principal con Home
  return (
    <Home 
      onClassSelect={onClickClassCard}
      selectedClass={selectedClass}
      spellsData={spellsData}
      spellByClassData={spellByClassData}
      showSpells={showSpells}
      spells={filteredSpells}      
      onSearchChange={handleSearchChange}     
      onLevelFilterChange={handleLevelFilterChange}      
      onTypeFilterChange={handleTypeFilterChange}
      loading={isLoading}
      filters={filters}
    />
  );
}

export default App
