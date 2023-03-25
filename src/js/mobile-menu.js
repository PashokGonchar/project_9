if (window.innerWidth >= 768) {
  function openNav() {
    document.getElementById('sidebar').style.width = '290px';
  }
} else {
  function openNav() {
    document.getElementById('sidebar').style.width = '250px';
  }
}

function closeNav() {
  document.getElementById('sidebar').style.width = '0';
}
