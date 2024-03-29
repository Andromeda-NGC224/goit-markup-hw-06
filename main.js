`use strict`;

const orderBtn = document.querySelector(`.main-section-hero-button`);
const modalContainer = document.querySelector(`.modal-container`);
const modalContainerRed = document.querySelector(`.modal-container-red`);
const modalContainerGreen = document.querySelector(`.modal-container-green`);

const modalBtnClose = document.querySelector(`.modal-button-close`);
const modalFormBnt = document.querySelector(`.modal-form-button`);
const form = document.querySelector(`.modal-form`);
const formInput = document.querySelector(`.modal-form-label-input`);
const formInputArea = document.querySelector(`.modal-form-label-area`);
const mobileOpenBtn = document.querySelector(`.mobile-open-btn`);
const mobileMenu = document.querySelector(`.mobile-menu`);
const mobileMenuBtn = document.querySelector(`.mobile-menu-btn`);
const modalBtnCloseRed = document.querySelector(
  ".modal-container-red .modal-button-close"
);
const modalBtnCloseGreen = document.querySelector(
  ".modal-container-green .modal-button-close"
);

mobileOpenBtn.addEventListener(`click`, (event) => {
  mobileMenu.classList.add(`is-open`);
});

mobileMenuBtn.addEventListener(`click`, (event) => {
  mobileMenu.classList.remove(`is-open`);
});

orderBtn.addEventListener(`click`, (event) => {
  modalContainer.classList.add("is-open");
});

modalBtnClose.addEventListener(`click`, (event) => {
  modalContainer.classList.remove("is-open");
});

form.addEventListener(`submit`, (event) => {
  event.preventDefault();
  const formInputTrim = formInput.value.trim();
  const formInputAreaTrim = formInputArea.value.trim();
  if (formInputTrim === `` || formInputAreaTrim === ``) {
    modalContainerRed.classList.add(`is-open`);
  } else {
    modalContainerGreen.classList.add(`is-open`);
    form.reset();
  }
});

modalBtnCloseRed.addEventListener(`click`, () => {
  modalContainerRed.classList.remove(`is-open`);
});
modalBtnCloseGreen.addEventListener(`click`, () => {
  modalContainerGreen.classList.remove(`is-open`);
  modalContainer.classList.remove("is-open");
});
