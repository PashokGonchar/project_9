(() => {
  const refs = {
    openModalBtn: document.querySelector('[made-modal-open]'),
    closeModalBtn: document.querySelector('[made-modal-close]'),
    modal: document.querySelector('[made-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
