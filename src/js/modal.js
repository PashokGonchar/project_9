(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
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

