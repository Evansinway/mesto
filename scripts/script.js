const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-btn');
const editButton = document.querySelector('.profile__edit-btn');
const popupForm = document.querySelector('.popup__form');
const profileName = document.querySelector('.profile__name');
const nameInput = document.querySelector('.popup__input_type_name');
const profileAbout = document.querySelector('.profile__about');
const aboutInput = document.querySelector('.popup__input_type_about');


function openPopup() {
  popup.classList.add('popup__opened')
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
}


function closePopup() {
  popup.classList.remove('popup_opened')
}


editButton.addEventListener('click', openPopup);


popupCloseButton.addEventListener('click', closePopup);


function submitForm(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  closePopup();
}


popupForm.addEventListener('submit', submitForm);
