document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');
    const menuIcon = document.getElementById('menu-icon');
    const nav = document.querySelector('header nav');
  
    function removeActiveClasses() {
      sections.forEach(section => section.classList.remove('active'));
      links.forEach(link => link.classList.remove('active'));
    }
  
    
    menuIcon.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  
    
    links.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        removeActiveClasses();
  
        
        link.classList.add('active');
        const targetSection = document.querySelector(`.${link.textContent.toLowerCase()}`);
        if (targetSection) targetSection.classList.add('active');
  
        
        if (nav.classList.contains('active')) {
          nav.classList.remove('active');
        }
      });
    });
  });
  