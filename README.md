# Portfolio – Lola García Marelli
**Multimedia Designer** · Art Direction · Branding · Video Editing

---

## 1. Descripción de la propuesta y público objetivo

Este proyecto es el portfolio profesional digital de **Lola García Marelli**, estudiante de Diseño Multimedia en la **Universidad Maimónides**. La propuesta traduce una identidad visual distintiva, conceptual y cálida, estructurada a partir de un diseño editorial de referencia en *Readymag* y combinando ilustración tradicional a lápiz, tipografía cuidada y desarrollo web accesible.

### Público al que se dirige:
- **Estudios de diseño, agencias creativas y productoras audiovisuales** en búsqueda de diseñadores multimedia para puestos de dirección de arte, branding, creación de contenido y edición de video.
- **Clientes y marcas independientes** que requieran identidades visuales integrales, dirección fotográfica o diseño de packaging.
- **Comunidad académica y evaluadores universitarios** para la presentación formal de trabajos de grado y proyectos de cátedra.

---

## 2. Tecnologías y decisiones principales

### Estructura del proyecto:
Para brindar máxima flexibilidad de entrega y evaluación, el repositorio contiene dos arquitecturas completas y sincronizadas:
1. **Versión Web Standalone (Puro HTML5, CSS3 y Vanilla JavaScript)**: Ubicada en la carpeta `/standalone/`, concebida sin dependencias de frameworks ni librerías pesadas, ejecutable en cualquier navegador estático.
2. **Versión Modular Web (React 19 + TypeScript + Tailwind CSS)**: Con componentes desacoplados, interfaces tipadas estrictas y hot-reloading para despliegue en entornos de nube modernos.

### Decisiones de diseño y UX:
- **Vista inicial Fullscreen (Hero fold)**: La primera pantalla presenta de manera exclusiva la barra de navegación superior, la ilustración personalizada (avatar estilo chibi), el texto de presentación curado con destaque caligráfico y el llamado a la acción *"Take a look! ↓"*. El resto de las secciones se descubren de forma progresiva mediante scroll natural o navegación asistida.
- **Navbar interactiva y anclajes con desplazamiento suave**:
  - `About`: Conecta con la introducción, avatar y biografías.
  - `Work`: Conecta directamente con la grilla de proyectos.
  - `Live moodboard`: Conecta con el módulo dinámico de Are.na.
  - `Tools`: Conecta con la franja de software.
  - `Contact`: Conecta con el pie de página de contacto directo.
- **Paleta cromática con regla 60-30-10**:
  - Fondo neutro cálido: `#FAF4EF` (60%)
  - Superficies y franjas estructuradas: `#F5E6DE` / `#EADBCE` (30%)
  - Acento primario rosa: `#D97186` con estado hover en `#C55C71` (10%)
- **Ilustraciones orgánicas integradas**: Se procesaron los bocetos a mano de flores con transparencia y modo de fusión (*multiply*) para preservar la textura de lápiz y grafito.

---

## 3. Explicación de componentes relevantes

1. **`Header` (Navbar)**:
   - Barra superior pegajosa (`sticky top-0`) con el nombre del autor y navegación horizontal unificada con separadores tipográficos (`·`).
   - Implementa desplazamiento suave (`scroll-behavior: smooth` y `scroll-margin-top`) para evitar solapamientos visuales con los títulos de sección.
2. **`Hero`**:
   - Ocupa el 100% del alto visible inicial (`min-h-[calc(100vh-56px)]`).
   - Aloja el avatar con micro-interacción al hover y el botón con animación de rebote sutil (`bounce`).
3. **`ProjectGrid` & `ProjectModal`**:
   - Grilla responsive a dos columnas que presenta los 4 proyectos clave: *“Mírenlas”*, *Mila Mia*, *Social Media Content* y *Experimental Art Video (Kuitca 86 - MALBA)*.
   - Cada tarjeta es interactiva: al hacer clic, abre un modal accesible con ficha técnica, rol, año, herramientas utilizadas e hitos de producción.
   - Permite cierre con botón, tecla `Escape` o clic sobre el backdrop con bloqueo de scroll en el fondo.
4. **`Moodboard` (Integración con API Are.na)**:
   - Bloque vivo que sincroniza referencias visuales y conceptuales en tiempo real.
   - Posee un formulario interactivo que permite ingresar cualquier `slug` de canal público de Are.na para cargarlo dinámicamente.
5. **`ToolsSection`**:
   - Franja estilizada con líneas punteadas (`border-dashed`) que agrupa las 8 herramientas solicitadas:
     - **Photoshop** (`Ps`)
     - **Illustrator** (`Ai`)
     - **Premiere** (`Pr`)
     - **Figma** (Icono vectorial oficial)
     - **CapCut** (`Cc`)
     - **After Effects** (`Ae`)
     - **Procreate** (Icono de trazo y pincel digital)
     - **Notion** (Monograma tipográfico clásico)
6. **`AboutSection`**:
   - Bloques detallados de perfil profesional y formación académica en la Universidad Maimónides.
7. **`ContactFooter`**:
   - Pie de página con enlace directo a correo (`mailto:`), botón con feedback instantáneo para copiar el email al portapapeles y enlace externo verificado al perfil de **Behance** (`behance.net/logrcia`).

---

## 4. Fuente dinámica o API utilizada

### Are.na API (Canales públicos)
- **Endpoint**: `https://api.are.na/v2/channels/{channel_slug}`
- **Autenticación**: No requiere API Key para canales públicos.
- **Parámetros**: `per=12` para traer los bloques más recientes.

### Comportamiento ante errores o ausencia de datos:
1. **Manejo de CORS en el navegador**: Are.na no emite cabeceras CORS permisivas para peticiones `fetch()` directas desde clientes web; por tal motivo, el componente implementa una estrategia con proxies públicos confiables (`corsproxy.io` y `allorigins.win`) para garantizar la consulta sin fricción.
2. **Canal inexistente o privado**: Si la API devuelve un código de error (401/403/404) o falla la conexión de red, la interfaz muestra un aviso visual discreto con botón de **Reintentar**, y activa una colección curada de bloques de muestra con el enlace directo al canal original para que la grilla nunca quede rota.
3. **Canal vacío**: Si el canal no contiene bloques, se presenta un estado vacío con ícono y texto explicativo invitando a probar otro slug.
4. **Estado de carga**: Muestra un indicador de carga animado (*spinner*) mientras se resuelve la petición.

---

## 5. Instrucciones para instalar, ejecutar y construir

### Opción A: Versión Standalone (HTML / CSS / JS puro)
No requiere instalación ni gestor de paquetes.
1. Navegar a la carpeta `standalone/`.
2. Abrir el archivo `index.html` en cualquier navegador web moderno (Chrome, Firefox, Safari, Edge).

### Opción B: Proyecto Modular (Node / Vite / Express)
1. **Requisitos**: Node.js versión 18 o superior.
2. **Instalar dependencias**:
   ```bash
   npm install
   ```
3. **Ejecutar en modo desarrollo**:
   ```bash
   npm run dev
   ```
   Abrirá la aplicación en `http://localhost:3000`.
4. **Construir para producción**:
   ```bash
   npm run build
   ```
5. **Verificar tipos y linting**:
   ```bash
   npm run lint
   ```

---

## 6. Criterios de accesibilidad y diseño responsive

- **Responsive Design**:
  - Breakpoints definidos para móviles (`< 640px`), tablets (`640px - 768px`), laptops (`768px - 1024px`) y monitores de escritorio (`1024px+`).
  - La grilla de proyectos se ajusta de 1 a 2 columnas; la franja de Tools de 2 a 4 y 8 columnas; y el moodboard de 1 a 4 columnas según el ancho de pantalla.
- **Accesibilidad (WCAG AA)**:
  - Contrastes de texto validados: texto principal `#1D1B1B` sobre `#FAF4EF` (> 12:1) y texto blanco sobre `#D97186` (> 4.5:1).
  - Atributos `aria-hidden="true"` para elementos meramente ornamentales (flores decorativas y separadores).
  - Manejo de teclado en modales (`Escape` para cerrar) y retorno de foco.
  - Textos alternativos (`alt`) descriptivos en todas las imágenes de proyectos y avatares.

---

## 7. Limitaciones conocidas y líneas de mejora

- **Rate Limit de Are.na**: Como la API pública de Are.na puede limitar solicitudes concurrentes desde ciertas IPs compartidas, una mejora futura consiste en incorporar almacenamiento en caché local (*localStorage* o IndexedDB) por 15 minutos para optimizar el rendimiento.
- **Subida de nuevos proyectos**: Actualmente los proyectos están centralizados en `src/data/portfolioData.ts`. Se puede escalar a un CMS headless como Sanity o Strapi si se desea gestionar proyectos sin tocar código.
- **Filtro por categorías**: Posibilidad de sumar pestañas para filtrar proyectos por "Branding", "Video" o "Fotografía".

---

## 8. Evidencia de proceso y bitácora de iteraciones

La carpeta `/docs/process/` (y la documentación adjunta) documenta el proceso evolutivo del proyecto:

1. **Paso 1 - Análisis del diseño de referencia (Readymag)**:
   - Mapeo de la estructura original: barra superior en `#D97186`, avatar ilustrado de Lola, grilla de 4 proyectos, franja punteada de herramientas y biografías.
   - Extracción y recorte de los activos originales desde la captura de pantalla y el dibujo de flores con lápiz.
2. **Paso 2 - Desarrollo de la base y tipografías**:
   - Integración de fuentes Google Fonts: *Caveat* para el nombre caligráfico y *Plus Jakarta Sans* para el cuerpo y títulos.
   - Ajuste de los contornos y proporciones de las tarjetas para mantener el aspect ratio original (796 × 460).
3. **Paso 3 - Desacoplamiento y versión Standalone**:
   - Creación de la versión en HTML5/CSS3/Vanilla JS sin dependencias para cumplir con la consigna de entregar una base limpia.
4. **Paso 4 - Rediseño de la Navbar y Viewport Fullscreen**:
   - Configuración de la sección Hero para que ocupe el 100vh exacto en pantallas de escritorio, ocultando la grilla hasta que el usuario decida scrollear o cliquear "Take a look! ↓".
   - Expansión de la barra de navegación a 5 secciones: *About*, *Work*, *Live moodboard*, *Tools* y *Contact*.
5. **Paso 5 - Integración de la API de Are.na**:
   - Diagnóstico de requerimientos de la API v2 de Are.na, manejo de restricciones de User-Agent y bypass de políticas CORS para consumo desde navegadores.
   - Implementación de estado de carga, fallback estético y selector de slug de canal.
6. **Paso 6 - Ampliación a 8 herramientas**:
   - Incorporación de Photoshop, Illustrator, Premiere, Figma, CapCut, After Effects, Procreate y Notion con diseño coherente en línea y monograma.

---

## 9. Créditos y licencias

- **Diseño, concepto y proyectos**: © Lola García Marelli.
- **Fotografía & Dirección**: Proyectos *“Mírenlas”*, *Mila Mia*, *Social Media Content* y *Guillermo Kuitca (MALBA)* pertenecientes a Lola García Marelli.
- **Tipografías**: *Plus Jakarta Sans* (SIL Open Font License) y *Caveat* (SIL Open Font License).
- **Iconografía**: Iconos inspirados en Lucide Icons y marcas registradas de Adobe Inc., Figma Inc. y Notion Labs (utilizados con fines referenciales educativos de portfolio).
- **API Externa**: Plataforma colaborativa [Are.na](https://www.are.na).
