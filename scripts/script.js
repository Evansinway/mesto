const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-btn');
const editButton = document.querySelector('.profile__edit-btn');
const popupForm = document.querySelector('.popup__form');
const profileName = document.querySelector('.profile__name');
const nameInput = document.querySelector('.popup__input_type_name');
const profileProf = document.querySelector('.profile__prof');
const profInput = document.querySelector('.popup__input_type_prof');


function openPopup() {
  popup.classList.add('popup_opened')
  nameInput.value = profileName.textContent;
  profInput.value = profileProf.textContent;
}


function closePopup() {
  popup.classList.remove('popup_opened')
}

editButton.addEventListener('click', openPopup);

popupCloseButton.addEventListener('click', closePopup);

function submitForm(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileProf.textContent = profInput.value;
  closePopup();
}

popupForm.addEventListener('submit', submitForm);
