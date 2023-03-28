(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-subscribe-modal-open]'),
    closeModalBtn: document.querySelector('[data-subscribe-modal-close]'),
    modal: document.querySelector('[data-subscribe-modal]'),
  };


  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  
  let isOpen = false;

  function toggleModal() {
    document.body.style.overflow = isOpen ? null : `hidden`;
    refs.modal.classList.toggle("is-hidden");
    isOpen = !isOpen;
  }
})();

/**
 * reviews section
 */
(() => {
  const refsReviews = {
    openModalBtn: document.querySelector('.reviews-button'),
    closeModalBtn: document.querySelector('[data-reviews-modal-close-button]'),
    modal: document.querySelector('.reviews-modal-wrapper'),
    submitModalBtn: document.querySelector('.reviews-submit-button'),

    modalPopup: document.querySelector('[data-reviews-modal-popup-wrapper]'),
    closeModalPopupBtn: document.querySelector(
      '[data-reviews-modal-popup-close-button]'
    ),
  };

  refsReviews.openModalBtn.addEventListener('click', toggleModal);
  refsReviews.closeModalBtn.addEventListener('click', toggleModal);

  let isOpen = false;

  function toggleModal() {
    document.body.style.overflow = isOpen ? null : `hidden`;
    refsReviews.modal.classList.toggle('modal-wrapper-hidden');
    isOpen = !isOpen;
  }

  refsReviews.submitModalBtn.addEventListener('click', evt => {
    evt.preventDefault();
    refsReviews.modal.classList.add('modal-wrapper-hidden');
    refsReviews.modalPopup.classList.remove('modal-wrapper-hidden');
  });

  refsReviews.closeModalPopupBtn.addEventListener('click', () => {
    refsReviews.modalPopup.classList.add('modal-wrapper-hidden');
    document.body.style.overflow = null;
    isOpen = false;
  });
})();

// hero//
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-hero-modal-open]'),
    closeModalBtn: document.querySelector('[data-hero-modal-close]'),
    modal: document.querySelector('[data-hero-modal]'),
    submitModalBtn: document.querySelector('[data-submit-hero]'),

    modalPopup: document.querySelector('[data-hero-modal-popup-wrapper]'),
    closeModalPopupBtn: document.querySelector(
      '[data-hero-modal-popup-close-button]'
    ),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  let isOpen = false;

  function toggleModal() {
    document.body.style.overflow = isOpen ? null : `hidden`;
    refs.modal.classList.toggle('is-hidden');
    isOpen = !isOpen;
  }
  refs.submitModalBtn.addEventListener('click', evt => {
    evt.preventDefault();
    refs.modal.classList.add('is-hidden');
    refs.modalPopup.classList.remove('modal-wrapper-hidden');
  });

  refs.closeModalPopupBtn.addEventListener('click', () => {
    refs.modalPopup.classList.add('modal-wrapper-hidden');
    document.body.style.overflow = null;
    isOpen = false;
  });
})();
