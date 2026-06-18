import iconWrite from '../assets/images/icon-write.svg'
import iconConsult from '../assets/images/icon-people.svg'
import iconMultimedia from '../assets/images/icon-multimedia.svg'
import { CardFeature } from '../components/cardFeature.js'

export function Features() {
  return `
    <div class="md:max-w-[500px] lg:max-w-[1020px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 md:pt-5 pb-10 md:pb-20 px-5 xl:px-0">
      ${CardFeature({ title: 'Redacción & Edición', description: 'Creamos comunicados y boletines institucionales de alta calidad. Realizamos correcciones exhaustivas para garantizar la coherencia de tu marca.', icon: iconWrite, maxWidthIcon: 'max-w-6' })}
      ${CardFeature({ title: 'Consultoría Estratégica', description: 'Ofrecemos asesoría para mejorar la comunicación interna y externa. Diseñamos manuales de estilo para unificar la voz de tu institución.', icon: iconConsult, maxWidthIcon: 'w-[40px] h-[25px]' })}
      ${CardFeature({ title: 'Estrategia Multimedia', description: 'Desarrollamos recursos visuales e infografías que simplifican la información.Creamos formatos digitales dinámicos para conectar con tu comunidad.', icon: iconMultimedia, maxWidthIcon: 'max-w-6' })}
    </div>
  `
}