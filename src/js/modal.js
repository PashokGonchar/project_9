(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-made-open]'),
    closeModalBtn: document.querySelector('[data-modal-made-close]'),
    modal: document.querySelector('[data-made-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
