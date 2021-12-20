import { keyHandClose, openModalWindow, closeModalWindow } from "../components/modal.js"
import { enableValidation } from "../components/validate.js";
import { formSubmitHandler, formSubmitUserImage, addPostsFormSubmit } from "../components/utils.js";
import './index.css';

export { buttonSubmitEdit, formEditImage, buttonSubmitProfile, posts, formPosts, formProfile, formEdit, postTitle, postImage, targetImage, contentText, containerImage, buttonSubmitPosts, editprofileName, editprofileStatus, profileName, profileStatus, profileAvatar };

const addButtonTwo = new URL('../images/AddButton2.svg', import.meta.url);
const avatar = new URL('../images/Avataravatar.jpg', import.meta.url);
const closeIcon = new URL('../images/Closecon.svg', import.meta.url);
const closeIconPng = new URL('../images/closeIcon.png', import.meta.url);
const editButton = new URL('../images/EditButton.svg', import.meta.url);
const groupMusor = new URL('../images/GroupMusor.png', import.meta.url);
const logo = new URL('../images/logo.svg', import.meta.url);
const union = new URL('../images/Union.svg', import.meta.url);
const vector = new URL('../images/Vector.svg', import.meta.url);
const karachaevsk = new URL('../images/Karachaevsk.png', import.meta.url);
const vectorMusor = new URL('../images/VectorMusor.svg', import.meta.url);
const pen = new URL('../images/pen.png', import.meta.url);

[
    { name: 'addButtonTwo', link: addButtonTwo },
    { name: 'avatar', link: avatar },
    { name: 'closeIcon', link: closeIcon },
    { name: 'closeIconPng', link: closeIconPng },
    { name: 'editButton', link: editButton },
    { name: 'groupMusor', link: groupMusor },
    { name: 'karachaevsk', link: karachaevsk },
    { name: 'logo', link: logo },
    { name: 'union', link: union },
    { name: 'vector', link: vector },
    { name: 'vectorMusor', link: vectorMusor },
    { name: 'pen', link: pen }
]

const buttonSubmitPosts = document.querySelector('.form__type_save_posts');
const buttonSubmitProfile = document.querySelector('.form__type_save_profile');
const buttonSubmitEdit = document.querySelector('.form__type_save_edit');

const formEdit = document.forms.edit;
const formEditImage = document.forms.edit.userAvatar;
const profileEditContainer = document.querySelector('.profile__edit-container');
const editBtn = document.querySelector('.profile__edit');
const editBtnPosts = document.querySelector('.profile__button');
const profileAvatar = document.querySelector('.profile__avatar');
const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile__status');

const formProfile = document.forms.profile;
const editprofileName = document.forms.profile.userName;
const editprofileStatus = document.forms.profile.userStatus;

const allPopups = document.querySelector('.popup');
const popupProfile = document.querySelector('.popup__profile');
const popupEdit = document.querySelector('.popup__edit');
const closeBtnEdit = document.querySelector('.popup__close_edit');
const closeBtnProfile = document.querySelector('.popup__close_profile');
const closeBtnPosts = document.querySelector('.popup__close_posts');

const formPosts = document.forms.posts;
const postTitle = document.forms.posts.userTitle;
const postImage = document.forms.posts.userImage;
const posts = document.querySelector('.posts');
const closeBigPost = document.getElementById("postClose");

const containerImage = document.getElementById('big-post');
const targetImage = document.getElementById("bigImage");
const contentText = document.getElementById("big-post__text");
const popupBigPost = document.querySelector(".popup-big-post");

enableValidation();

profileEditContainer.addEventListener('click', function () {
    openModalWindow(formEdit)
});

closeBtnEdit.addEventListener('click', function () {
    closeModalWindow(formEdit)
});

editBtn.addEventListener('click', function () {
    openModalWindow(formProfile)
});

closeBtnProfile.addEventListener('click', function () {
    closeModalWindow(formProfile)
});

editBtnPosts.addEventListener('click', function () {
    openModalWindow(formPosts)
});

closeBtnPosts.addEventListener('click', function () {
    closeModalWindow(formPosts)
});

popupEdit.addEventListener('click', function () {
    closeModalWindow(formEdit)
});

popupBigPost.addEventListener('click', function () {
    closeModalWindow(containerImage)
});

popupProfile.addEventListener('click', function () {
    closeModalWindow(formProfile)
});

allPopups.addEventListener('click', function () {
    closeModalWindow(formPosts)
});
document.addEventListener('keydown', keyHandClose);

closeBigPost.addEventListener("click", function () {
    closeModalWindow(containerImage)
});

formProfile.addEventListener('submit', formSubmitHandler);

formEdit.addEventListener('submit', formSubmitUserImage);

formPosts.addEventListener('submit', addPostsFormSubmit);