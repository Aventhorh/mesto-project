export { closeByEscape, openModalWindow, closeModalWindow };
function openModalWindow(modal) {
  modal.classList.add('popup_opened')
  document.addEventListener('keydown', closeByEscape);
}

function closeModalWindow(modal) {
  modal.classList.remove('popup_opened')
  document.removeEventListener('keydown', closeByEscape);
}

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened')
    closeModalWindow(openedPopup)
  }
}