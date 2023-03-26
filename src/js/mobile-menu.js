window.addEventListener('DOMContentLoaded', event => {
  const sidebarElement = document.getElementById('sidebar');
  const openBtnElement = document.querySelector('.open-menu-icon');
  const closeBtnElement = document.querySelector('.close-menu-icon');
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
