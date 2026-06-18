import './style.css'

import { Hero } from './sections/hero.js'
import { Navbar } from './sections/navbar.js'
import { Features } from './sections/features.js'
import { Contact, initContactForm } from './sections/contact.js'
import { Footer } from './sections/footer.js'
import { initAnimations } from './js/animations.js'

document.getElementById('navbar').innerHTML = Navbar()
document.getElementById('hero').innerHTML = Hero()
document.getElementById('features').innerHTML = Features()
document.getElementById('contact').innerHTML = Contact()
initContactForm()
document.getElementById('footer').innerHTML = Footer()

initAnimations()