import './style.css'

import { Navbar, initNavbar } from './sections/navbar.js'
import { Hero } from './sections/hero.js'
import { PorQueAstrea } from './sections/porQueAstrea.js'
import { Enfoque, initEnfoqueAccordion } from './sections/enfoque.js'
import { Manifiesto } from './sections/manifiesto.js'
import { Contact, initContactForm } from './sections/contact.js'
import { Footer } from './sections/footer.js'
import { initAnimations } from './js/animations.js'

document.getElementById('navbar').innerHTML = Navbar()
initNavbar()

document.getElementById('hero').innerHTML = Hero()
document.getElementById('por-que-astrea-section').innerHTML = PorQueAstrea()

const enfoqueEl = document.getElementById('enfoque')
if (enfoqueEl) {
  enfoqueEl.innerHTML = Enfoque()
  initEnfoqueAccordion()
}

const manifiestoEl = document.getElementById('manifiesto')
if (manifiestoEl) {
  manifiestoEl.innerHTML = Manifiesto()
}

const contactEl = document.getElementById('contact')
if (contactEl) {
  contactEl.innerHTML = Contact()
  initContactForm()
}

const footerEl = document.getElementById('footer')
if (footerEl) {
  footerEl.innerHTML = Footer()
}

initAnimations()
