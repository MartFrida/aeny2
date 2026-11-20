# Sitio web de Alianza Ecuatoriana Internacional

Guía de entrega y mantenimiento de **AEINY** para la organización y para la persona que continúe trabajando en la página web.

- Sitio web: [aeinyusa.org](https://aeinyusa.org)
- Idiomas: español e inglés (`/es` y `/en`).
- Tipo de proyecto: aplicación web desarrollada con React, TypeScript, Vite y Tailwind CSS.
- Alojamiento previsto: Netlify. El dominio se gestiona por separado en GoDaddy.

Esta guía se ha preparado a partir de la copia del proyecto entregada junto con ella. Antes de trabajar, comprueba que esa copia corresponde a la versión más reciente publicada o a la versión que se desea actualizar.

## 1. Información para la organización

El sitio se ha desarrollado como un proyecto de código. Su contenido y diseño se modifican trabajando con los archivos del proyecto; esta copia no incluye un panel de edición de contenidos independiente. Para mantenerlo se necesitan conocimientos de desarrollo web, especialmente de JavaScript, TypeScript y React.

Conviene conservar acceso a estos elementos:

| Elemento | Función |
| --- | --- |
| Archivos del proyecto | Contienen el código, los textos, las imágenes y la configuración necesarios para modificar y generar la web. |
| Netlify | Servicio que publica la web y permite revisar los despliegues. |
| GoDaddy | Cuenta donde se gestiona el dominio `aeinyusa.org`; es independiente del alojamiento. |
| Repositorio Git, si se utiliza | Guarda el historial del código y puede estar conectado a Netlify para publicar actualizaciones. |
| Servicios externos | Formularios, vídeos, redes sociales y otras herramientas enlazadas desde la web pueden administrarse en cuentas separadas. |

**Importante:** transferir o compartir el alojamiento de Netlify no transfiere automáticamente el repositorio de GitHub ni el dominio. Si Netlify está conectado a un repositorio, hay que comprobar que la persona responsable tenga los accesos necesarios para mantener la conexión y publicar cambios.

Guarda una copia actualizada del proyecto en un lugar seguro y compártela con la persona que realice el mantenimiento. El acceso al alojamiento, por sí solo, no sustituye el acceso a los archivos editables. No incluyas contraseñas ni claves en este documento o en un repositorio público.

## 2. Requisitos para trabajar en el proyecto

- Node.js y npm. Se recomienda **Node.js 24**, versión indicada en la documentación anterior del proyecto. La versión de Vite incluida requiere Node.js `^20.19.0` o `>=22.12.0`.
- Un editor de código, por ejemplo Visual Studio Code.
- Conocimientos de React, TypeScript, JavaScript, HTML y CSS.
- Git es recomendable si se utiliza un repositorio, aunque no es necesario para trabajar con una copia local.

Descomprime la copia del proyecto y abre una terminal en la carpeta que contiene `package.json`. Instala las dependencias respetando las versiones del archivo `package-lock.json`:

```bash
npm ci
```

Para iniciar el servidor local de desarrollo:

```bash
npm run dev
```

Abre en el navegador la dirección local que indique la terminal. El servidor actualiza la vista durante el desarrollo. Para detenerlo, utiliza `Ctrl + C` en la terminal.

## 3. Comandos principales

Ejecuta estos comandos desde la carpeta que contiene `package.json`:

| Comando | Uso |
| --- | --- |
| `npm ci` | Instala las dependencias según el archivo de bloqueo. |
| `npm run dev` | Inicia la web en modo de desarrollo local. |
| `npm run build` | Comprueba TypeScript y genera la versión de producción en `dist/`, incluidas las páginas de metadatos y el sitemap. |
| `npm run preview` | Permite revisar localmente una compilación ya generada con `npm run build`. |
| `npm run lint` | Ejecuta la revisión estática del código con Oxlint. |
| `npm run audit:project` | Ejecuta comprobaciones del proyecto, incluidas referencias y traducciones; revisa los resultados antes de publicar. |
| `npm run sync:festival-images` | Herramienta opcional para actualizar datos de imágenes del catálogo del festival. Úsala solo cuando se pretenda hacer esa actualización y revisa los cambios resultantes. |

Antes de publicar una actualización, comprueba al menos:

```bash
npm run lint
npm run build
```

Si aparece un error, revisa la salida de la terminal y soluciónalo antes de publicar. `dist/` es el resultado generado de la compilación: los cambios permanentes deben hacerse en los archivos fuente, no directamente en esa carpeta.

## 4. Organización del proyecto

Las rutas distinguen mayúsculas y minúsculas en algunos sistemas. Usa los nombres tal como aparecen en el proyecto.

| Ruta | Contenido principal |
| --- | --- |
| `src/pages/` | Páginas y comportamiento específico de cada sección. |
| `src/components/` | Componentes reutilizables, navegación, cabecera, pie de página y elementos de eventos. |
| `src/data/` | Datos estructurados, enlaces, contenido de eventos, catálogos, navegación y configuración del sitio. |
| `src/i18n/es/` y `src/i18n/en/` | Textos de interfaz agrupados por tema para español e inglés. |
| `src/styles/globals.css` | Estilos globales y configuración visual. |
| `public/` | Imágenes, iconos, archivos públicos y reglas de redirección. |
| `scripts/` | Scripts de comprobación, compilación de metadatos y mantenimiento. |
| `package.json` y `package-lock.json` | Dependencias y comandos del proyecto. |
| `vite.config.ts` | Configuración de Vite. |

### Dónde realizar cambios habituales

| Cambio | Archivos o carpetas que conviene revisar |
| --- | --- |
| Página de inicio | `src/pages/Home/index.tsx`, `src/data/home.ts`, `src/i18n/es/home.json` y `src/i18n/en/home.json`. |
| Sobre nosotros y menciones en medios | `src/pages/About/index.tsx`, `src/components/about/AboutCoverage.tsx`, `src/data/aboutCoverage.ts` y traducciones de `about.json`. |
| Información de contacto y redes sociales | `src/data/contact.ts`; comprueba también si el dato aparece directamente en alguna página o traducción. |
| Menú y navegación | `src/data/navigation.ts` y los componentes de `src/components/navigation/`. |
| Cabecera y pie de página | `src/components/layout/Header.tsx` y `src/components/layout/Footer.tsx`. |
| Cursos | `src/data/courses.ts`, `src/pages/Courses/` y traducciones `courses.json`. |
| Chasqui Migrante 2026 | `src/data/events/chasquiMigrante2026.ts`, `src/pages/Events/ChasquiMigrante2026Page.tsx` y traducciones `chasqui2026.json`. |
| Festival de cine 2026 | `src/pages/Events/AndeanFilmFestival2026Page.tsx`, `src/data/events/kuriChasqui2026.ts`, `src/data/events/festival2026Recap.ts` y traducciones `festival2026.json`. |
| Películas del festival | `src/data/kuriChasqui2026.json` es el catálogo importado por `src/data/events/kuriChasquiCatalog.ts`. Comprueba también las imágenes correspondientes en `public/images/`. |
| Programa del festival | `src/data/festivalSchedule2026.ts` y las traducciones `festivalSchedule2026.json`. |
| Donaciones y participación | `src/pages/Donate/donate.tsx`, `src/pages/GetInvolved/index.tsx`, `src/data/getInvolved.ts` y las traducciones correspondientes. |
| Imágenes y documentos públicos | `public/images/` y otras rutas dentro de `public/`. Si se cambia un nombre de archivo, actualiza también sus referencias. |

Algunos textos, enlaces y datos también pueden estar escritos directamente dentro de componentes o archivos de datos. Si no encuentras un contenido en las traducciones, busca su texto o URL en todo `src/` antes de modificarlo.

## 5. Textos, idiomas y nuevas páginas

El sitio utiliza `react-i18next`. Los archivos de traducción están en `src/i18n/es/` y `src/i18n/en/`; `src/i18n/resources.ts` reúne los recursos. Revisa siempre las dos versiones del contenido, los enlaces y las variables de interpolación cuando hagas cambios.

Las rutas públicas principales están registradas en `src/data/routes.ts` y se conectan con las páginas en `src/app/router.tsx`. Al añadir una página:

1. Crea la página y sus textos en ambos idiomas.
2. Registra su ruta y conecta el componente en el enrutador.
3. Añade los textos SEO correspondientes y, si procede, el enlace de navegación.
4. Ejecuta la compilación y verifica las dos versiones, también al abrir o recargar directamente la URL.

Las páginas de detalle de cursos y películas se generan a partir de sus respectivos catálogos. Si cambias un `slug` o eliminas una ruta, revisa los enlaces existentes y las redirecciones para evitar páginas inaccesibles.

## 6. Publicación en Netlify

El proyecto puede publicarse mediante un repositorio conectado a Netlify o mediante una compilación manual. Antes de modificar la configuración existente, comprueba qué método se utiliza y quién tiene acceso a la cuenta y al repositorio.

Para una configuración de compilación desde Git, los valores del proyecto son:

| Ajuste | Valor |
| --- | --- |
| Carpeta base | La carpeta que contiene `package.json`. |
| Comando de compilación | `npm run build` |
| Carpeta de publicación | `dist` |
| Node.js | Una versión compatible; se recomienda la versión 24. |

Con Git conectado, los cambios publicados en la rama configurada pueden iniciar un despliegue automático. Revisa el registro de Netlify y confirma que el despliegue terminó correctamente. Si se publica manualmente, primero genera `dist/` con `npm run build` y utiliza su contenido para el despliegue.

La copia de seguridad guardada en un disco o en almacenamiento en línea **no publica cambios automáticamente**. Para la publicación automática, Netlify debe estar conectado a un repositorio accesible y correctamente configurado.

El archivo `public/_redirects` contiene reglas utilizadas por Netlify para rutas y redirecciones; consérvalo y comprueba las URLs después de modificarlo. La compilación ejecuta `scripts/generateSocialPages.mjs`, que genera metadatos y el sitemap para las rutas registradas. Esos archivos incluyen metadatos para redes y buscadores; el cuerpo de las páginas sigue siendo una aplicación React.

Después de publicar, revisa la página de inicio y varias páginas internas en español e inglés, incluidas la navegación móvil, las imágenes, los enlaces externos y los formularios o medios de pago que se hayan modificado.

## 7. Copia de seguridad y entrega

Conserva el código fuente completo, `public/`, `scripts/`, los archivos de configuración, `package.json` y `package-lock.json`. La persona que reciba la copia podrá instalar las dependencias con `npm ci` y generar `dist/` con `npm run build`.

La copia utilizada para redactar esta guía incluye las carpetas `.git/`, `node_modules/` y `dist/`. Para preparar una copia de trabajo más ligera se pueden omitir `node_modules/` y `dist/`, ya que se pueden volver a generar. La carpeta `.git/` contiene el historial y la configuración del repositorio: decide por separado si deseas compartirla y conserva el repositorio original intacto.

Además de guardar los archivos, comprueba que las personas autorizadas puedan acceder al alojamiento, al dominio, al repositorio utilizado para publicar y a los servicios externos de los que dependa la web. Documenta cualquier cambio posterior en esta guía.
