'use strict';

const shareBox = document.querySelector('.card__share-box');
const socialContainer = document.querySelector('.card__social-container');
const socialLink = document.querySelectorAll('.card__social-link');

shareBox.addEventListener('click', function () {
  socialContainer.classList.toggle('card__hidden');
  shareBox.classList.toggle('card__share-box-click-color');
});

for (let i = 0; i < socialLink.length; i++) {
  socialLink[i].addEventListener('click', function () {
    socialContainer.classList.toggle('card__hidden');
    shareBox.classList.toggle('card__share-box-click-color');
  });
}
