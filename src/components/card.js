import * as constant from "../utils/constants.js";
import { delServerCard, delLike, addLike } from "./api.js"
import { openModalWindow } from "./modal.js"
import { userId } from "../pages/index.js"

export { addCard, createCard };

function createCard(title, image, cardId, ownerId, likes) {
    const postsTemplate = document.querySelector('#post-template').content;
    const postsEl = postsTemplate.querySelector('.posts__post').cloneNode(true);
    const postsElImage = postsEl.querySelector('.posts__image');
    const postsElLike = postsEl.querySelector('.posts__like');
    const postsElNumberLike = postsEl.querySelector('.posts__number');
    const postsElRubbish = postsEl.querySelector('.posts__rubbish');
    const postsElText = postsEl.querySelector('.posts__text');

    postsElText.textContent = title;
    postsElImage.src = image;
    postsElImage.alt = title;
    postsElRubbish.cardId = cardId;
    postsElNumberLike.textContent = likes.length;

    if (likes.find(like => like._id === userId)) {
        postsElLike.classList.add('posts__like_active');
    } else {
        postsElLike.classList.remove('posts__like_active');
    }

    postsElLike.addEventListener('click', function () {
        if (likes.find(like => like._id === userId)) {
            delLike(cardId)
                .then((cardData) => {
                    postsElNumberLike.textContent = cardData.likes.length,
                        postsElLike.classList.remove('posts__like_active'),
                        likes = cardData.likes
                })
                .catch(err => console.log(err))
        } else {
            addLike(cardId)
                .then((cardData) => {
                    postsElNumberLike.textContent = cardData.likes.length,
                        postsElLike.classList.add('posts__like_active'),
                        likes = cardData.likes
                })
                .catch(err => console.log(err))
        }
    })

    postsElImage.addEventListener('click', function (event) {
        openModalWindow(constant.popupBigPost)
        constant.targetImage.src = event.target.src;
        constant.contentText.textContent = event.target.alt;
        constant.targetImage.alt = constant.contentText.textContent;
    });

    if (userId === ownerId) {
        postsElRubbish.addEventListener('click', function (evt) {
            delServerCard(evt.target.cardId)
                .then(() => evt.target.parentNode.remove())
                .catch(err => console.log(err))
        });
    } else {
        postsEl.removeChild(postsElRubbish);
    }
    return postsEl;
}

function addCard(container, cardElement) {
    container.prepend(cardElement);
}
