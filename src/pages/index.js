import { openModalWindow, closeModalWindow } from "../components/modal.js"
import { enableValidation } from "../components/validate.js";
import { handleProfileFormSubmit, handleAvatarFormSubmit, handlePostFormSubmit } from "../components/utils.js";
import * as constant from "../utils/constants.js";
import * as api from "../components/api.js";
import { addCard, createCard } from "../components/card.js";
import './index.css';

export let userId;

enableValidation(constant.settings);

constant.popups.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closeModalWindow(popup)
        }
        if (evt.target.classList.contains('popup__close')) {
            closeModalWindow(popup)
        }
    })
})

constant.profileEditContainer.addEventListener('click', function () {
    openModalWindow(constant.popupAvatar)
});

constant.editBtn.addEventListener('click', function () {
    openModalWindow(constant.popupProfile)
});

constant.editBtnPosts.addEventListener('click', function () {
    openModalWindow(constant.popupPosts)
});

Promise.all([api.getUser(), api.getCards()])
    .then(([userData, cards]) => {
        userId = userData._id;
        constant.editprofileName.value = userData.name;
        constant.editprofileStatus.value = userData.about;
        constant.profileName.textContent = userData.name;
        constant.profileStatus.textContent = userData.about;
        constant.profileAvatar.src = userData.avatar;
        cards.forEach(function (card) {
            addCard(constant.posts, createCard(card.name, card.link, card._id, card.owner._id, card.likes));
        });
    })
    .catch(err => console.log(err));

constant.formProfile.addEventListener('submit', handleProfileFormSubmit);

constant.formAvatar.addEventListener('submit', handleAvatarFormSubmit);

constant.formPosts.addEventListener('submit', handlePostFormSubmit);
