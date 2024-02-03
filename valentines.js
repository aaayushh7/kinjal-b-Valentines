document.addEventListener('DOMContentLoaded', function () {
  var noButton = document.getElementById('noButton');

  function moveNoButton() {
    noButton.style.position = 'absolute';
    noButton.style.left = Math.random() * (window.innerWidth - noButton.offsetWidth) + 'px';
    noButton.style.top = Math.random() * (window.innerHeight - noButton.offsetHeight) + 'px';
  }

  // Function to handle both mouseover and touchstart events
  function handleMoveEvent() {
    moveNoButton();
  }

  // Add event listeners for both mouseover and touchstart
  noButton.addEventListener('mouseover', handleMoveEvent);
  noButton.addEventListener('touchstart', handleMoveEvent);
});
