document.addEventListener('DOMContentLoaded', function() {
    var scrollIcon = document.getElementById('scrollIcon');
    scrollIcon.addEventListener('click', function() {
      var targetElement = document.getElementById('products');
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });