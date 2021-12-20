export { keyHandClose, openModalWindow, closeModalWindow };
import { formEdit, formProfile, formPosts, containerImage } from "../pages/index.js"
function openModalWindow(modal) {
    modal.classList.add('popup_opened')
}

function closeModalWindow(modal) {
    modal.classList.remove('popup_opened')
}

function keyHandClose(evt) {
    if (evt.key === 'Escape') {
        closeModalWindow(formPosts)
        closeModalWindow(formProfile)
        closeModalWindow(formEdit)
        closeModalWindow(containerImage)
    }
}