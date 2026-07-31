import './style.css'

import { Hero } from './sections/hero.js'
import { Navbar, initNavbar } from './sections/navbar.js'
import { Features } from './sections/features.js'
import {
  ServicesCardsV1,
  ServicesCardsV2,
  ServicesCardsV3,
} from './sections/services-proposals.js'
import { Enfoque, initEnfoqueAccordion } from './sections/enfoque.js'
import { Manifiesto } from './sections/manifiesto.js'
import { Contact, initContactForm } from './sections/contact.js'
import { Footer } from './sections/footer.js'
import { initAnimations } from './js/animations.js'

document.getElementById('navbar').innerHTML = Navbar()
initNavbar()
document.getElementById('hero').innerHTML = Hero()
document.getElementById('features').innerHTML = Features()
document.getElementById('services-v1').innerHTML = ServicesCardsV1()
document.getElementById('services-v2').innerHTML = ServicesCardsV2()
document.getElementById('services-v3').innerHTML = ServicesCardsV3()
document.getElementById('enfoque').innerHTML = Enfoque()
initEnfoqueAccordion()
document.getElementById('manifiesto').innerHTML = Manifiesto()
document.getElementById('contact').innerHTML = Contact()
initContactForm()
document.getElementById('footer').innerHTML = Footer()

initAnimations()
