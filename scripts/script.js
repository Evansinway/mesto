const popup = document.querySelector('.popup');  //ПР4
const popupCloseButton = document.querySelector('.popup__close-btn');  //ПР4
const editButton = document.querySelector('.profile__edit-btn');  //ПР4
const popupForm = document.querySelector('.popup__form_edit');  //ПР4
const profileName = document.querySelector('.profile__name'); //ПР4
const nameInput = document.querySelector('.popup__input_type_name');  //ПР4
const profileProf = document.querySelector('.profile__prof');  //ПР4
const profInput = document.querySelector('.popup__input_type_prof');  //ПР4


function openPopup() {
  popup.classList.add('popup_opened')  //ПР4
  nameInput.value = profileName.textContent;  //ПР4
  profInput.value = profileProf.textContent;  //ПР4
}

function closePopup() {
  popup.classList.remove('popup_opened')   //ПР4
}

editButton.addEventListener('click', openPopup);   //ПР4
popupCloseButton.addEventListener('click', closePopup);   //ПР4

popupForm.addEventListener('submit', submitForm);   //ПР4

function submitForm(event) {
  event.preventDefault();  //ПР4
  profileName.textContent = nameInput.value;  //ПР4
  profileProf.textContent = profInput.value;  //ПР4

  closePopup();
}




// Загрузка 6 карточек при октрытии страницы

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

const cardTemplate = document.querySelector('#element-template').content;

const cardList = document.querySelector('.elements');

initialCards.forEach((item) => {
  const cardElement = cardTemplate.cloneNode(true);

  const cardImage = cardElement.querySelector('.element__image');
  cardImage.src = item.link;
  cardImage.alt = item.name;

  const cardTitle = cardElement.querySelector('.element__title');
  cardTitle.textContent = item.name;



  // ПР5 Попап Новое место

const addPopup = document.querySelector('.popup__type_add');  // выбираем элемент с классом "popup__type_add"
const addPopupCloseButton = addPopup.querySelector('.popup__close-btn');  // выбираем кнопку закрытия окна
const addButton = document.querySelector('.profile__add-btn');  // выбираем кнопку открытия окна
const addPopupForm = document.querySelector('.popup__form_add');  // выбираем форму

function openAddPopup() {
  addPopup.classList.add('popup_opened');  // добавляем класс для открытия окна
}

function closeAddPopup() {
  addPopup.classList.remove('popup_opened');  // удаляем класс для закрытия окна
}

addButton.addEventListener('click', openAddPopup);  // назначаем обработчик события клика на кнопку открытия окна
addPopupCloseButton.addEventListener('click', closeAddPopup);  // назначаем обработчик события клика на кнопку закрытия окна
addPopupForm.addEventListener('submit', submitAddForm);  // назначаем обработчик события отправки формы

function submitAddForm(event) {
  event.preventDefault();  // отменяем стандартное поведение формы
  const newPlaceName = addPopupForm.elements.name.value;  // получаем значение поля "Место"
  const newPlaceLink = addPopupForm.elements.prof.value;  // получаем значение поля "Ссылка на картинку"

  const newCard = createCard(newPlaceName, newPlaceLink);  // создаем новую карточку с помощью функции createCard
  const placesList = document.querySelector('.places-list');  // выбираем контейнер для карточек
  placesList.prepend(newCard);  // добавляем новую карточку в начало контейнера
  addPopupForm.reset();  // очищаем поля формы
  closeAddPopup();  // закрываем окно
}



  // Увеличение фотографии по клику

  const popupImage = document.querySelector('.popup_image');
  const imageFull = popupImage.querySelector('.popup__image-full');
  const titleFull = popupImage.querySelector('.popup__image-title');

  function openImage() {
    const imageSrc = this.src;
    const imageAlt = this.alt;
    const title = this.title;
    imageFull.src = imageSrc;
    imageFull.alt = imageAlt;
    titleFull.textContent = title;

    popupImage.classList.add('popup_opened');


  }

  const images = document.querySelectorAll('img');
  images.forEach((image) => {
    image.addEventListener('click', openImage);

  });



// Удаление карточек кликом на корзину//
  function deleteElement() {
    const elementToDelete = this.parentElement;
    elementToDelete.remove();
  }

  const deleteButtons = document.querySelectorAll('.element__delete');

  deleteButtons.forEach(button => {
    button.addEventListener('click', deleteElement);
  });


  cardList.appendChild(cardElement);
});


 const elements = document.querySelectorAll('.element__like');    // Реализация лайков

elements.forEach((element) => {
  element.addEventListener('click', () => {
    element.classList.toggle('element__like_active');
   });
 });










