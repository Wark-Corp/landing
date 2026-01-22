# Wark Corporation - Documentación Técnica del Proyecto

## 1. Introducción

El presente repositorio alberga el código fuente de la plataforma web corporativa de **Wark Corporation**. Esta aplicación ha sido diseñada y desarrollada con el objetivo de proporcionar una presencia digital robusta, segura y escalable, alineada con los estándares de excelencia operativa de la organización. La plataforma sirve como punto central para la difusión de servicios de seguridad, moderación y gestión de comunidades en el entorno de Discord.

## 2. Arquitectura Tecnológica

La infraestructura del proyecto se sustenta en un stack tecnológico moderno, seleccionado para garantizar el máximo rendimiento, mantenibilidad y optimización para motores de búsqueda (SEO).

*   **Framework Principal**: [Next.js 14](https://nextjs.org/) (App Router Architecture).
*   **Lenguaje de Desarrollo**: [TypeScript](https://www.typescriptlang.org/) para asegurar un tipado estricto y reducir la incidencia de errores en tiempo de ejecución.
*   **Diseño y Estilos**: [Tailwind CSS](https://tailwindcss.com/) para una implementación ágil de interfaces de usuario responsivas y coherentes.
*   **Gestión de Estado y Contexto**: API de Contexto de React para la gestión de internacionalización (i18n).

## 3. Funcionalidades Principales

### 3.1. Internacionalización (i18n)
La plataforma implementa un sistema de internacionalización nativo que permite la alternancia fluida entre los idiomas **Español (ES)** e **Inglés (EN)**. La gestión de locales se realiza a través de `LanguageContext`, asegurando que la preferencia del usuario persista durante la navegación.

### 3.2. Interfaz de Usuario y Tema
Siguiendo las directrices de identidad visual corporativa, la aplicación opera bajo un esquema de **Modo Oscuro Forzado**. Se ha eliminado la funcionalidad de alternancia a modo claro para preservar la consistencia estética y la experiencia de inmersión diseñada por el equipo de producto.

### 3.3. Página Corporativa ("Sobre Nosotros")
Ubicada en la ruta `/about`, esta sección detalla la estructura organizativa de Wark Corporation, presentando a los equipos ejecutivos y de gestión. Se ha implementado un sistema de renderizado dinámico (`force-dynamic`) para garantizar la actualización constante de la información.

### 3.4. Sistema de Cuenta Atrás Escolar
La plataforma incluye un módulo funcional independiente en `/count-down`, protegido por un sistema de autenticación simplificado. Este módulo realiza cálculos en tiempo real para determinar el tiempo restante del año académico lectivo, excluyendo días festivos y periodos no lectivos, con una precisión de horas lectivas (08:15 - 14:30).

### 3.5. Gestión de Errores (404)
Se ha desarrollado una página personalizada para el manejo de errores HTTP 404 (Recurso no encontrado), la cual mantiene la coherencia visual del sitio y ofrece rutas de navegación para redirigir al usuario al inicio.

## 4. Despliegue e Instalación

El proyecto está configurado para un despliegue continuo (CI/CD) a través de la plataforma **Vercel**, sincronizado directamente con el repositorio principal en GitHub.

### Ejecución Local

Para levantar el entorno de desarrollo localmente:

```bash
# Instalación de dependencias
npm install

# Ejecución del servidor de desarrollo
npm run dev
```

## 5. Licencia y Derechos

Todo el código contenido en este repositorio es propiedad intelectual de **Wark Corporation**. Queda prohibida su reproducción, distribución o modificación sin la autorización expresa de la dirección ejecutiva.

---
*Documentación actualizada el 22 de Enero de 2026.*
