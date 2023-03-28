(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-subscribe-modal-open]"),
    closeModalBtn: document.querySelector("[data-subscribe-modal-close]"),
    modal: document.querySelector("[data-subscribe-modal]"),
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

