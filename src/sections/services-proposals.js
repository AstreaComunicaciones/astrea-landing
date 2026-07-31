import meetingImage from '../assets/images/hero-meeting.webp'
import portraitImage from '../assets/images/enfoque-portrait.webp'

/** Textos de ejemplo (reemplazar por copy final del cliente) */
const services = [
  {
    number: '01',
    title: 'Redacción & Editorial',
    description:
      'Creamos comunicados, boletines y piezas institucionales con rigor editorial. Cuidamos tono, claridad y coherencia para que cada mensaje refuerce la reputación de tu organización.',
    image: meetingImage,
  },
  {
    number: '02',
    title: 'Consultoría Estratégica',
    description:
      'Acompañamos a equipos directivos a ordenar su comunicación interna y externa. Diseñamos lineamientos y manuales de estilo que unifican la voz institucional.',
    image: portraitImage,
  },
  {
    number: '03',
    title: 'Estrategia Multimedia',
    description:
      'Desarrollamos recursos visuales, infografías y formatos digitales que simplifican lo complejo y conectan con familias, comunidades y audiencias clave.',
    image: meetingImage,
  },
]

/**
 * Cards Propuesta 1 — Imagen arriba + número + texto (estilo Figma actual, pulido para copy largo)
 */
export function ServicesCardsV1() {
  const cards = services
    .map(
      (s) => `
    <article class="bg-white rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(61,62,66,0.05)] flex flex-col h-full">
      <div class="relative aspect-[16/10] overflow-hidden">
        <img src="${s.image}" alt="" class="absolute inset-0 size-full object-cover" loading="lazy" aria-hidden="true" />
      </div>
      <div class="flex flex-col flex-1 p-6 md:p-7">
        <p class="font-display font-bold text-primary text-xl mb-2">${s.number}</p>
        <h3 class="font-display font-semibold text-gray-dark text-xl md:text-2xl mb-3 leading-snug">${s.title}</h3>
        <p class="font-medium text-gray-primary text-sm md:text-base leading-relaxed flex-1">${s.description}</p>
        <a href="#contact" class="inline-flex items-center gap-2 mt-6 text-primary font-semibold text-sm hover:gap-3 transition-all">
          Conocer más <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  `
    )
    .join('')

  return wrap('Propuesta 1 · Cards con imagen (copy largo)', cards, 'grid-cols-1 md:grid-cols-3')
}

/**
 * Cards Propuesta 2 — Sin foto grande: número tipográfico + texto (más editorial, menos stock)
 */
export function ServicesCardsV2() {
  const cards = services
    .map(
      (s) => `
    <article class="border-t border-primary/40 pt-6 h-full flex flex-col">
      <p class="font-display font-bold text-primary/80 text-4xl md:text-5xl leading-none mb-5">${s.number}</p>
      <h3 class="font-display font-semibold text-gray-dark text-xl md:text-2xl mb-4 leading-snug">${s.title}</h3>
      <p class="font-medium text-gray-primary text-sm md:text-base leading-relaxed flex-1">${s.description}</p>
      <a href="#contact" class="inline-flex items-center gap-2 mt-6 text-primary font-semibold text-sm hover:gap-3 transition-all">
        Agendar asesoría <span aria-hidden="true">→</span>
      </a>
    </article>
  `
    )
    .join('')

  return wrap('Propuesta 2 · Editorial tipográfica (sin fotos de card)', cards, 'grid-cols-1 md:grid-cols-3 gap-y-10')
}

/**
 * Cards Propuesta 3 — Lista horizontal: foto compacta izquierda + texto (mejor para párrafos largos)
 */
export function ServicesCardsV3() {
  const cards = services
    .map(
      (s) => `
    <article class="grid grid-cols-1 sm:grid-cols-12 gap-5 md:gap-8 items-stretch border-b border-black/5 pb-8 last:border-b-0 last:pb-0">
      <div class="sm:col-span-4 relative overflow-hidden rounded-xl aspect-[4/3] sm:aspect-auto sm:min-h-[160px]">
        <img src="${s.image}" alt="" class="absolute inset-0 size-full object-cover" loading="lazy" aria-hidden="true" />
      </div>
      <div class="sm:col-span-8 flex flex-col justify-center">
        <p class="font-display font-bold text-primary text-lg mb-1">${s.number}</p>
        <h3 class="font-display font-semibold text-gray-dark text-xl md:text-2xl mb-3">${s.title}</h3>
        <p class="font-medium text-gray-primary text-sm md:text-base leading-relaxed max-w-[52ch]">${s.description}</p>
      </div>
    </article>
  `
    )
    .join('')

  return wrap('Propuesta 3 · Lista con imagen lateral (ideal textos largos)', cards, 'grid-cols-1 gap-8')
}

function wrap(label, cards, gridClass) {
  return `
    <div class="bg-beige border-t border-black/5">
      <div class="max-w-295 mx-auto px-5 xl:px-0 py-12 md:py-16">
        <p class="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase text-primary mb-8">
          <span class="size-1.5 rounded-full bg-primary"></span>
          Comparativa servicios · ${label}
        </p>
        <div class="grid ${gridClass} gap-6 md:gap-8">
          ${cards}
        </div>
      </div>
    </div>
  `
}
