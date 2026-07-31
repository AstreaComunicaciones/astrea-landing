import iconRight from '../assets/images/icon-right.svg'

const iconAstrea = '/astrea-comunicaciones-logo-header.webp'

const navLinks = [
  { label: 'Servicios', href: '#por-que-astrea-section' },
  { label: 'Enfoque', href: '#enfoque' },
  { label: 'Equipo', href: '#equipo' },
]

export function Navbar() {
  const desktopLinks = navLinks
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

  const mobileLinks = navLinks
    .map(
      ({ label, href }, index) => `
        <a href="${href}" data-nav-close class="nav-mobile-link">
          <span class="nav-mobile-link-num">0${index + 1}</span>
          <span class="nav-mobile-link-text">${label}</span>
          <img src="${iconRight}" alt="" width="14" height="14" class="nav-mobile-link-arrow" aria-hidden="true" />
        </a>
      `
    )
    .join('')

  return `
    <div class="relative z-60 max-w-295 mx-auto page-x">
      <div class="nav-container flex items-center justify-between gap-4">
        <a href="/" class="shrink-0 flex items-center" aria-label="Astrea Comunicaciones">
          <img
            src="${iconAstrea}"
            alt="Astrea Comunicaciones"
            class="nav-logo mt-1 md:mt-0"
          />
        </a>

        <!-- Desktop nav + CTA -->
        <div class="hidden md:flex items-center gap-6 lg:gap-14">
          <nav class="flex items-center gap-6 lg:gap-9" aria-label="Principal">
            ${desktopLinks}
          </nav>

          <a
            href="#contact"
            class="btn-primary shrink-0 px-7 py-3.5 text-base font-medium tracking-[0.02em] hover:bg-primary/95 hover:shadow-md transition-all duration-250"
          >
            Agendar asesoría
            <img src="${iconRight}" alt="" width="14" height="14" class="btn-primary-icon size-3.5" aria-hidden="true" />
          </a>
        </div>

        <!-- Mobile menu toggle -->
        <button
          type="button"
          id="nav-toggle"
          class="nav-toggle md:hidden"
          aria-expanded="false"
          aria-controls="nav-mobile"
          aria-label="Abrir menú"
        >
          <span class="sr-only">Menú</span>
          <svg id="nav-icon-open" width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M3.5 7h17M3.5 12h17M3.5 17h17" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/>
          </svg>
          <svg id="nav-icon-close" class="hidden" width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile fullscreen menu -->
    <div id="nav-mobile" class="nav-mobile" aria-hidden="true">
      <div class="nav-mobile-inner">
        <div class="nav-mobile-content">
          <p class="nav-mobile-eyebrow">Navegación</p>
          <nav class="nav-mobile-links" aria-label="Principal móvil">
            ${mobileLinks}
          </nav>
        </div>

        <div class="nav-mobile-footer">
          <a href="#contact" data-nav-close class="btn-primary nav-mobile-cta">
            Agendar asesoría
            <img src="${iconRight}" alt="" width="14" height="14" class="btn-primary-icon size-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  `
}

export function initNavbar() {
  const header = document.getElementById('navbar')
  const toggle = document.getElementById('nav-toggle')
  const panel = document.getElementById('nav-mobile')
  const iconOpen = document.getElementById('nav-icon-open')
  const iconClose = document.getElementById('nav-icon-close')
  if (!toggle || !panel || !iconOpen || !iconClose) return

  if (panel.parentElement !== document.body) {
    document.body.appendChild(panel)
  }

  function setOpen(open) {
    toggle.setAttribute('aria-expanded', String(open))
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú')
    panel.setAttribute('aria-hidden', String(!open))
    panel.classList.toggle('is-open', open)
    document.body.classList.toggle('overflow-hidden', open)
    iconOpen.classList.toggle('hidden', open)
    iconClose.classList.toggle('hidden', !open)
  }

  toggle.addEventListener('click', () => {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true')
  })

  panel.querySelectorAll('[data-nav-close]').forEach((el) => {
    el.addEventListener('click', () => setOpen(false))
  })

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false)
    }
  })

  // Smooth in-page anchors without CSS scroll-behavior (keeps ScrollTrigger stable)
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href')
      if (!id || id === '#') return
      const target = document.querySelector(id)
      if (!target) return
      e.preventDefault()
      const headerOffset = header?.offsetHeight ?? 0
      const top = target.getBoundingClientRect().top + window.scrollY - headerOffset
      window.scrollTo({ top, behavior: 'smooth' })
    })
  })

  // Glassmorphic header after scrolling past Hero section
  if (!header) return

  function updateScrolled() {
    const hero = document.getElementById('hero')
    // Trigger when scrolled past Hero section (hero height minus header offset)
    const threshold = hero ? Math.max(hero.offsetHeight - 100, 300) : 300
    header.classList.toggle('is-scrolled', window.scrollY >= threshold)
  }

  updateScrolled()
  window.addEventListener('scroll', updateScrolled, { passive: true })
  window.addEventListener('resize', updateScrolled, { passive: true })
}
