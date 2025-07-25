import { useEffect, useState } from 'react';
import { fetchClassSpells, fetchSpellById } from '../services/inesdi-api.js';

export function useLoadSpellsInfo(selectedClass) {
  const [spellsData, setSpellsData] = useState([]);
  const [spells, setSpells] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const clearSpells = () => {
    setSpells([]);
    setSpellsData([]);
  };

  useEffect(() => {
    if (selectedClass) {
      const loadSpellsPerClass = async () => {
        setIsLoading(true);
        try {
          const spellIds = await fetchClassSpells(selectedClass);
          const SpellData = await Promise.all(
            spellIds.map(async (spellId) => {
              const spell = await fetchSpellById(spellId);
              if (spell && Object.keys(spell).length > 1) {
                return spell;
              }
              return null;
            })
          );
          const SpellDataFiltered = SpellData.filter(Boolean);
          setSpellsData(SpellData);
          setSpells(SpellDataFiltered);
        } finally {
          setIsLoading(false);
        }
      };
      loadSpellsPerClass();
    }
  }, [selectedClass]);

  return { spellsData, spells, clearSpells, isLoading };
}

