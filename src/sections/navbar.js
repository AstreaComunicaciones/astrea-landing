import iconRight from '../assets/images/icon-right.svg'

const iconAstrea = '/icon-astrea-comunicaciones.webp'

export function Navbar() {
  return `
     <div class="max-w-[1180px] mx-auto px-5 xl:px-0">
      <div class="flex justify-between items-center py-3 md:py-5">
       <div>
        <a href="/"><img width="120" height="120" class="w-100 max-w-20 md:max-w-28" src="${iconAstrea}"></a>
        </div>
        <div>
        <a href="#contact" class="btn-primary px-6 py-3 md:px-8 md:py-4 text-sm font-semibold tracking-wider hover:bg-primary/95 hover:shadow-md transition-all duration-250">
          AGENDAR ASESORÍA
          <img src="${iconRight}" alt="" width="12" height="12" class="btn-primary-icon size-3" aria-hidden="true" />
        </a>
        </div>
      </div>
     </div>
   `;
}
