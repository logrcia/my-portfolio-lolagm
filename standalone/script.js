// PORTFOLIO LOLA GARCÍA MARELLI - JAVASCRIPT PURO (VANILLA JS)

const projectsData = {
  'mirenlas': {
    title: '“Mírenlas”',
    subtitle: 'Editorial - Photography',
    category: 'Editorial - Photography',
    thumbnail: '../public/assets/projects/mirenlas.png',
    behanceUrl: 'https://www.behance.net/gallery/248129163/Mirenlas',
    role: 'Art Direction, Photography & Retouching',
    year: '2024',
    overview: '“Mírenlas” es una serie editorial fotográfica centrada en capturar la intimidad espontánea, gestos sutiles y dirección de arte en maquillaje. El proyecto abarcó preproducción, curaduría de moodboard, iluminación y postproducción de color para lograr una estética cálida y cinematográfica.',
    tools: ['Adobe Photoshop', 'Adobe Lightroom']
  },
  'mila-mia': {
    title: 'Mila Mia',
    subtitle: 'Branding',
    category: 'Branding',
    thumbnail: '../public/assets/projects/mila_mia.png',
    behanceUrl: 'https://www.behance.net/gallery/237368645/Mila-Mia-Branding',
    role: 'Brand Identity Designer',
    year: '2024',
    overview: 'Mila Mia es un proyecto de identidad visual construido alrededor de la calidez, la delicadeza y la autenticidad. Comprende el desarrollo del logotipo principal, monograma circular orgánico, paleta cromática, diseño de packaging y aplicaciones para redes sociales.',
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma']
  },
  'social-media': {
    title: 'Social Media Content',
    subtitle: 'Video editing',
    category: 'Video editing',
    thumbnail: '../public/assets/projects/social_media.png',
    behanceUrl: 'https://www.behance.net/gallery/248143323/Social-Media-Content',
    role: 'Video Editor & Motion Designer',
    year: '2024',
    overview: 'Piezas audiovisuales dinámicas creadas para destacar el packaging de marca y experiencias de unboxing en formatos digitales de alto impacto para redes sociales.',
    tools: ['Adobe Premiere', 'Adobe After Effects', 'Adobe Photoshop']
  },
  'experimental-art': {
    title: 'Experimental Art Video',
    subtitle: 'Video - Video Editing',
    category: 'Video - Video Editing',
    thumbnail: '../public/assets/projects/experimental_video.png',
    behanceUrl: 'https://www.behance.net/gallery/234768701/Video-Vlog-Museo-Malba-Exposicion-KUITCA-86',
    role: 'Director & Editor',
    year: '2023',
    overview: 'Exploración audiovisual experimental realizada en el marco de la muestra retrospectiva "KUITCA 86" en el MALBA (Museo de Arte Latinoamericano de Buenos Aires), reflexionando sobre el espacio arquitectónico, la memoria y el ritmo.',
    tools: ['Adobe Premiere', 'Adobe Photoshop']
  }
};

// 1. MODAL ELEMENTS
const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalCategory = document.getElementById('modalCategory');
const modalImage = document.getElementById('modalImage');
const modalRole = document.getElementById('modalRole');
const modalYear = document.getElementById('modalYear');
const modalOverview = document.getElementById('modalOverview');
const modalToolsTags = document.getElementById('modalToolsTags');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalBehanceLink = document.getElementById('modalBehanceLink');

function openModal(projectId) {
  const data = projectsData[projectId];
  if (!data) return;

  modalTitle.textContent = data.title;
  modalCategory.textContent = data.category;
  modalImage.src = data.thumbnail;
  modalImage.alt = data.title;
  modalRole.textContent = data.role;
  modalYear.textContent = data.year;
  modalOverview.textContent = data.overview;
  if (modalBehanceLink) {
    modalBehanceLink.href = data.behanceUrl;
  }

  modalToolsTags.innerHTML = '';
  data.tools.forEach(tool => {
    const span = document.createElement('span');
    span.className = 'tool-tag';
    span.textContent = tool;
    modalToolsTags.appendChild(span);
  });

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    const id = card.getAttribute('data-project');
    openModal(id);
  });
});

if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
if (modalCloseActionBtn) modalCloseActionBtn.addEventListener('click', closeModal);

if (modal) {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal && modal.classList.contains('open')) {
    closeModal();
  }
});

// 2. COPIAR EMAIL AL PORTAPAPELES
const copyBtn = document.getElementById('copyEmailBtn');
const toast = document.getElementById('toastMessage');

if (copyBtn) {
  copyBtn.addEventListener('click', (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('lolagarciamarelli@gmail.com').then(() => {
      if (toast) {
        toast.classList.add('show');
        setTimeout(() => {
          toast.classList.remove('show');
        }, 2500);
      }
    });
  });
}

// 3. ARE.NA API LIVE MOODBOARD INTEGRATION
const moodboardGrid = document.getElementById('moodboardGrid');
const moodboardFeedback = document.getElementById('moodboardFeedback');
const channelForm = document.getElementById('channelForm');
const channelInput = document.getElementById('channelInput');
const arenaExternalLink = document.getElementById('arenaExternalLink');

async function fetchArenaChannel(slug) {
  if (!moodboardGrid) return;

  const cleanSlug = slug.trim().replace(/^https?:\/\/www\.are\.na\//, '').replace(/^channels\//, '').split('/')[0];
  if (arenaExternalLink) {
    arenaExternalLink.href = `https://www.are.na/channel/${cleanSlug}`;
  }

  moodboardGrid.innerHTML = `
    <div style="grid-column: 1 / -1; padding: 40px; text-align: center; color: #7A7270; font-size: 13px;">
      Sincronizando bloques de Are.na...
    </div>
  `;
  if (moodboardFeedback) moodboardFeedback.style.display = 'none';

  const targetApi = `https://api.are.na/v2/channels/${encodeURIComponent(cleanSlug)}?per=12`;
  const proxies = [
    `https://corsproxy.io/?${encodeURIComponent(targetApi)}`,
    `https://api.allorigins.win/raw?url=${encodeURIComponent(targetApi)}`
  ];

  let channelData = null;

  for (const proxyUrl of proxies) {
    try {
      const response = await fetch(proxyUrl);
      if (response.ok) {
        channelData = await response.json();
        break;
      }
    } catch (err) {
      // try next proxy
    }
  }

  if (channelData && channelData.contents) {
    renderArenaBlocks(channelData.contents.slice(0, 8), cleanSlug);
  } else {
    // Error handling & fallback visual
    if (moodboardFeedback) {
      moodboardFeedback.style.display = 'block';
      moodboardFeedback.textContent = 'Aviso: No se pudo conectar directamente con el canal de Are.na (posible restricción CORS o canal no público). Mostrando bloques de muestra.';
    }
    renderArenaBlocks([
      {
        id: 'fallback-1',
        title: 'Editorial Photography Styling',
        class: 'Image',
        image: { display: { url: '../public/assets/projects/mirenlas.png' } },
        source: { url: `https://www.are.na/channel/${cleanSlug}` }
      },
      {
        id: 'fallback-2',
        title: 'Minimalist Monogram & Soft Palettes',
        class: 'Image',
        image: { display: { url: '../public/assets/projects/mila_mia.png' } },
        source: { url: `https://www.are.na/channel/${cleanSlug}` }
      },
      {
        id: 'fallback-3',
        title: 'Spatial Rhythm & Movement',
        class: 'Media',
        image: { display: { url: '../public/assets/projects/experimental_video.png' } },
        source: { url: `https://www.are.na/channel/${cleanSlug}` }
      },
      {
        id: 'fallback-4',
        title: 'Packaging & Stop Motion Narratives',
        class: 'Image',
        image: { display: { url: '../public/assets/projects/social_media.png' } },
        source: { url: `https://www.are.na/channel/${cleanSlug}` }
      }
    ], cleanSlug);
  }
}

function renderArenaBlocks(contents) {
  if (!moodboardGrid) return;
  moodboardGrid.innerHTML = '';

  if (!contents || contents.length === 0) {
    moodboardGrid.innerHTML = `
      <div style="column-span: all; padding: 40px; text-align: center; color: #7A7270; font-size: 13px;">
        Este canal no contiene bloques.
      </div>
    `;
    return;
  }

  contents.forEach(block => {
    const imgUrl = block.image
      ? (block.image.display?.url || block.image.large?.url || block.image.original?.url || block.image.thumb?.url)
      : null;
    
    // Redirige al origen real del recurso (ej. Instagram o web de procedencia), o al bloque en Are.na
    const targetUrl = block.source?.url || `https://www.are.na/block/${block.id}`;
    const altText = block.title || block.generated_title || 'Inspiración visual';

    const card = document.createElement('a');
    card.className = 'moodboard-card';
    card.href = targetUrl;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    card.title = 'Abrir origen de la imagen';

    if (imgUrl) {
      card.innerHTML = `
        <img src="${imgUrl}" alt="${altText}" loading="lazy" />
        <div class="moodboard-overlay">
          <div class="moodboard-hover-icon">↗</div>
        </div>
      `;
    } else if (block.content) {
      card.innerHTML = `
        <div style="padding: 24px; font-style: italic; text-align: center; color: #4A4545; font-size: 13px;">
          “${block.content}”
        </div>
      `;
    } else {
      return;
    }

    moodboardGrid.appendChild(card);
  });
}

if (channelForm) {
  channelForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const slug = channelInput.value.trim();
    if (slug) {
      fetchArenaChannel(slug);
    }
  });
}

// Iniciar carga del canal de Are.na propio de Lola
fetchArenaChannel('inspo-z5eag9wxqag');
