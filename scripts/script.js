const popup = document.querySelector('.popup');  //ПР4
const popupCloseButton = document.querySelector('.popup__close-btn');  //ПР4
const editButton = document.querySelector('.profile__edit-btn');  //ПР4  ////////////////////////////////   Первый попап
const popupForm = document.querySelector('.popup__form');  //ПР4
const profileName = document.querySelector('.profile__name'); //ПР4
const nameInput = document.querySelector('.popup__input_type_name');  //ПР4
const profileProf = document.querySelector('.profile__prof');  //ПР4
const profInput = document.querySelector('.popup__input_type_prof');  //ПР4



function openPopup() {
  popup.classList.add('popup_opened')  //ПР4         ЗДЕСЬ для ПР5 ничего не добавляем, если не меняем name и prof на place и link
  nameInput.value = profileName.textContent;  //ПР4
  profInput.value = profileProf.textContent;  //ПР4

}

function closePopup() {
  popup.classList.remove('popup_opened')   //ПР4 и + ПР5 две строки последние
}

editButton.addEventListener('click', openPopup);   //ПР4   ЗДЕСЬ для ПР5 ничего не добавляем, если не меняем name и prof на place и link

popupCloseButton.addEventListener('click', closePopup);   //ПР4  ЗДЕСЬ для ПР5 ничего не добавляем, если не меняем name и prof на place и link

function submitForm(event) {
  event.preventDefault();  //ПР4   ЗДЕСЬ для ПР5 ничего не добавляем, если не меняем name и prof на place и link
  profileName.textContent = nameInput.value;  //ПР4
  profileProf.textContent = profInput.value;  //ПР4


  closePopup();
}

popupForm.addEventListener('submit', submitForm);   //ПР4 + ПР5


// Кнопка like

const elements = document.querySelectorAll('.element__like'); // Получаем все элементы с классом 'element__like'

elements.forEach((element) => {    // Перебираем элементы и добавляем обработчик события на каждый элемент
  element.addEventListener('click', () => {
    element.classList.toggle('element__like_active');  // Добавляем/удаляем класс 'element__like_active' при каждом клике на элемент
  });
});

// Кнопка like



// Удаление карточки нажатием на корзину

function deleteElement() {
  const elementToDelete = this.parentElement;
  elementToDelete.remove();
}

const deleteButtons = document.querySelectorAll('.element__delete');

deleteButtons.forEach(button => {
  button.addEventListener('click', deleteElement);
});

// Удаление карточки нажатием на корзину



