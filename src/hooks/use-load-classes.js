
import React, { useEffect, useState } from 'react';
import { fetchClasses } from '../services/inesdi-api.js';

export function useLoadClasses() {
  const [spellByClassData, setSpellByClassData] = useState([])

 useEffect(() => {
     async function loadClasses() {
       const result = await fetchClasses();
       //console.log('Classes loaded:', result);
       setSpellByClassData(result);
     }
     loadClasses();
   }, []);

   return spellByClassData;
  
}