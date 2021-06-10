const food = document.querySelector('.food');
const guy = document.querySelector('.guy');
const modalGuy = document.querySelector('.modal-conversation');
const introModal = document.querySelector('.modal-intro');
const closeBtn = document.querySelector('.close-btn');
const closeBtnTwo = document.querySelector('.close-btn-two');

closeBtn.addEventListener('click', function () {
  introModal.classList.remove('bg-active');
});
food.addEventListener('click', function () {
  location.href = nextLevel;
});
guy.addEventListener('click', function () {
  modalGuy.classList.add('bg-active');
});
closeBtnTwo.addEventListener('click', function () {
  modalGuy.classList.remove('bg-active');
});
