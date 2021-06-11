const introModalThree = document.querySelector('.modal-intro-three');
const closeBtn = document.querySelector('.close-btn');
const exit = document.querySelector('.exit');
const bgMusic = new Audio(
  'assets/i-have-sinned-creepy-mysterious-free-music-2466.mp3'
);


closeBtn.addEventListener('click', function () {
  introModalThree.classList.remove('bg-active');
  bgMusic.play();
});

exit.addEventListener('click', function () {
  location.href = 'https://emmy-codes.github.io/puzzle-game/';
});
