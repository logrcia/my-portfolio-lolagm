# Bitácora y Evidencia de Proceso
**Proyecto**: Portfolio Lola García Marelli – Diseño Multimedia  
**Institución**: Universidad Maimónides  

---

## 1. Exploración inicial y moodboard de partida
El punto de partida del proyecto fue un diseño previo montado en la plataforma **Readymag** (`my.readymag.com_edit_6294031_preview___2__e989ec82.png`). 

### Elementos de identidad identificados:
- **Tono general**: Cálido, orgánico, lúdico pero con acabado editorial sobrio.
- **Color dominante**: Fondo crema suave (`#FAF4EF`) y acento frambuesa/rosa viejo (`#D97186`).
- **Ilustración personal**: Avatar chibi de trazo texturado con pendientes dorados, pecas y mirada expresiva.
- **Texturas artesanales**: Conjunto de flores esbozadas a mano con lápiz de grafito.

---

## 2. Iteración 1: Recorte y tratamiento de activos gráficos
- **Problema encontrado**: Las ilustraciones de flores venían en un archivo blanco opaco (`IMG_4102_c943d7d4.PNG`).
- **Solución implementada**: Mediante procesamiento de imagen con canal alfa y detección de luminosidad, se aislaron 3 variantes de flores (flor central grande, flor pequeña y flor rotada), aplicando `mix-blend-mode: multiply` para fundir el grano del grafito directamente sobre el tono crema del lienzo.
- **Avatar**: Se verificó el canal alfa de `IMG_4103_55192ac4.PNG` para montarlo sin fondo blanco sobre el encabezado hero.

---

## 3. Iteración 2: El primer prototipo y feedback sobre tecnologías
- **Requisito inicial del usuario**: Se solicitó explícitamente no utilizar Astro JS ni Vite para la entrega base.
- **Acción realizada**: 
  - Se mantuvo la plantilla del entorno para visualizar el preview en vivo.
  - Se desarrolló en paralelo la versión `standalone/index.html` con **HTML5 semántico puro**, `standalone/style.css` con **CSS nativo sin preprocesadores** y `standalone/script.js` con **Vanilla JavaScript**.
  - Ambas versiones se mantienen al 100% en paridad de diseño y comportamiento.

---

## 4. Iteración 3: Composición de la primera pantalla (Fullscreen fold)
- **Desafío**: El usuario requería que al abrir la web en pantalla completa solo fueran visibles la barra de navegación, la ilustración, el texto de bienvenida y el botón *"Take a look! ↓"*.
- **Solución**:
  - Se definió para la sección `#about` una altura mínima de `calc(100vh - 56px)`.
  - Se utilizó `flex-direction: column` con `justify-content: space-between` de modo que el contenido principal quede centrado verticalmente y el botón con la flecha rebotando quede pegado al borde inferior visible, induciendo al usuario al scroll.

---

## 5. Iteración 4: Reorganización de la barra de navegación
- **Estructura anterior**: Únicamente nombre y subtítulo estáticos.
- **Nueva estructura**:
  - `LOLA GARCÍA MARELLI` a la izquierda.
  - Enlaces activos a la derecha: `About · Work · Live moodboard · Tools · Contact`.
  - Se implementó `scroll-margin-top` en cada sección para que la barra fija no tape los títulos al navegar.

---

## 6. Iteración 5: Investigación e integración de la API de Are.na
- **Requisito**: Incorporar la API pública de Are.na sin API Key en la sección Moodboard.
- **Obstáculo técnico detectado**: 
  - Al realizar peticiones `fetch()` directamente desde el navegador a `https://api.are.na/v2/channels/...`, la API de Are.na bloquea las llamadas por falta de cabeceras CORS (`Access-Control-Allow-Origin`).
  - Adicionalmente, Are.na exige un `User-Agent` descriptivo para evitar bloqueos por bots.
- **Estrategia de resolución**:
  1. Se implementó una conexión a través de proxies CORS transparentes (`corsproxy.io` y `allorigins.win`).
  2. Se configuró un componente con manejo de los 3 estados fundamentales: **cargando** (spinner animado), **éxito** (grilla responsiva de tarjetas con enlaces y etiquetas de clase) y **error/fallback** (aviso claro con opción de reintentar y datos de muestra curados).
  3. Se añadió un campo de búsqueda en vivo que permite a Lola escribir cualquier slug de canal público para explorarlo en tiempo real.

---

## 7. Iteración 6: Ampliación de la sección de herramientas
- Se expandió la grilla de 4 a 8 herramientas:
  1. **Photoshop** (`Ps`)
  2. **Illustrator** (`Ai`)
  3. **Premiere** (`Pr`)
  4. **Figma** (Vector SVG oficial)
  5. **CapCut** (`Cc`)
  6. **After Effects** (`Ae`)
  7. **Procreate** (Ícono de lápiz/pincel digital)
  8. **Notion** (Monograma con serifa)
- Se adaptó la cuadrícula para desplegarse en 2 columnas en mobile, 4 en tablet y 8 en monitor de escritorio dentro de la franja con bordes punteados rosados.

---

## 8. Conclusión de la etapa
El proyecto satisface la totalidad de las pautas visuales y funcionales del brief, con código limpio, modular, accesible y documentado para su entrega y defensa académica.
