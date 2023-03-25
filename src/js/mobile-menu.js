window.addEventListener('DOMContentLoaded', event => {
  const sidebarElement = document.getElementById('sidebar');
  const openBtnElement = document.querySelector('.btn-open-menu');
  const closeBtnElement = document.querySelector('.btn-close-menu');
  const menuLinks = document.querySelectorAll('.mobile-menu-list-link');
  menuLinks.forEach(item => {
    item.addEventListener('click', () => {
      sidebarElement.style.width = '0';
    });
  });
  openBtnElement.addEventListener('click', () => {
    if (window.innerWidth >= 768) {
      sidebarElement.style.width = '290px';
    } else {
      sidebarElement.style.width = '250px';
    }
  });

  closeBtnElement.addEventListener('click', () => {
    sidebarElement.style.width = '0';
  });
});
