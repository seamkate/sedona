'use strict';
let form = document.querySelector('.feedback-form');
let popUpSuccess = document.querySelector('.popup--success');
let popUpFailure = document.querySelector('.popup--failure');
let popUpButtonSuccess = document.querySelector('.popup--success > .popup__button');
let popUpButtonFailure = document.querySelector('.popup--failure > .popup__button');


popUpButtonSuccess.addEventListener('click', function() {
  popUpSuccess.classList.remove('popup--opened');
});

popUpButtonFailure.addEventListener('click', function() {
  popUpFailure.classList.remove('popup--opened');
});


form.addEventListener('submit', function (event) {
  event.preventDefault();

    // popUpFailure.classList.add('popup--opened');

  popUpSuccess.classList.add('popup--opened');
})
