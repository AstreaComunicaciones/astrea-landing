export function CardFeature({ title, description, icon, maxWidthIcon }) {
  return `
    <div class="bg-white rounded-lg px-6 pt-6 pb-10">
    <img class="mb-4 ${maxWidthIcon}" src="${icon}" alt="${title}" width="30" height="30">
      <h2 class="md:text-2xl font-semibold text-gray-dark mb-4">${title}</h2>
      <p class="text-gray-dark">${description}</p>
    </div>
  `;
}