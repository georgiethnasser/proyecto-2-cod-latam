const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

// Muestra el menú desplegable al hacer clic en los items
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('nav-menu_visible');

  if(navMenu.classList.contains("nav-menu_visible")){
    navToggle.setAttribute ("aria-label","Cerrar Menú");
  } else{
    navToggle.setAttribute ("aria-label","Abrir Menú");
  }
});

// Ocultar el menú desplegable al hacer clic en los items
const menuLinks = document.querySelectorAll('.nav-menu a');

menuLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    navMenu.classList.remove('nav-menu_visible');
  });
});