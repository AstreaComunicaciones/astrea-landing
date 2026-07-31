import heroImage from '../assets/images/hero-meeting.webp'
import iconRight from '../assets/images/icon-right.svg'

export function Hero() {
  return `
    <div class="relative isolate min-h-svh overflow-hidden">
      <img
        src="${heroImage}"
        alt=""
        class="absolute inset-0 size-full object-cover object-[55%_center] md:object-center"
        aria-hidden="true"
      />

      <!-- Mobile: vertical veil (readability). Desktop: horizontal (Figma) -->
      <div
        class="absolute inset-0 bg-linear-to-t from-black/82 via-black/55 to-black/35 md:bg-none"
        aria-hidden="true"
      ></div>
      <div
        class="absolute inset-0 hidden md:block bg-linear-to-r from-black/75 via-black/60 to-black/25"
        aria-hidden="true"
      ></div>

      <div class="relative z-10 flex min-h-svh items-end md:items-center">
        <div class="max-w-295 w-full mx-auto px-5 xl:px-0 pt-24 pb-12 md:pt-32 md:pb-20">
          <p
            id="hero-eyebrow"
            class="font-bold text-primary text-xs tracking-[0.08em] md:text-base md:tracking-[0.02em] mb-4 md:mb-5"
          >
            ESTRATEGIA  ·  IDENTIDAD  ·  REPUTACIÓN
          </p>

          <h1
            id="hero-title"
            class="font-display font-semibold text-beige text-[2.375rem] leading-[1.12] max-w-[12ch] md:text-6xl md:leading-[1.15] md:max-w-[20ch] lg:text-[72px] mb-5 md:mb-10"
          >
            Construimos confianza.
          </h1>

          <p
            id="hero-description"
            class="font-medium text-white/95 text-[0.9375rem] leading-[1.65] max-w-[34ch] md:text-lg md:leading-[1.6] md:max-w-145 mb-8 md:mb-10"
          >
            Diseñamos estrategias de comunicación que fortalecen la reputación, alinean a las organizaciones y generan relaciones duraderas con sus comunidades.
          </p>

          <div id="hero-actions" class="flex flex-col items-start gap-5 md:flex-row md:flex-wrap md:items-center md:gap-7">
            <a
              href="#contact"
              class="btn-primary px-7 py-3.5 text-sm md:text-base font-medium tracking-[0.02em] hover:bg-primary/95 hover:shadow-md transition-all duration-250"
            >
              Agendar asesoría
              <img src="${iconRight}" alt="" width="14" height="14" class="btn-primary-icon size-3.5" aria-hidden="true" />
            </a>

            <a
              href="#features"
              class="hidden md:inline-flex items-center gap-2 text-base font-medium tracking-[0.02em] text-beige hover:text-white transition-colors duration-200 group"
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
