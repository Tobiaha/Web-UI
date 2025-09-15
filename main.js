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

//Mobiilin sidebar

const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');

sidebarToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

document.querySelectorAll('.sidebar a').forEach((link) => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('active');
  });
});
