import './style.css'

import { Hero } from './sections/hero.js'
import { Navbar } from './sections/navbar.js'
import { Features } from './sections/features.js'

document.getElementById('navbar').innerHTML = Navbar()
document.getElementById('hero').innerHTML = Hero()
document.getElementById('features').innerHTML = Features()