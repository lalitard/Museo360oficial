# Proyecto Museo 360 Oficial

Este repositorio contiene el código fuente del sitio web oficial del Museo Real Alto, desarrollado como parte de las prácticas comunitarias de ESPOL.

## Descripción General

El objetivo de este proyecto es ofrecer una experiencia digital inmersiva y accesible para los visitantes del museo. El sitio web incluye un recorrido virtual 360, información sobre las exhibiciones, un blog de noticias, detalles para planificar una visita y un formulario de contacto.

### Enlace de Despliegue y Pruebas

Para revisar los avances y el estado actual del despliegue, puedes visitar el siguiente enlace alojado en GitHub Pages:

- **URL de Pruebas:** [https://museorealalto.github.io/Museo360oficial/](https://museorealalto.github.io/Museo360oficial/)

*Nota: El despliegue final del proyecto se realizará en un servidor de ESPOL utilizando Drupal, pero el enlace anterior sirve para verificar los cambios y el progreso de forma pública.*

## Stack Tecnológico

Este proyecto utiliza una arquitectura moderna basada en JavaScript y servicios externos.

### Frontend

- **React:** Biblioteca principal para la construcción de la interfaz de usuario.
- **Vite:** Herramienta de desarrollo y empaquetado de alta velocidad.
- **React Router DOM:** Para la gestión de rutas y navegación dentro de la aplicación.
- **yet-another-react-lightbox:** Componente utilizado para crear galerías de imágenes interactivas.

### Servicios y Plataformas

- **WeboBook:** Plataforma utilizada para crear y alojar el recorrido virtual 360 del museo. Este recorrido se integra en el sitio web mediante un `iframe`.
- **Drupal:** Se utiliza como un sistema de gestión de contenidos (CMS) desacoplado. Drupal expone el contenido (como artículos del blog, información de exhibiciones, etc.) a través de una API que el frontend consume. Adicionalmente, la infraestructura de Drupal en ESPOL se utilizará para el alojamiento final del sitio.

## Estructura del Proyecto

El código fuente está organizado para facilitar la mantenibilidad y la escalabilidad.

```
/src
├── assets/         # Imágenes, iconos y otros archivos estáticos.
├── Pages/          # Componentes principales que representan cada página del sitio.
│   ├── Blog/
│   ├── Contact/
│   ├── Footer/
│   ├── Header/
│   ├── Home/
│   ├── Museum360/
│   └── VisitUs/
├── App.jsx         # Componente raíz que define la estructura y las rutas.
├── main.jsx        # Punto de entrada de la aplicación React.
└── index.css       # Estilos globales.
```

- **`src/Pages`**: Cada subdirectorio contiene un componente de React (`.jsx`) y su hoja de estilos (`.css`) correspondiente. Si necesitas modificar una sección específica del sitio, este es el lugar para empezar.
- **`src/assets`**: Almacena todos los recursos multimedia.

## Cómo Empezar (Para Futuros Desarrolladores)

Sigue estos pasos para configurar un entorno de desarrollo local.

### Prerrequisitos

- [Node.js](https://nodejs.org/) (versión 18 o superior)
- `npm` (se instala automáticamente con Node.js)

### Instalación

1.  Clona el repositorio en tu máquina local:
    ```bash
    git clone https://github.com/museorealalto/Museo360oficial.git
    ```

2.  Navega al directorio del proyecto:
    ```bash
    cd Museo360oficial
    ```

3.  Instala todas las dependencias del proyecto:
    ```bash
    npm install
    ```

### Ejecución en Modo Desarrollo

Para iniciar el servidor de desarrollo local, ejecuta el siguiente comando. Esto abrirá el sitio en tu navegador y se recargará automáticamente cada vez que hagas un cambio en el código.

```bash
npm run dev
```

### Generar Build de Producción

Para compilar y optimizar la aplicación para producción, utiliza:

```bash
npm run build
```

Este comando creará una carpeta `dist` con los archivos estáticos listos para ser desplegados en un servidor web.

## Despliegue

El sitio tiene un despliegue continuo en GitHub Pages que se actualiza con cada `push` a la rama `main`. Este proceso es automático y está configurado en `.github/workflows/deploy.yml`.

El despliegue final en la infraestructura de ESPOL se realizará manualmente subiendo el contenido de la carpeta `dist` al entorno de Drupal correspondiente.
