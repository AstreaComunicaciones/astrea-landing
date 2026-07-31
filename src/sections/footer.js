import iconFacebook from '../assets/images/icon-facebook.svg'
import iconInstagram from '../assets/images/icon-instagram.svg'
import iconLinkedin from '../assets/images/icon-linkedin.svg'


export function Footer() {
  return `
    <footer class="page-x">
      <div class="max-w-295 mx-auto flex flex-col-reverse gap-8 md:gap-0 md:flex-row justify-between items-center pb-8">
        <p class="text-xs md:text-sm text-gray-dark">© ${new Date().getFullYear()} Astrea. Todos los derechos reservados.</p>
        <div class="flex items-center gap-4 hidden">
          <a href="#" class="text-sm text-gray-dark"><img src="${iconFacebook}" alt="Facebook" width="20" height="20"></a>
          <a href="#" class="text-sm text-gray-dark"><img src="${iconInstagram}" alt="Instagram" width="20" height="20"></a>
          <a href="#" class="text-sm text-gray-dark"><img src="${iconLinkedin}" alt="Linkedin" width="20" height="20"></a>
        </div>
      </div>
    </footer>
  `;
}