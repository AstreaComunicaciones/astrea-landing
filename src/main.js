import './style.css'

import { Hero } from './sections/hero.js'
import { Navbar } from './sections/navbar.js'

document.getElementById('navbar').innerHTML = Navbar()
document.getElementById('hero').innerHTML = Hero()