const API_BASE_URL = 'https://inesdi2025-resources-p2.fly.dev/v1'; // Reemplaza con la URL base real de la API

// Lista de IDs de clases
export async function fetchClasses() {
    const response = await fetch(`${API_BASE_URL}/classes`);
    if (!response.ok) throw new Error('Error fetching classes');
    return response.json();
}

// Lista de IDs de hechizos para una clase
export async function fetchClassSpells(className) {
    //console.log(`Fetching spells for class: ${className}`);
    const response = await fetch(`${API_BASE_URL}/classes/${encodeURIComponent(className)}/spells`);
    if (!response.ok) throw new Error('Error fetching class spells');
    return response.json();
}

// Información de un hechizo
export async function fetchSpellById(spellId) {
   
    const response = await fetch(`${API_BASE_URL}/spells/${encodeURIComponent(spellId)}`);
    if (!response.ok) 
    {
        // Si el hechizo no se encuentra, devolver un objeto vacio con el ID
        const data = await response.json();
        if (data && data.error === "Not found") {
            return { id: spellId };
        }else {
            console.error(`Error fetching spell with ID ${spellId}:`, data);
            throw new Error('Error fetching spell');
        }
    } else {
        //console.log(`Fetching spell with ID: ${spellId}`);
    }
    return response.json();
}

// Obtiene la URL del icono PNG de una clase
export function getClassIconUrl(assetName) {
    return `${API_BASE_URL}/assets/classes/${encodeURIComponent(assetName)}`;
}

// Obtiene la URL del icono PNG de un hechizo
export function getSpellIconUrl(spellId) {
    return `${API_BASE_URL}/assets/spells/${encodeURIComponent(spellId)}`;
}