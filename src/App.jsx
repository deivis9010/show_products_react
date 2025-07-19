import React, { useState } from 'react'

import './App.css'
import SpellsData from './data/spells.json'
import SpellByClassData from './data/spells-by-class.json'
import Home from './components/home/home.jsx'


function App() {
  
  const [spellByClassData] = useState(SpellByClassData)
  const [spellsData] = useState(SpellsData)
  const [selectedClass, setSelectedClass] = useState('')
  const [spells, setSpells] = useState([])
  const [showSpells, setShowSpells] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [levelFilter, setLevelFilter] = useState('all')
  const [typeFilter, setTypeFilter] = useState('all')

  const onClickClassCard = (className) => {
    console.log(`Clicked on ${className}`);

    // Obtengo lista de hechizos por clase (ej. bard [<id1>, <id2>], cleric, etc.)
    const spellIds = spellByClassData[className];
    
    // Obtengo la info de los hechizos segun la lista de IDs de la clase
    const classSpells = spellsData.filter(spell => spellIds.includes(spell.id));
    
    console.log(classSpells);
    setSpells(classSpells);
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
    />
  );
}

export default App
