const toggleLightModeButton = document.querySelector('.toggle-btn') as HTMLButtonElement;

toggleLightModeButton.addEventListener('click', toggleLightMode);

export function toggleLightMode() {
  document.body.classList.toggle('darkmode');
  if (document.body.classList.contains('darkmode')) {
    toggleLightModeButton.innerHTML = 'Switch to Dark Mode';      
  } else {
    toggleLightModeButton.innerHTML = 'Switch to Light Mode';      
  }
}

export default toggleLightMode;
