import heroImage from '../assets/images/hero-meeting.webp'
import iconRight from '../assets/images/icon-right.svg'

export function Hero() {
  return `
    <div class="relative isolate min-h-[100svh] overflow-hidden">
      <img
        src="${heroImage}"
        alt=""
        class="absolute inset-0 size-full object-cover"
        aria-hidden="true"
      />
      <div
        class="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/25"
        aria-hidden="true"
      ></div>

      <div class="relative z-10 flex min-h-[100svh] items-center">
        <div class="max-w-295 w-full mx-auto px-5 xl:px-0 pt-28 pb-16 md:pt-32 md:pb-20">
          <p
            id="hero-eyebrow"
            class="font-medium text-primary text-sm md:text-base tracking-[0.02em] mb-5 md:mb-6"
          >
            COMUNICACIÓN ESTRATÉGICA &amp; REPUTACIÓN
          </p>

          <h1
            id="hero-title"
            class="font-display font-semibold text-beige text-4xl md:text-5xl lg:text-[64px] leading-[1.15] max-w-[18ch] md:max-w-[16ch] mb-6 md:mb-8"
          >
            Claridad que transmite confianza.
          </h1>

          <p
            id="hero-description"
            class="font-medium text-white text-base md:text-lg leading-[1.6] max-w-[580px] mb-8 md:mb-10"
          >
            Acompañamos a empresas, colegios e instituciones a ordenar su mensaje, fortalecer su reputación y comunicar con coherencia, tanto a nivel interno como ante los medios.
          </p>

          <div id="hero-actions" class="flex flex-wrap items-center gap-5 md:gap-7">
            <a
              href="#contact"
              class="btn-primary px-6 py-3.5 text-sm md:text-base font-medium tracking-[0.02em] hover:bg-primary/95 hover:shadow-md transition-all duration-250"
            >
              Agendar asesoría
              <img src="${iconRight}" alt="" width="14" height="14" class="btn-primary-icon size-3.5" aria-hidden="true" />
            </a>

            <a
              href="#features"
              class="inline-flex items-center gap-2 text-sm md:text-base font-medium tracking-[0.02em] text-beige hover:text-white transition-colors duration-200 group"
            >
              Ver servicios
              <img src="${iconRight}" alt="" width="14" height="14" class="size-3.5 transition-transform duration-200 ease-out group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  `
}
