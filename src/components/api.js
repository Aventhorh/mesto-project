export { checkResponse, getCards, addServerCard, delServerCard, getLikes, addLike, delLike, getUser, addServerUserData, addServerUserImage };
import { apiConfig } from "../utils/constants.js";

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

const getUser = () => {
    return fetch(`${apiConfig.baseUrl}/users/me`, {
        headers: apiConfig.headers
    })
        .then(checkResponse)
}

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

const delServerCard = (cardId) => {
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
        .then(checkResponse)
}

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