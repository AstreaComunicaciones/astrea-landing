import iconRight from '../assets/images/icon-right.svg'

const iconAstrea = '/astrea-logo-navbar.webp'

const navLinks = [
  { label: 'Servicios', href: '#features' },
  { label: 'Enfoque', href: '#enfoque' },
  { label: 'Nosotros', href: '#nosotros' },
]

export function Navbar() {
  const links = navLinks
    .map(
      ({ label, href }) => `
        <a
          href="${href}"
          class="text-sm md:text-base font-medium tracking-[0.02em] text-beige hover:text-white transition-colors duration-200"
        >
          ${label}
        </a>
      `
    )
    .join('')

  return `
    <div class="max-w-295 mx-auto px-5 xl:px-0">
      <div class="flex items-center justify-between gap-4 py-5 md:py-10">
        <a href="/" class="shrink-0" aria-label="Astrea Comunicaciones">
          <img
            src="${iconAstrea}"
            alt="Astrea Comunicaciones"
            width="120"
            height="120"
            class="w-full max-w-32 md:max-w-44 mt-2 md:mt-0"
          />
        </a>

        <div class="flex items-center gap-6 lg:gap-10">
          <nav class="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Principal">
            ${links}
          </nav>

          <a
            href="#contact"
            class="btn-primary shrink-0 px-5 py-3 md:px-6 md:py-3.5 text-sm md:text-base font-medium tracking-[0.02em] hover:bg-primary/95 hover:shadow-md transition-all duration-250"
          >
            Agendar asesoría
            <img src="${iconRight}" alt="" width="14" height="14" class="btn-primary-icon size-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  `
}
