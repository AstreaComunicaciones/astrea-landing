import manifiestoFullImage from '../assets/images/manifiesto-full-image-parallax.webp'
import {
  manifestoHeader,
  manifestoHeadline,
  manifestoLines,
  manifestoClosing,
  manifestoPillars,
  commitments,
} from '../data/manifiesto.js'

export function Manifiesto() {
  const linesHtml = manifestoLines
    .map(
      (line, i) => `
      <p class="${i === manifestoLines.length - 1 ? 'pt-2 text-white/85' : ''}">
        ${line}
      </p>
    `
    )
    .join('')

  const pillarsHtml = manifestoPillars
    .map(
      (pillar) => `
      <div class="py-5 md:py-6">
        <p class="font-display font-medium text-white/90 text-xl md:text-2xl leading-snug">
          ${pillar}
        </p>
      </div>
    `
    )
    .join('')

  const commitmentsHtml = commitments
    .map(
      (text, index) => `
      <li class="flex gap-5 items-baseline">
        <span class="font-display font-bold text-primary text-xl md:text-2xl shrink-0 leading-none">
          ${String(index + 1).padStart(2, '0')}
        </span>
        <p class="font-sans font-normal text-gray-dark text-base md:text-lg leading-snug">
          ${text}
        </p>
      </li>
    `
    )
    .join('')

  return `
    <div id="manifiesto-section">
      <!-- 1. Parte Manifiesto (Fondo Oscuro #3D3E42) -->
      <div class="bg-gray-dark text-white py-16 md:py-24 page-x">
        <div class="max-w-295 mx-auto">
          <p class="font-bold text-primary text-xs md:text-sm tracking-[0.12em] uppercase mb-4 md:mb-6">
            ${manifestoHeader}
          </p>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <!-- Columna Izquierda: Título y Frases -->
            <div class="lg:col-span-7">
              <h2 class="font-display font-semibold text-white text-3xl md:text-4xl lg:text-[40px] leading-[1.2] mb-8 max-w-[18ch]">
                ${manifestoHeadline}
              </h2>

              <div class="space-y-3 font-sans font-medium text-white/70 text-base md:text-lg leading-relaxed mb-8 md:mb-10">
                ${linesHtml}
              </div>

              <div class="border-l-2 border-primary pl-5 py-1">
                <p class="font-sans font-medium text-white/90 text-base md:text-lg leading-relaxed max-w-[42ch]">
                  ${manifestoClosing}
                </p>
              </div>
            </div>

            <!-- Columna Derecha: Lo que buscamos -->
            <div class="lg:col-span-5 lg:pt-2">
              <p class="font-bold text-primary text-xs md:text-sm tracking-[0.12em] uppercase mb-4">
                Lo que buscamos
              </p>
              <div class="border-t border-white/15 divide-y divide-white/15">
                ${pillarsHtml}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 2. Imagen en ancho completo con efecto Parallax -->
      <div id="parallax-section" class="relative w-full h-[380px] sm:h-[450px] md:h-[500px] overflow-hidden bg-gray-dark">
        <img
          id="parallax-image"
          src="${manifiestoFullImage}"
          alt="Astrea Comunicaciones"
          class="absolute inset-0 size-full object-cover scale-125 will-change-transform pointer-events-none"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-black/10 pointer-events-none" aria-hidden="true"></div>
      </div>

      <!-- 3. Parte Compromiso (Fondo Blanco) -->
      <div class="bg-white py-16 md:py-24 page-x">
        <div class="max-w-295 mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <!-- Columna Izquierda: Encabezado -->
            <div class="lg:col-span-5">
              <p class="font-bold text-primary text-xs md:text-sm tracking-[0.12em] uppercase mb-3">
                Nuestro compromiso
              </p>
              <h2 class="font-display font-semibold text-gray-dark text-3xl md:text-4xl lg:text-[40px] leading-[1.2] max-w-[16ch]">
                Cómo acompañamos a cada organización.
              </h2>
            </div>

            <!-- Columna Derecha: Lista numerada de compromisos -->
            <div class="lg:col-span-7">
              <ul class="space-y-6 md:space-y-7">
                ${commitmentsHtml}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}
