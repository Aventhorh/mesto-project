import { targetImage, contentText, containerImage } from "../pages/index.js"
import { delCard, getUser, delLike, addLike } from "./api.js"
import { openModalWindow } from "./modal.js"

export { addCard, createCard };

function createCard(title, image, cardId, ownerId, likes) {
    const postsTemplate = document.querySelector('#post-template').content;
    const postsEl = postsTemplate.querySelector('.posts__post').cloneNode(true);

    postsEl.querySelector('.posts__text').textContent = title;
    postsEl.querySelector('.posts__image').src = image;
    postsEl.querySelector('.posts__image').alt = title;
    postsEl.querySelector('.posts__rubbish').cardId = cardId;
    postsEl.querySelector('.posts__number').textContent = likes.length;

    likes.forEach(function (like) {
        getUser()
            .then(user => {
                if (user._id === like._id) {
                    postsEl.querySelector('.posts__like').classList.add('posts__like_active');
                } else {
                    postsEl.querySelector('.posts__like').classList.remove('posts__like_active');
                }
            })
    })

    postsEl.querySelector('.posts__like').addEventListener('click', function (evt) {
        if (likes.length === 0) {
            addLike(cardId);
            evt.target.classList.add('posts__like_active');
            postsEl.querySelector('.posts__number').textContent = likes.length + 1;
        } else {
            likes.forEach(function (like) {
                getUser()
                    .then(user => {
                        if (user._id === like._id) {
                            delLike(cardId);
                            evt.target.classList.remove('posts__like_active');
                            postsEl.querySelector('.posts__number').textContent = likes.length - 1;
                        } else {
                            addLike(cardId);
                            evt.target.classList.add('posts__like_active');
                            postsEl.querySelector('.posts__number').textContent = likes.length + 1;
                        }
                    })
            })
        }
    })

    postsEl.querySelector('.posts__image').addEventListener('click', function () {
        openModalWindow(containerImage)
        targetImage.src = this.src;
        contentText.textContent = this.alt;
        targetImage.alt = contentText.textContent;
    });

    getUser()
        .then(user => {
            if (user._id === ownerId) {
                postsEl.querySelector('.posts__rubbish').addEventListener('click', function (evt) {
                    delCard(evt.target.cardId)
                        .then(() => evt.target.parentNode.remove())
                });
            } else {
                postsEl.removeChild(postsEl.querySelector('.posts__rubbish'));
            }
        })

    return postsEl;
}

function addCard(container, cardElement) {
    container.prepend(cardElement);
}
