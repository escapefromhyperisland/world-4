const introModalThree = document.querySelector('.modal-intro-three');
const closeBtn = document.querySelector('.close-btn');
const exit = document.querySelector('.exit');

closeBtn.addEventListener('click', function () {
  introModalThree.classList.remove('bg-active');
});

exit.addEventListener('click', endGame);

function endGame(e) {
  console.log('hej');
  window.parent.postMessage('nextLevel');
}
