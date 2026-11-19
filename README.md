# Portfolio – Lola García Marelli

**Multimedia Designer · Art Direction · Visual Identity · Video Editing · Illustration**

🔗 **Portfolio publicado:** https://my-portfolio-lolagm.vercel.app/
📁 **Repositorio:** https://github.com/logrcia/my-portfolio-lolagm.git

---

## 1. Descripción de la propuesta y público al que se dirige

Este es mi portfolio web personal e interactivo. Soy estudiante de Tecnología Multimedial en la Universidad Maimónides (Buenos Aires, Argentina).

La propuesta busca comunicar desde lo visual. Quise que, apenas se entra al sitio, se pueda percibir cómo soy sin necesidad de leer demasiado. Para lograrlo realicé ilustraciones propias (mi avatar, la ilustración de despedida, marcos estilo doodle y flores ornamentales), que mantienen un tono cálido y cercano. Reforcé esa idea con tipografía de estilo manuscrito (Caveat) y una paleta crema con acentos en rosa viejo. El sitio muestra mis proyectos de fotografía, dirección de arte, branding y edición de video, junto con mi trabajo de pintura e ilustración.

**Público al que apunta:**

- Empresas y agencias creativas que busquen perfiles orientados a dirección de arte, identidad visual y edición de video.
- Productoras audiovisuales interesadas en contenido digital y producción de video.
- Clientes freelance y marcas independientes que necesiten proyectos de branding, fotografía editorial o producción audiovisual.

---

## 2. Instrucciones para instalar, ejecutar y construir el proyecto

**Ver el portfolio publicado:** https://my-portfolio-lolagm.vercel.app/

**Código fuente:** https://github.com/logrcia/my-portfolio-lolagm.git

Para correrlo en una computadora local hace falta Node.js 18 o superior (incluye npm).

```bash
git clone https://github.com/logrcia/my-portfolio-lolagm.git
cd my-portfolio-lolagm
npm install
npm run dev      # servidor de desarrollo en http://localhost:3000
npm run lint     # verifica el tipado de TypeScript
npm run build    # genera la versión de producción en /dist
```

El resultado de `npm run build` queda en la carpeta `/dist`, listo para desplegar en Vercel.

**Versión estática (opcional):** la carpeta `/standalone/` contiene una versión en HTML, CSS y JavaScript sin dependencias. Se abre `/standalone/index.html` con un servidor local (por ejemplo Live Server o `npx serve .`).

---

## 3. Tecnologías y decisiones principales

**Stack**

- **React 19 + TypeScript + Vite + Tailwind CSS v4:** estructura modular de componentes tipados, estados interactivos y compilación rápida para el despliegue en Vercel.
- **Lucide React:** íconos de interfaz minimalistas y consistentes.
- **Google Fonts:** Plus Jakarta Sans (cuerpo, títulos y navegación) y Caveat (tipografía manuscrita, para destacar "Lola" en el Hero, "Contact me!" en el footer y los encabezados artesanales de la galería).
- **Versión paralela `/standalone/`:** misma estética e interacciones, hecha con HTML5, CSS3 y JavaScript nativo.

**Decisiones de diseño**

- **Elementos ilustrados a mano.** Decidí que varios elementos del sitio fueran dibujados por mí (avatar, ilustración de despedida, marcos estilo doodle y flores ornamentales). Quise que el portfolio se sintiera muy personal y propio, y que no pudiera confundirse con una plantilla.
- **Regla cromática 60-30-10:** fondo neutro cálido `#FAF4EF` (60%), superficies de apoyo `#F5E6DE`, `#F6ECE4` y `#EADBCE` (30%), y acento rosa `#D97186` con tinta oscura `#1E1B1B` para el contraste (10%).
- **Pantalla inicial (Hero a pantalla completa):** está dedicada solo a mi presentación, con mi ilustración y el llamado "Take a look! ↓". Evité saturar el primer pantallazo.
- **Contenido en inglés:** todo el texto visible está en inglés para llegar a un público internacional.
- **Integración gráfica artesanal:** ilustraciones con fondo transparente, bordes redondeados uniformes de 15px en las herramientas y marcos dibujados a mano en About.

---

## 4. Explicación de los componentes propios relevantes

**`Header.tsx` – Navegación fija.** Barra superior fija con mi nombre (clickeable para volver al inicio) y anclajes con desplazamiento suave a cada sección: Work · Moodboard · About · Contact.

**`Hero.tsx`.** Ocupa el alto completo de la pantalla. Presenta mi avatar ilustrado, la introducción con mi nombre en tipografía Caveat y el botón animado "Take a look! ↓", que lleva a la grilla de proyectos.

**`ProjectGrid.tsx` y `ProjectModal.tsx`.**
- `ProjectGrid`: grilla responsive (1 columna en mobile, 2 en escritorio) con mis 4 proyectos principales: "Mírenlas", Mila Mia, Social Media Content y Experimental Art Video (KUITCA 86 – MALBA). Debajo de los proyectos se muestran las herramientas que uso: Photoshop, Illustrator, Premiere, Figma, CapCut, After Effects, Procreate y Notion, con íconos lineales y monocromáticos en el color del sistema (`#1E1B1B`, y `#D97186` al pasar el cursor).
- `ProjectModal`: modal accesible que se cierra con el botón ✕, con la tecla Escape o haciendo clic fuera de la tarjeta, y bloquea el scroll del fondo. Tiene dos columnas: a la izquierda la imagen y la ficha técnica (rol y año), y a la derecha el resumen del proyecto y las herramientas usadas. Al final incluye un botón "View on Behance ↗" que lleva a la galería real de cada proyecto.

**`Moodboard.tsx` – Integración con la API de Are.na.** Galería tipo masonry responsive (2 columnas en mobile, 3 en tablet y 4 en desktop), conectada en vivo a mi canal de Are.na (`inspo-z5eag9wxqag`). Incluye el enlace "View on Are.na ↗" y acceso a la fuente original de cada bloque.

**`AboutSection.tsx` y `AboutGallery.tsx`.**
- `AboutSection`: presenta mi perfil (About) y mi formación en la Universidad Maimónides (Background).
- `AboutGallery`: componente interactivo ubicado entre el segundo y el tercer párrafo de About, con tres botones (Art, Photography, Illustration). Arranca con Art abierta para mostrar obras apenas se llega a la sección. Se puede alternar entre disciplinas o cerrar la galería volviendo a tocar el botón activo. Muestra las obras con sus marcos artesanales, bajo el encabezado "Some of my work ♡", y al hacer clic en cualquier pieza se abre un Lightbox para verla ampliada.

**`ContactFooter.tsx`.** Cierre del sitio a pantalla completa, en rosa `#D97186`. Tiene el título "Contact me!" en Caveat, mi ilustración saludando, una caja con mi email que copia al portapapeles y avisa con una notificación flotante, el enlace a behance.net/logrcia y una barra inferior con "Back to top ↑".

**`FlowerDecorations.tsx`.** Capa ornamental con ilustraciones a lápiz integradas mediante `mix-blend-mode: multiply`. Es puramente decorativa (`aria-hidden="true"` y `pointer-events-none`).

---

## 5. Fuente dinámica / API externa utilizada

**Are.na API (v2 / v3) – `Moodboard.tsx`**

- **Fuente:** mi canal público de Are.na, `inspo-z5eag9wxqag`.
- **Endpoints:**
  - Principal: `https://api.are.na/v2/channels/inspo-z5eag9wxqag/contents?per=100&page=1..N&sort=position&direction=desc&_t=<timestamp>`, paginado y ordenado con las conexiones más recientes primero, junto con los metadatos del canal en `https://api.are.na/v3/channels/inspo-z5eag9wxqag`.
  - Respaldo automático: `https://api.are.na/v3/channels/inspo-z5eag9wxqag/contents`.
- **Información que obtengo:** el título del canal y la lista paginada de bloques, con sus imágenes (en distintos tamaños), bloques de texto y el enlace a la fuente original de cada uno.

**Estados y manejo de errores**

- **Conexión directa:** la API oficial de Are.na permite pedidos desde el navegador (CORS abierto), así que consulto directamente desde el cliente, sin proxies de terceros. Uso `cache: 'no-store'` y un parámetro `_t=<timestamp>` para evitar la caché de 7 días del endpoint de canal.
- **Actualización constante:** además de la carga inicial, el moodboard se sincroniza en silencio cada 30 segundos mientras la pestaña está activa, se actualiza al volver a la pestaña y tiene un botón manual de refresco.
- **Carga:** al entrar se muestra "Loading moodboard...". Las actualizaciones en segundo plano cambian la grilla sin parpadeos.
- **Error o sin conexión:** si Are.na no responde, se carga `/assets/inspo_channel_backup.json` como respaldo y aparece un aviso con un botón "Retry".
- **Vacío:** si el canal no tiene bloques, se muestra una tarjeta con el mensaje "This channel is currently empty."

---

## 6. Criterios de diseño responsive y accesibilidad

**Responsive**

- Contenedor principal unificado (`max-w-5xl mx-auto px-6 sm:px-12 md:px-16`), con márgenes equilibrados en todos los tamaños.
- Grillas adaptativas:
  - Work: 1 columna en móvil, 2 desde tablet.
  - Moodboard: 2 columnas en móvil, 3 en tablet y 4 en pantallas grandes.
  - Herramientas: 2 columnas en móvil, 4 en pantallas medianas y 8 en pantallas grandes.
  - Galería de About: 1 columna en móvil, 2 en pantallas chicas y 3 desde tablet.
- `scroll-mt-20` / `scroll-mt-24` en las secciones, para que el header fijo no tape los títulos al navegar por anclas.

**Accesibilidad**

- Alto contraste: `#1E1B1B` sobre `#FAF4EF` (más de 12:1) y `#FFFFFF` sobre `#D97186` en el header y el footer.
- Atributos ARIA: `aria-expanded` en los botones de la galería de About, `role="dialog"` y `aria-modal="true"` en el modal y el lightbox, y `aria-hidden="true"` en las flores decorativas.
- El modal de proyectos se cierra con la tecla Escape.
- Textos `alt` en imágenes de proyectos, avatares y obras.

---

## 7. Limitaciones conocidas y posibles líneas de mejora

- **Más protagonismo para arte, fotografía e ilustración.** Queda pendiente darles un lugar más importante dentro del portfolio. Como es un portfolio muy personal, mostrar obras hechas por mí y el mensaje que hay detrás aportaría mucho más, y sigue siendo trabajo creado por mí.
- **Límite de paginación en canales muy extensos.** El moodboard recorre hasta 10 páginas de 100 bloques (1000 ítems) para no consumir demasiada red en el cliente.

---

## 8. Uso de inteligencia artificial

Usé herramientas de IA generativa y de asistencia de código como apoyo, tanto creativo como técnico.

**Tareas en las que la usé**

- Estructurar los componentes modulares, la maquetación responsive con Tailwind CSS y la sincronización de la versión standalone.
- Depurar la integración con la API de Are.na (CORS y respaldo local) y resolver un conflicto de dependencias entre esbuild y Vite en el build de Vercel.
- Generar prototipos visuales temporales para probar la maquetación, antes de reemplazarlos por mis fotografías, pinturas e ilustraciones reales.

**Qué revisé, adapté o descarté**

- Descarté estructuras genéricas que propuso la IA al principio: exceso de bloques informativos, "Key Highlights" dentro de los modales de proyectos y un buscador público de canales de Are.na que desviaba el foco del portfolio.
- Rehice los logos de herramientas (sobre todo CapCut, Notion y Procreate), porque los vectores generados no respetaban las líneas originales ni el contraste que quería.
- Reemplacé las imágenes de prueba de la galería de About y de Contact por mis propias obras, fotografías e ilustraciones, con sus marcos originales.

**Problemas, errores o límites que detecté**

- La IA generó vectores simplificados o con rellenos sólidos, en los que los logos perdían sus líneas internas (CapCut, Notion).
- Al incorporar imágenes con marcos dibujados incluidos, la primera implementación superponía un doble marco SVG, hasta que ajusté el componente para distinguir los marcos propios (custom).

**Decisiones que tomé yo**

- La identidad estética completa, la paleta, las tipografías, la selección de los 4 proyectos reales de Behance, los textos personales en inglés, el reemplazo de todas las obras de Art, Photography e Illustration por trabajo propio, el comportamiento de la galería (Art abierta por defecto) y el criterio visual de cada sección.

---

## 9. Evidencia de proceso

La bitácora con las iteraciones, las decisiones descartadas, las dificultades técnicas y las pruebas realizadas está en [`docs/process/bitacora.md`](docs/process/bitacora.md).

---

## 10. Créditos y licencias

- **Diseño, concepto, fotografías, pinturas, ilustraciones y proyectos:** © Lola García Marelli.
- **Tipografías:** Plus Jakarta Sans y Caveat, vía Google Fonts (SIL Open Font License).
- **Íconos de interfaz:** Lucide Icons (licencia ISC).
- **Marcas de software mencionadas:** Adobe (Photoshop, Illustrator, Premiere, After Effects), Figma, CapCut, Procreate y Notion, usadas con fines académicos y descriptivos de mis herramientas de trabajo.
- **API externa:** plataforma Are.na (canal `inspo-z5eag9wxqag`).
