const editBtn = document.querySelector('.profile__edit');
const editBtnPosts = document.querySelector('.profile__button');
const popup = document.querySelector('.popup');
const form = document.querySelector('.form');
const closeBtnProfile = document.querySelector('.form__close_profile');
const formPosts = document.querySelector('.form-posts');
const closeBtnPosts = document.querySelector('.form__close_posts');

function openModalWindow(modalWindow, addClass) {
  modalWindow.classList.add(addClass)
}

function closeModalWindow(modalWindow, remClass) {
  modalWindow.classList.remove(remClass)
}

/*______ открыть/закрыть профиль ______*//*______ открыть/закрыть профиль ______*//*______ открыть/закрыть профиль ______*//*______ открыть/закрыть профиль ______*/

function openClickProfile() {
  openModalWindow(form, 'form_opened')
  openModalWindow(popup, 'popup_opened')
}

function closeClickProfile() {
  closeModalWindow(form, 'form_opened')
  closeModalWindow(popup, 'popup_opened')
}
editBtn.addEventListener('click', openClickProfile);
closeBtnProfile.addEventListener('click', closeClickProfile);

/*______ открыть/закрыть посты ______*//*______ открыть/закрыть посты ______*//*______ открыть/закрыть посты ______*//*______ открыть/закрыть посты ______*/

function openClickPosts() {
  openModalWindow(formPosts, 'form_opened')
  openModalWindow(popup, 'popup_opened')
}

function closeClickPosts() {
  closeModalWindow(formPosts, 'form_opened')
  closeModalWindow(popup, 'popup_opened')
}
editBtnPosts.addEventListener('click', openClickPosts);
closeBtnPosts.addEventListener('click', closeClickPosts);

/*______ создание постов ______*//*______ создание постов ______*//*______ создание постов ______*//*______ создание постов ______*/

const postTitle = document.querySelector('.input__text_type_title');
const postImage = document.querySelector('.input__text_type_image');

function createCard(title, image) {
  const postsTemplate = document.querySelector('#post-template').content;
  const postsEl = postsTemplate.querySelector('.posts__post').cloneNode(true);

  postsEl.querySelector('.posts__text').textContent = title;
  postsEl.querySelector('.posts__image').src = image;
  postsEl.querySelector('.posts__image').alt = title;

  postsEl.querySelector('.posts__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('posts__like_active');
  });

  postsEl.querySelector('.posts__image').addEventListener('click', function () {
    containerImage.style.display = "flex";
    targetImage.src = this.src;
    contentText.textContent = this.alt;
    openModalWindow(popup, 'popup_opened')
  });

  postsEl.querySelector('.posts__rubbish').addEventListener('click', function (evt) {
    evt.target.parentNode.remove();
  });

  return postsEl;
}

function addCard(container, cardElement) {
  container.prepend(cardElement);
}

const posts = document.querySelector('.posts');
const addPostButton = document.querySelector('.form__type_save_posts');
const formPostsElement = document.querySelector('.form-posts');

function addPostsFormSubmit(evt) {
  evt.preventDefault();
  addCard(posts, createCard(postTitle.value, postImage.value));
  closeClickPosts()

  postTitle.value = '';
  postImage.value = '';
}
formPostsElement.addEventListener('submit', addPostsFormSubmit);

/*______ автоматическое добавление постов ______*//*______ автоматическое добавление постов ______*//*______ автоматическое добавление постов ______*//*______ автоматическое добавление постов ______*/

const initialPosts = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
initialPosts.forEach(function (post) {
  addCard(posts, createCard(post.name, post.link));
})

/*______ Открыть картинку ______*//*______ Открыть картинку ______*//*______ Открыть картинку ______*//*______ Открыть картинку ______*/

const containerImage = document.getElementById('big-post');
const targetImage = document.getElementById("bigImage");
const contentText = document.getElementById("big-post__text");
const button = document.getElementById("postClose");

button.addEventListener("click", function () {
  containerImage.style.display = "none";
  closeModalWindow(popup, 'popup_opened')
  targetImage.src = '';
  contentText.textContent = '';
});

/*______ Редактирование профиля ______*//*______ Редактирование профиля ______*//*______ Редактирование профиля ______*//*______ Редактирование профиля ______*/

const editprofileName = document.querySelector('.input__text_name');
const editprofileStatus = document.querySelector('.input__text_status');
const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile__status');
const formElement = document.querySelector('.form');

editprofileName.value = profileName.textContent;
editprofileStatus.value = profileStatus.textContent;

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = editprofileName.value;
  profileStatus.textContent = editprofileStatus.value;
  closeClickProfile()
}
formElement.addEventListener('submit', formSubmitHandler);