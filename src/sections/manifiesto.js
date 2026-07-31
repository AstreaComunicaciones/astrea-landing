import meetingImage from '../assets/images/hero-meeting.webp'
import {
  manifestoLines,
  manifestoClosing,
  commitments,
  manifestoAnchor,
} from '../data/manifiesto.js'

/**
 * Manifiesto Astrea — cita ancla + banda oscura + compromiso
 */
export function Manifiesto() {
  const bodyLines = manifestoLines
    .slice(2, 7)
    .map(
      (line) => `
      <p class="font-medium text-white/70 text-base md:text-lg leading-relaxed">
        ${line}
      </p>
    `
    )
    .join('')

  const pillars = [
    'Generar comprensión',
    'Reducir incertidumbre',
    'Fortalecer relaciones',
  ]
    .map(
      (text) => `
      <div class="border-t border-white/15 py-6 md:py-7 first:border-t first:pt-6">
        <p class="font-display font-semibold text-beige text-xl md:text-2xl leading-snug">
          ${text}
        </p>
      </div>
    `
    )
    .join('')

  const items = commitments
    .map(
      (text, i) => `
      <li class="flex gap-4">
        <span class="font-display font-bold text-primary text-lg shrink-0 leading-none pt-0.5">
          ${String(i + 1).padStart(2, '0')}
        </span>
        <p class="font-medium text-gray-dark text-sm md:text-base leading-relaxed">
          ${text}
        </p>
      </li>
    `
    )
    .join('')

  return `
    <div class="border-t border-black/5">
      <div class="bg-gray-dark">
        <div class="max-w-295 mx-auto px-5 xl:px-0 py-16 md:py-24">
          <p class="font-bold text-primary text-sm md:text-base tracking-[0.02em] uppercase mb-5">
            Manifiesto Astrea
          </p>
          <h2 class="font-display font-semibold text-beige text-3xl md:text-5xl lg:text-[56px] leading-[1.12] max-w-[16ch] mb-10 md:mb-14">
            ${manifestoAnchor}
          </h2>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div class="lg:col-span-7 space-y-3 md:space-y-4">
              ${bodyLines}
              <p class="pt-6 font-medium text-beige/90 text-base md:text-lg leading-relaxed max-w-[40ch] border-l border-primary pl-5">
                ${manifestoClosing}
              </p>
            </div>

            <div class="lg:col-span-5 lg:pt-1">
              <p class="font-bold text-primary text-xs tracking-[0.14em] uppercase mb-2 md:mb-3">
                Lo que buscamos
              </p>
              <div>
                ${pillars}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="relative w-full aspect-[2.4/1] min-h-[220px] max-h-[420px] overflow-hidden">
        <img
          src="${meetingImage}"
          alt=""
          class="absolute inset-0 size-full object-cover"
          width="1600"
          height="670"
          loading="lazy"
          aria-hidden="true"
        />
        <div class="absolute inset-0 bg-black/20" aria-hidden="true"></div>
      </div>

      <div class="bg-white">
        <div class="max-w-295 mx-auto px-5 xl:px-0 py-14 md:py-20">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
            <div class="lg:col-span-4">
              <p class="font-bold text-primary text-sm tracking-[0.02em] uppercase mb-3">
                Nuestro compromiso
              </p>
              <h3 class="font-display font-semibold text-gray-dark text-2xl md:text-3xl leading-snug max-w-[16ch]">
                Cómo acompañamos a cada organización.
              </h3>
            </div>
            <ul class="lg:col-span-8 space-y-5">
              ${items}
            </ul>
          </div>
        </div>
      </div>
    </div>
  `
}
