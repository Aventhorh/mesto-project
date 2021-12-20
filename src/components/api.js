export { apiConfig, checkResponse, getCards, loadCards, addServerCard, delCard, getLikes, addLike, delLike, getUser, loadProfile, addServerUserData, addServerUserImage };
import { addCard, createCard } from "./card.js"
import { posts, editprofileName, editprofileStatus, profileName, profileStatus, profileAvatar } from "../pages/index.js"

const apiConfig = {
    baseUrl: 'https://mesto.nomoreparties.co/v1/plus-cohort-5',
    headers: {
        authorization: '3be797f9-70dc-42fa-b0da-c26b30e14c85',
        'Content-Type': 'application/json'
    }
}

const checkResponse = (response) => {
    if (response.ok) {
        return response.json()
    }
    return Promise.reject(`Ошибка: ${response.status}`)
}

const getCards = () => {
    return fetch(`${apiConfig.baseUrl}/cards`, {
        headers: apiConfig.headers
    })
        .then(checkResponse)
}

const loadCards = () => {
    getCards()
        .then(cards => {
            cards.forEach(function (card) {
                addCard(posts, createCard(card.name, card.link, card._id, card.owner._id, card.likes));
            });
        })
};

loadCards();

const addServerCard = (nameCard, linkCard) => {
    return fetch(`${apiConfig.baseUrl}/cards`, {
        method: 'POST',
        headers: apiConfig.headers,
        body: JSON.stringify({
            name: nameCard,
            link: linkCard,
        })
    })
        .then(checkResponse)
}

const delCard = (cardId) => {
    return fetch(`${apiConfig.baseUrl}/cards/${cardId}`, {
        method: 'DELETE',
        headers: apiConfig.headers
    })
}

const getLikes = (cardId) => {
    return fetch(`${apiConfig.baseUrl}/cards/likes/${cardId}`, {
        headers: apiConfig.headers
    })
        .then(checkResponse)
}

const addLike = (cardId) => {
    return fetch(`${apiConfig.baseUrl}/cards/likes/${cardId}`, {
        method: 'PUT',
        headers: apiConfig.headers,
    })
        .then(checkResponse)
}
const delLike = (cardId) => {
    return fetch(`${apiConfig.baseUrl}/cards/likes/${cardId}`, {
        method: 'DELETE',
        headers: apiConfig.headers,
    })
}

const getUser = () => {
    return fetch(`${apiConfig.baseUrl}/users/me`, {
        headers: apiConfig.headers
    })
        .then(checkResponse)
}

const loadProfile = () => {
    getUser()
        .then(userData => {
            editprofileName.value = userData.name;
            editprofileStatus.value = userData.about;
            profileName.textContent = userData.name;
            profileStatus.textContent = userData.about;
            profileAvatar.src = userData.avatar;
        })
};

loadProfile();

const addServerUserData = (userName, userAbout) => {
    return fetch(`${apiConfig.baseUrl}/users/me`, {
        method: 'PATCH',
        headers: apiConfig.headers,
        body: JSON.stringify({
            name: userName,
            about: userAbout
        })
    })
        .then(checkResponse)
}

const addServerUserImage = (userImage) => {
    return fetch(`${apiConfig.baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: apiConfig.headers,
        body: JSON.stringify({
            avatar: userImage
        })
    })
        .then(checkResponse)
}

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