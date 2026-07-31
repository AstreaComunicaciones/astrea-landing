import enfoqueImage from '../assets/images/enfoque-portrait.webp'

const principles = [
  {
    number: '01',
    title: 'Claridad',
    description:
      'Reducimos la incertidumbre mediante una comunicación simple, comprensible y oportuna.',
  },
  {
    number: '02',
    title: 'Coherencia',
    description:
      'Alineamos mensajes, canales y equipos para construir una voz institucional consistente.',
  },
  {
    number: '03',
    title: 'Confianza',
    description:
      'Cada interacción es una oportunidad para fortalecer la credibilidad de una organización.',
  },
  {
    number: '04',
    title: 'Prevención',
    description:
      'Nos anticipamos a los riesgos para proteger la reputación antes de que aparezcan las crisis.',
  },
  {
    number: '05',
    title: 'Rigor',
    description:
      'Cada recomendación se basa en análisis, metodología y una comprensión profunda del contexto.',
  },
  {
    number: '06',
    title: 'Cercanía',
    description:
      'Trabajamos como aliados estratégicos, acompañando a nuestros clientes con compromiso y visión de largo plazo.',
  },
]

export function Enfoque() {
  const items = principles
    .map(
      (p, index) => `
    <div class="enfoque-item border-b border-black/5 last:border-b-0" data-open="${index === 0}">
      <button
        type="button"
        class="enfoque-accordion-btn w-full py-5 flex items-center justify-between gap-4 text-left group"
        data-index="${index}"
        aria-expanded="${index === 0 ? 'true' : 'false'}"
      >
        <div class="flex items-center gap-4 md:gap-5 min-w-0">
          <span class="font-display font-bold text-xl md:text-2xl text-primary tracking-[0.02em] shrink-0">
            ${p.number}
          </span>
          <h3 class="font-semibold text-gray-dark text-lg md:text-xl tracking-[0.01em] group-hover:text-primary transition-colors duration-200">
            ${p.title}
          </h3>
        </div>
        <span
          class="enfoque-icon shrink-0 text-primary text-2xl leading-none font-light transition-transform duration-300 ${
            index === 0 ? 'rotate-45' : ''
          }"
          aria-hidden="true"
        >+</span>
      </button>

      <div
        class="enfoque-accordion-content grid transition-[grid-template-rows] duration-300 ease-out ${
          index === 0 ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }"
      >
        <div class="overflow-hidden">
          <p class="font-medium text-gray-primary text-sm md:text-base leading-[1.6] pb-5 pl-10 md:pl-12 max-w-[540px]">
            ${p.description}
          </p>
        </div>
      </div>
    </div>
  `
    )
    .join('')

  return `
    <div class="bg-white">
      <div class="max-w-295 mx-auto px-5 xl:px-0 py-16 md:py-24">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
          <div class="lg:col-span-7">
            <p class="font-bold text-primary text-sm md:text-base tracking-[0.02em] mb-3 uppercase">
              Nuestro enfoque
            </p>
            <h2 class="font-display font-semibold text-gray-dark text-3xl md:text-[40px] leading-[1.2] mb-8 md:mb-10 max-w-[18ch]">
              Un método riguroso orientado a construir reputación.
            </h2>

            <div id="enfoque-accordion">
              ${items}
            </div>
          </div>

          <div class="lg:col-span-5">
            <div class="relative overflow-hidden rounded-2xl aspect-[4/5] lg:aspect-auto lg:h-full lg:min-h-[720px]">
              <img
                src="${enfoqueImage}"
                alt="Enfoque de trabajo Astrea"
                class="absolute inset-0 size-full object-cover"
                width="600"
                height="900"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}

export function initEnfoqueAccordion() {
  const accordion = document.getElementById('enfoque-accordion')
  if (!accordion) return

  const items = accordion.querySelectorAll('.enfoque-item')

  items.forEach((item) => {
    const btn = item.querySelector('.enfoque-accordion-btn')
    const content = item.querySelector('.enfoque-accordion-content')
    const icon = item.querySelector('.enfoque-icon')
    if (!btn || !content || !icon) return

    btn.addEventListener('click', () => {
      const isOpen = item.getAttribute('data-open') === 'true'

      items.forEach((other) => {
        other.setAttribute('data-open', 'false')
        other.querySelector('.enfoque-accordion-btn')?.setAttribute('aria-expanded', 'false')
        other.querySelector('.enfoque-accordion-content')?.classList.remove('grid-rows-[1fr]')
        other.querySelector('.enfoque-accordion-content')?.classList.add('grid-rows-[0fr]')
        other.querySelector('.enfoque-icon')?.classList.remove('rotate-45')
      })

      if (!isOpen) {
        item.setAttribute('data-open', 'true')
        btn.setAttribute('aria-expanded', 'true')
        content.classList.remove('grid-rows-[0fr]')
        content.classList.add('grid-rows-[1fr]')
        icon.classList.add('rotate-45')
      }
    })
  })
}
