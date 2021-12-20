export {formSubmitHandler, formSubmitUserImage, addPostsFormSubmit}
import { closeModalWindow } from "./modal.js"
import { addServerUserData, addServerUserImage, addServerCard } from "./api.js";
import { buttonSubmitEdit, profileStatus, editprofileName, editprofileStatus, formEditImage, profileAvatar, buttonSubmitProfile, buttonSubmitPosts, postTitle, postImage, formProfile, formPosts, formEdit } from "../pages/index.js"

function formSubmitHandler(evt) {
    evt.preventDefault();
    addServerUserData(editprofileName.value, editprofileStatus.value)
        .then(userData => {
            profileName.textContent = userData.name;
            profileStatus.textContent = userData.about;
        })
    buttonSubmitProfile.textContent = "Сохранение...";
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
    closeModalWindow(formEdit);
    buttonSubmitEdit.textContent = "Сохранить";
}

function addPostsFormSubmit(evt) {
    evt.preventDefault();
    addServerCard(postTitle.value, postImage.value)
        .then(card => {
            addCard(posts, createCard(card.name, card.link));
        })
    buttonSubmitPosts.textContent = "Сохранение...";
    closeModalWindow(formPosts);
    buttonSubmitPosts.textContent = "Сохранить";
    formPosts.reset();
}