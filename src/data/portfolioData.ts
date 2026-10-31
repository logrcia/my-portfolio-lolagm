import { Project } from '../types.ts';

export const portfolioProjects: Project[] = [
  {
    id: 'mirenlas',
    title: '“Mírenlas”',
    subtitle: 'Editorial - Photography',
    category: 'Editorial - Photography',
    thumbnail: '/assets/projects/mirenlas.png',
    description: 'An intimate editorial photography project exploring contemporary portraiture, delicate beauty, and expressive makeup art direction.',
    fullOverview: '“Mírenlas” is a photographic editorial series focused on capturing spontaneous intimacy, raw gestures, and creative styling. The project required thorough pre-production, moodboard curation, lighting design, and meticulous post-processing to evoke a warm, nostalgic, and cinematic visual language.',
    role: 'Art Direction, Photography & Retouching',
    year: '2024',
    tools: ['Adobe Photoshop', 'Adobe Lightroom'],
    highlights: [
      'Concept development and visual narrative storyboard',
      'Location styling, color harmony, and natural diffused lighting',
      'High-end skin retouching and custom color grading'
    ],
    tags: ['Editorial', 'Photography', 'Art Direction', 'Styling']
  },
  {
    id: 'mila-mia',
    title: 'Mila Mia',
    subtitle: 'Branding',
    category: 'Branding',
    thumbnail: '/assets/projects/mila_mia.png',
    description: 'Comprehensive brand identity and visual language designed with an organic, gentle aesthetic and signature circular monogram.',
    fullOverview: 'Mila Mia is an identity design project built around warmth, authenticity, and visual softness. It encompasses the core logo mark—featuring an organic circular monogram paired with fluid, hand-drawn typography—along with primary and secondary color palettes, packaging collateral, and brand application guidelines.',
    role: 'Brand Identity Designer',
    year: '2024',
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma'],
    highlights: [
      'Custom typographic logo mark and monogram icon',
      'Warm dusty rose and terracotta color system',
      'Product packaging mockups and stationary design guidelines'
    ],
    tags: ['Branding', 'Visual Identity', 'Packaging', 'Typography']
  },
  {
    id: 'social-media-content',
    title: 'Social Media Content',
    subtitle: 'Video editing',
    category: 'Video editing',
    thumbnail: '/assets/projects/social_media.png',
    description: 'Dynamic short-form video content and packaging showcase tailored for high engagement across digital storytelling platforms.',
    fullOverview: 'This project focuses on social-first multimedia assets created to highlight brand packaging and consumer unboxing experiences. By blending tactile stop-motion elements, crisp pacing, and rhythmic sound design, the videos translate physical packaging into compelling digital moments.',
    role: 'Video Editor & Motion Designer',
    year: '2024',
    tools: ['Adobe Premiere', 'Adobe After Effects', 'Adobe Photoshop'],
    highlights: [
      'Rhythmic pacing synchronized with ambient audio cues',
      'Short-form vertical and square format adaptations',
      'Packaging reveal dynamics and animated accent stickers'
    ],
    tags: ['Video Editing', 'Social Media', 'Motion Design', 'Content Creation']
  },
  {
    id: 'experimental-art-video',
    title: 'Experimental Art Video',
    subtitle: 'Video - Video Editing',
    category: 'Video - Video Editing',
    thumbnail: '/assets/projects/experimental_video.png',
    description: 'An experimental video exploration surrounding the "KUITCA 86" exhibition at MALBA, reflecting on architectural space, memory, and rhythm.',
    fullOverview: 'Created in dialogue with the retrospective exhibition of renowned Argentine painter Guillermo Kuitca at MALBA (Museo de Arte Latinoamericano de Buenos Aires). The piece examines how museum visitors inhabit spatial art installations, leveraging atmospheric transitions, textural overlays, and contemplative editing tempos.',
    role: 'Director, Cinematographer & Editor',
    year: '2023',
    tools: ['Adobe Premiere', 'Adobe Photoshop'],
    highlights: [
      'On-site experimental filming inside MALBA gallery spaces',
      'Typographic title integration (“KUITCA 86”) in gallery perspective',
      'Atmospheric color balancing and immersive sound editing'
    ],
    tags: ['Experimental Video', 'Video Editing', 'Art Exhibition', 'MALBA']
  }
];

export const toolsList = [
  {
    id: 'ai',
    name: 'Adobe Illustrator',
    type: 'badge',
    badgeText: 'Ai',
    badgeClass: 'text-2xl font-bold tracking-tight'
  },
  {
    id: 'ps',
    name: 'Adobe Photoshop',
    type: 'badge',
    badgeText: 'Ps',
    badgeClass: 'text-2xl font-bold tracking-tight'
  },
  {
    id: 'pr',
    name: 'Adobe Premiere',
    type: 'badge',
    badgeText: 'Pr',
    badgeClass: 'text-2xl font-bold tracking-tight'
  },
  {
    id: 'figma',
    name: 'Figma',
    type: 'icon'
  }
];
