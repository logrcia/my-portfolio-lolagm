# Portfolio – Lola García Marelli

**Multimedia Designer** · Art Direction · Visual Identity · Video Editing · Illustration

---

## 1. Descripción de la propuesta y público al que se dirige

Este proyecto es el portfolio web personal e interactivo de **Lola García Marelli**, estudiante de Diseño Multimedial en la **Universidad Maimónides** (Buenos Aires, Argentina).

La propuesta traduce una identidad visual propia, cálida y artesanal: combina una paleta crema con acentos en rosa viejo, tipografía editorial (*Plus Jakarta Sans*) contrapuesta con detalles caligráficos (*Caveat*), ilustraciones propias de grafito y dibujo digital (avatar, ilustración de despedida, marcos estilo *doodle* y flores ornamentales), junto con piezas de fotografía, dirección de arte, branding, pintura e ilustración.

### Público objetivo:
- **Estudios de diseño, agencias creativas y productoras audiovisuales** interesadas en perfiles orientados a dirección de arte, identidad visual, edición de video y contenido digital.
- **Marcas independientes y clientes particulares** que busquen proyectos integrales de branding, fotografía editorial o producción audiovisual.
- **Equipo docente y evaluadores académicos** de *Programación Multimedial IV* para la evaluación y defensa del Examen Final.

---

## 2. Instrucciones para instalar, ejecutar y construir el proyecto

### Requisitos previos
- **Node.js** 18 o superior (incluye `npm`).

### Opción A: Aplicación Web Principal (Vite + React + TypeScript)
1. **Clonar el repositorio e ingresar a la carpeta del proyecto**:
   ```bash
   git clone https://github.com/logrcia/my-portfolio-lolagm.git
   cd my-portfolio-lolagm
   ```
2. **Instalar dependencias**:
   ```bash
   npm install
   ```
3. **Ejecutar el servidor de desarrollo**:
   ```bash
   npm run dev
   ```
   El sitio quedará disponible en `http://localhost:3000`.
4. **Verificar tipado estático (TypeScript)**:
   ```bash
   npm run lint
   ```
5. **Construir la versión de producción**:
   ```bash
   npm run build
   ```
   Genera los archivos estáticos optimizados en la carpeta `/dist`, listos para desplegar en Vercel.

### Opción B: Versión Estática Standalone (`/standalone/`)
Como referencia desacoplada sin compilador ni dependencias externas:
1. Abrir el archivo `/standalone/index.html` mediante un servidor local estático (por ejemplo Live Server o `npx serve .`).

---

## 3. Tecnologías y decisiones principales

### Stack utilizado actualmente
- **React 19 + TypeScript + Vite 8 + Tailwind CSS v4**: Estructura modular basada en componentes tipados, estados interactivos reactivos y compilación rápida para despliegue en Vercel.
- **Lucide React**: Iconografía de interfaz minimalista y consistente (`X`, `Copy`, `Check`, `ExternalLink`, `ZoomIn`, `RefreshCw`, etc.).
- **Google Fonts**: *Plus Jakarta Sans* (cuerpo, títulos y navegación) y *Caveat* (tipografía manuscrita/script para destacar *"Lola"* en el Hero, *"Contact me!"* en el footer y encabezados artesanales en la galería).
- **Versión paralela `/standalone/`**: Maquetado en HTML5, CSS3 nativo y Vanilla JS manteniendo paridad de diseño e interacciones.

> **Nota sobre requisito de la consigna (AstroJS):** La versión actual está desarrollada sobre **React + Vite** (heredada de la base de prototipado rápido utilizada) y aún tiene pendiente su **migración final a AstroJS** para cumplir el requisito obligatorio de la cátedra.

### Decisiones de diseño y UX
- **Regla cromática 60-30-10**:
  - Fondo neutro cálido `#FAF4EF` (60%).
  - Superficies de soporte `#F5E6DE`, `#F6ECE4` y `#EADBCE` (30%).
  - Acento rosa `#D97186` y tinta oscura `#1E1B1B` / `#1D1B1B` para alto contraste (10%).
- **Pantalla inicial (Hero `min-h-screen`)**: Dedicada exclusivamente a la presentación personal con la ilustración de Lola y el llamado a la acción *"Take a look! ↓"*, evitando saturar el primer pantallazo.
- **Narrativa en inglés**: Todo el contenido visible del portfolio está redactado en inglés para proyectar alcance internacional.
- **Integración gráfica artesanal**: Uso de ilustraciones propias con fondo transparente, bordes redondeados uniformes de `15px` en el bloque *Tools* y marcos dibujados a mano en *About*.

---

## 4. Explicación de los componentes propios relevantes

1. **`Header.tsx` (Navegación fija)**
   - Barra superior fija (`fixed top-0`) con la marca **"LOLA GARCÍA MARELLI"** clickeable para volver al inicio (`#home`), y cinco anclajes con desplazamiento suave (`scrollIntoView`): `Work · Moodboard · Tools · About · Contact`.
2. **`Hero.tsx`**
   - Ocupa el alto completo del viewport (`min-h-screen`), presenta el avatar ilustrado de Lola, la introducción con el nombre destacado en tipografía *Caveat* y el botón animado *"Take a look! ↓"* que conduce a la grilla de proyectos.
3. **`ProjectGrid.tsx` y `ProjectModal.tsx`**
   - **`ProjectGrid`**: Grilla responsive (1 columna en mobile, 2 en escritorio) con los 4 proyectos principales: *“Mírenlas”*, *Mila Mia*, *Social Media Content* y *Experimental Art Video (KUITCA 86 - MALBA)*.
   - **`ProjectModal`**: Modal accesible con cierre mediante botón `✕`, tecla `Escape` o clic fuera de la tarjeta y bloqueo de scroll de fondo. Organizado en **2 columnas**: imagen contenida + ficha técnica (*Role* y *Year*) a la izquierda; *Project Overview* y etiquetas de *Tools & Software* a la derecha; y botón inferior *"View on Behance ↗"* conectado a cada galería real.
4. **`Moodboard.tsx` (Integración con API de Are.na)**
   - Galería tipo *masonry* responsive (2 columnas en mobile, 3 en tablet y 4 en desktop) conectada en vivo al canal curado de Are.na (`inspo-z5eag9wxqag`), con enlace directo *"View on Are.na ↗"* y acceso a la fuente original de cada bloque.
5. **`ToolsSection.tsx`**
   - Franja destacada con borde punteado rosa (`border-dashed`) que exhibe 8 herramientas diarias en contenedores cuadrados redondeados (`rounded-[15px]`): **Photoshop, Illustrator, Premiere, Figma, CapCut, After Effects, Procreate** y **Notion**, con iconografía lineal/monocromática adaptada al color del sistema (`#1E1B1B` y hover `#D97186`).
6. **`AboutSection.tsx` y `AboutGallery.tsx`**
   - **`AboutSection`**: Presenta el perfil artístico (*About*) y la formación en Universidad Maimónides (*Background*) respetando los márgenes laterales simétricos del sitio.
   - **`AboutGallery`**: Componente interactivo ubicado entre el segundo y tercer párrafo de *About* con tres botones centrados (**`Art`**, **`Photography`**, **`Illustration`**).
     - Inicia con la categoría **Art** abierta por defecto para mostrar obras apenas se llega a la sección.
     - Permite alternar disciplinas o cerrar la galería volviendo a hacer clic en el botón activo.
     - Renderiza las obras con sus marcos artesanales en 2 o 3 columnas, encabezado unificado *"Some of my work ♡"* e incluye un **Lightbox** al hacer clic sobre cualquier pieza para ampliarla.
7. **`ContactFooter.tsx`**
   - Sección de cierre a pantalla completa (`min-h-screen`) en color `#D97186` con título *"Contact me!"* en tipografía *Caveat*, ilustración saludando centrada con sombra sutil para contraste, invitación en inglés, caja interactiva de email con copia al portapapeles y notificación flotante (*toast*), enlace directo a `behance.net/logrcia` y barra inferior con *"Back to top ↑"*.
8. **`FlowerDecorations.tsx`**
   - Capa ornamental (`aria-hidden="true"`, `pointer-events-none`) con ilustraciones a lápiz integradas mediante `mix-blend-mode: multiply`.

---

## 5. Fuente dinámica / API externa utilizada

### Are.na API v2 / v3 (`Moodboard.tsx`)
- **Fuente**: Canal público de [Are.na](https://www.are.na/channel/inspo-z5eag9wxqag) (`inspo-z5eag9wxqag`).
- **Endpoints utilizados**:
  - Primario (sin caché de 7 días): `https://api.are.na/v2/channels/inspo-z5eag9wxqag/contents?per=100&page=1..N&sort=position&direction=desc&_t=<timestamp>` (`Cache-Control: max-age=0, must-revalidate`, paginado completo y ordenado por conexiones más recientes primero) junto con metadatos en `https://api.are.na/v3/channels/inspo-z5eag9wxqag`.
  - Respaldo automático: Are.na API v3 `/contents` (`https://api.are.na/v3/channels/inspo-z5eag9wxqag/contents`).
- **Información obtenida**: Título del canal (`title`) y arreglo paginado de bloques (`contents` / `data`) con imágenes (`display`, `large`, `original`, `thumb`), bloques de texto y enlaces de origen (`source.url`).

### Manejo de estados, sincronización continua y errores
1. **Conexión directa sin proxies de terceros**: La API oficial de Are.na (`api.are.na`) expone `Access-Control-Allow-Origin: *`, por lo que las peticiones se realizan directamente desde el cliente con `cache: 'no-store'` y parámetro `_t=<timestamp>`, evitando los cortes de proxies públicos (`corsproxy.io` / `allorigins.win`) y la caché de 7 días del endpoint raíz de canal v2.
2. **Actualización constante**: Además de la carga inicial, el componente ejecuta sincronización silenciosa cada 30 segundos mientras la pestaña está activa, re-sincroniza automáticamente al volver a enfocar la ventana/pestaña (`visibilitychange` / `focus`), e incluye un botón manual de refresco junto a *"View on Are.na"*.
3. **Estado de carga (`loading` / `isSyncing`)**: Muestra el *spinner* *"Loading moodboard..."* en la carga inicial; las re-sincronizaciones en segundo plano actualizan la grilla sin parpadeos.
4. **Error / Modo sin conexión (`fallback` + `error`)**: Si Are.na no responde temporalmente, carga `/assets/inspo_channel_backup.json` como respaldo de emergencia y muestra un aviso con botón **"Retry"**.
5. **Estado vacío (`blocks.length === 0`)**: Presenta una tarjeta informativa indicando *"This channel is currently empty."*

---

## 6. Criterios de diseño responsive y accesibilidad

- **Diseño responsive**:
  - Contenedor principal unificado (`max-w-5xl mx-auto px-6 sm:px-12 md:px-16`) que mantiene márgenes equilibrados en todos los tamaños.
  - Grillas adaptativas:
    - *Work*: 1 columna en móvil → 2 columnas en `md+`.
    - *Moodboard*: 2 columnas en móvil → 3 en `md` → 4 en `lg`.
    - *Tools*: 2 columnas en móvil → 4 en `sm` → 8 en `lg`.
    - *AboutGallery*: 1 columna en móvil → 2 en `sm` → 3 en `md+` (para categorías con 3 piezas).
  - Uso de `scroll-mt-20` / `scroll-mt-24` en todas las secciones para compensar el header fijo al navegar mediante anclas.
- **Accesibilidad**:
  - Alto contraste cromático: `#1E1B1B` / `#1D1B1B` sobre `#FAF4EF` (> 12:1) y `#FFFFFF` sobre `#D97186` en header y footer.
  - Atributos ARIA pertinentes (`aria-expanded` en botones de *AboutGallery*, `role="dialog"` y `aria-modal="true"` en modales y lightbox, `aria-hidden="true"` en flores decorativas y separadores).
  - Cierre accesible por teclado con `Escape` en `ProjectModal` y etiquetas `alt` en imágenes de proyectos, avatares y obras.

---

## 7. Limitaciones conocidas y posibles líneas de mejora

- **Migración pendiente a AstroJS**: El código productivo actual corre sobre React + Vite; resta migrar la estructura de páginas y componentes a **AstroJS** para cumplir íntegramente el requisito tecnológico obligatorio de la consigna.
- **Límite de paginación en canales muy extensos**: El moodboard recorre hasta 10 páginas de 100 bloques (1000 ítems) para equilibrar consumo de red en cliente.
- **Pulido de accesibilidad por teclado**: Reforzar estilos explícitos de `:focus-visible` en enlaces del navbar, tarjetas de proyectos y lightbox, y sumar cierre por `Escape` también en el lightbox de `AboutGallery`.
- **Unificación de atributos internos**: Terminar de unificar al inglés algunos textos internos de `alt` y `aria-label` que quedaron en español (`"Volver al inicio"`, `"Cerrar modal"`).

---

## 8. Uso de Inteligencia Artificial

Durante el desarrollo se utilizaron herramientas de IA generativa y asistencia de código como apoyo al proceso creativo y técnico:

- **Tareas en las que se utilizó IA**:
  - Estructuración inicial de componentes modulares, maquetación responsive con Tailwind CSS y sincronización de la versión *standalone*.
  - Depuración técnica de la integración con la API v2 de Are.na (manejo de CORS y respaldo local) y resolución del conflicto de dependencias `esbuild`/`vite` en el build de Vercel.
  - Generación/adaptación de prototipos visuales temporales para pruebas de maquetado antes de reemplazarlos por fotografías, pinturas e ilustraciones reales de la autora.
- **Qué partes se revisaron, adaptaron o descartaron**:
  - Se descartaron las estructuras genéricas propuestas al comienzo (ej. exceso de bloques informativos, *Key Highlights* dentro de los modales de proyectos y un buscador público de canales de Are.na que desviaba el foco del portfolio).
  - Se revisaron y rehicieron los logos de *Tools* (especialmente *CapCut*, *Notion* y *Procreate*) porque los vectores generados inicialmente no respetaban las líneas originales ni el contraste deseado.
  - Se reemplazaron las imágenes de prueba en *AboutGallery* y *Contact* por obras, fotografías e ilustraciones propias de Lola con sus marcos originales.
- **Problemas, errores o límites detectados**:
  - La IA generó inicialmente vectores simplificados o rellenos sólidos donde los logos originales perdían sus líneas internas (*CapCut*, *Notion*).
  - Al incorporar imágenes con marcos dibujados incluidos, la primera implementación superpuso un doble marco SVG hasta que se ajustó el componente para distinguir marcos nativos (`custom`).
  - El entorno inicial partió de React + Vite en lugar de AstroJS, detectado al contrastar la entrega con la consigna oficial del examen.
- **Decisiones tomadas por la autora**:
  - Definición completa de identidad estética, paleta cromática, tipografías, curaduría de los 4 proyectos reales de Behance, textos personales en inglés, reemplazo íntegro de obras propias en *Art*, *Photography* e *Illustration*, comportamiento por defecto de la galería (*Art* abierta al inicio) y criterio visual de cada sección.

---

## 9. Evidencia de proceso

La bitácora detallada con las iteraciones, decisiones descartadas, dificultades técnicas y pruebas realizadas se encuentra documentada en:
- [`docs/process/bitacora.md`](./docs/process/bitacora.md)

---

## 10. Créditos y licencias

- **Diseño, concepto, fotografías, pinturas, ilustraciones y proyectos**: © **Lola García Marelli**.
- **Tipografías**: *Plus Jakarta Sans* y *Caveat* vía Google Fonts (SIL Open Font License).
- **Iconografía UI**: [Lucide Icons](https://lucide.dev/) (ISC License).
- **Marcas de software referenciadas**: Adobe (Photoshop, Illustrator, Premiere, After Effects), Figma, CapCut, Procreate y Notion utilizadas con fines exclusivamente académicos y descriptivos de herramientas de trabajo.
- **API Externa**: Plataforma colaborativa [Are.na](https://www.are.na) (canal `inspo-z5eag9wxqag`).
