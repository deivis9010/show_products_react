# 📚 Libro de Hechizos - Baldur's Gate 3

**Actividad 2 - Master de Formación Permanente en Full Stack Development**

## 📖 Descripción del Proyecto

Este proyecto es una aplicación web interactiva desarrollada en React que presenta un compendio completo de hechizos del popular videojuego Baldur's Gate 3. La aplicación permite a los usuarios explorar, buscar y filtrar hechizos por clase de personaje, nivel y tipo de mecánica de juego.

### 🎯 Características Principales

- **🔍 Sistema de búsqueda avanzado**: Filtrado en tiempo real por nombre de hechizo
- **🎭 Navegación por clases**: 6 clases mágicas (Bard, Cleric, Druid, Sorcerer, Warlock, Wizard)
- **📊 Filtros dinámicos**: Por nivel (Cantrip - Nivel 6) y tipo de mecánica
- **✨ Interfaz moderna**: Diseño responsive con efectos mágicos y popups informativos
- **📱 Adaptable**: Compatible con dispositivos móviles y tablets
- **🎨 UI/UX intuitiva**: Navegación fluida con efectos visuales atractivos
- **🧩 Arquitectura modular**: Componentes separados siguiendo principios SOLID
- **🔧 CSS Modules**: Estilos encapsulados y sin conflictos entre componentes

### 🛠️ Tecnologías Utilizadas

- **React 18** - Framework principal
- **Vite** - Herramienta de construcción y desarrollo
- **CSS Modules** - Estilos modulares y scoped
- **JavaScript ES6+** - Lógica de la aplicación
- **JSON** - Base de datos local de hechizos

## 🚀 Instalación y Ejecución

```bash
# Clonar el repositorio
git clone [url-del-repositorio]

# Navegar al directorio
cd show_products_react

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build
```

## 📁 Estructura del Proyecto

```
src/
├── components/                    # Componentes React modulares
│   ├── home/                     # Componente coordinador principal
│   │   ├── home.jsx             # Lógica de coordinación
│   │   └── home.module.css      # Estilos del componente home
│   ├── header/                   # Componente de encabezado
│   │   ├── header.jsx           # Búsqueda y filtros (posición fija)
│   │   └── header.module.css    # Estilos del header
│   ├── menu/                     # Componente de navegación lateral
│   │   ├── menu.jsx             # Sidebar con clases mágicas
│   │   └── menu.module.css      # Estilos del menú lateral
│   ├── class-card/               # Tarjetas de información de clases
│   │   ├── class-card.jsx       # Componente de tarjeta
│   │   └── class-card.module.css # Estilos de las tarjetas
│   ├── spells-info/              # Tarjetas compactas de hechizos
│   │   ├── spell-info.jsx       # Cards clickeables
│   │   └── spell-info.module.css # Estilos de cards
│   └── spell-info-details/       # Modal de información detallada
│       ├── spell-info-details.jsx # Popup con datos completos
│       └── spell-info-details.module.css # Estilos del popup
├── data/                         # Base de datos JSON
│   ├── spells.json              # Datos completos de hechizos
│   └── spells-by-class.json     # Relación clase-hechizos
├── assets/                       # Recursos estáticos
│   ├── classes/                 # Iconos de clases mágicas
│   └── spells/                  # Iconos de hechizos (310+ íconos)
└── App.jsx                      # Componente raíz de la aplicación
```

---

## 🏗️ Refactorización Arquitectural

### Evolución del Proyecto

Este proyecto ha evolucionado desde una aplicación monolítica hacia una **arquitectura modular** siguiendo principios de desarrollo profesional:

#### **🔄 Fase 1: Aplicación Inicial**
- Componente único con múltiples responsabilidades
- CSS mezclado con lógica de presentación
- Dificultad para mantenimiento y testing

#### **🧩 Fase 2: Separación de Componentes (Actual)**
- **Principio de Responsabilidad Única**: Cada componente tiene una función específica
- **CSS Modules**: Estilos encapsulados para cada componente
- **Props Interface**: Comunicación clara entre componentes

### 🏛️ Arquitectura de Componentes

```
App.jsx (Estado Global)
    ↓
Home.jsx (Coordinador)
    ├── Header.jsx (Búsqueda/Filtros)
    ├── Menu.jsx (Navegación Lateral)  
    ├── ClassCard.jsx (Tarjetas de Clases)
    └── SpellInfo.jsx (Cards de Hechizos)
            ↓
        SpellInfoDetails.jsx (Popup Modal)
```

#### **🔧 Separación Implementada:**

1. **Header Component** (`components/header/`)
   - **Responsabilidad**: Búsqueda y filtros con posicionamiento fijo
   - **Props**: `searchTerm`, `levelFilter`, `typeFilter`, `onSearch`, `onLevelFilter`, `onTypeFilter`
   - **CSS**: `position: fixed`, `z-index: 1000`

2. **Menu Component** (`components/menu/`)
   - **Responsabilidad**: Navegación lateral con selección de clases
   - **Props**: `selectedClass`, `onClassSelect`, `classCounts`
   - **Funcionalidades**: Scroll suave, estados activos, hover effects

3. **SpellInfoDetails Component** (`components/spell-info-details/`)
   - **Responsabilidad**: Modal popup con información detallada
   - **Props**: `spell`, `isVisible`, `onClose`
   - **Características**: Overlay, animaciones mágicas, click-outside-to-close

### ✅ Beneficios de la Refactorización

#### **Mantenibilidad**
- **Before**: Cambiar el header requería modificar `home.jsx` completo
- **After**: Modificaciones aisladas en `components/header/header.jsx`

#### **Reutilización**
- **Before**: Lógica duplicada entre componentes
- **After**: Componentes independientes y reutilizables

#### **Testing**
- **Before**: Tests complejos de componentes monolíticos
- **After**: Tests unitarios específicos por funcionalidad

#### **Escalabilidad**
- **Before**: Archivo único de 300+ líneas
- **After**: Componentes de 50-100 líneas cada uno

### 🎯 Principios Aplicados

- **Single Responsibility Principle (SRP)**: Un componente, una responsabilidad
- **Don't Repeat Yourself (DRY)**: Lógica compartida en funciones utilitarias
- **Props Interface Design**: Comunicación clara y tipada
- **CSS Encapsulation**: Estilos modulares sin conflictos

---

---

## 🧠 Conceptos de React: Estados y Gestión de Datos

### ¿Qué son los Estados en React?

Los **estados** son el mecanismo fundamental que permite a los componentes de React manejar y actualizar información dinámica. Un estado es simplemente un objeto JavaScript que contiene datos que pueden cambiar a lo largo del tiempo y que afectan cómo se renderiza el componente.

```jsx
const [searchTerm, setSearchTerm] = useState('');
// searchTerm: valor actual del estado
// setSearchTerm: función para actualizar el estado
// '': valor inicial
```

### 🔄 Flujo de Estados en Nuestro Proyecto

#### 1. **Estado Local vs Estado Compartido**

**❌ Problema Inicial:**
```jsx
function Home() {
  const [searchTerm, setSearchTerm] = useState(''); // Solo Home conocía este valor
  // Pero App.jsx necesitaba filtrar los hechizos...
}
```

**✅ Solución Implementada:**
```jsx
function App() {
  const [searchTerm, setSearchTerm] = useState(''); // Estado elevado a App
  const filteredSpells = spells.filter(spell => 
    spell.name.includes(searchTerm)
  );
  return <Home searchTerm={searchTerm} spells={filteredSpells} />;
}
```

#### 2. **Lifting State Up (Elevación de Estado)**

Cuando múltiples componentes necesitan compartir el mismo estado, lo movemos al componente padre más cercano que los contenga:

```jsx
// App.jsx - Componente padre que maneja estados compartidos
const [selectedClass, setSelectedClass] = useState('')
const [spells, setSpells] = useState([])
const [searchTerm, setSearchTerm] = useState('')
const [levelFilter, setLevelFilter] = useState('all')
const [typeFilter, setTypeFilter] = useState('all')

// Flujo de datos hacia componentes hijos
return (
  <Home 
    spells={filteredSpells}
    searchTerm={searchTerm}
    selectedClass={selectedClass}
    levelFilter={levelFilter}
    typeFilter={typeFilter}
    onSearch={setSearchTerm}
    onClassSelect={setSelectedClass}
    onLevelFilter={setLevelFilter}
    onTypeFilter={setTypeFilter}
  />
);
```

#### 3. **Props Drilling Pattern**

Los datos fluyen hacia abajo y las acciones hacia arriba a través de la jerarquía de componentes:

```jsx
// Home.jsx - Distribuye props a componentes especializados
<Header 
  searchTerm={searchTerm}
  levelFilter={levelFilter}
  typeFilter={typeFilter}
  onSearch={onSearch}
  onLevelFilter={onLevelFilter}
  onTypeFilter={onTypeFilter}
/>

<Menu 
  selectedClass={selectedClass}
  onClassSelect={onClassSelect}
  classCounts={classCounts}
/>

<SpellInfo 
  spell={spell}
  // El popup maneja su propio estado local
/>
```

### 📊 Gestión de Filtros Reactivos

#### Problema de Variables No Reactivas
```jsx
// ❌ INCORRECTO - Variable normal (no reactiva)
let selectedClassSpells = spells.length;
// Esta variable NO se actualiza automáticamente
```

#### Solución con Cálculos Derivados
```jsx
// ✅ CORRECTO - Cálculo basado en estados
const getFilteredSpells = () => {
  return spells.filter(spell => {
    const matchesName = spell.name.includes(searchTerm);
    const matchesLevel = levelFilter === 'all' || spell.level === levelFilter;
    const matchesType = typeFilter === 'all' || spell.type === typeFilter;
    return matchesName && matchesLevel && matchesType;
  }).length;
};

const selectedClassSpells = getFilteredSpells(); // Se recalcula automáticamente
```

### 🔧 Patrones de Estado Implementados

#### 1. **Estado Centralizado (App.jsx)**
- Todos los filtros principales se manejan en el componente raíz
- Los datos fluyen hacia abajo via props (uni-directional data flow)
- Las acciones suben via callbacks para mantener la fuente única de verdad

#### 2. **Estado Local para UI (SpellInfoDetails)**
```jsx
// SpellInfo.jsx - Estado local para popup
const [isPopupVisible, setIsPopupVisible] = useState(false);

const handleCardClick = () => {
  setIsPopupVisible(true); // Controla solo la visibilidad del modal
};

// SpellInfoDetails.jsx - Componente especializado
export default function SpellInfoDetails({ spell, isVisible, onClose }) {
  // Recibe props del padre, maneja su propia lógica interna
  const handleOverlayClick = () => {
    if (onClose) onClose();
  };
}
```

#### 3. **Estado Derivado y Cálculos Reactivos**
```jsx
// Home.jsx - Cálculos que se actualizan automáticamente
const filteredSpells = useMemo(() => {
  return spells.filter(spell => {
    const matchesName = spell.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = levelFilter === 'all' || spell.level.toString() === levelFilter;
    const matchesType = typeFilter === 'all' || spell.type === typeFilter;
    return matchesName && matchesLevel && matchesType;
  });
}, [spells, searchTerm, levelFilter, typeFilter]);

// Los contadores se derivan automáticamente de los datos filtrados
const classCounts = useMemo(() => {
  const counts = {};
  classes.forEach(className => {
    counts[className] = getSpellsByClass(className, filteredSpells).length;
  });
  return counts;
}, [filteredSpells]);
```

#### 4. **Component Communication Patterns**

```jsx
// Patrón padre-hijo con props
<Header onSearch={handleSearch} searchTerm={searchTerm} />

// Patrón callback para comunicación hijo-padre
const handleSearch = (newSearchTerm) => {
  setSearchTerm(newSearchTerm); // Estado sube al padre
};

// Estado compartido entre hermanos via padre común
<Menu selectedClass={selectedClass} />
<ClassCard selectedClass={selectedClass} />
```

### 🤔 Preguntas Frecuentes Resueltas

#### **"¿Hay que declarar las variables reactivas siempre desde App.jsx?"**

**Respuesta:** No siempre. Sigue la regla del **componente más bajo que necesite compartir el estado**:

- **Estado local**: Si solo un componente lo usa
- **Estado en padre**: Si varios hermanos lo necesitan
- **Estado en App**: Si toda la aplicación lo necesita
- **Context API**: Si muchos componentes distantes lo necesitan

#### **"¿Cómo hacer que los contadores se actualicen automáticamente?"**

**Solución implementada:**
1. ✅ Usar `useState` para datos que cambian
2. ✅ Calcular valores derivados en cada render
3. ✅ Pasar datos filtrados via props
4. ❌ Evitar variables normales para datos reactivos

#### **"¿Por qué algunos iconos aparecían encima del popup?"**

**Problema:** Conflicto de z-index y contextos de apilamiento
**Solución:**
- Mover popup fuera del contenedor del card
- Usar z-index extremadamente altos (99999)
- Aplicar `isolation: isolate` para crear contextos limpios

## 🎨 Características de UI/UX

### Diseño Responsive
- **Desktop**: Grid de 4 columnas
- **Tablet**: Grid de 3 columnas  
- **Mobile**: Grid de 2 columnas

### Efectos Mágicos
- Fondo con gradientes místicos y efectos de desenfoque
- Animaciones de aparición con escalado y rotación
- Popups con sombras multicapa para profundidad
- Transiciones suaves en hover y interacciones

### Interactividad
- **Click para abrir**: Los popups se activan al hacer click
- **Click fuera para cerrar**: Interfaz intuitiva
- **Búsqueda en tiempo real**: Filtrado instantáneo
- **Navegación fluida**: Scroll automático a secciones

---

## 🏆 Logros Técnicos

### 🧩 Arquitectura Modular
- ✅ **Separación de responsabilidades**: Cada componente tiene una función específica
- ✅ **Props Interface Design**: Comunicación clara entre componentes
- ✅ **CSS Modules**: Estilos encapsulados sin conflictos globales
- ✅ **Component Isolation**: Tests y desarrollo independientes

### 🔄 Gestión de Estado
- ✅ **Estado centralizado**: Gestión eficiente desde App.jsx
- ✅ **Lifting State Up**: Estados compartidos entre componentes hermanos
- ✅ **Derived State**: Cálculos reactivos automáticos
- ✅ **Local State**: Estados específicos para UI y animaciones

### 🎨 Interfaz y Experiencia
- ✅ **Diseño responsivo**: Grid adaptable según dispositivo
- ✅ **Header fijo**: Navegación accesible con `position: fixed`
- ✅ **Popup modales**: Sistema de overlay con z-index management
- ✅ **Animaciones mágicas**: Efectos visuales con CSS puro

### 🔧 Características Técnicas
- ✅ **Filtrado en tiempo real**: Múltiples criterios simultáneos
- ✅ **Hot Module Replacement**: Desarrollo con recarga instantánea
- ✅ **Fallback de imágenes**: Sistema robusto local + remoto
- ✅ **Click-outside-to-close**: UX intuitiva en modales

### 📈 Escalabilidad y Mantenimiento
- ✅ **Componentes reutilizables**: Modulares y configurables via props
- ✅ **Arquitectura extensible**: Fácil agregar nuevas funcionalidades
- ✅ **Código limpio**: Principios SOLID aplicados
- ✅ **Separación de concerns**: Lógica, presentación y estilos separados

## 📚 Recursos de Aprendizaje

- [Documentación oficial de React](https://react.dev/)
- [Guía de Estados en React](https://react.dev/learn/managing-state)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [Vite Documentation](https://vitejs.dev/)

---

**Desarrollado con 💜 para el Master de Full Stack Development**
