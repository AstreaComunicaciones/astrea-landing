import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const MOBILE_MQ = '(max-width: 764px)'

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function isMobile() {
  return window.matchMedia(MOBILE_MQ).matches
}

function splitIntoWords(element) {
  const text = element.textContent.trim().replace(/\s+/g, ' ')
  element.textContent = ''
  element.setAttribute('aria-label', text)
  element.classList.add('inline-flex', 'flex-wrap', 'justify-start', 'gap-x-[0.28em]')

  text.split(' ').forEach((word) => {
    const span = document.createElement('span')
    span.textContent = word
    span.className = 'inline-block'
    span.setAttribute('aria-hidden', 'true')
    element.appendChild(span)
  })

  return element.querySelectorAll('span')
}

// 1. HERO ANIMATIONS
function animateHeroTitle(mobile) {
  const heroTitle = document.querySelector('#hero-title')
  if (!heroTitle) return

  const words = splitIntoWords(heroTitle)

  gsap.from(words, {
    opacity: 0,
    y: mobile ? 16 : 24,
    duration: mobile ? 0.35 : 0.45,
    stagger: mobile ? 0.06 : 0.08,
    ease: 'power2.out',
    delay: mobile ? 0 : 0.15,
  })
}

function animateHeroDesktop() {
  const heroEyebrow = document.querySelector('#hero-eyebrow')
  const heroDescription = document.querySelector('#hero-description')
  const heroActions = document.querySelector('#hero-actions')

  if (heroEyebrow) {
    gsap.from(heroEyebrow, {
      opacity: 0,
      y: 16,
      duration: 0.6,
      ease: 'power2.out',
    })
  }

  if (heroDescription) {
    gsap.from(heroDescription, {
      opacity: 0,
      y: 20,
      duration: 0.7,
      ease: 'power2.out',
      delay: 0.55,
    })
  }

  if (heroActions) {
    gsap.from(heroActions, {
      opacity: 0,
      y: 16,
      duration: 0.6,
      ease: 'power2.out',
      delay: 0.75,
    })
  }
}

// 2. POR QUÉ ASTREA SECTION
function animatePorQueAstrea() {
  const section = document.querySelector('#por-que-astrea-section')
  if (!section) return

  const headerEls = section.querySelectorAll('.text-center > *')
  if (headerEls.length) {
    gsap.from(headerEls, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 82%',
        once: true,
      },
    })
  }

  const cards = section.querySelectorAll('.grid > div')
  if (cards.length) {
    gsap.from(cards, {
      opacity: 0,
      y: 40,
      duration: 0.85,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: section.querySelector('.grid'),
        start: 'top 85%',
        once: true,
      },
    })

    const cardImages = section.querySelectorAll('.grid img')
    cardImages.forEach((img) => {
      gsap.from(img, {
        scale: 1.1,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: img,
          start: 'top 90%',
          once: true,
        },
      })
    })
  }
}

// 3. NUESTRO ENFOQUE SECTION
function animateEnfoque() {
  const section = document.querySelector('#enfoque')
  if (!section) return

  const headerEls = section.querySelectorAll('.lg\\:col-span-7 > p, .lg\\:col-span-7 > h2')
  if (headerEls.length) {
    gsap.from(headerEls, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        once: true,
      },
    })
  }

  const accordionItems = section.querySelectorAll('.enfoque-item')
  if (accordionItems.length) {
    gsap.from(accordionItems, {
      opacity: 0,
      x: -25,
      duration: 0.7,
      stagger: 0.08,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#enfoque-accordion',
        start: 'top 85%',
        once: true,
      },
    })
  }

  const stackedImages = section.querySelectorAll('.lg\\:col-span-5 > div')
  if (stackedImages.length >= 2) {
    gsap.from(stackedImages[0], {
      opacity: 0,
      scale: 0.95,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: stackedImages[0],
        start: 'top 85%',
        once: true,
      },
    })

    gsap.from(stackedImages[1], {
      opacity: 0,
      y: 30,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: stackedImages[1],
        start: 'top 90%',
        once: true,
      },
    })
  }
}

// 4. MANIFIESTO & COMPROMISO SECTION
function animateManifiesto() {
  const section = document.querySelector('#manifiesto-section')
  if (!section) return

  // Dark Manifiesto Block
  const darkBlock = section.querySelector('.bg-gray-dark')
  if (darkBlock) {
    const leftHeader = darkBlock.querySelectorAll('.lg\\:col-span-7 > p, .lg\\:col-span-7 > h2')
    if (leftHeader.length) {
      gsap.from(leftHeader, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: darkBlock,
          start: 'top 80%',
          once: true,
        },
      })
    }

    const lines = darkBlock.querySelectorAll('.space-y-3 > p')
    if (lines.length) {
      gsap.from(lines, {
        opacity: 0,
        y: 20,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: darkBlock.querySelector('.space-y-3'),
          start: 'top 85%',
          once: true,
        },
      })
    }

    const quoteBox = darkBlock.querySelector('.border-l-2')
    if (quoteBox) {
      gsap.from(quoteBox, {
        opacity: 0,
        x: -20,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: quoteBox,
          start: 'top 88%',
          once: true,
        },
      })
    }

    const pillars = darkBlock.querySelectorAll('.divide-y > div')
    if (pillars.length) {
      gsap.from(pillars, {
        opacity: 0,
        x: 25,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: darkBlock.querySelector('.divide-y'),
          start: 'top 85%',
          once: true,
        },
      })
    }
  }

  // White Commitment Block
  const whiteBlock = section.querySelector('.bg-white')
  if (whiteBlock) {
    const leftHeader = whiteBlock.querySelectorAll('.lg\\:col-span-5 > *')
    if (leftHeader.length) {
      gsap.from(leftHeader, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: whiteBlock,
          start: 'top 80%',
          once: true,
        },
      })
    }

    const commitments = whiteBlock.querySelectorAll('ul > li')
    if (commitments.length) {
      gsap.from(commitments, {
        opacity: 0,
        x: 25,
        duration: 0.75,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: whiteBlock.querySelector('ul'),
          start: 'top 85%',
          once: true,
        },
      })
    }
  }
}

// 5. PARALLAX IMAGE
function animateParallax() {
  const container = document.querySelector('#parallax-section')
  const image = document.querySelector('#parallax-image')
  if (!container || !image) return

  gsap.fromTo(
    image,
    { yPercent: -12 },
    {
      yPercent: 12,
      ease: 'none',
      force3D: true,
      scrollTrigger: {
        trigger: container,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.4,
        invalidateOnRefresh: true,
      },
    }
  )

  const refresh = () => ScrollTrigger.refresh()
  if (image.complete) {
    refresh()
  } else {
    image.addEventListener('load', refresh, { once: true })
  }
}

// 6. NUESTRO EQUIPO SECTION
function animateEquipo() {
  const section = document.querySelector('#equipo')
  if (!section) return

  const headerEls = section.querySelectorAll('.text-center > *')
  if (headerEls.length) {
    gsap.from(headerEls, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        once: true,
      },
    })
  }

  const memberRows = section.querySelectorAll('.space-y-12 > div')
  memberRows.forEach((row) => {
    const photo = row.querySelector('.max-w-\\[270px\\]')
    const details = row.querySelectorAll('.lg\\:col-span-7 > *')

    if (photo) {
      gsap.from(photo, {
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: row,
          start: 'top 82%',
          once: true,
        },
      })
    }

    if (details.length) {
      gsap.from(details, {
        opacity: 0,
        y: 20,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: row,
          start: 'top 82%',
          once: true,
        },
      })
    }
  })
}

// 7. CONTACTO SECTION — motion only, no design additions
function animateContact() {
  const section = document.querySelector('#contact')
  if (!section) return

  const logo = section.querySelector('#contact-copy img')
  const title = section.querySelector('#contact-copy h2')
  const description = section.querySelector('#contact-copy p')
  const formCard = section.querySelector('#contact-form-card')
  const fields = section.querySelectorAll('.contact-field')
  const privacy = section.querySelector('#contact-form-privacy')

  const tl = gsap.timeline({
    defaults: { ease: 'power3.out' },
    scrollTrigger: {
      trigger: section,
      start: 'top 78%',
      once: true,
    },
  })

  if (logo) {
    tl.from(logo, { opacity: 0, y: 18, duration: 0.55 }, 0)
  }

  if (title) {
    tl.from(title, { opacity: 0, y: 28, duration: 0.7 }, 0.12)
  }

  if (description) {
    tl.from(description, { opacity: 0, y: 18, duration: 0.55 }, 0.28)
  }

  if (formCard) {
    // Whole card (includes button) — avoid opacity on disabled CTA
    tl.from(
      formCard,
      { opacity: 0, x: 48, duration: 0.85, ease: 'power3.out' },
      0.2
    )
  }

  if (fields.length) {
    tl.from(
      fields,
      { opacity: 0, y: 16, duration: 0.45, stagger: 0.07, ease: 'power2.out' },
      0.45
    )
  }

  if (privacy) {
    tl.from(privacy, { opacity: 0, duration: 0.4 }, 0.7)
  }
}

function animateContactTitleMobile() {
  const contactTitle = document.querySelector('#contact-copy h2')
  if (!contactTitle) return

  gsap.from(contactTitle, {
    opacity: 0,
    y: 20,
    duration: 0.5,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '#contact-copy',
      start: 'top 90%',
      once: true,
    },
  })
}

export function initAnimations() {
  if (prefersReducedMotion()) return

  const mobile = isMobile()

  animateHeroTitle(mobile)
  animateParallax()

  if (mobile) {
    animateContactTitleMobile()
  } else {
    animateHeroDesktop()
    animatePorQueAstrea()
    animateEnfoque()
    animateManifiesto()
    animateEquipo()
    animateContact()
  }
}

export function playFormSuccessAnimation() {
  const check = document.getElementById('contact-form-check')
  if (!check) return

  if (prefersReducedMotion()) return

  const mobile = isMobile()

  gsap.fromTo(
    check,
    { opacity: 0, scale: mobile ? 0.7 : 0.4 },
    {
      opacity: 1,
      scale: 1,
      duration: mobile ? 0.35 : 0.45,
      ease: 'back.out(2)',
      onComplete: () => {
        if (mobile) return

        gsap.to(check, {
          y: -14,
          duration: 0.3,
          ease: 'power2.out',
          yoyo: true,
          repeat: 1,
        })
      },
    }
  )
}
