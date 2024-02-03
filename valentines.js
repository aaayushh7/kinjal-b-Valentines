
document.addEventListener('DOMContentLoaded', function() {
    var noButton = document.getElementById('noButton');
    
    noButton.addEventListener('mouseover', function() {
      moveNoButton();
    });
  
    function moveNoButton() {
      noButton.style.position = 'absolute';
      noButton.style.left = Math.random() * (window.innerWidth - noButton.offsetWidth) + 'px';
      noButton.style.top = Math.random() * (window.innerHeight - noButton.offsetHeight) + 'px';
    }
  });
  