(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-subscribe-modal-open]'),
    closeModalBtn: document.querySelector('[data-subscribe-modal-close]'),
    modal: document.querySelector('[data-subscribe-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

/**
 * reviews section
 */
(() => {
  const refsReviews = {
    openModalBtn: document.querySelector('.reviews-button'),
    closeModalBtn: document.querySelector('.reviews-modal-close-button'),
    modal: document.querySelector('.reviews-modal-wrapper'),
  };

  refsReviews.openModalBtn.addEventListener('click', toggleModal);
  refsReviews.closeModalBtn.addEventListener('click', toggleModal);

  let isOpen = false;

  function toggleModal() {
    document.body.style.overflow = isOpen ? null : `hidden`;
    refsReviews.modal.classList.toggle('reviews-modal-wrapper-hidden');
    isOpen = !isOpen;
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-hero-modal-open]'),
    closeModalBtn: document.querySelector('[data-hero-modal-close]'),
    modal: document.querySelector('[data-hero-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  let isOpen = false;

  function toggleModal() {
    document.body.style.overflow = isOpen ? null : `hidden`;
    refs.modal.classList.toggle('is-hidden');
    isOpen = !isOpen;
  }
})();
