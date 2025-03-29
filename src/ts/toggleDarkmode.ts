const toggleLightModeButton = document.querySelector('.toggle-btn') as HTMLButtonElement;

toggleLightModeButton.addEventListener('click', toggleLightMode);

export function toggleLightMode() {
  document.body.classList.toggle('darkmode');
  if (document.body.classList.contains('darkmode')) {
    toggleLightModeButton.innerHTML = 'Byt till mörkt läge';      
  } else {
    toggleLightModeButton.innerHTML = 'Byt till ljust läge';      
  }
}
export default toggleLightMode;
