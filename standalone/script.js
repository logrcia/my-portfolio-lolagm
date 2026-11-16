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

// ==========================================================================
// 4. ABOUT DISCIPLINE GALLERY (DOODLE FRAMES COLLAGE)
// ==========================================================================
const aboutGalleryData = {
  art: {
    heading: 'Some of my work',
    items: [
      {
        title: 'Fluid Pink & Gold Bloom',
        src: '../public/assets/aistudio/arte1_8c8a4ea4.PNG',
        rotation: '-rotate-1',
        customFrame: true
      },
      {
        title: 'Peony & Ferns on Turquoise',
        src: '../public/assets/aistudio/arte2_8af23744.PNG',
        rotation: 'rotate-1',
        customFrame: true
      },
      {
        title: 'Pastel Botanicals',
        src: '../public/assets/aistudio/arte3_6b15eaf2.PNG',
        rotation: '-rotate-1',
        customFrame: true
      }
    ]
  },
  photography: {
    heading: 'Some of my work',
    items: [
      {
        title: 'Calm Horizon & White Sailboat',
        src: '../public/assets/aistudio/ph1_00f9ea6a.PNG',
        rotation: '-rotate-1',
        customFrame: true
      },
      {
        title: 'Sunlit Garden Companion',
        src: '../public/assets/aistudio/ph2_f3451e26.PNG',
        rotation: 'rotate-1',
        customFrame: true
      },
      {
        title: 'Quiet Bay & Wooden Boat',
        src: '../public/assets/aistudio/ph3_9fcd3d99.PNG',
        rotation: '-rotate-1',
        customFrame: true
      }
    ]
  },
  illustration: {
    heading: 'Some of my work',
    items: [
      {
        title: 'Character Study with Stars',
        src: '../public/assets/aistudio/illustration1_c2468892.PNG',
        rotation: '-rotate-1',
        customFrame: true
      },
      {
        title: 'Floral Bouquet Portrait',
        src: '../public/assets/aistudio/illustration2_c000b534.PNG',
        rotation: 'rotate-1',
        customFrame: true
      }
    ]
  }
};

let currentAboutCategory = null;
const galleryContainer = document.getElementById('aboutGalleryContainer');
const galleryHeading = document.getElementById('galleryHeading');
const galleryItemsContainer = document.getElementById('galleryItemsContainer');
const discBtns = document.querySelectorAll('.disc-btn');

function renderAboutGallery(catKey) {
  if (!galleryContainer || !galleryHeading || !galleryItemsContainer) return;
  const data = aboutGalleryData[catKey];
  if (!data) return;

  galleryHeading.textContent = data.heading;

  if (data.items.length >= 3) {
    galleryItemsContainer.classList.add('three-cols');
  } else {
    galleryItemsContainer.classList.remove('three-cols');
  }

  galleryItemsContainer.innerHTML = '';
  data.items.forEach(item => {
    const card = document.createElement('div');
    card.className = `gallery-framed-item ${item.rotation} ${item.customFrame ? 'custom-frame' : ''}`;
    card.innerHTML = `
      <div class="gallery-image-box">
        <img src="${item.src}" alt="${item.title}" loading="lazy" />
      </div>
    `;
    galleryItemsContainer.appendChild(card);
  });
}

discBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.getAttribute('data-category');
    if (currentAboutCategory === category) {
      // Toggle off
      currentAboutCategory = null;
      btn.classList.remove('active');
      const arrow = btn.querySelector('.disc-arrow');
      if (arrow) arrow.textContent = '↓';
      if (galleryContainer) galleryContainer.style.display = 'none';
    } else {
      // Toggle on / switch
      discBtns.forEach(b => {
        b.classList.remove('active');
        const arrow = b.querySelector('.disc-arrow');
        if (arrow) arrow.textContent = '↓';
      });

      currentAboutCategory = category;
      btn.classList.add('active');
      const arrow = btn.querySelector('.disc-arrow');
      if (arrow) arrow.textContent = '✕';

      renderAboutGallery(category);
      if (galleryContainer) galleryContainer.style.display = 'block';
    }
  });
});
