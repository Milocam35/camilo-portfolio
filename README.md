# Portfolio Personal - Camilo Andrés Millán Mahecha

Portfolio web personal que presenta mis habilidades, tecnologías y proyectos destacados como Desarrollador Full Stack y estudiante de Ciencias de la Computación e Inteligencia Artificial.

## Descripción del Proyecto

Este portfolio es una aplicación web moderna desarrollada con Astro que presenta:

- **Presentación personal**: Información sobre mi formación académica y experiencia en desarrollo
- **Tech Stack visual**: Categorización de tecnologías por áreas (Frontend, Backend, Machine Learning, Cloud, Bases de Datos)
- **Proyectos destacados**: Integración con la API de GitHub para mostrar automáticamente mis 6 repositorios más populares ordenados por estrellas
- **Modo oscuro/claro**: Interfaz adaptable con temas claro y oscuro
- **Diseño responsivo**: Optimizado para dispositivos móviles, tablets y escritorio
- **Call to Action**: Botón de contacto directo vía WhatsApp

## Tecnologías Utilizadas

### Framework Principal
- **Astro 5.14.6**: Framework web moderno para sitios de alto rendimiento con islands architecture

### UI Framework
- **Solid.js 1.9.9**: Framework reactivo para componentes interactivos (proyectos dinámicos desde GitHub API)
- **@astrojs/solid-js 5.1.1**: Integración oficial de Solid.js con Astro

### Estilos
- **Tailwind CSS 4.1.7**: Framework de utilidades CSS para diseño rápido y consistente
- **@tailwindcss/vite 4.1.7**: Plugin de Vite para Tailwind CSS v4

### Características Técnicas
- **Islands Architecture**: Solo el componente de proyectos es interactivo (client:load)
- **GitHub API Integration**: Obtención dinámica de repositorios
- **Gradientes y animaciones CSS**: Transiciones suaves y efectos visuales
- **Optimización de imágenes**: Manejo eficiente de assets estáticos

## Estructura del Proyecto

```
camilo-portfolio/
├── src/
│   ├── assets/              # Imágenes y recursos estáticos
│   │   └── Foto.jpeg        # Foto de perfil
│   ├── components/          # Componentes de la aplicación
│   │   ├── Header.astro     # Navegación superior
│   │   ├── Footer.astro     # Pie de página
│   │   ├── Welcome.astro    # Componente principal del portfolio
│   │   └── Subcomponents/   # Sub-componentes modulares
│   │       ├── Intro.astro      # Sección de presentación personal
│   │       ├── Stack.astro      # Tech Stack con badges
│   │       └── Proyects.jsx     # Proyectos de GitHub (Solid.js)
│   ├── layouts/             # Layouts de página
│   │   └── Layout.astro     # Layout principal con Header/Footer
│   ├── pages/               # Páginas del sitio
│   │   └── index.astro      # Página principal
│   └── styles/              # Estilos globales
│       └── global.css       # CSS global y configuración de Tailwind
├── public/                  # Archivos públicos estáticos
│   └── curriculum.png       # Favicon
├── astro.config.mjs         # Configuración de Astro
├── package.json             # Dependencias del proyecto
└── README.md                # Este archivo
```

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 18 o superior recomendada)
- **npm**, **pnpm**, **yarn** o **bun** como gestor de paquetes

## Instalación y Configuración Local

### 1. Clonar el repositorio

```bash
git clone https://github.com/Milocam35/camilo-portfolio.git
cd camilo-portfolio
```

### 2. Instalar dependencias

Con npm:
```bash
npm install
```

Con pnpm:
```bash
pnpm install
```

Con yarn:
```bash
yarn install
```

Con bun:
```bash
bun install
```

### 3. Ejecutar el servidor de desarrollo

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:4321`

## Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo con hot-reload |
| `npm run build` | Compila el proyecto para producción en la carpeta `dist/` |
| `npm run preview` | Previsualiza la build de producción localmente |
| `npm run astro` | Ejecuta comandos CLI de Astro |

### Actualizar Tech Stack

Modifica [src/components/Subcomponents/Stack.astro](src/components/Subcomponents/Stack.astro) para agregar o quitar tecnologías usando badges de [shields.io](https://shields.io/).

### Islands Architecture
- Solo los componentes que necesitan interactividad cargan JavaScript
- El componente de proyectos (Solid.js) se hidrata en el cliente con `client:load`
- El resto de la página es HTML estático para máximo rendimiento

### Integración con GitHub API
- Obtención automática de repositorios públicos
- Ordenamiento por popularidad (estrellas)
- Muestra los 6 proyectos más destacados
- Información en tiempo real sin necesidad de actualizar manualmente

### Diseño Responsivo
- Mobile-first approach
- Breakpoints optimizados para todas las pantallas
- Flex y Grid layouts para disposición adaptable

## Contacto

- **GitHub**: [@Milocam35](https://github.com/Milocam35)
- **WhatsApp**: [Contáctame](https://api.whatsapp.com/send/?phone=3196789453&text&type=phone_number&app_absent=0)


Desarrollado con ❤️ por Camilo Andrés Millán Mahecha