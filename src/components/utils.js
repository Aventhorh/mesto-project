export { handleProfileFormSubmit, handleAvatarFormSubmit, handlePostFormSubmit }
import { closeModalWindow } from "./modal.js"
import { addCard, createCard } from "./card.js"
import { addServerUserData, addServerUserImage, addServerCard } from "./api.js";
import * as constant from "../utils/constants.js";

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    constant.buttonSubmitProfile.textContent = "Сохранение...";
    addServerUserData(constant.editprofileName.value, constant.editprofileStatus.value)
        .then(userData => {
            constant.profileName.textContent = userData.name,
                constant.profileStatus.textContent = userData.about,
                constant.buttonSubmitProfile.disabled = true,
                closeModalWindow(constant.popupProfile)
        })
        .catch(err => console.log(err))
        .finally(() => {
            constant.buttonSubmitProfile.classList.add('form__save_disabled'),
                constant.buttonSubmitProfile.textContent = "Сохранить"
        })
}

function handleAvatarFormSubmit(evt) {
    evt.preventDefault();
    constant.buttonSubmitEdit.textContent = "Сохранение...";
    addServerUserImage(constant.formAvatarImage.value)
        .then(userData => {
            constant.profileAvatar.src = userData.avatar,
                closeModalWindow(constant.popupAvatar),
                constant.formAvatar.reset(),
                constant.buttonSubmitEdit.disabled = true
        })
        .catch(err => console.log(err))
        .finally(() => {
            constant.buttonSubmitEdit.classList.add('form__save_disabled'),
                constant.buttonSubmitEdit.textContent = "Сохранить"
        })
}

function handlePostFormSubmit(evt) {
    evt.preventDefault();
    constant.buttonSubmitPosts.textContent = "Сохранение...";
    addServerCard(constant.postTitle.value, constant.postImage.value)
        .then(card => {
            addCard(constant.posts, createCard(card.name, card.link, card._id, card.owner._id, card.likes)),
                closeModalWindow(constant.popupPosts),
                constant.formPosts.reset(),
                constant.buttonSubmitPosts.disabled = true
        })
        .catch(err => console.log(err))
        .finally(() => {
            constant.buttonSubmitPosts.classList.add('form__save_disabled'),
                constant.buttonSubmitPosts.textContent = "Сохранить"
        })
}