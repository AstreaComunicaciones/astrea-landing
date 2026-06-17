import iconRight from '../assets/images/icon-right.svg'
import iconAstrea from '../assets/images/icon-astrea-comunicaciones.webp'

export function Navbar() {
  return `
     <div class="max-w-[1180px] mx-auto">
      <div class="flex justify-between items-center py-5">
       <div>
        <a href="#"><img width="120" height="120" class="w-100 max-w-28" src="${iconAstrea}"></a>
        </div>
        <div>
        <a href="#contact" class="btn-primary px-8 py-4 text-sm font-semibold tracking-wider hover:bg-primary/95 hover:shadow-md transition-all duration-250">
          AGENDAR ASESORÍA
          <img src="${iconRight}" alt="" width="12" height="12" class="btn-primary-icon size-3" aria-hidden="true" />
        </a>
        </div>
      </div>
     </div>
   `;
}
