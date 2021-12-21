export {formSubmitHandler, formSubmitUserImage, addPostsFormSubmit}
import { closeModalWindow } from "./modal.js"
import { addCard, createCard } from "./card.js"
import { addServerUserData, addServerUserImage, addServerCard } from "./api.js";
import { posts, buttonSubmitEdit, profileStatus, editprofileName, profileName, editprofileStatus, formEditImage, profileAvatar, buttonSubmitProfile, buttonSubmitPosts, postTitle, postImage, formProfile, formPosts, formEdit } from "../pages/index.js"

function formSubmitHandler(evt) {
    evt.preventDefault();
    addServerUserData(editprofileName.value, editprofileStatus.value)
        .then(userData => {
            profileName.textContent = userData.name;
            profileStatus.textContent = userData.about;
        })
    buttonSubmitProfile.textContent = "Сохранение...";
    buttonSubmitProfile.disabled = true;
    closeModalWindow(formProfile);
    buttonSubmitProfile.textContent = "Сохранить";
}

function formSubmitUserImage(evt) {
    evt.preventDefault();
    addServerUserImage(formEditImage.value)
        .then(userData => {
            profileAvatar.src = userData.avatar;
        })
    buttonSubmitEdit.textContent = "Сохранение...";
    buttonSubmitEdit.disabled = true;
    closeModalWindow(formEdit);
    buttonSubmitEdit.textContent = "Сохранить";
    formEdit.reset();
}

function addPostsFormSubmit(evt) {
    evt.preventDefault();
    addServerCard(postTitle.value, postImage.value)
        .then(card => {
            addCard(posts, createCard(card.name, card.link, card._id, card.owner._id, card.likes));
        })
    buttonSubmitPosts.textContent = "Сохранение...";
    buttonSubmitPosts.disabled = true;
    closeModalWindow(formPosts);
    buttonSubmitPosts.textContent = "Сохранить";
    formPosts.reset();
}