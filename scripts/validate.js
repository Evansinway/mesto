const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn',  // нажатие кнопки
  inactiveButtonClass: 'popup__btn_inactive',  // кнопка неактивна
  inputErrorClass: 'popup__input_type_error',  // error red
  errorClass: 'popup__input-error_active'  // ошибка, если в поле введены невалидные данные
}

// const form = document.querySelector('popup__form');
const userNameInput = document.querySelector('#username');  // popup 1
const userProfInput = document.querySelector('#userprof');  // popup 1
const cardPlaceInput = document.querySelector('#cardplace');  // popup 2
const cardLinkInput = document.querySelector('#cardlink');  // popup 2

/*
function handleSubmit(evt) {
  evt.preventDefault();
  console.log({
    username: userNameInput.value,    // popup 1
    userprof: userProfInput.value,  // popup 1
    cardplace: cardPlaceInput.value,  // popup 2
    cardlink: cardLinkInput.value // popup 2
  })
}

form.addEventListener('submit', handleSubmit); */

enableValidation(validationConfig);


function showInputError(formElement, inputElement, config) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);   // находим ошибку

  errorElement.classList.add(config.errorClass);
  errorElement.textContent = inputElement.validationMessage;  // текст ошибки в браузере
  inputElement.classList.add(config.inputErrorClass);  // в инпут добавляется класс ошибки
}


function hideInputError(formElement, inputElement, config) {     // удаление текста error red, если вводятся валидные данные
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = '';   // передача пустой строки в случае валидных данных в поле
  inputElement.classList.remove(config.inputErrorClass);  // у инпута удаляется клас с ошибкой
}


function checkInputValidity(formElement, inputElement, config) {   // проверка наличия невалидных данных у инпутов
  if (inputElement.validity.valid) {
    hideInputError(formElement, inputElement, config);   // если будет true, с валидными данными, то сообщение об ошибке не появляется
  } else {
    showInputError(formElement, inputElement, config);  // если находим невалидные данные, появляется текст об ошибке
  }};


function hasInvalidInput(inputList) {   // проверка на валидность во всех инпутах, получаем true в случае, если находим невалидные данные
  return inputList.some ((inputElement) => !inputElement.validity.valid)   // true обращается в false
}


function toggleButtonState(inputList, buttonElement, config) {  // кнопка Создать/Сохранить становится неактивной, если находится хотя бы одна ошибка с невалидными данными
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(config.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass);
    buttonElement.disabled = false;
  }};


function setEventListeners(formElement, config) {      // получение инпутов
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));   // список инпутов в формах
  const buttonElement = formElement.querySelector(config.submitButtonSelector);   // поиск кнопки формы

  toggleButtonState(inputList, buttonElement, config);   // кнопка неактивна, если данные еще не введены

  inputList.forEach((inputElement) => {   // проходим инпуты
    inputElement.addEventListener('input', () => {          // проверка инпутов на валидные данные с помощью обработчика
      checkInputValidity(formElement, inputElement, config);
      toggleButtonState(inputList, buttonElement, config);   // список инпутов, которые проверяются на валидность
    })
  })
};


function enableValidation(config) {   // прохождение по всем формам с вызовом обработчиков событий
  const formList = Array.from(document.querySelectorAll(config.formSelector));   // получение всех форм

  formList.forEach((formElement) => {
    setEventListeners(formElement, config);   // передача формы в config
  })
};



