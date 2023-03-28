// top-sellers//
(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-top-sellers-modal-open]'),
      closeModalBtn: document.querySelector('[data-top-sellers-modal-close]'),
      modal: document.querySelector('[data-top-sellers-modal]'),
      submitModalBtn: document.querySelector('[data-submit-top-sellers]'),
        
      modalPopup: document.querySelector('[data-top-sellers-modal-popup-wrapper]'),
      closeModalPopupBtn: document.querySelector(
        '[data-top-sellers-modal-popup-close-button]'
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
      console.log(1);
      refs.modal.classList.add('is-hidden');
      refs.modalPopup.classList.remove('modal-wrapper-hidden');
    });
  
    refs.closeModalPopupBtn.addEventListener('click', () => {
      refs.modalPopup.classList.add('modal-wrapper-hidden');
      document.body.style.overflow = null;
      isOpen = false;
    });
  })();
  
  
  