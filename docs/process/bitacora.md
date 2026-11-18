# Bitácora y Evidencia de Proceso

**Proyecto**: Portfolio Web Personal e Interactivo — Lola García Marelli  
**Materia**: Programación Multimedial IV  
**Institución**: Universidad Maimónides  

---

## 1. Problema de comunicación que se buscó resolver

El desafío principal fue construir un portfolio digital que no se sintiera como un currículum rígido ni una plantilla genérica, sino como una extensión coherente de la identidad visual de Lola: **cálida, artesanal, editorial y cercana**, capaz de mostrar tanto su perfil como diseñadora multimedial (dirección de arte, branding, edición de video) como su costado plástico y analógico (pintura, fotografía e ilustración).

---

## 2. Exploración inicial y alternativas evaluadas

- **Referencia visual de partida**: Se partió de un prototipo visual previo armado en **Readymag** (`public/assets/aistudio/my.readymag.com_edit_6294031_preview___2__e989ec82.png`), del cual se extrajeron el tono crema (`#FAF4EF`), el rosa viejo (`#D97186`), el avatar ilustrado y la estética orgánica.
- **Alternativas de estructura evaluadas**:
  1. *Mostrar proyectos y biografía todos juntos desde el primer viewport*: Descartado porque recargaba la pantalla inicial y le quitaba protagonismo al avatar y a la presentación personal.
  2. *Incluir un buscador abierto de canales de Are.na en el Moodboard*: Probado en una iteración intermedia y luego **descartado**, ya que rompía la curaduría estética del sitio; se priorizó mantener el canal personal fijo (`inspo-z5eag9wxqag`) con botón directo para explorarlo en Are.na.
  3. *Generar páginas separadas para las disciplinas artísticas (Art / Photography / Illustration)*: Descartado en favor de un acordeón desplegable dentro de la misma sección *About*, manteniendo el flujo de lectura continuo sin perder el contexto biográfico.

---

## 3. Evolución de la estructura, identidad visual e interacciones

### Iteración 1 — Activos gráficos e ilustraciones propias
- Se recortaron y procesaron las ilustraciones de flores a lápiz (`IMG_4102_c943d7d4.PNG`) aplicando transparencia y `mix-blend-mode: multiply` para conservar la textura de grafito sobre el fondo crema.
- Se integró el avatar ilustrado de Lola en el encabezado inicial.

### Iteración 2 — Rediseño del Hero Fullscreen y Navbar
- Se configuró el **Hero** a pantalla completa (`min-h-screen`) para que en el primer impacto visual solo aparezcan la navbar, el avatar, la presentación con *"Lola"* en tipografía caligráfica (*Caveat*) y el botón *"Take a look! ↓"*.
- Se simplificó la barra de navegación: se eliminó la pestaña redundante `"Home"` haciendo clickeable el nombre **"LOLA GARCÍA MARELLI"** para volver arriba, y se reordenaron las secciones en: `Work · Moodboard · Tools · About · Contact`.

### Iteración 3 — Refinamiento de Proyectos y Modales
- Se vincularon las 4 tarjetas (*“Mírenlas”*, *Mila Mia*, *Social Media Content* y *Experimental Art Video*) a sus respectivas publicaciones reales en **Behance**.
- Se rediseñó el modal de detalle: se eliminó la sección de *Key Highlights* para evitar sobrecarga de texto y se reordenó en **2 columnas** (imagen más contenida + *Role* y *Year* a la izquierda; *Project Overview* y *Tools & Software* a la derecha; botón *"View on Behance ↗"* abajo).

### Iteración 4 — Curaduría e idioma del Moodboard (API de Are.na)
- Se migró toda la sección *Moodboard* al inglés (*"Moodboard — “inspo”"*), se eliminó el subtítulo redundante del usuario y se priorizó un layout tipo *masonry* limpio (2 columnas desde mobile hasta 4 en desktop).
- Se conectó el canal público `inspo-z5eag9wxqag` mediante la API v2 de Are.na.

### Iteración 5 — Consistencia visual en la franja de Tools
- Se amplió la grilla a **8 herramientas** (*Photoshop, Illustrator, Premiere, Figma, CapCut, After Effects, Procreate, Notion*), todas encerradas en contenedores cuadrados con borde uniforme `rounded-[15px]` y transición cromática `#1E1B1B → #D97186`.
- Se corrigieron tres logotipos críticos tras revisar el resultado visual:
  - **Procreate**: Se reemplazó por el isotipo oficial aportado por la autora (`procreate_b5b3012c.png`) usando máscara CSS para heredar el color y hover del tema.
  - **CapCut** y **Notion**: Se invirtieron de relleno sólido a diseño lineal/contorneado para que se distingan con claridad las líneas internas del símbolo de CapCut y la perspectiva 3D junto a la «N» de Notion.

### Iteración 6 — Sección Contact a pantalla completa
- Se llevó `#contact` a `min-h-screen` con fondo `#D97186`.
- Se incorporó la ilustración propia de despedida (`contact_lola.png`) centrada entre el título y los botones, con sombra suave para mejorar la separación visual respecto del fondo rosa.
- Se unificó la tipografía de *"Contact me!"* usando *Caveat* (igual que *"Lola"* en el Hero), se agregó un mensaje cercano en inglés sobre los botones de Email/Behance y se amplió el margen inferior respecto al footer.

### Iteración 7 — Evolución de About y Galería interactiva por disciplinas
- Se actualizó el texto biográfico de *About* en tres párrafos redactados en inglés reflejando el enfoque artístico de Lola en Buenos Aires y su proceso desde el papel hacia lo digital.
- Se corrigieron los márgenes del bloque para igualar el ancho simétrico del resto de la página (`max-w-5xl`).
- Se desarrolló `AboutGallery` con tres botones centrados (**Art**, **Photography**, **Illustration**), configurando **Art abierto por defecto** al cargar la página para visibilizar las obras de entrada.
- Se reemplazaron las imágenes de prueba por obras reales con marcos ilustrados propios (`arte1..3`, `ph1..3`, `illustration1..2`), se unificó el título superior a *"Some of my work ♡"*, se eliminaron subtítulos, títulos individuales y el botón `✕` redundante (ya que se cierra haciendo clic sobre el botón activo).

### Iteración 7 — Actualización en tiempo real de la API de Are.na (`Moodboard`)
- Se diagnosticó por qué las nuevas imágenes conectadas al tablero de Are.na no se reflejaban en el portfolio: los proxies públicos previos (`corsproxy.io` devolviendo `403` y `allorigins.win` en `522`) fallaban en silencio y forzaban la carga del respaldo estático de 4 imágenes; además, el endpoint raíz v2 de Are.na cachea respuestas por 7 días (`max-age=604800`).
- Se eliminó la dependencia de proxies externos: el portfolio consulta directamente a `api.are.na` (que habilita `Access-Control-Allow-Origin: *`) usando el endpoint paginado sin caché `/v2/channels/inspo-z5eag9wxqag/contents?per=100&sort=position&direction=desc` con `cache: 'no-store'` y cache-busting (`_t`), más respaldo automático con Are.na API v3.
- Se incorporó sincronización continua cada 30 segundos, re-sincronización automática al volver a enfocar la pestaña (`visibilitychange` / `focus`), y un botón de refresco manual junto a *"View on Are.na"*.

---

## 4. Dificultades técnicas encontradas y cómo se resolvieron

| Problema encontrado | Causa detectada | Solución aplicada |
| :--- | :--- | :--- |
| **Nuevas imágenes de Are.na no aparecían (proxies caídos + caché)** | `corsproxy.io` (`403`) y `allorigins.win` (`522`) dejaron de funcionar, forzando el fallback local; además, `/v2/channels/{slug}` enviaba `max-age=604800` (7 días de caché). | Se reemplazaron los proxies por llamadas directas a `api.are.na/v2/channels/{slug}/contents` (`max-age=0, must-revalidate`, paginación completa y orden descendente), respaldo v3, `cache: 'no-store'`, polling cada 30s, sync al volver a la pestaña y actualización de `public/assets/inspo_channel_backup.json`. |
| **Error `ERESOLVE` al desplegar en Vercel** | Conflicto de dependencias pares en `package.json`: `vite@8.3.x` esperaba `esbuild@^0.27.0 \|\| ^0.28.0`, pero figuraba `esbuild@^0.25.0`. | Se actualizó `esbuild` a `^0.28.0` en `devDependencies`, validado mediante `npm install --dry-run` y build de Vite sin conflictos. |
| **Doble marco en la galería de About** | Al recibir las obras finales con su marco doodle dibujado en el PNG, el contenedor React agregaba un segundo marco SVG por encima. | Se agregó la variante `frameStyle: 'custom'` para renderizar limpiamente los PNG enmarcados sin superponer bordes ni fondos extra. |
| **Logos empastados en Tools** | Los vectores iniciales de *CapCut* y *Notion* usaban relleno sólido sin respetar el calado interno. | Rediseño en SVG de trazo (`stroke="currentColor"`) y máscara CSS para *Procreate*. |

---

## 5. Pruebas en distintos tamaños de pantalla

Durante cada iteración se verificó el comportamiento visual y de interacción en distintos anchos de pantalla:
- **Mobile (`~375px`)**: Verificación de navbar apilada sin desbordes horizontales, Hero centrado, grilla de proyectos a 1 columna, *Moodboard* a 2 columnas legibles, *Tools* a 2 columnas, botones de *About* envueltos de forma centrada y sección *Contact* sin solapamiento entre botones y copyright.
- **Tablet (`~768px`)**: Grillas intermedias a 2 columnas en *Work* y *AboutGallery*, 3 columnas en *Moodboard* y 4 columnas en *Tools*.
- **Desktop (`1280px+`)**: Hero y *Contact* ocupando el viewport completo de forma equilibrada, franja horizontal de las 8 herramientas en una sola fila, galería de 3 columnas en *Art* / *Photography* y modal de proyectos en 2 columnas.

---

## 6. Registro de Uso de Inteligencia Artificial

- **Para qué se utilizó**: Generación inicial de estructura de componentes, refactorización de CSS/Tailwind responsive, diagnóstico del error CORS en Are.na y del conflicto `ERESOLVE` en Vercel, y prototipado temporal de imágenes hasta incorporar las piezas originales de la autora.
- **Qué se revisó, adaptó o descartó**: Se descartaron componentes propuestos que recargaban el diseño (filtros innecesarios, *Key Highlights*, buscador libre de canales); se corrigieron los SVGs de herramientas y el estilo de marcos de la galería para ajustarlos a la estética dibujada a mano de Lola.
- **Límites detectados**: Dificultad inicial de los modelos para reproducir fielmente logos con trazos invertidos sin referencia directa, y uso inicial de Vite + React en lugar de AstroJS como framework base.
- **Decisiones propias de la autora**: Selección integral de paleta, tipografías, contenido editorial en inglés, curaduría de proyectos reales de Behance, fotografía/pintura/ilustración propias, jerarquía de secciones y flujo de interacción de la galería.

---

## 7. Estado actual y puntos pendientes antes de la entrega final

1. **Migración a AstroJS (Prioridad alta)**: El proyecto funciona actualmente sobre React + Vite (y una copia estática en `/standalone/`). Falta migrar la arquitectura al framework **AstroJS** exigido como único requisito tecnológico obligatorio de la consigna.
2. **Validación final del Deploy en Vercel**: Confirmar la URL pública en producción tras subir el commit con `esbuild` corregido (y posteriormente tras migrar a AstroJS) y testearla en dispositivos móviles y escritorio reales.
3. **Ajustes menores de accesibilidad y consistencia**: Agregar estilos de foco visibles (`:focus-visible`) para navegación con teclado, soporte de tecla `Escape` en el *lightbox* de `AboutGallery`, y traducir al inglés algunos atributos `alt`/`aria-label` internos restantes.
4. **Capturas visuales en `docs/process/`**: Sumar capturas de pantalla comparativas de la evolución (desktop y mobile) como respaldo visual directo para la defensa oral.
