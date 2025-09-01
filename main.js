'use strict';
const dialog = document.getElementById('myModal');
const openButton = document.getElementById('openModal');
const closeButton = document.getElementById('closeModal');

const openDialog = () => {
  dialog.showModal();
};

const closeDialog = () => {
  dialog.close();
};

openButton.addEventListener('click', openDialog);
closeButton.addEventListener('click', closeDialog);
