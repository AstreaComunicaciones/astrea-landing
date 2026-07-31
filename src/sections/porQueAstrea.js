import iconArrowGold from '../assets/images/icon-arrow-gold.svg'
import queHacemosImage from '../assets/images/porque-astrea-image-que-hacemos.webp'
import comoLoHacemosImage from '../assets/images/porque-astrea-image-como-lo-hacemos.webp'
import nuestroCompromisoImage from '../assets/images/porque-astrea-image-nuestro-compromiso.webp'

export function PorQueAstrea() {
  const cards = [
    {
      image: queHacemosImage,
      title: '¿Qué hacemos?',
      description:
        'Diseñamos estrategias de comunicación que fortalecen la confianza y la reputación.',
      href: '#features',
    },
    {
      image: comoLoHacemosImage,
      title: '¿Cómo lo hacemos?',
      description:
        'Analizamos, diseñamos e implementamos sistemas de comunicación claros, coherentes y sostenibles.',
      href: '#enfoque',
    },
    {
      image: nuestroCompromisoImage,
      title: 'Nuestro Propósito',
      description:
        'Ayudar a las organizaciones a construir confianza a través de una comunicación estratégica.',
      href: '#manifiesto',
    },
  ]

  const cardsHtml = cards
    .map(
      ({ image, title, description, href }) => `
        <div class="bg-white rounded-lg overflow-hidden shadow-[0px_4px_20px_0px_rgba(61,62,66,0.05)] border border-black/5 flex flex-col h-full group hover:shadow-md transition-shadow duration-300">
          <div class="relative h-60 w-full overflow-hidden bg-gray-100">
            <img
              src="${image}"
              alt="${title}"
              class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div class="p-6 md:p-8 flex flex-col justify-between flex-1">
            <div>
              <h3 class="font-display font-semibold text-gray-dark text-xl md:text-2xl leading-snug">
                ${title}
              </h3>
              <p class="font-sans font-normal text-gray-dark/85 text-sm md:text-base leading-relaxed mt-3">
                ${description}
              </p>
            </div>
            <div class="pt-6 mt-auto">
              <a
                href="${href}"
                class="inline-flex items-center gap-2 font-semibold text-primary text-sm md:text-base tracking-[0.02em] hover:text-primary/80 transition-colors group/link"
              >
                Conocer más
                <img
                  src="${iconArrowGold}"
                  alt=""
                  width="12"
                  height="12"
                  class="size-3 transition-transform duration-200 ease-out group-hover/link:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>
      `
    )
    .join('')

  return `
    <section id="por-que-astrea" class="py-16 md:py-24 px-5 xl:px-0">
      <div class="max-w-295 mx-auto">
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p class="font-bold text-primary text-xs md:text-sm tracking-[0.12em] uppercase mb-3">
            ¿Por qué existe Astrea?
          </p>
          <h2 class="font-display font-semibold text-gray-dark text-3xl md:text-4xl lg:text-[40px] leading-[1.2] mb-6 max-w-[24ch] mx-auto">
            La confianza se construye en cada decisión, cada mensaje y cada interacción.
          </h2>
          <div class="font-medium text-gray-primary text-base md:text-lg leading-relaxed space-y-3 max-w-2xl mx-auto">
            <p>
              En Astrea Comunicaciones ayudamos a colegios, empresas e instituciones a transformar la comunicación en un activo estratégico que fortalece la reputación, genera confianza y crea relaciones duraderas.
            </p>
            <p class="font-medium text-gray-primary text-base md:text-lg leading-relaxed">
              Porque comunicar con claridad también es una forma de liderar.
            </p>
          </div>
        </div>

        <!-- 3 Cards Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 md:max-w-96 md:mx-auto lg:max-w-none lg:mx-0">
          ${cardsHtml}
        </div>
      </div>
    </section>
  `
}
