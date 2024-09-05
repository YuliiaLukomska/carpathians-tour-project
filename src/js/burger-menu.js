const refs = {
  openModalBtn: document.querySelector('.burger-menu'),
  closeModalBtn: document.querySelector('.burger-menu-close'),
  modalMenu: document.querySelector('.modal-menu'),
  bgModalMenu: document.querySelector('.bg-modal-menu'),
};

refs.modalMenu.classList.add('is-hidden');

refs.openModalBtn.addEventListener('click', function (event) {
  console.log(event.target);

  toggleModal();
  //   enableScroll();
});

function toggleModal() {
  refs.modalMenu.classList.toggle('is-hidden');
  refs.bgModalMenu.classList.toggle('hidden');
}
console.log('hello');
