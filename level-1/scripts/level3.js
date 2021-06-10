const introModalThree = document.querySelector('.modal-intro-three');
const closeBtn = document.querySelector('.close-btn');
const exit = document.querySelector('.exit');

closeBtn.addEventListener('click', function () {
  introModalThree.classList.remove('bg-active');
});

exit.addEventListener('click', function () {
  location.href = 'https://emmy-codes.github.io/puzzle-game/';
});
