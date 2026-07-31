import mariaVictoria from '../assets/images/equipo-astrea-comunicaciones-maria-victoria.webp'
import marcelaPaz from '../assets/images/equipo-astrea-comunicaciones-marcela-paz.webp'
import franciscoManrique from '../assets/images/equipo-astrea-comunicaciones-francisco-manrique.webp'

const teamMembers = [
  {
    givenName: 'María Victoria',
    familyName: 'De La Fuente Del Campo',
    role: 'COFUNDADORA | DIRECTORA DE ESTRATEGIA',
    bio: [
      'Periodista, Cientista Político de la Universidad Gabriela Mistral y UX Writer del DuocUC, con más de 18 años de experiencia en comunicación estratégica.',
      'En Astrea Comunicaciones lidera el desarrollo de estrategias que fortalecen la confianza, la reputación y el vínculo entre las organizaciones y sus comunidades.',
    ],
    image: mariaVictoria,
  },
  {
    givenName: 'Marcela Paz',
    familyName: 'Chiappa Barrales',
    role: 'COFUNDADORA | DIRECTORA DE COMUNICACIONES',
    bio: [
      'Periodista de la Universidad Diego Portales, con experiencia en comunicación estratégica y gestión de proyectos.',
      'En Astrea Comunicaciones lidera la implementación de estrategias que fortalecen la confianza, consolidan el vínculo con las comunidades y contribuyen al posicionamiento institucional.',
    ],
    image: marcelaPaz,
  },
  {
    givenName: 'Francisco Alberto',
    familyName: 'Manríque Sánchez',
    role: 'DIRECTOR DE ADMINISTRACIÓN Y FINANZAS',
    bio: [
      'Ingeniero Comercial y Contador Auditor de la Universidad José María Vargas y Magíster en Derecho Tributario de la Universidad Santa María (Caracas, Venezuela), con título reconocido por la Universidad de Chile. Cuenta con una sólida trayectoria en gestión financiera, planificación tributaria y administración de organizaciones.',
      'En Astrea Comunicaciones lidera la gestión administrativa y financiera, aportando una visión estratégica que impulsa el crecimiento y la sostenibilidad de la consultora.',
    ],
    image: franciscoManrique,
  },
]

export function Equipo() {
  const membersHtml = teamMembers
    .map(
      (member) => `
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-0 items-start pt-10 md:pt-14 border-t border-[#E8E2DB] last:border-b last:pb-10 md:last:pb-16">
        <!-- Photo Column -->
        <div class="md:col-span-4 lg:col-span-4">
          <div class="relative overflow-hidden border-2 border-[#E8E2DB] aspect-4/5 w-full md:max-w-70 bg-gray-100 mx-auto md:mx-0">
            <img
              src="${member.image}"
              alt="${member.givenName} ${member.familyName}"
              class="absolute inset-0 size-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <!-- Details Column -->
        <div class="md:col-span-8 lg:col-span-7">
          <h3 class="font-display font-semibold text-gray-dark text-2xl md:text-3xl leading-snug mb-3">
            <span class="block md:inline">${member.givenName}</span><!--
            --><span class="hidden md:inline"> </span><!--
            --><span class="block md:inline">${member.familyName}</span>
          </h3>
          <p class="font-bold text-primary text-xs md:text-sm tracking-widest uppercase mt-2 mb-8">
            ${member.role}
          </p>
          <div class="font-sans font-normal text-gray-dark/85 text-base lg:text-lg leading-relaxed space-y-3 max-w-155">
            ${member.bio.map((p) => `<p class="mb-4 last:mb-0">${p}</p>`).join('')}
          </div>
        </div>
      </div>
    `
    )
    .join('')

  return `
    <section id="equipo" class="py-16 md:py-24 page-x">
      <div class="max-w-270 mx-auto">
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p class="font-bold text-primary text-xs md:text-sm tracking-[0.12em] uppercase mb-3">
            NUESTRO EQUIPO
          </p>
          <h2 class="font-display font-semibold text-gray-dark text-3xl md:text-4xl lg:text-[40px] leading-[1.2] mb-6 max-w-[24ch] mx-auto">
            Liderazgo y visión estratégica al servicio de tu marca.
          </h2>
          <p class="font-sans font-medium text-gray-primary text-base md:text-lg leading-relaxed max-w-xl mx-auto text-balance">
            Un equipo multidisciplinario enfocado en proteger y potenciar la reputación institucional
          </p>
        </div>

        <!-- Team Members List -->
        <div class="space-y-12 md:space-y-16">
          ${membersHtml}
        </div>
      </div>
    </section>
  `
}
