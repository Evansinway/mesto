const popup = document.querySelector('.popup');  //ПР4
const popupEdit = document.querySelector('.popup_type_edit');
const popupCloseButton = document.querySelector('.popup__close-btn');  //ПР4
const editButton = document.querySelector('.profile__edit-btn');  //ПР4
const popupEditForm = document.querySelector('.popup__form_edit');  //ПР4
const profileName = document.querySelector('.profile__name'); //ПР4
const nameInput = document.querySelector('.popup__input_type_name');  //ПР4
const profileProf = document.querySelector('.profile__prof');  //ПР4
const profInput = document.querySelector('.popup__input_type_prof');  //ПР4
const formAdd = document.querySelector('.popup__form_add');

const addPopup = document.querySelector('.popup_type_add');
const addPopupCloseButton = addPopup.querySelector('.popup__close-btn');  // кнопка закрытия окна
const addButton = document.querySelector('.profile__add-btn');

const popupImage = document.querySelector('.popup_image');   // фото Full Size


// ПР5

const cardTemplate = document.querySelector('#element-template').content;  // template в разметке
const cardList = document.querySelector('.elements');
const addPopupForm = document.querySelector('.popup_type_add');


function openPopup(popup) {
  popup.classList.add('popup_opened')  //ПР4

}

function closePopup(popup) {
  popup.classList.remove('popup_opened')   //ПР4
}



editButton.addEventListener('click', () => {
  openPopup(popupEdit);
});   //ПР4


const editButtons = document.querySelectorAll('.popup__close-btn');  // ищем все строки открытия

editButtons.forEach(button => {
  button.addEventListener('click', () => {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  });
});


popupEditForm.addEventListener('submit', editsubmitForm);   //ПР4

function editsubmitForm(event) {
  event.preventDefault();  //ПР4
  profileName.textContent = nameInput.value;  //ПР4
  profileProf.textContent = profInput.value;  //ПР4
  nameInput.value = profileName.textContent;  //ПР4
  profInput.value = profileProf.textContent;  //ПР4

  closePopup(popupEdit);
}


// ПР5 Загрузка 6 карточек при открытии страницы

const initialCards = [
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

 function createCard(name, link) {
  const cardElements = cardTemplate.querySelector('.element').cloneNode(true);
  const cardImage = cardElements.querySelector('.element__image');
  const cardTitle = cardElements.querySelector('.element__title');
  const cardLikeButton = cardElements.querySelector('.element__like');
  const cardDeleteButton = cardElements.querySelector('.element__delete');

  cardTitle.textContent = name;  // название карточки через .textContent
  cardImage.src = link;   // ссылка и альт текст изображения
  cardImage.alt = name;



  cardLikeButton.addEventListener('click', () => {    // реализация лайков
    cardLikeButton.classList.toggle('element__like_active');
  });


  cardDeleteButton.addEventListener('click', () => {    // реализация удаления фото кликом на корзину
    cardElements.remove();
  });

   cardImage.addEventListener('click', () => {     // открытие попап фото в широком окне

    const cardImage = popupImage.querySelector('.popup__image-full');   // изображение с попапа увеличенного изображения
    const cardTitle = popupImage.querySelector('.popup__image-title');  // название карточки (прописывается под увеличенным изображением)


    cardTitle.textContent = name;  // название карточки через .textContent
    cardImage.src = link;   // ссылка и альт текст изображения
    cardImage.alt = name;

    openPopup(popupImage);   // попап с увеличенным изображением

  })

  const elements = document.querySelectorAll('.element__like');

 elements.forEach((element) => {
  element.addEventListener('click', () => {
    element.classList.toggle('element__like_active');
   });
 });

  return cardElements;
};

function preload() {
  const preloadArray = initialCards.map(card => createCard(card.name, card.link));
  cardList.prepend(...preloadArray);
}

function submitAddForm(event) {
  event.preventDefault();  // отменяем стандартное поведение отправки формы

  const placeInput = addPopup.querySelector('.popup__input_type_place');
  const linkInput = addPopup.querySelector('.popup__input_type_link');

  cardList.prepend(createCard(placeInput.value, linkInput.value));

  closePopup(addPopupForm);
  // addPopupForm.reset();
}


addButton.addEventListener('click', () => {
  openPopup(addPopupForm);
});  // открытие окна Новое место

addPopupCloseButton.addEventListener('click', () => {
  closePopup(addPopupForm);
});  // закрытие окна Новое место

formAdd.addEventListener('submit', submitAddForm);  // обработчик события отправки формы


// Вызываем функцию, которая прогружает первые 6 карточек на страницу

preload();








