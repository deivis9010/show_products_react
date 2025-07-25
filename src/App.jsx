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
  const [showSpells, setShowSpells] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [levelFilter, setLevelFilter] = useState('all')
  const [typeFilter, setTypeFilter] = useState('all')


 


  const onClickClassCard = async(className) => {
    console.log(`Clicked on ${className}`);  
    
    clearSpells(); // Limpiar los hechizos antes de cargar los nuevos
    setSelectedClass(className);
    setShowSpells(true);
  }

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  }
  const handleLevelFilterChange = (value) => {
    setLevelFilter(value);
  }
  const handleTypeFilterChange = (value) => {
    setTypeFilter(value);
  }

  // Filtrar hechizos basado en el término de búsqueda
  // Calcular hechizos filtrados correctamente
  const filteredSpells = spells.filter(spell => {
    // Filtro por nombre
    const matchesName = spell.name.toLowerCase().includes(searchTerm.toLowerCase());

    // Filtro por nivel
    const matchesLevel =
      levelFilter === 'all' || String(spell.level) === String(levelFilter);

    // Filtro por tipo
    const matchesType =
      typeFilter === 'all' || spell.type === typeFilter;

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
      searchTerm={searchTerm}
      onSearchChange={handleSearchChange}
      levelFilter={levelFilter}
      onLevelFilterChange={handleLevelFilterChange} 
      typeFilter={typeFilter}
      onTypeFilterChange={handleTypeFilterChange}
      loading={isLoading}
    />
  );
}

export default App
