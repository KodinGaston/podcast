const toggleLightModeButton = document.querySelector('.toggle-btn') as HTMLButtonElement;

toggleLightModeButton.addEventListener('click', toggleLightMode);

export function toggleLightMode() {
  document.body.classList.toggle('darkmode');

  if (document.body.classList.contains('darkmode')) {
    toggleLightModeButton.innerHTML = 'Byt till mörkt läge';
    toggleLightModeButton.style.backgroundColor = 'turquoise'; // Asegura que el color del botón se mantenga
  } else {
    toggleLightModeButton.innerHTML = 'Byt till ljust läge';
    toggleLightModeButton.style.backgroundColor = 'aqua'; // O el color que desees en modo claro
  }
}

export default toggleLightMode;