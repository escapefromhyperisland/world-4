const introModalTwo = document.querySelector('.modal-intro-two');
const closeBtn = document.querySelector('.close-btn');

closeBtn.addEventListener('click', function () {
  introModalTwo.classList.remove('bg-active');
});
