const navigation = document.querySelector('.navigation');

window.addEventListener('scroll', () => {
  // Add a class to the navigation element when scrolled
  if (window.scrollY > 0) {
    navigation.classList.add('scrolled');
  } else {
    navigation.classList.remove('scrolled');
  }
});

const menuLinks = document.querySelectorAll('.navigation a');

menuLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.classList.add('hovered');
  });
  link.addEventListener('mouseout', () => {
    link.classList.remove('hovered');
  });
});
