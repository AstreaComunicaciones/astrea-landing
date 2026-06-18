import logoAstrea from '../assets/images/icon-astrea-comunicaciones.webp'
import iconCheck from '../assets/images/check-submit.svg'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xbdevgzl'

export function Contact() {
  return `
    <div class="bg-primary-light py-28">
     <div class="max-w-[1180px] mx-auto">
       <div class="flex justify-between flex-col md:flex-row md:gap-10">
        <div class="px-8 md:pt-12">
          <img src="${logoAstrea}" alt="Astrea Comunicaciones" width="160" height="160" class="w-full max-w-40 mb-4">
          <h2 class="text-[40px] leading-[55px] font-bold text-gray-dark mb-8">¿Qué tienes en mente? <br> ¡Te ayudamos!</h2>
          <p class="text-gray-dark text-balance md:text-[20px]">Déjanos tus datos y te contactaremos pronto para entender tu negocio y sugerirte el siguiente paso.</p>
        </div>
        <div>
          <div class="bg-white py-12 px-12 rounded-lg w-[570px]">
            <form id="contact-form" action="${FORMSPREE_ENDPOINT}" method="POST">
              <input type="hidden" name="_subject" value="Nueva solicitud de contacto — Astrea Comunicaciones" />

              <p class="hidden" aria-hidden="true">
                <label>No llenar este campo: <input type="text" name="_gotcha" tabindex="-1" autocomplete="off" /></label>
              </p>

              <div class="mb-5 w-full">
                <label for="nombre" class="block text-gray-dark text-sm font-bold mb-2">Nombre</label>
                <input type="text" id="nombre" name="nombre" class="p-3 px-4 border border-primary rounded-lg w-full bg-beige" placeholder="Tu nombre" autocomplete="name" required>
              </div>
              <div class="mb-5 w-full">
                <label for="empresa" class="block text-gray-dark text-sm font-bold mb-2">Empresa</label>
                <input type="text" id="empresa" name="empresa" class="p-3 px-4 border border-primary rounded-lg w-full bg-beige" placeholder="Nombre de tu empresa" autocomplete="organization" required>
              </div>
              <div class="mb-5 w-full">
                <label for="telefono" class="block text-gray-dark text-sm font-bold mb-2">Número de teléfono</label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  class="p-3 px-4 border border-primary rounded-lg w-full bg-beige"
                  placeholder="912345678"
                  inputmode="numeric"
                  maxlength="9"
                  pattern="9[0-9]{8}"
                  title="Ingresa 9 dígitos. Debe comenzar con 9."
                  autocomplete="tel"
                  required
                >
              </div>
              <div class="mb-10 w-full">
                <label for="email" class="block text-gray-dark text-sm font-bold mb-2">Correo electrónico</label>
                <input type="email" id="email" name="email" class="p-3 px-4 border border-primary rounded-lg w-full bg-beige" placeholder="correo@empresa.com" autocomplete="email" required>
              </div>

              <p id="contact-form-error" class="hidden text-sm text-red-600 text-center mb-4" role="alert"></p>

              <button type="submit" id="contact-form-submit" disabled class="w-full btn-primary text-lg font-semibold py-4 px-8 justify-center hover:bg-primary/95 hover:shadow-lg transition-all duration-250">Enviar solicitud</button>
            </form>

            <div id="contact-form-success" class="hidden text-center py-8" role="status">
              <h3 class="text-2xl font-bold text-gray-dark mb-3">¡Gracias por contactarnos!</h3>
              <p class="text-gray-dark text-balance mb-6">Recibimos tu solicitud. Te contactaremos pronto.</p>
              <img src="${iconCheck}" alt="Check" width="80" height="80" class="mx-auto">
            </div>

            <p id="contact-form-privacy" class="text-gray-primary text-balance text-sm text-center mt-6">Al enviar este formulario, tus datos serán usados solo para contactarte sobre tu solicitud.</p>
          </div>
        </div>
       </div>
     </div>
    </div>
  `
}

export function initContactForm() {
  const form = document.getElementById('contact-form')
  if (!form) return

  const submitBtn = document.getElementById('contact-form-submit')
  const errorEl = document.getElementById('contact-form-error')
  const successEl = document.getElementById('contact-form-success')
  const privacyEl = document.getElementById('contact-form-privacy')
  const defaultBtnText = submitBtn.textContent

  const updateSubmitState = () => {
    submitBtn.disabled = !form.checkValidity()
  }

  const phoneInput = form.querySelector('#telefono')

  phoneInput.addEventListener('input', () => {
    phoneInput.value = phoneInput.value.replace(/\D/g, '').slice(0, 9)
    updateSubmitState()
  })

  form.addEventListener('input', updateSubmitState)
  updateSubmitState()

  form.addEventListener('submit', async (event) => {
    event.preventDefault()

    errorEl.classList.add('hidden')
    errorEl.textContent = ''
    submitBtn.disabled = true
    submitBtn.textContent = 'Enviando...'

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })

      if (!response.ok) {
        throw new Error('submit_failed')
      }

      form.classList.add('hidden')
      privacyEl.classList.add('hidden')
      successEl.classList.remove('hidden')
    } catch {
      errorEl.textContent = 'No pudimos enviar tu solicitud. Intenta de nuevo en unos minutos.'
      errorEl.classList.remove('hidden')
      submitBtn.textContent = defaultBtnText
      updateSubmitState()
    }
  })
}
