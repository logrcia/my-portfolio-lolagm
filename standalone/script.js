// PORTFOLIO LOLA GARCÍA MARELLI - JAVASCRIPT PURO (VANILLA JS)

const projectsData = {
  'mirenlas': {
    title: '“Mírenlas”',
    subtitle: 'Editorial - Photography',
    category: 'Editorial - Photography',
    thumbnail: '../public/assets/projects/mirenlas.png',
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
    role: 'Director & Editor',
    year: '2023',
    overview: 'Exploración audiovisual experimental realizada en el marco de la muestra retrospectiva "KUITCA 86" en el MALBA (Museo de Arte Latinoamericano de Buenos Aires), reflexionando sobre el espacio arquitectónico, la memoria y el ritmo.',
    tools: ['Adobe Premiere', 'Adobe Photoshop']
  }
};

// Modal Elements
const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalCategory = document.getElementById('modalCategory');
const modalImage = document.getElementById('modalImage');
const modalRole = document.getElementById('modalRole');
const modalYear = document.getElementById('modalYear');
const modalOverview = document.getElementById('modalOverview');
const modalToolsTags = document.getElementById('modalToolsTags');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalCloseActionBtn = document.getElementById('modalCloseActionBtn');

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

// Bind project cards
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    const id = card.getAttribute('data-project');
    openModal(id);
  });
});

closeModalBtn.addEventListener('click', closeModal);
modalCloseActionBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('open')) {
    closeModal();
  }
});

// Copy Email functionality
const copyBtn = document.getElementById('copyEmailBtn');
const toast = document.getElementById('toastMessage');

if (copyBtn) {
  copyBtn.addEventListener('click', (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('lolagarciamarelli@gmail.com').then(() => {
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 2500);
    });
  });
}
