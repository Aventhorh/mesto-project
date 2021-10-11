const editBtn = document.querySelector('.profile__edit');
const editBtnPosts = document.querySelector('.profile__button');
const popup = document.querySelector('.popup');
const form = document.querySelector('.form');
const closeBtnProfile = document.querySelector('.form__close_profile');

/*______ открыть/закрыть профиль ______*//*______ открыть/закрыть профиль ______*//*______ открыть/закрыть профиль ______*//*______ открыть/закрыть профиль ______*/

function openClickProfile() {
    form.classList.add('form_opened');
    popup.classList.add('popup_opened');
  }

editBtn.addEventListener('click', openClickProfile);

function closeClickProfile() {
    form.classList.remove('form_opened');
    popup.classList.remove('popup_opened');
  }

closeBtnProfile.addEventListener('click', closeClickProfile);

/*______ открыть/закрыть посты ______*//*______ открыть/закрыть посты ______*//*______ открыть/закрыть посты ______*//*______ открыть/закрыть посты ______*/

const formPosts = document.querySelector('.form-posts');
const closeBtnPosts = document.querySelector('.form__close_posts');

function openClickPosts() {
    formPosts.classList.add('form_opened');
    popup.classList.add('popup_opened');
  }

editBtnPosts.addEventListener('click', openClickPosts);

function closeClickPosts() {
    formPosts.classList.remove('form_opened');
    popup.classList.remove('popup_opened');
  }

closeBtnPosts.addEventListener('click', closeClickPosts);

/*______ создание постов ______*//*______ создание постов ______*//*______ создание постов ______*//*______ создание постов ______*/

const posts = document.querySelector('.posts');
const postTitle = document.querySelector('.input__text_type_title');
const postImage = document.querySelector('.input__text_type_image');
const body = document.querySelector('body');

function addPost(title, image){
  const postsTemplate = document.querySelector('#post-template').content;
  const postsEl = postsTemplate.querySelector('.posts__post').cloneNode(true);

  postsEl.querySelector('.posts__text').textContent = title;
  postsEl.querySelector('.posts__image').src = image;
  postsEl.querySelector('.posts__image').alt = title;

  postsEl.querySelector('.posts__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('posts__like_active');
  });

  postsEl.querySelector('.posts__image').onclick = function(){
    containerImage.style.display = "flex";
    targetImage.src = this.src;
    contentText.textContent = this.alt;
    popup.classList.add('popup_opened');
  }

  posts.prepend(postsEl);
}

const addPostButton = document.querySelector('.form__type_save_posts');

const formPostsElement = document.querySelector('.form-posts');

function addPostsFormSubmit (evt) {
  evt.preventDefault(); 
  addPost(postTitle.value, postImage.value);
  formPosts.classList.remove('form_opened');
  popup.classList.remove('popup_opened');

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

for(let i = 0; i < initialPosts.length; i++){
  addPost(initialPosts[i].name, initialPosts[i].link);
}

/*______ Открыть картинку ______*//*______ Открыть картинку ______*//*______ Открыть картинку ______*//*______ Открыть картинку ______*/

let containerImage = document.getElementById('big-post');
let images = document.getElementsByClassName('posts__image');
let targetImage = document.getElementById("bigImage");
let contentText = document.getElementById("big-post__text");

let button = document.getElementsByClassName("big-post__close")[0];

button.onclick = function() { 
  containerImage.style.display = "none";
  popup.classList.remove('popup_opened');
  targetImage.src = '';
  contentText.textContent = '';
}

/*______ удаление постов ______*//*______ удаление постов ______*//*______ удаление постов ______*//*______ удаление постов ______*/

function delPost(post, attribute, name) {
    return function(i) {
      let target = i.target;
      if (!(target.hasAttribute(attribute) ? (target.getAttribute(attribute) === name ? true : false) : false)) return;
      while (target != this) {
        if (target.classList.contains(post)) {
          target.remove();
          return;
        }
        target = target.parentNode;
      }
      return;
    };
  }
  
document.addEventListener("click", delPost("posts__post", "delete", "remove"));

/*______ Редактирование профиля ______*//*______ Редактирование профиля ______*//*______ Редактирование профиля ______*//*______ Редактирование профиля ______*/

const editProfileButton = document.querySelector('.form__type_save_profile');
const editprofileName = document.querySelector('.input__text_name');
const editprofileStatus = document.querySelector('.input__text_status');

let profileName = document.querySelector('.profile__name');
let profileStatus = document.querySelector('.profile__status');

editprofileName.value = 'Жак-Ив Кусто';
editprofileStatus.value = "Исследователь океана";
profileName.textContent = 'Жак-Ив Кусто';
profileStatus.textContent = "Исследователь океана";

const formElement = document.querySelector('.form');

function formSubmitHandler (evt) {
  evt.preventDefault(); 
  profileName.textContent = editprofileName.value;
  profileStatus.textContent = editprofileStatus.value;

  form.classList.remove('form_opened');
  popup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', formSubmitHandler);