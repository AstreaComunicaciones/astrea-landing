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

function animateFeatureCards() {
  gsap.from('.feature-card', {
    opacity: 0,
    y: 36,
    duration: 0.75,
    stagger: 0.15,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '#features',
      start: 'top 85%',
      once: true,
    },
  })
}

function animateContactCopy() {
  gsap.from('#contact-copy > *', {
    opacity: 0,
    y: 28,
    duration: 0.7,
    stagger: 0.12,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '#contact-copy',
      start: 'top 85%',
      once: true,
    },
  })
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

  if (mobile) {
    animateContactTitleMobile()
  } else {
    animateHeroDesktop()
    animateFeatureCards()
    animateContactCopy()
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
