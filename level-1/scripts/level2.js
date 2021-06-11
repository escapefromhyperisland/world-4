const introModalTwo = document.querySelector('.modal-intro-two');
const closeBtn = document.querySelector('.close-btn');
const bgMusic = new Audio(
  'assets/i-have-sinned-creepy-mysterious-free-music-2466.mp3'
);


closeBtn.addEventListener('click', function () {
  introModalTwo.classList.remove('bg-active');
  bgMusic.play();
});
