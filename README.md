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
├── components/           # Componentes React reutilizables
│   ├── home/            # Componente principal con navegación
│   ├── class-card/      # Tarjetas de información de clases
│   └── spells/          # Componentes de hechizos y popups
├── data/                # Base de datos JSON
│   ├── spells.json      # Datos completos de hechizos
│   └── spells-by-class.json # Relación clase-hechizos
├── assets/              # Recursos estáticos
│   ├── classes/         # Iconos de clases
│   └── spells/          # Iconos de hechizos
└── App.jsx             # Componente raíz
```

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

#### 1. **Estado Centralizado**
- Todos los filtros principales se manejan en `App.jsx`
- Los datos fluyen hacia abajo via props
- Las acciones suben via callbacks

#### 2. **Estado Local para UI**
- Popups y modales manejan su propio estado de visibilidad
- Efectos visuales usan estado local para animaciones

#### 3. **Estado Derivado**
- Los contadores se calculan dinámicamente desde los datos filtrados
- No duplicamos información, la derivamos de la fuente única de verdad

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

- ✅ Gestión eficiente de estados compartidos
- ✅ Componentes reutilizables y modulares
- ✅ Filtrado en tiempo real con múltiples criterios
- ✅ UI responsiva y accesible
- ✅ Efectos visuales avanzados con CSS puro
- ✅ Arquitectura escalable y mantenible

## 📚 Recursos de Aprendizaje

- [Documentación oficial de React](https://react.dev/)
- [Guía de Estados en React](https://react.dev/learn/managing-state)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [Vite Documentation](https://vitejs.dev/)

---

**Desarrollado con 💜 para el Master de Full Stack Development**
