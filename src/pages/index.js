import { openModalWindow, closeModalWindow } from "../components/modal.js"
import { enableValidation } from "../components/validate.js";
import { handleProfileFormSubmit, handleAvatarFormSubmit, handlePostFormSubmit } from "../components/utils.js";
import * as constant from "../utils/constants.js";
import * as api from "../components/api.js";
import { addCard, createCard } from "../components/card.js";
import './index.css';

export let userId;

enableValidation(constant.settings);

constant.profileEditContainer.addEventListener('click', function () {
    openModalWindow(constant.popupAvatar)
});

constant.closeBtnEdit.addEventListener('click', function () {
    closeModalWindow(constant.popupAvatar)
});

constant.editBtn.addEventListener('click', function () {
    openModalWindow(constant.popupProfile)
});

constant.closeBtnProfile.addEventListener('click', function () {
    closeModalWindow(constant.popupProfile)
});

constant.closeBigPost.addEventListener("click", function () {
    closeModalWindow(constant.popupBigPost)
});

constant.editBtnPosts.addEventListener('click', function () {
    openModalWindow(constant.popupPosts)
});

constant.closeBtnPosts.addEventListener('click', function () {
    closeModalWindow(constant.popupPosts)
});

constant.popupAvatar.addEventListener('click', function (event) {
    if (event.target === event.currentTarget) {
        closeModalWindow(constant.popupAvatar)
    }
});

constant.popupBigPost.addEventListener('click', function (event) {
    if (event.target === event.currentTarget) {
        closeModalWindow(constant.popupBigPost)
    }
});

constant.popupProfile.addEventListener('click', function (event) {
    if (event.target === event.currentTarget) {
        closeModalWindow(constant.popupProfile)
    }
});

constant.popupPosts.addEventListener('click', function (event) {
    if (event.target === event.currentTarget) {
        closeModalWindow(constant.popupPosts)
    }
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

fetch('https://mesto.nomoreparties.co/v1/plus-cohort-5/users/me', {
    headers: {
        authorization: '3be797f9-70dc-42fa-b0da-c26b30e14c85',
        'Content-Type': 'application/json; charset=UTF-8'
    }
})
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data);
    });

fetch('https://mesto.nomoreparties.co/v1/plus-cohort-5/cards', {
    headers: {
        authorization: '3be797f9-70dc-42fa-b0da-c26b30e14c85',
        'Content-Type': 'application/json; charset=UTF-8'
    }
})
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data);
    });